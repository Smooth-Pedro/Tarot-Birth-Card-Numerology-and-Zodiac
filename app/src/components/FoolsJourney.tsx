import { useEffect, useState } from 'react'
import { getJourneyMeeting, journeyCardAt } from '@/lib/journeyMeeting'

/**
 * The Fool's Journey as the site's living background.
 *
 * The old walking-sprite scene is gone: the background is now simply the
 * Fool meeting each of the Major Arcana, one meeting per hour of the day
 * (the Magician at 1am … Judgement at 8pm; late evening returns to the
 * open road). The current meeting's wide artwork fills the screen beneath
 * the content, veiled so the text stays readable.
 */
export default function FoolsJourney() {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(t)
  }, [])

  const hour = now.getHours()
  const minutes = now.getMinutes()
  const sceneNum = journeyCardAt(hour)
  const meeting = sceneNum ? getJourneyMeeting(sceneNum) : undefined

  const clockLabel = `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`

  return (
    <>
      <div className="journey-bg" aria-hidden="true">
        {meeting ? (
          <img
            key={meeting.num}
            src={meeting.image}
            alt=""
            draggable={false}
            className="journey-bg-art"
          />
        ) : (
          <div className="journey-bg-openroad" />
        )}
      </div>

      {/* Small top-left HUD: the hour and who the Fool is meeting right now. */}
      <p className="journey-hud" aria-hidden="true">
        ☾ {clockLabel} · {meeting ? meeting.title : 'The open road'}
      </p>
    </>
  )
}
