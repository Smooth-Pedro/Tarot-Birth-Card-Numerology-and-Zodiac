import { Badge } from '@/components/ui/badge'
import TarotCardFace from '@/components/TarotCardFace'
import { getCard } from '@/lib/tarot'

/**
 * The hidden Justice card — the 8/11 curiosity behind the Star & Strength
 * pair (17/8). Lives on the Pairs page, next to the 17-8 entry.
 */
export default function JusticeCuriosity() {
  return (
    <article
      id="justice-curiosity"
      className="rounded-3xl border-2 border-amber-200/30 bg-amber-200/[0.05] p-6 sm:p-10 scroll-mt-24"
    >
      <div className="text-center mb-6">
        <Badge
          variant="outline"
          className="border-amber-200/40 text-amber-200 mb-3 tracking-[0.2em] uppercase"
        >
          The Star · Strength — and the Hidden Third
        </Badge>
        <h3 className="font-cinzel text-2xl text-amber-100">
          XI — Justice stands behind this pair
        </h3>
        <p className="text-indigo-300/70 text-sm mt-2 max-w-2xl mx-auto italic">
          Strength does not exist without Justice — and the oldest decks can prove it.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-8">
        <div className="flex flex-wrap justify-center gap-6 shrink-0">
          <div className="flex flex-col items-center gap-2">
            <TarotCardFace card={getCard(17)} size="sm" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-300/60">
              XVII · The Star
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TarotCardFace card={getCard(8)} size="sm" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-300/60">
              VIII · Strength
            </span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <TarotCardFace card={getCard(11)} size="sm" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-amber-300/80">
              Hidden · XI Justice
            </span>
          </div>
        </div>
        <div className="space-y-4 text-sm leading-relaxed text-indigo-100/85 max-w-2xl">
          <p>
            In the oldest tarot traditions — the Marseille deck, centuries older than
            Rider–Waite — card <span className="text-amber-200">VIII is Justice</span> and card{' '}
            <span className="text-amber-200">XI is Strength</span>. Waite swapped them so that the
            majors could line up with the astrological zodiac, and decks have argued about it ever
            since. The 17/8 pair touches both sides of that ancient exchange: its Strength is an{' '}
            <span className="text-amber-200">8 that could just as well be an 11</span>.
          </p>
          <p>
            And there is a reason the number lingers on this pair in particular:{' '}
            <span className="text-amber-200">strength without justice does not exist</span>. Power
            without fairness is only force; courage without a cause is only appetite; hope without
            truth is only wishful thinking. Justice stands behind the Star and Strength as this
            pair’s hidden card — a quiet reminder that radiance and gentleness become virtues only
            when balanced by what is right.
          </p>
          <p className="text-indigo-300/70 text-xs italic">
            8 + 11 = 19 — the Sun. When a chart holds the Star, Strength and Justice together,
            the reduction lands on the Sun: fairness, courage and hope completing themselves in
            joy.
          </p>
        </div>
      </div>
    </article>
  )
}
