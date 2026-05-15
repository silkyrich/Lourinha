import { useState } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup, LayerGroup } from 'react-leaflet'
import { spots, extraPins, type SpotCategory } from '../data/spots'
import SectionHeader from './SectionHeader'

const styles: Record<SpotCategory, { color: string; radius: number }> = {
  town:   { color: '#4a90c4', radius: 9 },
  skate:  { color: '#ff4500', radius: 10 },
  scenic: { color: '#5a9d3a', radius: 8 },
  food:   { color: '#d49224', radius: 8 },
}

const ALL_CATS: SpotCategory[] = ['town', 'skate', 'scenic', 'food']

export default function MapSection() {
  const [active, setActive] = useState<Record<SpotCategory, boolean>>({
    town: true, skate: true, scenic: true, food: true,
  })

  const toggle = (cat: SpotCategory) =>
    setActive(a => ({ ...a, [cat]: !a[cat] }))

  // Build a unified pin list from spots + extras
  const skatePins = spots.map(s => ({
    cat: s.category, lat: s.lat, lng: s.lng, name: s.name, blurb: s.blurb,
  }))
  const allPins = [...skatePins, ...extraPins]

  return (
    <section id="map" className="section section--alt">
      <div className="wrap">
        <SectionHeader
          num="02"
          eyebrow="The lay of the land"
          title="The map."
          lede="Everything in scope for the week — town, skate spots, day trips, scenic stops, supermarkets. Click any marker for details, then 'Open in Google Maps' for door-to-door navigation."
        />

        <div className="map-container">
          <MapContainer center={[39.30, -9.30]} zoom={10} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {ALL_CATS.map(cat => (
              active[cat] && (
                <LayerGroup key={cat}>
                  {allPins.filter(p => p.cat === cat).map((p, i) => (
                    <CircleMarker
                      key={`${cat}-${i}`}
                      center={[p.lat, p.lng]}
                      pathOptions={{
                        color: styles[cat].color,
                        fillColor: styles[cat].color,
                        fillOpacity: 0.85,
                        weight: 2,
                      }}
                      radius={styles[cat].radius}
                    >
                      <Popup>
                        <strong>{p.name}</strong><br />
                        {p.blurb}<br />
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${p.lat},${p.lng}`}
                          target="_blank"
                          rel="noopener"
                          style={{ fontWeight: 700, color: '#ff4500' }}
                        >
                          Open in Google Maps →
                        </a>
                      </Popup>
                    </CircleMarker>
                  ))}
                </LayerGroup>
              )
            ))}
          </MapContainer>
        </div>

        <div className="map-legend" role="group" aria-label="Map layers">
          {ALL_CATS.map(cat => (
            <button
              key={cat}
              className={`legend-btn legend-btn--${cat}${active[cat] ? ' is-active' : ''}`}
              type="button"
              onClick={() => toggle(cat)}
            >
              {cat === 'town' ? 'Towns' : cat === 'skate' ? 'Skate' : cat === 'scenic' ? 'Scenic' : 'Food & shops'}
            </button>
          ))}
        </div>

        <details className="gmaps-toggle">
          <summary>Open the Google Maps view</summary>
          <div className="gmaps-frame">
            <iframe
              title="Lourinhã on Google Maps"
              src="https://www.google.com/maps?q=Lourinh%C3%A3%2C+Portugal&z=10&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </details>
      </div>
    </section>
  )
}
