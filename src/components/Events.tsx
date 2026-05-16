import { events, type TripEvent } from '../data/events'
import { Reveal } from '../lib/reveal'
import SectionHeader from './SectionHeader'

function googleCalendarUrl(e: TripEvent) {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: e.title,
    dates: `${e.startISO}/${e.endISO}`,
    details: `${e.summary}${e.url ? `\n\n${e.url}` : ''}`,
    location: `${e.location}, Portugal`,
  })
  return `https://www.google.com/calendar/render?${params.toString()}`
}

const categoryLabel: Record<TripEvent['category'], string> = {
  music: 'Music',
  surf: 'Surf',
  festival: 'Festival',
  patron: 'Patron-saint festa',
}

export default function Events() {
  return (
    <section id="events" className="section">
      <div className="wrap">
        <SectionHeader
          num="05"
          eyebrow="Something extra"
          title="Events that land in our week."
          lede="A handful of things scheduled in the region during 30 May — 6 June. Tap a card for detail and a one-click calendar invite. Ticketed first, free patron-saint festas after."
        />

        <ul className="events-list">
          {events.map((e, i) => (
            <Reveal as="li" className={`event event--${e.category}`} key={e.id} delay={i * 0.06}>
              <details>
                <summary>
                  <span className="event-date">{e.date}</span>
                  <span className="event-headline">
                    <span className="event-tag">
                      {categoryLabel[e.category]}
                      {e.confidence === 'tentative' && <span className="event-verify"> · verify</span>}
                    </span>
                    <span className="event-title">{e.title}</span>
                    <span className="event-summary">{e.summary}</span>
                  </span>
                  <span className="event-meta">
                    <span>{e.location}</span>
                    <span className={`event-price${e.ticketed ? '' : ' event-price--free'}`}>
                      {e.ticketed ? (e.priceFrom ? `From ${e.priceFrom}` : 'Ticketed') : 'Free'}
                    </span>
                  </span>
                  <span className="event-chevron" aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16">
                      <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </summary>
                <div className="event-body">
                  <p>{e.details}</p>
                  <div className="event-actions">
                    <a className="btn btn--primary" href={googleCalendarUrl(e)} target="_blank" rel="noopener">
                      Add to calendar <span className="btn-arrow">→</span>
                    </a>
                    {e.url && (
                      <a className="btn btn--ghost" href={e.url} target="_blank" rel="noopener">
                        More info <span className="btn-arrow">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </details>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
