import TarotCardFace from '@/components/TarotCardFace'
import { tarotChartCard, type TarotChartPosition } from '@/lib/tarotChart'

/**
 * The numeric Tarot Birth Chart — every number of the birth date, each
 * wearing its Major Arcana. Works with the date alone.
 */
export default function TarotBirthChartPanel({ positions }: { positions: TarotChartPosition[] }) {
  return (
    <section className="mt-16">
      <h2 className="font-cinzel text-3xl text-amber-100 text-center">The Tarot Birth Chart</h2>
      <p className="text-indigo-300/70 text-sm text-center mt-2 max-w-2xl mx-auto leading-relaxed">
        Your date of birth is a sentence written in numbers — day, month, year, and the sums they
        make together. Each number is a position in your chart, and each position wears its Major
        Arcana. This layer needs nothing but the date, so it is the floor every reading stands on.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {positions.map((pos) => {
          const card = tarotChartCard(pos)
          return (
            <article
              key={pos.key}
              className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm p-5 flex flex-col items-center text-center gap-3"
            >
              <span className="font-cinzel text-xs tracking-[0.3em] uppercase text-indigo-300/70">
                {pos.label}
              </span>
              <span className="text-[11px] text-indigo-300/60 font-mono">{pos.how}</span>
              <TarotCardFace card={card} size="sm" />
              <p className="text-indigo-200/75 text-xs leading-relaxed">{pos.note}</p>
            </article>
          )
        })}
      </div>

      <p className="text-center text-indigo-300/50 text-xs italic mt-6">
        Reduction follows the Major Arcana: totals above 22 fold their digits until they land on
        an archetype (22 keeps The Fool). Master numbers of numerology are honoured in the Life
        Path line.
      </p>
    </section>
  )
}
