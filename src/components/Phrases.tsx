import { phraseSets } from '../data/phrases'
import { Reveal } from '../lib/reveal'
import SectionHeader from './SectionHeader'

export default function Phrases() {
  return (
    <section id="phrases" className="section">
      <div className="wrap">
        <SectionHeader
          num="08"
          eyebrow="Get yourself out of trouble"
          title="Portuguese, for skating and for the rest."
          lede="Portuguese isn't Spanish. The vowels swallow themselves; locals will be patient with anyone who tries. Obrigado sounds closer to brigadu, está sounds like shtah. Lean in."
        />

        {phraseSets.map((set, i) => (
          <Reveal as="div" className="phrase-set" key={set.title} delay={i * 0.08}>
            <h4>{set.title}</h4>
            <table className="phrase-table">
              <tbody>
                {set.rows.map((row, j) => (
                  <tr key={j}>
                    <td>{row.pt}</td>
                    <td>{row.en}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
