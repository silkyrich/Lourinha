import { Reveal } from '../lib/reveal'
import SectionHeader from './SectionHeader'

const seeds = ['album-1', 'album-2', 'album-3', 'album-4', 'album-5', 'album-6']

export default function Album() {
  return (
    <section id="album" className="section section--alt">
      <div className="wrap">
        <SectionHeader
          num="08"
          eyebrow="The week, in pictures"
          title="Shared photo album."
          lede="One album, twenty-one cameras. Drop anything you shoot — sessions, sunsets, sins."
        />

        <Reveal className="album-cta">
          <a className="btn btn--primary" href="#" target="_blank" rel="noopener" id="album-link">
            Open the shared album <span className="btn-arrow">→</span>
          </a>
          <p className="album-note">
            <strong>Cez:</strong> create a Google Photos shared album, paste the share URL into the <code>href</code> on this button (it's marked <code>#album-link</code> in <code>Album.tsx</code>), and the gang can open it.
          </p>
        </Reveal>

        <Reveal as="div" className="album-grid" delay={0.1}>
          {seeds.map(seed => (
            <img key={seed} loading="lazy" src={`https://picsum.photos/seed/${seed}/700/700`} alt="" />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
