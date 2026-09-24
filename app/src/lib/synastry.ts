import { computeNatalChart, type NatalChart } from './natalChart'
import { computeBirthCards } from './tarot'
import { computeLifePath } from './numerology'
import { elementRelation, getPlanet, SIGNS, type City, type Element, type SignInfo } from './astrology'

export interface PersonInput {
  name: string
  date: string // YYYY-MM-DD
  time?: string
  city?: City | null
}

export type LayerKey = 'signs' | 'cards' | 'numbers' | 'stars'

export const LAYER_META: Record<LayerKey, { title: string; blurb: string }> = {
  signs: {
    title: 'The Signs',
    blurb: 'Sun, Moon and Rising compared — how your temperaments breathe together.',
  },
  cards: {
    title: 'The Tarot Cards',
    blurb: 'Your birth card chains laid side by side — shared archetypes and what each of you carries.',
  },
  numbers: {
    title: 'The Numbers',
    blurb: 'Life paths compared through the classical numerology groups.',
  },
  stars: {
    title: 'The Full Sky',
    blurb: 'Every planet of one chart aspecting every planet of the other — the complete synastry.',
  },
}

export interface SynastryDetail {
  title: string
  text: string
  tone: 'harmonious' | 'neutral' | 'friction'
}

export interface SynastryLayer {
  key: LayerKey
  title: string
  score: number
  summary: string
  details: SynastryDetail[]
}

/* ── Layer 1 · The Signs ───────────────────────────────────────── */

const ELEMENT_LINES: Record<Element, string> = {
  Fire: 'instinct, courage and the need to begin',
  Earth: 'patience, substance and the need to build',
  Air: 'ideas, exchange and the need to understand',
  Water: 'feeling, memory and the need to belong',
}

function signPair(signA: SignInfo, signB: SignInfo): { score: number; tone: SynastryDetail['tone']; text: string } {
  const a = signA.element
  const b = signB.element
  if (a === b) {
    return {
      score: 90,
      tone: 'harmonious',
      text: `Two ${a} hearts — ${signA.name} and ${signB.name} speak the same native language of ${ELEMENT_LINES[a]}. The risk of sameness: the blind spot is shared too.`,
    }
  }
  const rel = elementRelation(a, b)
  if (rel === 'harmonious') {
    const [feeds, fed] = a === 'Fire' || a === 'Air' ? [a, b] : [b, a]
    return {
      score: 82,
      tone: 'harmonious',
      text: `${signA.name} (${a}) and ${signB.name} (${b}) energize each other — ${feeds} feeds ${fed}. Different dialects, one conversation: ${ELEMENT_LINES[a]} meets ${ELEMENT_LINES[b]}.`,
    }
  }
  return {
    score: 45,
    tone: 'friction',
    text: `${signA.name} (${a}) and ${signB.name} (${b}) run on different fuels — ${ELEMENT_LINES[a]} versus ${ELEMENT_LINES[b]}. The translation is the work; the spark lives exactly in the translation.`,
  }
}

function signsLayer(a: NatalChart, b: NatalChart): SynastryLayer {
  const pairs: { label: string; x: SignInfo; y: SignInfo; w: number }[] = [
    { label: 'Sun × Sun', x: a.sun.sign, y: b.sun.sign, w: 3 },
    { label: 'Sun × Moon', x: a.sun.sign, y: b.moon.sign, w: 2 },
    { label: 'Moon × Sun', x: a.moon.sign, y: b.sun.sign, w: 2 },
    { label: 'Moon × Moon', x: a.moon.sign, y: b.moon.sign, w: 2 },
  ]
  if (a.ascendant && b.ascendant) {
    pairs.push({ label: 'Rising × Rising', x: a.ascendant.sign, y: b.ascendant.sign, w: 1 })
    pairs.push({ label: 'Rising × Sun', x: a.ascendant.sign, y: b.sun.sign, w: 1 })
    pairs.push({ label: 'Sun × Rising', x: a.sun.sign, y: b.ascendant.sign, w: 1 })
  }

  const details: SynastryDetail[] = []
  let total = 0
  let wsum = 0
  for (const p of pairs) {
    const r = signPair(p.x, p.y)
    total += r.score * p.w
    wsum += p.w
    details.push({ title: p.label, text: r.text, tone: r.tone })
  }
  const score = Math.round(total / wsum)
  const caveat = a.timeUnknown || b.timeUnknown
  return {
    key: 'signs',
    title: LAYER_META.signs.title,
    score,
    summary: caveat
      ? 'Compared without birth times — the Moon positions are the day’s average and the Rising layer is absent. Add times for the full picture.'
      : 'Compared across Sun, Moon and Rising — the temperament layer of the bond.',
    details,
  }
}

/* ── Layer 2 · The Tarot Cards ─────────────────────────────────── */

