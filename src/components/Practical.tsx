import { practical } from '../data/content'
import { Reveal } from '../lib/reveal'
import SectionHeader from './SectionHeader'

export default function Practical() {
  return (
    <section id="practical" className="section">
      <div className="wrap">
        <SectionHeader
          num="10"
          eyebrow="The boring but important"
          title="Practical."
        />

        <div className="practical-grid">
          {practical.map((p, i) => (
            <Reveal as="div" className="practical-card" key={p.title} delay={i * 0.05}>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
