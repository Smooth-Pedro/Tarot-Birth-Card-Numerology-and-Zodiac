import { Link } from 'react-router'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { computeBalance, scanKarmicDebts, KARMIC_DEBTS } from '@/lib/extendedNumerology'
import { getNumberProfile } from '@/lib/numerology'
import TarotCardFace from './TarotCardFace'
import { getCard } from '@/lib/tarot'

interface Props {
  name: string
}

/** Name-only extras: Balance number + karmic debts hidden in the name */
export default function NameExtrasPanel({ name }: Props) {
  const balance = computeBalance(name)
  const karmic = scanKarmicDebts('', name)

  if (!balance && (!karmic || karmic.instances.length === 0)) return null

  return (
    <section className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm p-6 sm:p-10">
      <div className="text-center mb-8">
        <Badge
          variant="outline"
          className="border-amber-200/40 text-amber-200 mb-3 tracking-[0.2em] uppercase"
        >
          Name · Hidden Layers
        </Badge>
        <h3 className="font-cinzel text-2xl text-amber-100">What Your Name Keeps Quiet</h3>
        <p className="text-indigo-200/70 text-sm mt-2 max-w-2xl mx-auto">
          Two more readings hide inside your name: the Balance number — how you recover when life
          knocks you off centre — and any karmic debt numbers carried in the letters themselves.
        </p>
      </div>

      {balance && (
        <div
          id="layer-balance"
          className="rounded-2xl border border-indigo-400/15 bg-indigo-950/40 p-5 mb-6 scroll-mt-24"
        >
          <h4 className="font-cinzel text-amber-100">
            Balance Number {balance.number}
            {balance.isMaster && <span className="ml-2 text-amber-300/80 text-xs">✦ Master</span>}
          </h4>
          <p className="font-mono text-xs text-indigo-300/60 mt-1">
            First letters of “{balance.letters.join(' · ')}” · {balance.workings}
          </p>
          <p className="text-indigo-100/85 text-sm mt-3 leading-relaxed">{balance.line}</p>
          <div className="rounded-2xl border border-indigo-400/15 bg-indigo-950/60 p-4 mt-3">
            <h5 className="font-cinzel text-indigo-200 text-xs tracking-[0.25em] uppercase mb-2">
              ⚡ The energy it restores
            </h5>
            <p className="text-indigo-200/75 text-sm leading-relaxed">
              {getNumberProfile(
                balance.number > 9
                  ? Number(String(balance.number).split('').reduce((a, d) => a + Number(d), 0))
                  : balance.number,
              ).energy}
            </p>
          </div>
          <p className="text-indigo-300/50 text-xs mt-2 italic">
            Calculated from the first letter of each name — it reveals your instinctive path back
            to equilibrium under stress, the remedy you reach for before you have decided
            anything.{' '}
            <Link
              to={`/library#number-${balance.number}`}
              className="text-amber-300/80 hover:text-amber-200 underline decoration-amber-300/30 underline-offset-2"
            >
              the number {balance.number} ↓
            </Link>
          </p>
        </div>
      )}

      {karmic && karmic.instances.length > 0 && (
        <>
          <Separator className="mb-6 bg-indigo-400/10" />
          <h4 id="layer-karmic" className="font-cinzel text-amber-100 text-lg mb-1 scroll-mt-24">
            Karmic Debts in Your Name
          </h4>
          <p className="text-indigo-300/60 text-xs mb-5">
            The letters of “{name.trim()}” reduce through the karmic numbers 13, 14, 16 or 19 —
            debts carried in the name itself, independent of the birth date.
          </p>
          <div className="grid lg:grid-cols-2 gap-5">
            {karmic.instances.map((inst) => {
              const debt = KARMIC_DEBTS[inst.number]
              const high = getCard(inst.number)
              const low = getCard(
                Number(String(inst.number).split('').reduce((a, d) => a + Number(d), 0)),
              )
              return (
                <div
                  key={`${inst.source}-${inst.number}`}
                  className="rounded-2xl border border-rose-300/25 bg-rose-400/[0.04] p-5"
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-cinzel text-3xl text-rose-200">{debt.pair}</span>
                    <Badge variant="outline" className="border-rose-300/40 text-rose-200">
                      {inst.source}
                    </Badge>
                  </div>
                  <div className="flex gap-4 mb-4">
                    <div className="flex flex-col items-center gap-1.5">
                      <TarotCardFace card={high} size="sm" />
                      <span className="text-[9px] uppercase tracking-[0.2em] text-rose-200/70">
                        The Debt
                      </span>
                    </div>
                    <div className="flex flex-col items-center gap-1.5">
                      <TarotCardFace card={low} size="sm" />
                      <span className="text-[9px] uppercase tracking-[0.2em] text-emerald-200/70">
                        The Resolution
                      </span>
                    </div>
                  </div>
                  <p className="font-mono text-xs text-indigo-300/60 mb-2">{inst.workings}</p>
                  <h5 className="font-cinzel text-rose-100 mb-1">{debt.debtTitle}</h5>
                  <p className="text-indigo-100/80 text-sm leading-relaxed mb-2">{debt.debt}</p>
                  <p className="text-rose-100/80 text-sm leading-relaxed mb-2">{debt.energy}</p>
                  <p className="text-indigo-200/70 text-sm leading-relaxed border-l-2 border-emerald-300/40 pl-3">
                    {debt.resolution}
                  </p>
                </div>
              )
            })}
          </div>
        </>
      )}
    </section>
  )
}