function cardsLayer(dateA: string, dateB: string): SynastryLayer {
  const ca = computeBirthCards(dateA)
  const cb = computeBirthCards(dateB)
  const details: SynastryDetail[] = []
  if (!ca || !cb) {
    return { key: 'cards', title: LAYER_META.cards.title, score: 50, summary: '', details: [] }
  }
  const shared = ca.chain.filter((n) => cb.chain.includes(n))
  let score: number
  if (shared.length > 0) {
    score = shared.length >= 2 ? 96 : 90
    const names = shared.map((n) => `#${n}`).join(' & ')
    details.push({
      title: 'Shared archetypes',
      text: `Your chains cross on ${names} — you carry the same Major Arcana. Meeting each other feels less like introduction and more like recognition.`,
      tone: 'harmonious',
    })
  } else {
    details.push({
      title: 'Distinct archetypes',
      text: `No shared birth cards — you were cast in different myths. The attraction here is the difference itself: each carries what the other’s chart never had to learn.`,
      tone: 'neutral',
    })
    score = 62
  }
  const giftA = ca.chain[0]
  const giftB = cb.chain[0]
  details.push({
    title: 'What you carry',
    text: `Your primary birth card is ${giftA}; theirs is ${giftB}. Where those two archetypes agree, the bond runs without explanation — where they argue, both of you are being asked to grow.`,
    tone: shared.length > 0 ? 'harmonious' : 'neutral',
  })
  return {
    key: 'cards',
    title: LAYER_META.cards.title,
    score,
    summary: 'Birth card chains compared — the archetypal layer of the bond.',
    details,
  }
}

/* ── Layer 3 · The Numbers ─────────────────────────────────────── */

type NumGroup = 'A' | 'B' | 'C'

function numGroup(n: number): NumGroup {
  const r = n === 11 ? 2 : n === 22 ? 4 : n === 33 ? 6 : n
  if (r === 1 || r === 5 || r === 7) return 'A'
  if (r === 2 || r === 4 || r === 8) return 'B'
  return 'C'
}

const GROUP_TEXT: Record<NumGroup, string> = {
  A: 'the self-starters — independence, movement, ideas',
  B: 'the builders — partnership, structure, results',
  C: 'the heart-bearers — feeling, creativity, service',
}

function numbersLayer(dateA: string, dateB: string): SynastryLayer {
  const la = computeLifePath(dateA)
  const lb = computeLifePath(dateB)
  const details: SynastryDetail[] = []
  if (!la || !lb) {
    return { key: 'numbers', title: LAYER_META.numbers.title, score: 50, summary: '', details: [] }
  }
  const ga = numGroup(la.number)
  const gb = numGroup(lb.number)
  const masterA = la.isMaster ? ` (master ${la.number})` : ''
  const masterB = lb.isMaster ? ` (master ${lb.number})` : ''
  let score: number
  if (la.number === lb.number) {
    score = 94
    details.push({
      title: 'Same life path',
      text: `Both walking a ${la.number}${masterA} road. You recognise each other’s homework because it is your own — the mirror is total, which is both the gift and the fight.`,
      tone: 'harmonious',
    })
  } else if (ga === gb) {
    score = 86
    details.push({
      title: 'Same family of numbers',
      text: `A ${la.number}${masterA} and a ${lb.number}${masterB} both belong to ${GROUP_TEXT[ga]}. You budget life in the same currency; the disagreements are dialect, not language.`,
      tone: 'harmonious',
    })
  } else {
    score = 62
    details.push({
      title: 'Different families',
      text: `A ${la.number}${masterA} walks with ${GROUP_TEXT[ga]}, while a ${lb.number}${masterB} walks with ${GROUP_TEXT[gb]}. Classical numerology calls this a workable cross — each supplies the element the other under-lives.`,
      tone: 'neutral',
    })
  }
  const bdA = la.birthdayNumber
  const bdB = lb.birthdayNumber
  details.push({
    title: 'Birthday numbers',
    text: `Day-numbers ${bdA} and ${bdB} — the everyday tempo of the two of you. Similar days move at the same speed; different days simply need agreed rendezvous.`,
    tone: bdA === bdB ? 'harmonious' : 'neutral',
  })
  return {
    key: 'numbers',
    title: LAYER_META.numbers.title,
    score,
    summary: 'Life paths compared through the classical groups of numerology.',
    details,
  }
}

/* ── Layer 4 · The Full Sky (inter-aspects) ────────────────────── */

const ASPECTS = [
  { name: 'conjunction', angle: 0, orb: 8, base: 68, tone: 'harmonious' as const },
  { name: 'sextile', angle: 60, orb: 6, base: 74, tone: 'harmonious' as const },
  { name: 'trine', angle: 120, orb: 8, base: 84, tone: 'harmonious' as const },
  { name: 'square', angle: 90, orb: 6, base: 42, tone: 'friction' as const },
  { name: 'opposition', angle: 180, orb: 8, base: 52, tone: 'neutral' as const },
]

const SYN_KEYS = ['sun', 'moon', 'mercury', 'venus', 'mars', 'jupiter', 'saturn'] as const

