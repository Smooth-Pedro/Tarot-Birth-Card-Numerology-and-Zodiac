import TarotCardFace from '@/components/TarotCardFace'
import { formatDegree, type ChartBody, type NatalChart } from '@/lib/natalChart'
import type { SignInfo } from '@/lib/astrology'
import { getHouse, SIGNS } from '@/lib/astrology'

/** Small badge for the Minor Arcana of a decan (no artwork — styled chip) */
function DecanBadge({ body }: { body: ChartBody }) {
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full border border-indigo-300/25 bg-indigo-500/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-indigo-200/80"
      title="The Minor Arcana of this exact degree (Golden Dawn decans)"
    >
      {body.decan.name} · {body.decan.rulerName} in {body.sign.name}
    </span>
  )
}

function BigThreeCard({
  title,
  body,
  note,
}: {
  title: string
  body: ChartBody
  note?: string
}) {
  return (
    <div className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm p-5 flex flex-col items-center text-center gap-3">
      <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-indigo-300/70">
        {title}
      </span>
      <div className="text-4xl text-amber-200" aria-hidden>
        {body.glyph}
      </div>
      <div>
        <a
          href={`/astrology-library#sign-${body.sign.key}`}
          className="font-cinzel text-2xl text-amber-100 hover:text-amber-200 transition-colors"
        >
          {body.sign.glyph} {body.sign.name}
        </a>
        <p className="text-indigo-300/70 text-xs mt-1">{formatDegree(body)}</p>
      </div>
      <TarotCardFace card={body.card} size="sm" />
      <DecanBadge body={body} />
      {note && <p className="text-indigo-300/60 text-xs italic leading-relaxed">{note}</p>}
    </div>
  )
}

function PlanetRow({ body }: { body: ChartBody }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3 border-b border-indigo-400/10 last:border-0">
      <span className="w-24 shrink-0 text-amber-200/90 font-cinzel text-sm tracking-wide">
        {body.glyph} {body.name}
        {body.retrograde && <span className="text-rose-300/80 text-xs"> ℞</span>}
      </span>
      <a
        href={`/astrology-library#sign-${body.sign.key}`}
        className="text-indigo-100/90 text-sm hover:text-amber-200 transition-colors"
      >
        {body.sign.glyph} {formatDegree(body)}
        {body.house !== null && <span className="text-indigo-300/60"> · house {body.house}</span>}
      </a>
      <span className="text-indigo-300/60 text-xs">→ {body.card.name}</span>
      <span className="ml-auto">
        <DecanBadge body={body} />
      </span>
    </div>
  )
}

/** One house (or sign) cell of the tarot wheel / zodiac ring */
function WheelCell({
  heading,
  sign,
  bodies,
}: {
  heading: string
  sign: SignInfo
  bodies: ChartBody[]
}) {
  return (
    <div className="rounded-2xl border border-indigo-400/15 bg-indigo-950/30 p-3 flex flex-col items-center text-center gap-2 min-h-[10rem]">
      <span className="text-[9px] uppercase tracking-[0.25em] text-indigo-300/60">{heading}</span>
      <a
        href={`/astrology-library#sign-${sign.key}`}
        className="font-cinzel text-lg text-amber-100 hover:text-amber-200 transition-colors"
        title={`${sign.name} — ${sign.dates}`}
      >
        {sign.glyph} {sign.name}
      </a>
      <span className="text-[10px] text-indigo-300/50 leading-tight">
        wears card {sign.card}
      </span>
      {bodies.length > 0 ? (
        <ul className="space-y-1 mt-auto">
          {bodies.map((b) => (
            <li key={b.key} className="text-[11px] text-indigo-100/85">
              {b.glyph} {b.name}
              <span className="text-indigo-300/60"> · </span>
              <span className="text-amber-200/80">{b.card.name}</span>
            </li>
          ))}
        </ul>
      ) : (
        <span className="text-[10px] text-indigo-300/30 mt-auto italic">— empty —</span>
      )}
    </div>
  )
}

