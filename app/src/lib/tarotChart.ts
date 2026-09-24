import { computeBirthCards, getCard } from './tarot'
import { computeLifePath, getNumberProfile } from './numerology'

/**
 * The numeric Tarot Birth Chart: every number hidden in the birth date,
 * each reduced to its Major Arcana. Works with the date alone — this is the
 * fallback layer of the “tarot natal chart”, present for every visitor.
 */

export interface TarotChartPosition {
  key: string
  label: string
  how: string
  /** reduced value in the 1..22 range (22 = The Fool) */
  number: number
  cardNum: number
  note: string
}

function digitSum(n: number): number {
  return String(n)
    .split('')
    .reduce((acc, d) => acc + Number(d), 0)
}

/** Reduce to the Major Arcana range 1..21, keeping 22 for The Fool. */
function reduceArcana(n: number): number {
  let v = n
  while (v > 22) v = digitSum(v)
  return v
}

function cardNumOf(n: number): number {
  return n === 22 ? 0 : n
}

export function computeTarotBirthChart(dateStr: string): TarotChartPosition[] | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return null
  const [y, m, d] = dateStr.split('-').map(Number)
  const out: TarotChartPosition[] = []

  // ── Day card ────────────────────────────────────────────────
  const dayRaw = d
  const day = reduceArcana(dayRaw)
  out.push({
    key: 'day',
    label: 'Day Card',
    how: `${String(dayRaw).padStart(2, '0')}`,
    number: day,
    cardNum: cardNumOf(day),
    note: 'The day of the month is your native gift — the talent you brought with you, visible before any training.',
  })

  // ── Month card ──────────────────────────────────────────────
  const month = reduceArcana(m)
  out.push({
    key: 'month',
    label: 'Month Card',
    how: `${String(m).padStart(2, '0')}`,
    number: month,
    cardNum: cardNumOf(month),
    note: 'The month is the season of your soul — the climate every other number of your chart grows inside.',
  })

  // ── Year card ───────────────────────────────────────────────
  const yearDigits = String(y).split('').join(' + ')
  const year = reduceArcana(y)
  out.push({
    key: 'year',
    label: 'Year Card',
    how: `${yearDigits} = ${y}`,
    number: year,
    cardNum: cardNumOf(year),
    note: 'The year is the doorway you entered through — the generational current that carried you into this life.',
  })

  // ── Attitude number (month + day) ───────────────────────────
  const attRaw = m + d
  const att = reduceArcana(attRaw)
  out.push({
    key: 'attitude',
    label: 'Attitude Card',
    how: `${m} + ${d} = ${attRaw}`,
    number: att,
    cardNum: cardNumOf(att),
    note: 'Month plus day is your attitude — the face you show the world in the first five minutes of any meeting.',
  })

  // ── Birth cards (Tarot School method) ───────────────────────
  const birth = computeBirthCards(dateStr)
  if (birth) {
    out.push({
      key: 'birth',
      label: 'Birth Card',
      how: `${birth.chain.join(' → ')}`,
      number: birth.primary,
      cardNum: birth.primary,
      note: 'The whole date reduced to its archetype — the main character of your life story, supported by its linked Soul Card.',
    })
  }

  // ── Life path card ──────────────────────────────────────────
  const lifePath = computeLifePath(dateStr)
  if (lifePath) {
    const profile = getNumberProfile(lifePath.number)
    out.push({
      key: 'lifepath',
      label: 'Life Path Card',
      how: `life path ${lifePath.number}${lifePath.isMaster ? ' ✦ master' : ''}`,
      number: lifePath.number,
      cardNum: profile.card?.num ?? cardNumOf(reduceArcana(lifePath.number)),
      note: 'The numerological current of the full date, translated into its corresponding Major Arcana.',
    })
  }

  // ── Personal year card (live) ───────────────────────────────
  const now = new Date().getFullYear()
  const pyRaw = m + d + now
  const py = reduceArcana(pyRaw)
  out.push({
    key: 'yearcard',
    label: 'This Year’s Card',
    how: `${m} + ${d} + ${now} = ${pyRaw}`,
    number: py,
    cardNum: cardNumOf(py),
    note: `The theme of your personal year ${now} — the lesson visiting you right now, from your last birthday to your next.`,
  })

  return out
}

export function tarotChartCard(pos: TarotChartPosition) {
  return getCard(pos.cardNum)
}