const ASPECT_TEXT: Record<string, string> = {
  conjunction: 'merged currents — the two planets act as one force: instant, undeniable, occasionally overwhelming.',
  sextile: 'an easy opportunity — the two energies cooperate with a light touch, and the affinity grows with use.',
  trine: 'deep flow — the two energies run in the same direction without effort; the blessing and the risk is taking it for granted.',
  square: 'friction that builds — the two energies challenge each other’s defaults; exhausting, and exactly where the growth is.',
  opposition: 'magnetic polarity — mirror forces, each holding what the other disowned; the attraction lives in the very distance between them.',
}

function aspectClause(k1: string, k2: string): string {
  const pair = [k1, k2].sort().join('-')
  if (pair === 'mars-venus') return ' Venus–Mars: the chemistry aspect — desire answers desire.'
  if (pair === 'moon-sun') return ' Sun–Moon: the classic partnership axis — essence and emotion signed the same treaty.'
  if (pair === 'mercury-mercury') return ' Mercury–Mercury: conversation that never quite runs dry.'
  if (k1 === 'saturn' || k2 === 'saturn') return ' Saturn lends staying power to this contact.'
  return ''
}

interface FoundAspect {
  k1: string
  k2: string
  name: string
  orb: number
  value: number
  weight: number
  tone: SynastryDetail['tone']
}

function starsLayer(a: NatalChart, b: NatalChart): SynastryLayer {
  const found: FoundAspect[] = []
  for (const k1 of SYN_KEYS) {
    const p1 = a.bodies.find((x) => x.key === k1)
    if (!p1) continue
    for (const k2 of SYN_KEYS) {
      const p2 = b.bodies.find((x) => x.key === k2)
      if (!p2) continue
      let diff = Math.abs(p1.abs - p2.abs) % 360
      if (diff > 180) diff = 360 - diff
      for (const asp of ASPECTS) {
        const orb = Math.abs(diff - asp.angle)
        if (orb <= asp.orb) {
          const w = (getPlanet(k1)?.weight ?? 1) * (getPlanet(k2)?.weight ?? 1)
          found.push({
            k1,
            k2,
            name: asp.name,
            orb,
            value: Math.max(5, Math.min(98, asp.base - orb * 2)),
            weight: w,
            tone: asp.tone,
          })
          break
        }
      }
    }
  }

  const details: SynastryDetail[] = []
  let score: number
  if (found.length === 0) {
    score = 55
    details.push({
      title: 'No major aspects',
      text: 'The two skies pass each other without major angles — a quiet, low-interference bond. Nothing drags, nothing automatically clicks; whatever is built here is built on choice.',
      tone: 'neutral',
    })
  } else {
    let total = 0
    let wsum = 0
    for (const f of found) {
      total += f.value * f.weight
      wsum += f.weight
    }
    score = Math.round(total / wsum)
    const top = [...found].sort((x, y) => y.weight - x.weight || x.orb - y.orb).slice(0, 7)
    for (const f of top) {
      const n1 = getPlanet(f.k1)?.name ?? f.k1
      const n2 = getPlanet(f.k2)?.name ?? f.k2
      details.push({
        title: `${n1} ${f.name} ${n2} (orb ${f.orb.toFixed(1)}°)`,
        text: `Your ${n1} ${ASPECT_TEXT[f.name]}${aspectClause(f.k1, f.k2)}`,
        tone: f.tone,
      })
    }
  }

  const caveat = a.timeUnknown || b.timeUnknown ? ' (computed with noon for unknown birth times)' : ''
  return {
    key: 'stars',
    title: LAYER_META.stars.title,
    score,
    summary: `${found.length} major aspect${found.length === 1 ? '' : 's'} between the two charts${caveat} — weighted so that the personal planets count most.`,
    details,
  }
}

/* ── Public API ────────────────────────────────────────────────── */

export interface SynastryResult {
  layers: SynastryLayer[]
  combined: number
}

export function computeSynastry(
  personA: PersonInput,
  personB: PersonInput,
  selected: LayerKey[],
): SynastryResult | null {
  const chartA = computeNatalChart({ date: personA.date, time: personA.time, city: personA.city })
  const chartB = computeNatalChart({ date: personB.date, time: personB.time, city: personB.city })
  if (!chartA || !chartB) return null

  const layers: SynastryLayer[] = selected.map((key) => {
    switch (key) {
      case 'signs':
        return signsLayer(chartA, chartB)
      case 'cards':
        return cardsLayer(personA.date, personB.date)
      case 'numbers':
        return numbersLayer(personA.date, personB.date)
      case 'stars':
        return starsLayer(chartA, chartB)
    }
  })
  const combined = Math.round(layers.reduce((acc, l) => acc + l.score, 0) / layers.length)
  return { layers, combined }
}

export function scoreLabel(score: number): string {
  if (score >= 85) return 'Exceptional harmony'
  if (score >= 70) return 'Strong bond'
  if (score >= 58) return 'Workable chemistry'
  if (score >= 45) return 'Growth partnership'
  return 'Transformative dynamic'
}

export { SIGNS }
