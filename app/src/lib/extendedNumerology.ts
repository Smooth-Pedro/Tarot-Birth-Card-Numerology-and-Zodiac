import { getCard, type MajorArcana } from './tarot'
import { LETTER_VALUES } from './nameNumerology'

/* ── Helpers ─────────────────────────────────────────────────────────── */

function digitSum(n: number): number {
  return String(n)
    .split('')
    .reduce((acc, d) => acc + Number(d), 0)
}

function reduceMasters(n: number): number {
  let v = n
  while (v > 9) {
    if (v === 11 || v === 22 || v === 33) return v
    v = digitSum(v)
  }
  return v
}

function reduceTo22(n: number): number {
  let v = n
  while (v > 22) v = digitSum(v)
  return v === 22 ? 0 : v // 22 in this system is The Fool (0)
}

function dateParts(date: string): { month: number; day: number; year: number } | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date)
  if (!m) return null
  return { year: Number(m[1]), month: Number(m[2]), day: Number(m[3]) }
}

/* ── Karmic Debt ─────────────────────────────────────────────────────── */

export const KARMIC_DEBTS: Record<
  number,
  { pair: string; debtTitle: string; debt: string; energy: string; resolution: string }
> = {
  13: {
    pair: '13/4',
    debtTitle: 'The Debt of Rigidity',
    debt:
      'Somewhere in the cycle before this one, structure hardened into a prison: work left unfinished, stubbornness defended long past its usefulness, foundations poured to control life rather than serve it. The debt returns as a life where things feel heavier than they should — where every foundation must be earned twice, where laziness and shortcuts collapse visibly, and where the temptation is to rebuild the same wall that just fell.',
    energy:
      'How it shows up: a repeating pattern of collapse-and-rebuild around work, health or security. Projects stall at ninety percent; shortcuts boomerang; the body asks for order (sleep, routine, repair) and complains loudly when ignored. The 13/4 person often feels older than their years in practical matters, as if they were born already owing a day’s honest work — because, symbolically, they were.',
    resolution:
      'Paid through Death’s transformation: complete what you start — even the small things, because the debt is trained off in repetition. Let dead structures dissolve without salvaging the rubble, and build foundations that serve life rather than cage it. The Emperor (4) emerges only after the old walls come down; the debt is cleared when discipline becomes devotion instead of defence.',
  },
  14: {
    pair: '14/5',
    debtTitle: 'The Debt of Excess',
    debt:
      'In a previous cycle, freedom was abused: the appetite for experience outran the wisdom to steer it. Excess, addiction, or rare gifts misused for pleasure or manipulation left a residue. The debt returns as a life where the hunger for “more” arrives stronger than the brakes — where the very things that liberate others (travel, change, pleasure, charisma) can quietly become traps.',
    energy:
      'How it shows up: cycles of overindulgence followed by consequence — the 3 AM certainty that this was too much, the pattern that keeps returning in new costumes (spending, food, work, excitement, people). There is often real magnetism here, because the same current that binds also attracts; the 14/5 life swings between feast and recalibration until moderation stops feeling like a punishment.',
    resolution:
      'Paid through Temperance’s alchemy: moderation without joylessness. The opposite forces are not enemies — pour them together with patience and freedom becomes a tool instead of a trap. Learn to want one thing fully rather than everything restlessly; the debt clears each time desire is steered instead of obeyed.',
  },
  16: {
    pair: '16/7',
    debtTitle: 'The Debt of False Heights',
    debt:
      'In the cycle before this one, a tower of ego was built on insight hoarded rather than lived — spiritual pride, a self-image higher than the truth it stood on. The debt returns as a life where false structures fall, sometimes spectacularly: reputations, relationships, belief systems or identities constructed for appearance are periodically struck by lightning, especially whenever pride rebuilds faster than honesty.',
    energy:
      'How it shows up: sudden, almost theatrical collapses that arrive right after things looked most secure — the job lost the week of the celebration, the revelation that rewrites the identity. There is usually a strong spiritual or analytical pull (the 7) underneath, but with a wound around trusting it: the 16/7 person may swing between grandiose certainty and deep doubt. Intuition is loud here; ignoring it is what brings the thunder.',
    resolution:
      'Paid through the Tower’s fall and the Chariot’s discipline: let the false structure break all the way — do not rush to rebuild the self-image. Ground spiritual insight in daily, unglamorous practice, and rebuild on truth rather than appearance. The Chariot (7) appears when the rubble is surveyed honestly and driven through with will; the debt clears when the lesson is lived, not just understood.',
  },
  19: {
    pair: '19/1',
    debtTitle: 'The Debt of Misused Power',
    debt:
      'In a previous cycle, personal power was turned to domination — leadership that served the self at others’ expense, love withdrawn to control, gifts used as leverage. The debt returns as a life where the self-made path is the only one offered: help arrives late or with strings, and the lesson repeats until power is understood as responsibility rather than possession.',
    energy:
      'How it shows up: a lifelong pattern of having to do it alone — support that evaporates at the crucial moment, teams that dissolve, the strange loneliness of the capable. The 19/1 person is often genuinely strong and self-sufficient; the debt hides in the resentment that can grow underneath the competence, and in the temptation to rule whatever room will not support them.',
    resolution:
      'Paid through the Sun’s generosity: lead by radiating rather than commanding. Power wielded in service of something larger than the self is what finally settles the account — mentoring, protecting, sharing credit, forgiving the helpers who never arrived. The Magician (1) returns when strength is offered instead of hoarded; the debt clears when “I did it alone” becomes “look what we built.”',
  },
}

