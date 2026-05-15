const calendarUrl = 'https://www.google.com/calendar/render?action=TEMPLATE&text=Lourinh%C3%A3+with+Skate+Strong&dates=20260530/20260607&details=The+official+Skate+Strong+trip+to+Lourinh%C3%A3.+Site%3A+https%3A%2F%2Fsilkyrich.github.io%2FLourinha%2F&location=Lourinh%C3%A3%2C+Portugal'

export default function CalendarStrip() {
  return (
    <section className="calendar-strip">
      <div className="wrap">
        <div className="calendar-strip-inner">
          <div>
            <p className="eyebrow">Don't forget</p>
            <h3>Save the dates to your calendar.</h3>
          </div>
          <div className="calendar-strip-buttons">
            <a className="btn btn--primary" href={calendarUrl} target="_blank" rel="noopener">
              Google Calendar <span className="btn-arrow">→</span>
            </a>
            <a className="btn" href={`${import.meta.env.BASE_URL}lourinha-2026.ics`} download>
              Download .ics <span className="btn-arrow">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
