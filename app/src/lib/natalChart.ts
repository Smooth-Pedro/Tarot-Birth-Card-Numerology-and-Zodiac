import { Origin, Horoscope } from 'circular-natal-horoscope-js'
import { decanAt, getPlanet, getSign, SIGNS, type City, type DecanCard, type SignInfo } from './astrology'
import { getCard, type MajorArcana } from './tarot'

/** One computed placement (planet, angle or point) in the natal chart */
export interface ChartBody {
  key: string
  name: string
  glyph: string
  sign: SignInfo
  /** 0–30 degrees within the sign */
  degree: number
  /** 0–360 ecliptic longitude */
  abs: number
  retrograde: boolean
  /** The Major Arcana carrying this body (planet card, or sign card for angles) */
  card: MajorArcana
  /** The Minor Arcana of its decan (the “card of the exact degree”) */
  decan: DecanCard
  /** Whole-sign house, 1–12 — null without birth time & place */
  house: number | null
}

export interface NatalChart {
  date: string
  /** true when no birth time was given (positions computed for 12:00 local) */
  timeUnknown: boolean
  hasLocation: boolean
  cityLabel: string | null
  sun: ChartBody
  moon: ChartBody
  /** true when the Moon changed signs during the birth date — time needed */
  moonCusp: boolean
  bodies: ChartBody[]
  ascendant: ChartBody | null
  midheaven: ChartBody | null
  /** whole-sign wheel starting at the ascendant — null without location */
  wheel: { house: number; sign: SignInfo; bodies: ChartBody[] }[] | null
}

export interface ChartInput {
  date: string // YYYY-MM-DD
  time?: string // HH:MM
  city?: City | null
}

interface LibBody {
  Sign?: { key?: string; label?: string }
  ChartPosition?: { Ecliptic?: { DecimalDegrees?: number } }
  isRetrograde?: boolean
}

function toBody(key: string, raw: LibBody, ascIndex: number | null): ChartBody {
  const abs = Number(raw?.ChartPosition?.Ecliptic?.DecimalDegrees ?? 0) % 360
  const sign = raw?.Sign?.key ? getSign(raw.Sign.key.toLowerCase()) : SIGNS[0]
  const planet = getPlanet(key)
  const decan = decanAt(abs)
  const house = ascIndex === null ? null : ((SIGNS.indexOf(sign) - ascIndex + 12) % 12) + 1
  return {
    key,
    name: planet?.name ?? key,
    glyph: planet?.glyph ?? '✦',
    sign,
    degree: abs % 30,
    abs,
    retrograde: Boolean(raw?.isRetrograde),
    card: getCard(planet?.card ?? sign.card),
    decan,
    house,
  }
}

function buildHoroscope(input: ChartInput, hour: number, minute: number): Horoscope {
  const [y, m, d] = input.date.split('-').map(Number)
  const origin = new Origin({
    year: y,
    month: m - 1, // 0 = January
    date: d,
    hour,
    minute,
    latitude: input.city?.lat ?? 0,
    longitude: input.city?.lng ?? 0,
  })
  return new Horoscope({ origin, houseSystem: 'whole-sign', zodiac: 'tropical' })
}

const BODY_KEYS = [
  'sun',
  'moon',
  'mercury',
  'venus',
  'mars',
  'jupiter',
  'saturn',
  'uranus',
  'neptune',
  'pluto',
] as const

/**
 * Compute the full natal chart. Only the date is required; without a birth
 * time everything is calculated for 12:00 local and the ascendant/houses are
 * omitted; without a birth place the ascendant and wheel are omitted.
 */
export function computeNatalChart(input: ChartInput): NatalChart | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(input.date)) return null
  const timeUnknown = !input.time
  const hasLocation = Boolean(input.city)
  const [h, min] = timeUnknown ? [12, 0] : (input.time as string).split(':').map(Number)

  let horo: Horoscope
  try {
    horo = buildHoroscope(input, h || 12, min || 0)
  } catch {
    return null
  }

  const rawBodies = horo.CelestialBodies as Record<string, LibBody>
  let ascIndex: number | null = null
  let ascendant: ChartBody | null = null
  let midheaven: ChartBody | null = null

  if (hasLocation) {
    const ascSignKey = String((horo.Ascendant as { Sign?: { key?: string } })?.Sign?.key ?? '')
      .toLowerCase()
      .trim()
    if (ascSignKey && SIGNS.some((s) => s.key === ascSignKey)) {
      ascIndex = SIGNS.findIndex((s) => s.key === ascSignKey)
      const ascAbs = Number(
        (horo.Ascendant as { ChartPosition?: { Ecliptic?: { DecimalDegrees?: number } } })
          ?.ChartPosition?.Ecliptic?.DecimalDegrees ?? ascIndex * 30,
      )
      ascendant = toBody('__asc', { ChartPosition: { Ecliptic: { DecimalDegrees: ascAbs } }, Sign: { key: ascSignKey } }, null)
      ascendant.name = 'Ascendant'
      ascendant.glyph = '↑'
      ascendant.card = getCard(SIGNS[ascIndex].card)

      const mcSignKey = String((horo.Midheaven as { Sign?: { key?: string } })?.Sign?.key ?? '')
        .toLowerCase()
        .trim()
      if (mcSignKey && SIGNS.some((s) => s.key === mcSignKey)) {
        const mcAbs = Number(
          (horo.Midheaven as { ChartPosition?: { Ecliptic?: { DecimalDegrees?: number } } })
            ?.ChartPosition?.Ecliptic?.DecimalDegrees ?? 0,
        )
        midheaven = toBody('__mc', { ChartPosition: { Ecliptic: { DecimalDegrees: mcAbs } }, Sign: { key: mcSignKey } }, null)
        midheaven.name = 'Midheaven'
        midheaven.glyph = '☐'
        midheaven.card = getCard(getSign(mcSignKey).card)
      }
    }
  }

  const bodies = BODY_KEYS.map((k) => toBody(k, rawBodies[k], ascIndex))
  const sun = bodies[0]
  const moon = bodies[1]

  // Moon cusp check: did the Moon change signs during the birth date?
  let moonCusp = false
  try {
    const start = buildHoroscope(input, 0, 0)
    const end = buildHoroscope(input, 23, 59)
    const s = (start.CelestialBodies as Record<string, LibBody>).moon?.Sign?.key
    const e = (end.CelestialBodies as Record<string, LibBody>).moon?.Sign?.key
    moonCusp = Boolean(s && e && s !== e)
  } catch {
    moonCusp = false
  }

  const wheel =
    ascIndex === null
      ? null
      : Array.from({ length: 12 }, (_, i) => {
          const sign = SIGNS[(ascIndex + i) % 12]
          return {
            house: i + 1,
            sign,
            bodies: bodies.filter((b) => b.sign.key === sign.key),
          }
        })

  return {
    date: input.date,
    timeUnknown,
    hasLocation,
    cityLabel: input.city ? `${input.city.name}, ${input.city.country}` : null,
    sun,
    moon,
    moonCusp,
    bodies,
    ascendant,
    midheaven,
    wheel,
  }
}

/** Format a degree like "14°32′ Taurus" */
export function formatDegree(body: ChartBody): string {
  const d = Math.floor(body.degree)
  const m = Math.floor((body.degree - d) * 60)
  return `${d}°${String(m).padStart(2, '0')}′ ${body.sign.name}`
}
