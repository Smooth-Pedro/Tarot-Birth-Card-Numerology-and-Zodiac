import { Badge } from '@/components/ui/badge'
import { SiteNav } from '@/components/SmartRef'
import FoolsJourney from '@/components/FoolsJourney'
import TarotCardFace from '@/components/TarotCardFace'
import { SIGNS, HOUSES, decanAt, getPlanet } from '@/lib/astrology'
import { getCard } from '@/lib/tarot'

/** /astrology-library — every sign and every house, in depth, with its cards */
export default function AstroLibraryPage() {
  return (
    <div className="starfield min-h-screen relative">
      <FoolsJourney />
      <SiteNav />
      <header className="relative px-6 pt-20 pb-10 text-center max-w-4xl mx-auto">
        <Badge
          variant="outline"
          className="border-amber-200/40 text-amber-200 mb-3 tracking-[0.2em] uppercase"
        >
          The Cosmos Library
        </Badge>
        <h1 className="font-cinzel text-3xl sm:text-5xl text-amber-100 leading-tight">
          The Twelve Signs &amp; The Twelve Houses
        </h1>
        <p className="mt-4 text-indigo-200/70 max-w-2xl mx-auto leading-relaxed text-sm">
          The reference behind every sky reading on this site — what each sign is, where it
          strains, how it loves and works, and the Major Arcana that wears it; then the twelve
          houses, the rooms your planets live in. Cross-referenced from the{' '}
          <a href="/astrology" className="text-amber-300/90 underline decoration-amber-300/30">
            Tarot Sky
          </a>{' '}
          and{' '}
          <a href="/synastry" className="text-amber-300/90 underline decoration-amber-300/30">
            Synastry
          </a>{' '}
          readings.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        {/* ── The Twelve Signs ─────────────────────────────────── */}
        <h2 className="font-cinzel text-2xl text-amber-100 text-center mb-2" id="signs">
          The Twelve Signs
        </h2>
        <p className="text-indigo-300/60 text-xs italic text-center mb-8 max-w-2xl mx-auto">
          Each sign carries one Major Arcana of the Golden Dawn correspondences — and three Minor
          Arcana, one for each of its ten-degree decans.
        </p>
        <div className="space-y-6">
          {SIGNS.map((sign, idx) => {
            const card = getCard(sign.card)
            const ruler = getPlanet(sign.ruler)
            const decans = [0, 1, 2].map((d) => decanAt(idx * 30 + d * 10 + 5))
            return (
              <article
                key={sign.key}
                id={`sign-${sign.key}`}
                className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-8 scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-24 h-24 shrink-0 rounded-full border-2 border-amber-300/50 bg-amber-200/10 flex items-center justify-center text-4xl text-amber-100 shadow-[0_0_40px_-8px_rgba(251,191,36,0.4)]">
                    {sign.glyph}
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="font-cinzel text-2xl text-amber-100">
                      {sign.name}
                      <span className="ml-3 text-sm text-indigo-300/60 font-sans tracking-wide">
                        {sign.dates}
                      </span>
                    </h3>
                    <p className="text-indigo-300/70 text-xs mt-1 tracking-wide">
                      {sign.element} · {sign.modality} · ruled by {ruler?.name}
                    </p>
                    <p className="text-indigo-300/70 text-xs">
                      {sign.keywords.join(' · ')}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 shrink-0">
                    <TarotCardFace card={card} size="sm" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-300/60">
                      its Major Arcana
                    </span>
                  </div>
                </div>

                <p className="text-indigo-100/85 text-sm leading-relaxed mt-5">{sign.essence}</p>

                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="rounded-2xl border border-rose-300/20 bg-rose-400/5 p-4">
                    <h4 className="text-rose-200 font-cinzel text-xs tracking-widest uppercase mb-2">
                      ☾ The shadow
                    </h4>
                    <p className="text-indigo-100/80 text-sm leading-relaxed">{sign.shadow}</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-300/20 bg-emerald-400/5 p-4">
                    <h4 className="text-emerald-200 font-cinzel text-xs tracking-widest uppercase mb-2">
                      ✦ In love
                    </h4>
                    <p className="text-indigo-100/80 text-sm leading-relaxed">{sign.inLove}</p>
                  </div>
                  <div className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-4 sm:col-span-2">
                    <h4 className="text-indigo-200 font-cinzel text-xs tracking-widest uppercase mb-2">
                      ⚒ At work
                    </h4>
                    <p className="text-indigo-100/80 text-sm leading-relaxed">{sign.atWork}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2 items-center">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-indigo-300/60 mr-1">
                    Its decans
                  </span>
                  {decans.map((d, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 rounded-full border border-indigo-300/25 bg-indigo-500/10 px-2.5 py-1 text-[10px] uppercase tracking-wider text-indigo-200/80"
                      title={`${d.decan.span} ${sign.name} — ruled by ${d.decan.rulerName}`}
                    >
                      {d.decan.name} <span className="text-indigo-300/50">({d.decan.span})</span>
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        <div className="my-14 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent" />

        {/* ── The Twelve Houses ────────────────────────────────── */}
        <h2 className="font-cinzel text-2xl text-amber-100 text-center mb-2" id="houses">
          The Twelve Houses
        </h2>
        <p className="text-indigo-300/60 text-xs italic text-center mb-8 max-w-2xl mx-auto">
          The wheel of the chart, cut into twelve rooms. The sign on each room’s door colors it;
          the planets inside furnish it.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {HOUSES.map((house) => (
            <article
              key={house.number}
              id={`house-${house.number}`}
              className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm p-6 scroll-mt-24"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 shrink-0 rounded-full border-2 border-indigo-300/40 bg-indigo-500/10 flex items-center justify-center font-cinzel text-xl text-indigo-100">
                  {house.number}
                </div>
                <div>
                  <h3 className="font-cinzel text-lg text-amber-100">{house.name}</h3>
                  <p className="text-indigo-300/70 text-xs">{house.theme}</p>
                </div>
              </div>
              <p className="text-indigo-100/85 text-sm leading-relaxed mt-4">{house.description}</p>
              <div className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-4 mt-4">
                <h4 className="text-indigo-200 font-cinzel text-xs tracking-widest uppercase mb-2">
                  ✦ With planets here
                </h4>
                <p className="text-indigo-200/75 text-sm leading-relaxed">{house.occupied}</p>
              </div>
              <p className="text-indigo-300/50 text-[10px] uppercase tracking-widest mt-3">
                {house.keywords.join(' · ')}
              </p>
            </article>
          ))}
        </div>
      </main>

      <footer className="text-center pb-10 text-indigo-300/40 text-xs tracking-[0.3em] uppercase">
        ☾ For reflection &amp; entertainment ✦
      </footer>
    </div>
  )
}
