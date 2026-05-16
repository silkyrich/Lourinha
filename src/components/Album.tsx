import { Reveal } from '../lib/reveal'
import SectionHeader from './SectionHeader'

const tiles = ['album-1', 'album-2', 'album-3', 'album-4', 'album-5', 'album-6']

export default function Album() {
  return (
    <section id="album" className="section section--alt">
      <div className="wrap">
        <SectionHeader
          num="09"
          eyebrow="The week, in pictures"
          title="Shared photo album."
          lede="One album, fifteen cameras. Drop anything you shoot — sessions, sunsets, sins."
        />

        <Reveal className="album-cta">
          <a className="btn btn--primary" href="#" target="_blank" rel="noopener" id="album-link">
            Open the shared album <span className="btn-arrow">→</span>
          </a>
          <p className="album-note">
            <strong>Kes:</strong> create a Google Photos shared album, paste the share URL into the <code>href</code> on this button (it's marked <code>#album-link</code> in <code>Album.tsx</code>), and the gang can open it.
          </p>
        </Reveal>

        <Reveal as="div" className="album-grid" delay={0.1}>
          {tiles.map(name => (
            <img key={name} loading="lazy" src={`${import.meta.env.BASE_URL}img/${name}.jpg`} alt="" />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
