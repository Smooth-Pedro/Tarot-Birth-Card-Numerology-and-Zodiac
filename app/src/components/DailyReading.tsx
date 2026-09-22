import { useEffect, useState } from 'react'
import { Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import TarotCardFace from '@/components/TarotCardFace'
import { MAJOR_ARCANA } from '@/lib/tarot'

type DailyResult = {
  num: number
  name: string
  keywords: string[]
  reading: string
}

type DrawState =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'ready'; result: DailyResult }
  | { kind: 'not-configured' }
  | { kind: 'error'; message: string }

const today = () => new Date().toISOString().slice(0, 10)
const storageKey = (question: string) =>
  `daily-reading:${today()}:${question.trim().toLowerCase()}`

export default function DailyReading() {
  const [question, setQuestion] = useState('')
  const [state, setState] = useState<DrawState>({ kind: 'idle' })

  // Restore today's reading from cache (same card all day — no re-rolls on refresh)
  useEffect(() => {
    try {
      const cached = localStorage.getItem(storageKey(''))
      if (cached) setState({ kind: 'ready', result: JSON.parse(cached) })
    } catch {
      /* corrupted cache — just draw again */
    }
  }, [])

  const draw = async () => {
    setState({ kind: 'loading' })
    try {
      const res = await fetch('/api/daily-reading', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: question.trim() }),
      })
      const data = await res.json()
      if (data.configured === false) {
        setState({ kind: 'not-configured' })
      } else if (!res.ok || !data.reading) {
        setState({ kind: 'error', message: data.error ?? 'The cards came back blank.' })
      } else {
        const result: DailyResult = {
          num: data.num,
          name: data.name,
          keywords: data.keywords ?? [],
          reading: data.reading,
        }
        try {
          localStorage.setItem(storageKey(question), JSON.stringify(result))
        } catch {
          /* storage full/private mode — reading still shows */
        }
        setState({ kind: 'ready', result })
      }
    } catch {
      setState({
        kind: 'error',
        message: 'The oracle is unreachable right now — try again in a moment.',
      })
    }
  }

  const card = state.kind === 'ready' ? MAJOR_ARCANA[state.result.num] : null

  return (
    <section className="max-w-3xl mx-auto px-6 pb-16" id="daily-reading">
      <h2 className="font-cinzel text-2xl text-amber-100 text-center mb-2">
        ✦ Ask the Arcana
      </h2>
      <p className="text-center text-indigo-200/70 mb-8 leading-relaxed">
        One card is drawn for everyone each day. Hold a question in your mind — or let the
        card speak freely — and receive its guidance for today.
      </p>

      <Card className="bg-white/[0.04] border-indigo-400/25 backdrop-blur-md shadow-[0_0_60px_-15px_rgba(99,80,220,0.5)]">
        <CardContent className="pt-6 pb-6 space-y-5">
          {state.kind !== 'ready' && (
            <>
              <div className="space-y-2 text-left">
                <label
                  htmlFor="daily-question"
                  className="text-sm font-medium leading-none text-indigo-200/90 tracking-wide"
                >
                  Your question <span className="text-indigo-300/50">(optional)</span>
                </label>
                <Input
                  id="daily-question"
                  type="text"
                  value={question}
                  maxLength={300}
                  placeholder="e.g. What should I focus on today?"
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && state.kind !== 'loading') draw()
                  }}
                  className="bg-indigo-950/50 border-indigo-400/30 text-indigo-100 placeholder:text-indigo-300/30 focus-visible:ring-amber-300/60"
                />
              </div>
              <Button
                onClick={draw}
                disabled={state.kind === 'loading'}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-300 text-indigo-950 font-semibold hover:from-amber-400 hover:to-amber-200 shadow-[0_0_25px_-5px_rgba(251,191,36,0.6)] disabled:opacity-60"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                {state.kind === 'loading' ? 'The cards are turning…' : 'Draw the Card of the Day'}
              </Button>
            </>
          )}

          {state.kind === 'not-configured' && (
            <p className="text-amber-200/80 text-sm text-center leading-relaxed">
              The AI oracle is not connected yet — a Gemini API key needs to be added on the
              hosting side to awaken it.
            </p>
          )}

          {state.kind === 'error' && (
            <p className="text-amber-200/80 text-sm text-center leading-relaxed">
              {state.message}
            </p>
          )}

          {state.kind === 'ready' && card && (
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-1">
              <TarotCardFace card={card} size="md" />
              <div className="text-center sm:text-left">
                <p className="font-cinzel text-amber-100 text-lg tracking-wide mb-1">
                  {card.name}
                </p>
                <p className="text-xs uppercase tracking-wider text-indigo-300/60 mb-4">
                  {state.result.keywords.join(' · ')}
                </p>
                <p className="text-indigo-200/90 leading-relaxed whitespace-pre-line">
                  {state.result.reading}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    try {
                      localStorage.removeItem(storageKey(question))
                    } catch {
                      /* ignore */
                    }
                    setState({ kind: 'idle' })
                  }}
                  className="mt-4 text-xs text-indigo-300/50 hover:text-amber-200/80 transition-colors underline underline-offset-4"
                >
                  Ask another question
                </button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