export const KARMIC_KEYS = [13, 14, 16, 19] as const

export interface KarmicInstance {
  number: 13 | 14 | 16 | 19
  /** Where it appeared, e.g. "Birth day", "Life Path", "Expression" */
  source: string
  workings: string
}

/** Every value in the reduction chain, so we can spot karmic numbers mid-way */
function chainOf(total: number): number[] {
  const chain: number[] = [total]
  let v = total
  while (v > 9) {
    if (v === 11 || v === 22 || v === 33) break
    v = digitSum(v)
    chain.push(v)
  }
  return chain
}

export interface KarmicScanResult {
  instances: KarmicInstance[]
  /** true when the scan ran (a name may be absent) */
  scannedExpression: boolean
}

/**
 * Scan the birth day, the life path reduction chain, and the expression
 * number chains for the karmic debt numbers 13, 14, 16, 19.
 * Date parts run only when a valid date is given; name chains only when a
 * name is given — so it works for date-only, name-only, or full readings.
 */
export function scanKarmicDebts(date: string, name?: string): KarmicScanResult | null {
  const parts = dateParts(date)
  const hasName = !!name && name.trim().length > 0
  if (!parts && !hasName) return null

  const instances: KarmicInstance[] = []
  const seen = new Set<string>()

  const push = (n: number, source: string, workings: string) => {
    const key = `${source}:${n}`
    if ((KARMIC_KEYS as readonly number[]).includes(n) && !seen.has(key)) {
      seen.add(key)
      instances.push({ number: n as KarmicInstance['number'], source, workings })
    }
  }

  // 1. Birth day itself — e.g. born on the 16th
  if (parts) {
    push(parts.day, 'Birth day', `Day ${parts.day} → ${KARMIC_DEBTS[parts.day]?.pair ?? parts.day}`)
  }

  // 2. Life path chain
  if (parts) {
    const digits = date.replace(/\D/g, '')
    const total = digits.split('').reduce((acc, d) => acc + Number(d), 0)
    const lpChain = chainOf(total)
    for (const n of lpChain) {
      if ((KARMIC_KEYS as readonly number[]).includes(n)) {
        push(n, 'Life Path', `Date sum ${total} reduces through ${lpChain.join(' → ')}`)
        break
      }
    }
  }

  // 3. Expression chains (raw letter total + per-name-reduced total)
  let scannedExpression = false
  if (hasName) {
    scannedExpression = true
    const cleanName = name!.trim()
    const letters = cleanName
      .toUpperCase()
      .split('')
      .filter((ch) => /[A-Z]/.test(ch))
    const rawTotal = letters.reduce((acc, ch) => acc + LETTER_VALUES[ch], 0)
    const rawChain = chainOf(rawTotal)
    for (const n of rawChain) {
      if ((KARMIC_KEYS as readonly number[]).includes(n)) {
        push(n, 'Expression (raw)', `Letters total ${rawTotal} reduces through ${rawChain.join(' → ')}`)
        break
      }
    }

    const partReducedTotal = name
      .trim()
      .toUpperCase()
      .split(/\s+/)
      .filter(Boolean)
      .reduce((acc, part) => {
        const t = part
          .split('')
          .filter((ch) => /[A-Z]/.test(ch))
          .reduce((a, ch) => a + LETTER_VALUES[ch], 0)
        return acc + reduceMasters(t)
      }, 0)
    const partChain = chainOf(partReducedTotal)
    for (const n of partChain) {
      if ((KARMIC_KEYS as readonly number[]).includes(n)) {
        push(n, 'Expression', `Name parts reduce to ${partReducedTotal}, then ${partChain.join(' → ')}`)
        break
      }
    }
  }

  return { instances, scannedExpression }
}

