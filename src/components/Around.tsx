import { areaCards } from '../data/content'
import { Reveal } from '../lib/reveal'
import SectionHeader from './SectionHeader'

export default function Around() {
  return (
    <section id="around" className="section section--alt">
      <div className="wrap">
        <SectionHeader
          num="04"
          eyebrow="The wider region"
          title="Drives and detours."
          lede="Inside ninety minutes you have a UNESCO mountain palace complex, the westernmost point of continental Europe, two fishing ports, medieval walled towns, a brandy region, and Portugal's capital. Pick three."
        />

        <div className="area-grid">
          {areaCards.map((c, i) => (
            <Reveal as="article" className="area-card" key={c.title} delay={i * 0.05}>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
              <p className="area-card-meta">{c.meta}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
