import { getJourneyMeeting, type MeetingRole } from '@/lib/journeyMeeting'

export interface JourneyEntry {
  num: number
  label: string
}

const ROLE_STYLE: Record<MeetingRole, string> = {
  Friend: 'border-emerald-300/50 bg-emerald-400/10 text-emerald-200',
  Guide: 'border-sky-300/50 bg-sky-400/10 text-sky-200',
  Teacher: 'border-sky-300/50 bg-sky-400/10 text-sky-200',
  Trial: 'border-amber-300/50 bg-amber-400/10 text-amber-200',
  Ordeal: 'border-amber-300/50 bg-amber-400/10 text-amber-200',
  Foe: 'border-rose-300/50 bg-rose-400/10 text-rose-200',
  Destruction: 'border-rose-300/50 bg-rose-400/10 text-rose-200',
  Rejuvenation: 'border-emerald-300/50 bg-emerald-400/10 text-emerald-200',
  Rebirth: 'border-emerald-300/50 bg-emerald-400/10 text-emerald-200',
}

/**
 * "The Fool Meets Your Cards" — for each unique card in the reading, the
 * wide journey artwork of the Fool meeting that Major Arcana, with the role
 * that being plays (friend, foe, destruction, rejuvenation…) and the full
 * story of the encounter.
 */
export default function JourneyMeetings({ entries }: { entries: JourneyEntry[] }) {
  const unique = entries.filter(
    (e, i) => entries.findIndex((x) => x.num === e.num) === i,
  )
  const meetings = unique
    .map((e) => ({ entry: e, meeting: getJourneyMeeting(e.num) }))
    .filter((x) => x.meeting)

  if (meetings.length === 0) return null

  return (
    <section className="mt-14">
      <h3 className="font-cinzel text-2xl text-amber-100 text-center mb-2">
        The Fool Meets Your Cards
      </h3>
      <p className="text-indigo-300/60 text-xs italic text-center mb-8 max-w-2xl mx-auto">
        Every card in your reading is a being the Fool met on his journey — some greeted him as
        friends, some taught him, some tore him down so he could be rebuilt. Here is what happened
        at each of your meetings.
      </p>
      <div className="space-y-10">
        {meetings.map(({ entry, meeting }) => (
          <article
            key={entry.num}
            className="rounded-3xl border border-indigo-400/20 bg-white/[0.03] backdrop-blur-sm overflow-hidden"
          >
            <div className="relative">
              <img
                src={meeting!.image}
                alt={meeting!.title}
                className="block w-full h-auto object-contain bg-[#0d081c]"
                loading="lazy"
              />
              <span className="absolute top-3 left-3 rounded-full bg-indigo-950/80 border border-indigo-300/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-indigo-200">
                {entry.label}
              </span>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h4 className="font-cinzel text-xl text-amber-100">{meeting!.title}</h4>
                <span
                  className={`rounded-full border px-3 py-0.5 text-[10px] uppercase tracking-[0.2em] ${ROLE_STYLE[meeting!.role]}`}
                >
                  {meeting!.role}
                </span>
              </div>
              <p className="text-indigo-300/60 text-xs italic mb-3">{meeting!.place}</p>
              <p className="text-indigo-100/85 text-sm leading-relaxed">{meeting!.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
