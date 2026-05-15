import { Reveal } from '../lib/reveal'
import SectionHeader from './SectionHeader'

const bullets = [
  { strong: 'Map', tail: '— the spots, towns and supermarkets that matter.' },
  { strong: 'Recommendations', tail: '— skate surfaces, scenic drives, restaurants, sights, sorted so you can build your own week.' },
  { strong: 'Shared album', tail: '— one Google Photos album for the week.' },
  { strong: 'Portuguese', tail: '— enough to keep you out of trouble.' },
  { strong: 'Practical', tail: '— how to get there, weather, emergency numbers, the rest.' },
]

export default function Welcome() {
  return (
    <section id="welcome" className="section">
      <div className="wrap">
        <SectionHeader
          num="01"
          eyebrow="Welcome aboard"
          title="You're on Cez's trip."
        />

        <div className="welcome-grid">
          <Reveal className="welcome-body">
            <p>
              Cez put this week together — the house, the dates, the shape of it. She'll be at the airport, on the coast, and at every dinner. Twenty of you are in the group because <strong>she handpicked who'd be in the room</strong>. None of this is a random booking and you are not on your own: she's running it, she's there for it, and this page is the briefing. The rest of the plan gets made in the WhatsApp group, with Cez steering.
            </p>

            <ul className="welcome-list">
              {bullets.map((b, i) => (
                <li key={b.strong}>
                  <span className="welcome-list-num">{String(i + 1).padStart(2, '0')}</span>
                  <span><strong>{b.strong}</strong> {b.tail}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="host-card" delay={0.12}>
            <div className="host-photo">
              <img src="https://picsum.photos/seed/cez-portrait/600/750" alt="Portrait placeholder — Cez to swap in" />
            </div>
            <p className="host-label">Your host, on the ground all week</p>
            <p className="host-name">Cez</p>
            <p>Founder of Skate Strong. She organised the trip, she's there for every day of it, and she's the person to find when something needs solving. If anything on this page is wrong, post it in the chat and she'll sort it.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