export default function NatalChartPanel({ chart }: { chart: NatalChart }) {
  const others = chart.bodies.filter((b) => !['sun', 'moon'].includes(b.key))
  return (
    <section className="animate-fade-in">
      <h2 className="font-cinzel text-3xl text-amber-100 text-center">Your Sky, in Cards</h2>
      <p className="text-indigo-300/70 text-sm text-center mt-2 max-w-2xl mx-auto leading-relaxed">
        Every placement translated through the Golden Dawn correspondences — each sign carries a
        Major Arcana, each planet carries one, and every exact degree carries a Minor Arcana of
        its decan. Read the <a href="/astrology-library" className="text-amber-300/90 underline decoration-amber-300/30">Cosmos Library</a> for
        the full story of each sign and house.
      </p>

      {chart.timeUnknown && (
        <p className="mt-4 text-center text-amber-200/80 text-sm italic">
          No birth time given — positions are computed for 12:00 on your date. The Ascendant and
          houses are omitted; the Moon may be one sign off if you were born near a cusp.
        </p>
      )}
      {chart.moonCusp && (
        <p className="mt-2 text-center text-rose-200/80 text-sm italic">
          ☾ The Moon changed signs on your birth date — your true Moon sign depends on the birth
          time.
        </p>
      )}

      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        <BigThreeCard title="☉ Your Sun" body={chart.sun} note="The core of you — ego, essence, the life you radiate." />
        <BigThreeCard
          title="☽ Your Moon"
          body={chart.moon}
          note={
            chart.moonCusp
              ? 'Check the time — the Moon was moving between signs this day.'
              : 'Your tides — feeling, instinct, the private self.'
          }
        />
        {chart.ascendant ? (
          <BigThreeCard
            title="↑ Your Rising"
            body={chart.ascendant}
            note={`The costume of the chart — first impressions, approach to life${chart.cityLabel ? ` · ${chart.cityLabel}` : ''}.`}
          />
        ) : (
          <div className="rounded-3xl border border-dashed border-indigo-400/25 bg-white/[0.02] p-5 flex flex-col items-center justify-center text-center gap-3">
            <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-indigo-300/70">
              ↑ Your Rising
            </span>
            <p className="text-indigo-300/60 text-sm leading-relaxed">
              Add your birth time and city to reveal the Ascendant — the sign rising on the eastern
              horizon at your first breath, and the doorway of the whole chart.
            </p>
          </div>
        )}
      </div>

      <div className="mt-10 rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm p-6">
        <h3 className="font-cinzel text-xl text-amber-100 mb-1">The Planets</h3>
        <p className="text-indigo-300/60 text-xs mb-4">
          Each planet’s sign and exact degree, with its Major Arcana and decan card.
        </p>
        {others.map((b) => (
          <PlanetRow key={b.key} body={b} />
        ))}
        {chart.midheaven && (
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3 border-t border-indigo-400/10 mt-1">
            <span className="w-24 shrink-0 text-amber-200/90 font-cinzel text-sm tracking-wide">
              {chart.midheaven.glyph} Midheaven
            </span>
            <span className="text-indigo-100/90 text-sm">
              {chart.midheaven.sign.glyph} {formatDegree(chart.midheaven)}
            </span>
            <span className="text-indigo-300/60 text-xs">→ {chart.midheaven.card.name}</span>
            <span className="ml-auto">
              <DecanBadge body={chart.midheaven} />
            </span>
          </div>
        )}
      </div>

      <div className="mt-10">
        <h3 className="font-cinzel text-2xl text-amber-100 text-center">
          {chart.wheel ? 'The Tarot Wheel' : 'The Zodiac Ring'}
        </h3>
        <p className="text-indigo-300/70 text-sm text-center mt-2 max-w-2xl mx-auto leading-relaxed">
          {chart.wheel
            ? 'Your twelve whole-sign houses, each wearing the Major Arcana of its sign — with every planet placed as its own card. The Birth Chart Tarot Spread, computed.'
            : 'Without a birth time and place there are no houses — so the ring shows your planets distributed across the twelve signs instead. Each sign wears its Major Arcana.'}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
          {chart.wheel
            ? chart.wheel.map((h) => (
                <WheelCell
                  key={h.house}
                  heading={`House ${h.house} · ${getHouse(h.house).theme.split(',')[0]}`}
                  sign={h.sign}
                  bodies={h.bodies}
                />
              ))
            : SIGNS.map((s) => (
                <WheelCell
                  key={s.key}
                  heading={`${s.dates}`}
                  sign={s}
                  bodies={chart.bodies.filter((b) => b.sign.key === s.key)}
                />
              ))}
        </div>
      </div>
    </section>
  )
}