/* ── Attitude Number (month + day) ───────────────────────────────────── */

const ATTITUDE_LINES: Record<number, string> = {
  1: 'You meet new situations head-on — instinct says act first, refine later.',
  2: 'You instinctively read the room before moving — harmony first, always.',
  3: 'Your first response is warmth and expression — you disarm with charm.',
  4: 'You assess the structure of things first — safety through solidity.',
  5: 'New situations excite rather than scare you — instinct says explore.',
  6: 'You instinctively take care of the room — responsibility arrives before invitation.',
  7: 'You observe before engaging — instinct says understand, then act.',
  8: 'You instinctively size up the power dynamics — competence is your shield.',
  9: 'You respond with an old-soul patience — instinct says there is always a bigger picture.',
}

export interface AttitudeResult {
  number: number
  card: MajorArcana
  line: string
  workings: string
}

export function computeAttitude(date: string): AttitudeResult | null {
  const parts = dateParts(date)
  if (!parts) return null
  const total = parts.month + parts.day
  const n = reduceMasters(total)
  const base = n > 9 ? digitSum(n) : n
  return {
    number: n,
    card: getCard(n <= 21 ? n : base),
    line: ATTITUDE_LINES[base],
    workings: `${parts.month} + ${parts.day} = ${total} → ${n}`,
  }
}

/* ── Year Card (month + day + current year) ──────────────────────────── */

export interface YearCardResult {
  year: number
  number: number
  card: MajorArcana
  workings: string
}

export function computeYearCard(date: string, year: number): YearCardResult | null {
  const parts = dateParts(date)
  if (!parts) return null
  const total = parts.month + parts.day + year
  const n = reduceTo22(total)
  return {
    year,
    number: n,
    card: getCard(n),
    workings: `${parts.month} + ${parts.day} + ${year} = ${total} → ${n === 0 ? '22 → 0' : n}`,
  }
}

/* ── Maturity Number (Life Path + Expression) ────────────────────────── */

export interface MaturityResult {
  number: number
  isMaster: boolean
  workings: string
}

export function computeMaturity(lifePath: number, expression: number): MaturityResult {
  const total = lifePath + expression
  const n = reduceMasters(total)
  return { number: n, isMaster: n > 9, workings: `${lifePath} + ${expression} = ${total} → ${n}` }
}

/* ── Balance Number (first letters of each name) ─────────────────────── */

const BALANCE_LINES: Record<number, string> = {
  1: 'You restore yourself by acting — taking charge resets your equilibrium.',
  2: 'You restore yourself through connection — talk it out, lean on someone.',
  3: 'You restore yourself through expression — create, laugh, say it aloud.',
  4: 'You restore yourself through order — organise, plan, put things in place.',
  5: 'You restore yourself through change — movement, travel, a new scene.',
  6: 'You restore yourself through care — tending others (and yourself) heals you.',
  7: 'You restore yourself through solitude — quiet, study, inner silence.',
  8: 'You restore yourself through achievement — a concrete win steadies you.',
  9: 'You restore yourself through perspective — stepping back, giving, letting go.',
}

