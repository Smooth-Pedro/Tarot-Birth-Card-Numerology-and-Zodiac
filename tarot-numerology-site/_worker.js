// ─── Pages _worker.js — AI reading API + static site + SPA fallback ───
// Module-format Worker (env.ASSETS binding is injected by wrangler for module workers).
// - POST /api/daily-reading → AI tarot reading via OpenRouter (key stays server-side),
//   falling back to direct Gemini if OpenRouter is unreachable
// - everything else → static assets (env.ASSETS)
// - unknown GET paths without a file extension → index.html (client-side routing)

// Ordered by preference — the first healthy model answers. Free models are
// kept last (they rate-limit aggressively); IDs verified against the live
// OpenRouter catalog.
const OPENROUTER_MODELS = [
  'google/gemini-3.6-flash',
  'google/gemini-3.8-flash',
  'google/gemini-3.5-flash',
  'google/gemini-3.1-flash-lite',
  'google/gemini-2.5-flash',
  'deepseek/deepseek-v4-flash',
  'deepseek/deepseek-v3.2',
  'deepseek/deepseek-chat-v3-0324',
  'meta-llama/llama-4-maverick',
  'meta-llama/llama-4-scout',
  'google/gemma-4-31b-it:free',
  'google/gemma-4-26b-a4b-it:free',
]

const MODELS = ['gemini-3.6-flash', 'gemini-3-flash-preview', 'gemini-3.8-flash', 'gemini-3.7-flash', 'gemini-flash-latest']

const MAX_QUESTION = 300

// upstream AI calls must not hang the reader — free-tier models can stall for ages
const UPSTREAM_TIMEOUT_MS = 15_000

// Last line of defense: if every AI upstream fails, the reader still gets a full
// reading composed from the card's own material — never a blank, never "nothing".
function fallbackReading(card) {
  const shadow = card.shadow ? card.shadow.trim() : 'its unspoken shadow'
  const guidance = card.guidance ? card.guidance.trim() : 'Sit with the card today and let it speak.'
  return `${card.meaning.trim()}\n\nYet every card casts a shadow: ${shadow.charAt(0).toLowerCase() + shadow.slice(1)}. Where you meet this today, face it with awareness rather than fear — the chain is only as heavy as you agree to carry it.\n\n${guidance}`
}

const SYSTEM_PROMPT = `You are the voice of a tarot and numerology site called "Tarot Birth Cards & Numerology". You speak for the Major Arcana card drawn for the day.

Voice rules:
- Mystical but grounded: warm, wise, unhurried; second person ("you").
- Never generic horoscope filler — use the specific card material given to you.
- Weave in the card's keywords naturally, and touch both its light and its shadow.
- Close with one short, practical line of guidance the reader can act on today.
- Reflection and entertainment only: if the question touches health, law or money, answer reflectively and gently decline to give professional advice.
- 3 short paragraphs, plain text, no headings, no bullet points, no disclaimers.`

function drawCardOfTheDay(cards) {
  // random card per draw — same card all day felt stale; the arcana answers each question anew
  return cards[Math.floor(Math.random() * cards.length)]
}

const hits = new Map()
function rateLimited(ip) {
  const now = Date.now()
  const list = (hits.get(ip) ?? []).filter((t) => now - t < 60_000)
  if (list.length >= 20) return true
  list.push(now)
  hits.set(ip, list)
  return false
}

function json(body, status = 200) {
  return Response.json(body, { status })
}

async function tryOpenRouter(apiKey, prompt) {
  for (const model of OPENROUTER_MODELS) {
    try {
      const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: prompt },
          ],
          temperature: 0.85,
          max_tokens: 2000,
        }),
        signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
      })
      if (res.status === 404 || res.status === 401 || res.status === 403 || res.status === 429 || res.status >= 500) continue
      if (!res.ok) continue
      const data = await res.json()
      const choice = data?.choices?.[0]
      const reading = (choice?.message?.content ?? '').trim()
      if (reading.length < 50) continue
      return reading
    } catch {
      // network-level failure — try the next model
      continue
    }
  }
  return null
}

async function handleDailyReading(request, env) {
  const apiKey = env.GEMINI_API_KEY ?? ''
  const orKey = env.OPENROUTER_API_KEY ?? ''
  if (!apiKey && !orKey) return json({ configured: false })

  const ip = request.headers.get('cf-connecting-ip') ?? 'unknown'
  if (rateLimited(ip)) return json({ error: 'Slow down — the cards need a moment.' }, 429)

  let question = ''
  try {
    const body = await request.json()
    question = String(body?.question ?? '').trim().slice(0, MAX_QUESTION)
  } catch {
    /* empty body is fine — a question is optional */
  }

  const cardsRes = await env.ASSETS.fetch(new URL('/api/card-data.json', request.url).toString())
  if (!cardsRes.ok) return json({ error: 'Card deck not found.' }, 502)
  const CARDS = await cardsRes.json()
  const card = drawCardOfTheDay(CARDS)

  const prompt = `Card of the day: ${card.name} (${card.num}).
Keywords: ${card.keywords.join(', ')}
Meaning: ${card.meaning}
Shadow: ${card.shadow}
Guidance: ${card.guidance}

${question ? `The reader's question: "${question}"` : 'The reader asked no question — read the card as general guidance for their day.'}`

  // Primary path: OpenRouter (Google treats its IPs normally — no datacenter throttling)
  if (orKey) {
    const reading = await tryOpenRouter(orKey, prompt)
    if (reading) return json({ configured: true, num: card.num, name: card.name, keywords: card.keywords, reading })
  }

  // Fallback path: direct Gemini (works when the key's quota is healthy)
  for (const model of MODELS) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { temperature: 0.85, maxOutputTokens: 8192 },
          }),
          signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
        },
      )
      if (res.status === 404 || res.status === 403 || res.status === 429 || res.status >= 500) continue
      if (!res.ok) return json({ error: 'The oracle stumbled — try again in a moment.' }, 502)
      const data = await res.json()
      const cand = data?.candidates?.[0]
      const reading = cand?.content?.parts?.map((p) => p.text).join('').trim()
      if (cand?.finishReason && cand.finishReason !== 'STOP') {
        // thinking models can hit the cap mid-sentence — a substantial reading
        // is still far better than none
        if (cand.finishReason === 'MAX_TOKENS' && reading && reading.length >= 300) {
          return json({ configured: true, num: card.num, name: card.name, keywords: card.keywords, reading })
        }
        continue
      }
      if (!reading) continue
      return json({ configured: true, num: card.num, name: card.name, keywords: card.keywords, reading })
    } catch {
      // network-level failure (DNS/TLS/reset) — try the next model
      continue
    }
  }

  // Every AI upstream failed — answer from the card's own texts so the reader
  // always receives a complete reading (UI flags it as the classic text).
  return json({
    configured: true,
    num: card.num,
    name: card.name,
    keywords: card.keywords,
    reading: fallbackReading(card),
    fallback: true,
  })
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    if (url.pathname === '/api/daily-reading') {
      if (request.method !== 'POST') return json({ error: 'POST only' }, 405)
      try {
        return await handleDailyReading(request, env)
      } catch {
        // never surface a raw worker exception — always answer in-voice
        return json({ error: 'The cards are catching their breath — try again in a moment.' }, 502)
      }
    }

    const assetRes = await env.ASSETS.fetch(request)
    if (assetRes.status === 404 && request.method === 'GET' && !url.pathname.includes('.')) {
      // SPA fallback: client-side routes like /library, /pairs, /astrology
      return env.ASSETS.fetch(new URL('/index.html', request.url).toString())
    }
    return assetRes
  },
}
