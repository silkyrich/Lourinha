import { Reveal } from '../lib/reveal'
import SectionHeader from './SectionHeader'

export default function Food() {
  return (
    <section id="food" className="section section--alt">
      <div className="wrap">
        <SectionHeader
          num="07"
          eyebrow="Eat, shop, drink"
          title="Food, supplies, and where the night goes."
        />

        <div className="food-grid">
          <Reveal as="div" className="food-block">
            <h4>Supermarkets</h4>
            <ul>
              <li><strong>Pingo Doce</strong> — Portuguese chain, the everyday shop. Lourinhã town has at least one.</li>
              <li><strong>Lidl / Intermarché</strong> — on the edge of town, cheaper for bulk.</li>
              <li><strong>Continente, Caldas da Rainha</strong> — big weekly-shop hypermarket. Worth a single drive on day one.</li>
            </ul>
          </Reveal>

          <Reveal as="div" className="food-block" delay={0.08}>
            <h4>Restaurant categories</h4>
            <ul>
              <li><strong>Marisqueira</strong> — shellfish house. Order arroz de marisco for the table.</li>
              <li><strong>Casa de pasto</strong> — neighbourhood cantine, fixed lunch menu €10–15.</li>
              <li><strong>Tasca</strong> — wine-led small joint, family-run, petiscos.</li>
              <li><strong>Churrasqueira</strong> — chicken on a grill, group-friendly.</li>
              <li>Order once each: caldeirada, bacalhau à brás, polvo à lagareiro, sardinhas assadas.</li>
            </ul>
          </Reveal>

          <Reveal as="div" className="food-block" delay={0.16}>
            <h4>Nightlife</h4>
            <ul>
              <li><strong>Praia da Areia Branca</strong> — seafront bars, mellow.</li>
              <li><strong>Peniche</strong> — surf-bar culture, especially around the Baleal causeway.</li>
              <li><strong>Ericeira</strong> — the busiest scene within easy reach.</li>
              <li><strong>Caldas da Rainha</strong> — student-town energy.</li>
              <li><strong>Lisbon — Bairro Alto / Cais do Sodré</strong> — a proper big-city night.</li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