export interface BalanceResult {
  number: number
  isMaster: boolean
  workings: string
  letters: string[]
  line: string
}

export function computeBalance(name: string): BalanceResult | null {
  const parts = name
    .trim()
    .toUpperCase()
    .split(/\s+/)
    .filter((p) => /[A-Z]/.test(p))
  if (parts.length === 0) return null

  const firsts = parts.map((p) => p.match(/[A-Z]/)![0])
  const values = firsts.map((ch) => LETTER_VALUES[ch])
  const total = values.reduce((a, b) => a + b, 0)
  const n = reduceMasters(total)
  const base = n > 9 ? digitSum(n) : n
  const workings = `${firsts.map((ch, i) => `${ch}=${values[i]}`).join(' + ')} = ${total} → ${n}`
  return { number: n, isMaster: n > 9, workings, letters: firsts, line: BALANCE_LINES[base] }
}

/* ── Birth pair "Path" names (Tarot.com style) ───────────────────────── */

export const PAIR_PATHS: Record<string, string> = {
  '10-1': 'The Path of Power',
  '11-2': 'The Path of Knowledge',
  '12-3': 'The Path of Surrender',
  '13-4': 'The Path of Protection',
  '14-5': 'The Path of Tradition',
  '15-6': 'The Path of Freedom',
  '16-7': 'The Path of Change',
  '17-8': 'The Path of Vulnerability',
  '18-9': 'The Path of Hidden Truth',
  '19-10': 'The Path of Cycles',
  '20-2': 'The Path of Notoriety',
  '21-3': 'The Path of Connection',
}

export function pairPath(primary: number, secondary: number): string | null {
  return PAIR_PATHS[`${primary}-${secondary}`] ?? null
}

/**
 * What each birth card pair means as a pair — the shared current (essence) and
 * how the two cards cooperate in one lifetime (together). Keys match PAIR_PATHS.
 */
