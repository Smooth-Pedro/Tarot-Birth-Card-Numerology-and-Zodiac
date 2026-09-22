import { Link } from 'react-router'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import TarotCardFace from '@/components/TarotCardFace'
import { getCard } from '@/lib/tarot'
import { getNumberProfile } from '@/lib/numerology'
import {
  computeAttitude,
  computeBalance,
  computeMaturity,
  computeYearCard,
  scanKarmicDebts,
  KARMIC_DEBTS,
  type KarmicInstance,
} from '@/lib/extendedNumerology'

interface Props {
  date: string
  name?: string
  lifePathNumber: number
  expressionNumber?: number
}

function KarmicCard({ inst }: { inst: KarmicInstance }) {
  const debt = KARMIC_DEBTS[inst.number]
  const lowCard = Number(
    String(inst.number)
      .split('')
      .reduce((a, d) => a + Number(d), 0),
  )
  const High = getCard(inst.number)
  const Low = getCard(lowCard)
  return (
    <div
      id={`karmic-${inst.number}`}
      className="rounded-2xl border-2 border-rose-300/30 bg-rose-400/[0.05] p-5 sm:p-7 scroll-mt-24 shadow-[0_0_40px_-12px_rgba(244,63,94,0.3)]"
    >
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <span className="font-cinzel text-3xl text-rose-200">{debt.pair}</span>
        <Badge variant="outline" className="border-rose-300/40 text-rose-200">
          {inst.source}
        </Badge>
      </div>
      <h5 className="font-cinzel text-amber-100 mb-4">{debt.debtTitle}</h5>

      <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-5">
        <Link to={`/library#arcana-${High.num}`} className="flex flex-col items-center gap-2 group">
          <TarotCardFace card={High} size="sm" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-rose-200/70 group-hover:text-amber-300/80 transition-colors">
            The Debt · {High.name} ↓
          </span>
        </Link>
        <Link to={`/library#arcana-${Low.num}`} className="flex flex-col items-center gap-2 group">
          <TarotCardFace card={Low} size="sm" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-200/70 group-hover:text-amber-300/80 transition-colors">
            The Resolution · {Low.name} ↓
          </span>
        </Link>
      </div>

      <p className="font-mono text-xs text-indigo-300/60 mb-4">{inst.workings}</p>

      <h6 className="font-cinzel text-rose-200 text-xs tracking-[0.25em] uppercase mb-2">
        ☾ The debt
      </h6>
      <p className="text-indigo-100/85 text-sm leading-relaxed mb-4">{debt.debt}</p>

      <div className="rounded-2xl border border-rose-300/20 bg-rose-400/[0.06] p-4 mb-4">
        <h6 className="font-cinzel text-rose-200 text-xs tracking-[0.25em] uppercase mb-2">
          ⚡ The energy it carries
        </h6>
        <p className="text-rose-100/85 text-sm leading-relaxed">{debt.energy}</p>
      </div>

      <h6 className="font-cinzel text-emerald-200 text-xs tracking-[0.25em] uppercase mb-2">
        ✦ How it is paid
      </h6>
      <p className="text-indigo-200/75 text-sm leading-relaxed border-l-2 border-emerald-300/40 pl-3">
        {debt.resolution}
      </p>
    </div>
  )
}

