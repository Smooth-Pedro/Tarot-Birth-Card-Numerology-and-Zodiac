import { Badge } from '@/components/ui/badge'
import { SiteNav } from '@/components/SmartRef'
import FoolsJourney from '@/components/FoolsJourney'
import TarotCardFace from '@/components/TarotCardFace'
import { NUMEROLOGY_PARTS } from '@/lib/numerologyParts'
import { getNumberProfile, MASTER_NOTES } from '@/lib/numerology'

const NUMBER_ORDER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33]

/** /numerology-library — every position of the chart, then every number in depth */
export default function NumerologyLibraryPage() {
  return (
    <div className="starfield min-h-screen relative">
      <FoolsJourney />
      <SiteNav />
      <header className="relative px-6 pt-20 pb-10 text-center max-w-4xl mx-auto">
        <Badge
          variant="outline"
          className="border-amber-200/40 text-amber-200 mb-3 tracking-[0.2em] uppercase"
        >
          The Numbers Library
        </Badge>
        <h1 className="font-cinzel text-3xl sm:text-5xl text-amber-100 leading-tight">
          Every Part of the Chart, Every Number
        </h1>
        <p className="mt-4 text-indigo-200/70 max-w-2xl mx-auto leading-relaxed text-sm">
          First, the positions — what the Life Path, the Expression, the Soul Urge and each other
          part of a numerology chart actually answers. Then the numbers themselves, 1 to 9 and
          the three masters, each explored in depth with its Major Arcana.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        {/* ── The positions ────────────────────────────────────── */}
        <h2 className="font-cinzel text-2xl text-amber-100 text-center mb-2" id="parts">
          The Positions of a Chart
        </h2>
        <p className="text-indigo-300/60 text-xs italic text-center mb-8 max-w-2xl mx-auto">
          A numerology chart is not one number but an orchestra — each position plays a different
          instrument, and the music is the combination.
        </p>
        <div className="space-y-6">
          {NUMEROLOGY_PARTS.map((part) => (
            <article
              key={part.key}
              id={`part-${part.key}`}
              className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 shrink-0 rounded-full border-2 border-indigo-300/40 bg-indigo-500/10 flex items-center justify-center text-2xl text-indigo-100">
                  {part.glyph}
                </div>
                <div>
                  <h3 className="font-cinzel text-xl text-amber-100">{part.name}</h3>
                  <p className="text-indigo-300/70 text-xs italic">“{part.question}”</p>
                </div>
              </div>
              <p className="text-indigo-300/60 text-xs mt-4 font-mono">{part.formula}</p>
              <p className="text-indigo-100/85 text-sm leading-relaxed mt-3">{part.description}</p>
              <div className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-4 mt-4">
                <h4 className="text-indigo-200 font-cinzel text-xs tracking-widest uppercase mb-2">
                  ✦ In depth
                </h4>
                <p className="text-indigo-200/75 text-sm leading-relaxed">{part.detail}</p>
              </div>
              <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/5 p-4 mt-4">
                <h4 className="text-emerald-200 font-cinzel text-xs tracking-widest uppercase mb-2">
                  ✦ Working with it
                </h4>
                <p className="text-emerald-50/85 text-sm leading-relaxed">{part.guidance}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="my-14 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />

        {/* ── The numbers in depth ─────────────────────────────── */}
        <h2 className="font-cinzel text-2xl text-amber-100 text-center mb-2" id="numbers">
          The Numbers in Depth
        </h2>
        <p className="text-indigo-300/60 text-xs italic text-center mb-8 max-w-2xl mx-auto">
          The nine currents and the three master voltages — what each one is, the energy it brings
          everywhere it lands, and the card that carries it.
        </p>
        <div className="space-y-6">
          {NUMBER_ORDER.map((n) => {
            const p = getNumberProfile(n)
            const isMaster = n > 9
            return (
              <article
                key={n}
                id={`number-${n}`}
                className={`rounded-3xl border p-6 sm:p-8 scroll-mt-24 backdrop-blur-sm ${
                  isMaster
                    ? 'border-amber-200/35 bg-amber-200/[0.04]'
                    : 'border-indigo-400/20 bg-white/[0.03]'
                }`}
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div
                    className={`w-24 h-24 shrink-0 rounded-full border-2 flex items-center justify-center ${
                      isMaster
                        ? 'border-amber-300/60 bg-amber-200/10 shadow-[0_0_40px_-8px_rgba(251,191,36,0.5)]'
                        : 'border-indigo-300/40 bg-indigo-500/10'
                    }`}
                  >
                    <span className={`font-cinzel text-4xl ${isMaster ? 'text-amber-100' : 'text-indigo-100'}`}>
                      {n}
                    </span>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-cinzel text-xl text-amber-100">
                      {n} — {p.title}
                      {isMaster && (
                        <span className="ml-2 text-amber-300/90 text-sm align-middle">✦ Master Number</span>
                      )}
                    </h3>
                    <p className="text-indigo-300/70 text-xs mt-1 tracking-wide">
                      {p.strengths.join(' · ')}
                    </p>
                    <p className="text-indigo-100/85 text-sm leading-relaxed mt-3">{p.meaning}</p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-4">
                  <h4 className="font-cinzel text-indigo-200 text-xs tracking-[0.25em] uppercase mb-2">
                    ⚡ The energy it brings
                  </h4>
                  <p className="text-indigo-200/75 text-sm leading-relaxed">{p.energy}</p>
                </div>

                <p className="text-indigo-200/70 text-sm leading-relaxed mt-4">{p.detail}</p>

                {isMaster && MASTER_NOTES[n] && (
                  <div className="mt-4 rounded-2xl border border-amber-200/30 bg-amber-200/[0.06] p-4">
                    <h4 className="font-cinzel text-amber-200 text-xs tracking-[0.25em] uppercase mb-2">
                      ✦ Why the master numbers show up
                    </h4>
                    <p className="text-amber-50/85 text-sm leading-relaxed">{MASTER_NOTES[n]}</p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/5 p-4">
                    <h4 className="text-emerald-200 font-cinzel text-xs tracking-widest uppercase mb-2">
                      Strengths
                    </h4>
                    <ul className="text-indigo-100/80 text-sm space-y-1">
                      {p.strengths.map((s) => (
                        <li key={s}>✦ {s}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-rose-300/20 bg-rose-400/5 p-4">
                    <h4 className="text-rose-200 font-cinzel text-xs tracking-widest uppercase mb-2">
                      Challenges
                    </h4>
                    <ul className="text-indigo-100/80 text-sm space-y-1">
                      {p.challenges.map((c) => (
                        <li key={c}>☾ {c}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row items-center gap-5">
                  <div className="rounded-2xl border border-emerald-300/25 bg-emerald-400/[0.06] p-4 flex-1">
                    <h4 className="font-cinzel text-emerald-200 text-xs tracking-[0.25em] uppercase mb-2">
                      ✦ Working with this number
                    </h4>
                    <p className="text-emerald-50/85 text-sm leading-relaxed">{p.advice}</p>
                  </div>
                  {p.card && (
                    <a href={`/library#arcana-${p.card.num}`} className="flex flex-col items-center gap-2 shrink-0 group">
                      <TarotCardFace card={p.card} size="sm" />
                      <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-300/60 group-hover:text-amber-300/80 transition-colors">
                        its arcana · {p.card.name} →
                      </span>
                    </a>
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </main>

      <footer className="text-center pb-10 text-indigo-300/40 text-xs tracking-[0.3em] uppercase">
        ☾ For reflection &amp; entertainment ✦
      </footer>
    </div>
  )
}