export const PAIR_DETAILS: Record<string, { essence: string; together: string }> = {
  '10-1': {
    essence: 'Mastery over change itself — the wheel and the hand that steers it.',
    together:
      'The Wheel of Fortune (10) supplies the turning — luck, cycles, doors that open on their own timing. The Magician (1) supplies the hand — skill, will, the nerve to act when the door opens. People on this path are granted fortune but are not permitted to coast on it: their lesson is that luck is a skill. They tend to live in visible cycles of rise and reset, and they thrive when they treat every turn of the wheel as an opening to shape rather than weather.',
  },
  '11-2': {
    essence: 'Truth held with grace — clear judgement married to deep knowing.',
    together:
      'Justice (11) brings clarity: the scales, the honest verdict, the law of consequence. The High Priestess (2) brings the unsaid: intuition, hidden knowledge, the truth that lives under the truth. Together they make the discerning pair — people who both sense what is really happening and have the nerve to name it. Their lives often involve advocacy, healing or counsel, and their growth edge is patience: knowing the truth is not the same as being ready to speak it.',
  },
  '12-3': {
    essence: 'Yielding that creates — the pause that feeds the flowering.',
    together:
      'The Hanged Man (12) teaches willing surrender: the sacred pause, the view from upside-down, progress that looks like stillness. The Empress (3) creates: beauty, nurture, abundance in visible form. Paired, they describe people whose creativity is renewed by surrender — they bloom after they stop forcing. Their lesson is trusting the pause: the world will call it delay, but for this pair the stillness is where the work is done.',
  },
  '13-4': {
    essence: 'Endings that protect — clearing the ground so something honest can stand.',
    together:
      'Death (13) clears: transformations, closed chapters, the endings no one wanted but everyone needed. The Emperor (4) fortifies: order, boundaries, structures that protect what is real. Together they are the builders of the second life — people who dismantle what is false and then raise something sturdier in its place. Often marked by at least one total reinvention, this pair turns loss into architecture; its lesson is learning to let the old thing finish before defending the new one.',
  },
  '14-5': {
    essence: 'Measured fire — freedom refined by balance, change guided by faith.',
    together:
      'Temperance (14) blends: patience, proportion, the alchemy of mixing opposites without spill. The Hierophant (5) transmits: tradition, teaching, received wisdom walked rather than recited. Paired, they make the bridge-builders between the old and the new — people who modernise without wrecking, who question without contempt. Their path runs through institutions and reform; their lesson is that true freedom is not escape from form but mastery within it.',
  },
  '15-6': {
    essence: 'Desire met by choice — the chain and the vow, in that order.',
    together:
      'The Devil (15) names the bondage: appetite, attachment, the deals we sign against ourselves. The Lovers (6) name the choosing: love as a decision, union as an act of will rather than gravity. People on this path are given extraordinary magnetism and an equally extraordinary curriculum in desire — they feel the pull toward excess, drama and possession more strongly than most, which is precisely why their gift is conscious choice. Their lesson: nothing they truly love should require their captivity.',
  },
  '16-7': {
    essence: 'Sudden change mastered by will — the lightning and the charioteer.',
    together:
      'The Tower (16) breaks: revelations, collapses, the lightning that hits what was built on falsehood. The Chariot (7) drives: discipline, direction, the will that turns chaos into momentum. This is the pair of dramatic reinvention — lives that periodically shake apart and then reassemble stronger, often with a spiritual or analytical calling at the centre. Their lesson is to stop rebuilding the tower: the Chariot’s victory is driving through the rubble, not re-erecting what the lightning came to take.',
  },
  '17-8': {
    essence: 'Hope powered by gentle strength — openness that survives because it is brave.',
    together:
      'The Star (17) restores: hope, healing, the courage to be vulnerable after the storm. Strength (8) sustains: quiet courage, the lion handled without a whip. Paired, they make the healers — people whose softness is not fragility but a disciplined choice, renewed daily. Their lives often involve guiding others through recovery, and their lesson is self-inclusion: the Star pours water onto the land and into the pool — this pair must remember to keep one cup for themselves. (And behind them both, hidden, stands Justice — see the note in your reading.)',
  },
  '18-9': {
    essence: 'Mystery illumined by solitude — the fog and the lantern.',
    together:
      'The Moon (18) dwells in the deep water: dreams, fears, the unconscious, truth that arrives sideways. The Hermit (9) carries the lantern: reflection, study, wisdom earned in deliberate solitude. Together they form the inner explorers — people called to map what others fear to look at, often through art, psychology, spirituality or research. Their lesson is re-entry: the cave holds treasure, but the pair’s light is meant to be carried back to others, not kept in the dark.',
  },
  '19-10': {
    essence: 'Joy riding the wheel — radiance that learns to surf the cycles.',
    together:
      'The Sun (19) radiates: vitality, success, the plain gift of being alive. The Wheel of Fortune (10) turns: luck, timing, seasons of rise and fall. This is the golden pair — people whose natural brightness attracts opportunity in waves. The lesson hides in the wheel: their happiness matures when it stops depending on the up-cycles. Those who learn to shine in the downturn become the rare souls who lift entire rooms by walking into them.',
  },
  '20-2': {
    essence: 'A calling heard in public — awakening voiced with quiet authority.',
    together:
      'Judgement (20) calls: the awakening, the true vocation, the past forgiven and reassembled into purpose. The High Priestess (2) holds the inner register: intuition, discretion, the knowing that does not need to argue. Paired, they describe people whose private knowing becomes a public summons — lives that turn on a moment of being called, and who then spend their years answering it for others. Their lesson is volume: the calling does not count as answered until someone else can hear it.',
  },
  '21-3': {
    essence: 'Completion feeding creation — the full circle starting another loop.',
    together:
      'The World (21) completes: fulfilment, graduation, the dance inside the finished wreath. The Empress (3) germinates: new life, new work, the garden that always wants planting. Together they are the connectors of cycles — people who finish things so well that the ending itself generates beginnings. Their lives tend to contain clearly marked chapters, each one larger than the last. The lesson is rest between the loops: a wreath fully closed deserves to be worn before the next seed is sown.',
  },
}