export default function ExtendedChartPanel({ date, name, lifePathNumber, expressionNumber }: Props) {
  const attitude = computeAttitude(date)
  const now = new Date().getFullYear()
  const yearCards = [computeYearCard(date, now), computeYearCard(date, now + 1)]
  const karmic = scanKarmicDebts(date, name)
  const maturity =
    expressionNumber !== undefined ? computeMaturity(lifePathNumber, expressionNumber) : null
  const balance = name ? computeBalance(name) : null

  return (
    <section className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-10">
      <div className="text-center mb-8">
        <Badge
          variant="outline"
          className="border-amber-200/40 text-amber-200 mb-3 tracking-[0.2em] uppercase"
        >
          The Complete Chart
        </Badge>
        <h3 className="font-cinzel text-2xl text-amber-100">Every Layer of Your Numbers</h3>
        <p className="text-indigo-200/70 text-sm mt-2 max-w-2xl mx-auto">
          Beyond the birth cards and life path: the numbers that describe your instincts, your
          yearly cycles, what you grow into, and any karmic debts carried into this life.
        </p>
      </div>

      {/* ── Karmic debts FIRST — the layer people most need to understand ── */}
      <div id="layer-karmic" className="scroll-mt-24 mb-10">
        <div className="text-center mb-5">
          <Badge
            variant="outline"
            className="border-rose-300/40 text-rose-200 mb-3 tracking-[0.2em] uppercase"
          >
            Karmic Lessons · A Major Layer
          </Badge>
          <h4 className="font-cinzel text-amber-100 text-center text-lg mb-3">
            Karmic Debt in Your Chart
          </h4>
          <p className="text-indigo-100/80 text-sm leading-relaxed max-w-3xl mx-auto">
            Karmic debts are the numbers <span className="text-rose-200 font-mono">13, 14, 16 and 19</span> —
            spotted anywhere in your chart <em>before</em> they reduce to a single digit. Numerology
            reads each one as an unfinished lesson carried over from a previous cycle: the digit
            they would have reduced to (the 4, 5, 7 or 1) still describes the gift, but it arrives
            with interest — the same theme repeats, louder, until it is consciously worked through.
            A karmic number is never a punishment; it is the syllabus of this lifetime, and each
            one names both the debt and the card that pays it.
          </p>
          <p className="text-indigo-300/60 text-xs mt-3 italic">
            Scanning your birth day, life path and name for 13/4, 14/5, 16/7 and 19/1 before they
            reduce.
          </p>
        </div>
        {karmic && karmic.instances.length > 0 ? (
          <div className="grid lg:grid-cols-2 gap-5">
            {karmic.instances.map((inst) => (
              <KarmicCard key={`${inst.source}-${inst.number}`} inst={inst} />
            ))}
          </div>
        ) : (
          <p className="text-center text-indigo-200/70 text-sm rounded-2xl border border-emerald-300/20 bg-emerald-400/[0.04] py-5 px-4 max-w-xl mx-auto">
            ✦ No karmic debt numbers found in your birth day
            {karmic?.scannedExpression ? ', life path, or name' : ' or life path'}
            {karmic?.scannedExpression ? '' : ' — add your name to scan it too'}. Your chart starts
            clean — the lessons here are chosen, not owed.
          </p>
        )}
      </div>

      <Separator className="mb-8 bg-indigo-400/10" />

      {/* ── Attitude + Year cards row ─────────────────────── */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {attitude && (
          <div
            id="layer-attitude"
            className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-5 scroll-mt-24"
          >
            <h4 className="font-cinzel text-amber-100">
              Attitude Number {attitude.number}
              {attitude.number > 9 && <span className="ml-1 text-amber-300/80 text-xs">✦</span>}
            </h4>
            <p className="font-mono text-xs text-indigo-300/60 mt-1">{attitude.workings}</p>
            <p className="text-indigo-200/75 text-sm mt-2 leading-relaxed">{attitude.line}</p>
            <p className="text-indigo-300/50 text-xs mt-2 italic">
              Your instinctive first response — read from month + day: how you react before you
              have decided anything. Its card:{' '}
              <Link
                to={`/library#arcana-${attitude.card.num}`}
                className="text-amber-300/80 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-2"
              >
                {attitude.card.name} ↓
              </Link>
              .
            </p>
          </div>
        )}

        <div
          id="layer-year-cards"
          className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-5 scroll-mt-24"
        >
          <h4 className="font-cinzel text-amber-100 mb-1">Year Cards</h4>
          <p className="text-indigo-300/60 text-xs italic mb-3">
            Your month + day are added to any year to read that year’s governing Major Arcana —
            the theme, lesson and weather of the twelve months ahead.
          </p>
          <div className="space-y-4">
            {yearCards.map(
              (yc) =>
                yc && (
                  <div key={yc.year} className="flex gap-4 items-start">
                    <TarotCardFace card={yc.card} size="sm" />
                    <div>
                      <p className="text-amber-200/90 text-sm font-cinzel">
                        {yc.year === now ? `${yc.year} · this year` : `${yc.year} · next year`}
                      </p>
                      <p className="font-mono text-xs text-indigo-300/60 mt-0.5">{yc.workings}</p>
                      <p className="text-indigo-200/75 text-sm mt-1 leading-relaxed">
                        {yc.card.meaning}
                      </p>
                      <p className="text-indigo-300/50 text-xs mt-1 italic">
                        This year’s theme —{' '}
                        <Link
                          to={`/library#arcana-${yc.card.num}`}
                          className="text-amber-300/80 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-2"
                        >
                          {yc.card.name} ↓
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>

      {/* ── Maturity + Balance row ────────────────────────── */}
      {(maturity || balance) && (
        <div className="grid md:grid-cols-2 gap-6">
          {maturity && (
            <div
              id="layer-maturity"
              className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-5 scroll-mt-24"
            >
              <h4 className="font-cinzel text-amber-100">
                Maturity Number {maturity.number}
                {maturity.isMaster && (
                  <span className="ml-2 text-amber-300/80 text-xs">✦ Master</span>
                )}
              </h4>
              <p className="font-mono text-xs text-indigo-300/60 mt-1">
                Life Path {lifePathNumber} + Destiny {expressionNumber} · {maturity.workings}
              </p>
              <p className="text-indigo-200/75 text-sm mt-2 leading-relaxed">
                {getNumberProfile(maturity.number).meaning}
              </p>
              <p className="text-indigo-300/50 text-xs mt-2 italic">
                The self you fully grow into — this number strengthens from the mid-thirties
                onward.{' '}
                <Link
                  to={`/library#number-${maturity.number}`}
                  className="text-amber-300/80 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-2"
                >
                  the number {maturity.number} ↓
                </Link>
              </p>
            </div>
          )}
          {balance && (
            <div
              id="layer-balance"
              className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-5 scroll-mt-24"
            >
              <h4 className="font-cinzel text-amber-100">
                Balance Number {balance.number}
                {balance.isMaster && (
                  <span className="ml-2 text-amber-300/80 text-xs">✦ Master</span>
                )}
              </h4>
              <p className="font-mono text-xs text-indigo-300/60 mt-1">
                First letters of “{balance.letters.join(' · ')}” · {balance.workings}
              </p>
              <p className="text-indigo-200/75 text-sm mt-2 leading-relaxed">{balance.line}</p>
              <p className="text-indigo-300/50 text-xs mt-2 italic">
                How you restore yourself when life knocks you off centre — from the first letters
                of each of your names.{' '}
                <Link
                  to={`/library#number-${balance.number}`}
                  className="text-amber-300/80 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-2"
                >
                  the number {balance.number} ↓
                </Link>
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
