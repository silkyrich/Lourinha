import { spots, type Spot, type SpotGroup } from '../data/spots'
import { Reveal } from '../lib/reveal'
import SectionHeader from './SectionHeader'

const groups: { id: SpotGroup; num: string; label: string; distance: string }[] = [
  { id: 'local', num: '01', label: 'In and around Lourinhã', distance: 'Under 15 minutes' },
  { id: 'day',   num: '02', label: 'Day trips',               distance: 'Under 45 minutes' },
  { id: 'big',   num: '03', label: 'Bigger trips',            distance: '60 — 90 minutes' },
]

function SpotCard({ s, index }: { s: Spot; index: number }) {
  const gmapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(s.name)}`
  const badgeLabel = s.badge === 'good' ? 'Confident' : s.badge === 'ok' ? 'Likely' : 'Scout'

  return (
    <Reveal as="article" className="spot" delay={index * 0.06}>
      <div className="spot-photo">
        <img loading="lazy" src={`https://picsum.photos/seed/${s.photoSeed}/900/600`} alt="" />
        <span className={`spot-badge spot-badge--${s.badge}`}>{badgeLabel}</span>
      </div>
      <div className="spot-body">
        <h4 className="spot-name">{s.name}</h4>
        <dl className="spot-meta">
          <dt>Type</dt><dd>{s.type}</dd>
          <dt>Drive</dt><dd>{s.drive}</dd>
          <dt>Surface</dt><dd>{s.surface}</dd>
          <dt>Best for</dt><dd>{s.bestFor}</dd>
        </dl>
        <p className="spot-blurb">{s.blurb}</p>
        <a className="spot-link" href={gmapsUrl} target="_blank" rel="noopener">
          Open in Google Maps →
        </a>
      </div>
    </Reveal>
  )
}

export default function Skate() {
  return (
    <section id="skate" className="section">
      <div className="wrap">
        <SectionHeader
          num="03"
          eyebrow="Where to roll"
          title="Skate surfaces, graded honestly."
          lede="Every spot inside a 90-minute drive. Confidence flags tell you how recent the intel is. Verify on satellite and a local Instagram search before driving an hour for one."
        />

        {groups.map(group => {
          const subset = spots.filter(s => s.group === group.id)
          return (
            <div className="spots-group" key={group.id}>
              <Reveal className="spots-group-head">
                <span className="spots-group-num">{group.num}</span>
                <span className="spots-group-label">{group.label}</span>
                <span className="spots-group-distance">{group.distance}</span>
              </Reveal>
              <div className="spots-grid">
                {subset.map((s, i) => <SpotCard key={s.id} s={s} index={i} />)}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
