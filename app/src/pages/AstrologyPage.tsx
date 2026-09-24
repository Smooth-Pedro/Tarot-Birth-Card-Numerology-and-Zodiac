import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent } from '@/components/ui/card'
import { SiteNav } from '@/components/SmartRef'
import FoolsJourney from '@/components/FoolsJourney'
import NatalChartPanel from '@/components/NatalChartPanel'
import TarotBirthChartPanel from '@/components/TarotBirthChartPanel'
import { computeNatalChart, type NatalChart } from '@/lib/natalChart'
import { computeTarotBirthChart, type TarotChartPosition } from '@/lib/tarotChart'
import { CITIES, findCity } from '@/lib/astrology'

/** /astrology — the natal chart in the language of tarot */
export default function AstrologyPage() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [cityText, setCityText] = useState('')
  const [error, setError] = useState('')
  const [result, setResult] = useState<{
    chart: NatalChart
    tarotChart: TarotChartPosition[]
  } | null>(null)

  const handleCalculate = () => {
    if (!date) {
      setError('Please choose your birth date first.')
      return
    }
    let city = null
    if (cityText.trim()) {
      city = findCity(cityText)
      if (!city) {
        setError(
          'City not found in the list — please pick the nearest major city from the suggestions (or leave it empty).',
        )
        return
      }
    }
    const chart = computeNatalChart({ date, time: time || undefined, city })
    const tarotChart = computeTarotBirthChart(date)
    if (!chart || !tarotChart) {
      setError('That date does not look right — please try again.')
      return
    }
    setError('')
    setResult({ chart, tarotChart })
    setTimeout(() => document.getElementById('astro-results')?.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  return (
    <div className="starfield min-h-screen relative">
      <FoolsJourney />
      <SiteNav />

      <header className="relative px-6 pt-20 pb-10 text-center max-w-4xl mx-auto">
        <div className="text-amber-200/70 text-5xl mb-6 animate-float">☉ ☽ ↑</div>
        <h1 className="font-cinzel text-4xl sm:text-6xl text-amber-100 leading-tight drop-shadow-[0_0_25px_rgba(251,191,36,0.25)]">
          The Tarot Sky
        </h1>
        <p className="mt-6 text-indigo-200/70 max-w-2xl mx-auto leading-relaxed">
          Your birth date fixes the planets in their signs; your birth time and city raise the
          horizon and reveal the Ascendant. Every placement is then read through the tarot — each
          sign wears a Major Arcana, each planet carries one, and every exact degree holds a Minor
          Arcana of its decan. Only the date is required; the sky reveals more when you offer
          more.
        </p>

        <Card className="mt-10 max-w-md mx-auto bg-white/[0.04] border-indigo-400/25 backdrop-blur-md shadow-[0_0_60px_-15px_rgba(99,80,220,0.5)]">
          <CardContent className="pt-6 pb-6 space-y-5">
            <div className="space-y-2 text-left">
              <Label htmlFor="astro-date" className="text-indigo-200/90 tracking-wide">
                Birth date <span className="text-amber-300/80">✦ required</span>
              </Label>
              <Input
                id="astro-date"
                type="date"
                value={date}
                min="1900-01-01"
                max="2099-12-31"
                onChange={(e) => {
                  setDate(e.target.value)
                  setError('')
                }}
                className="bg-indigo-950/40 border-indigo-400/30 text-indigo-100"
              />
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="astro-time" className="text-indigo-200/90 tracking-wide">
                Birth time <span className="text-indigo-300/50">— optional</span>
              </Label>
              <Input
                id="astro-time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="bg-indigo-950/40 border-indigo-400/30 text-indigo-100"
              />
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="astro-city" className="text-indigo-200/90 tracking-wide">
                Birth city <span className="text-indigo-300/50">— optional, unlocks the Ascendant</span>
              </Label>
              <Input
                id="astro-city"
                list="astro-cities"
                placeholder="Start typing a major city…"
                value={cityText}
                onChange={(e) => {
                  setCityText(e.target.value)
                  setError('')
                }}
                className="bg-indigo-950/40 border-indigo-400/30 text-indigo-100"
              />
              <datalist id="astro-cities">
                {CITIES.map((c) => (
                  <option key={`${c.name}-${c.country}`} value={`${c.name}, ${c.country}`} />
                ))}
              </datalist>
            </div>
            {error && <p className="text-rose-300/90 text-sm text-center">{error}</p>}
            <Button
              onClick={handleCalculate}
              className="w-full bg-amber-200 text-indigo-950 font-cinzel tracking-[0.2em] uppercase hover:bg-amber-100"
            >
              ✦ Read My Sky
            </Button>
          </CardContent>
        </Card>
      </header>

      {result && (
        <main id="astro-results" className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 scroll-mt-10">
          <NatalChartPanel chart={result.chart} />
          <div className="my-14 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />
          <TarotBirthChartPanel positions={result.tarotChart} />
        </main>
      )}

      {!result && (
        <main className="max-w-3xl mx-auto px-6 pb-16 text-center">
          <div className="rounded-3xl border border-indigo-400/15 bg-white/[0.02] p-8">
            <h2 className="font-cinzel text-xl text-amber-100 mb-4">What you will receive</h2>
            <div className="grid sm:grid-cols-3 gap-4 text-sm text-indigo-200/75 leading-relaxed">
              <div>
                <div className="text-2xl mb-2">☉</div>
                <p className="text-amber-200/90 font-cinzel text-sm mb-1">The Big Three</p>
                Sun, Moon and Rising — each with its sign, its Major Arcana and its decan card.
              </div>
              <div>
                <div className="text-2xl mb-2">✺</div>
                <p className="text-amber-200/90 font-cinzel text-sm mb-1">The Tarot Wheel</p>
                Your twelve houses (or the twelve signs) dressed in the cards of the Golden Dawn.
              </div>
              <div>
                <div className="text-2xl mb-2">✦</div>
                <p className="text-amber-200/90 font-cinzel text-sm mb-1">The Birth Chart of Numbers</p>
                Day, month, year, attitude, life path and this year’s card — all as Arcana.
              </div>
            </div>
          </div>
        </main>
      )}

      <footer className="text-center pb-10 text-indigo-300/40 text-xs tracking-[0.3em] uppercase">
        ☾ For reflection &amp; entertainment ✦
      </footer>
    </div>
  )
}
