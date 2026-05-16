export type SpotCategory = 'town' | 'skate' | 'scenic' | 'food'
export type SpotGroup = 'local' | 'day' | 'big'
export type Confidence = 'good' | 'ok' | 'maybe'

export type Spot = {
  id: string
  name: string
  group: SpotGroup
  category: SpotCategory
  badge: Confidence
  type: string
  drive: string
  surface: string
  bestFor: string
  blurb: string
  lat: number
  lng: number
  photo: string
}

export const spots: Spot[] = [
  {
    id: 'areia-branca',
    name: 'Praia da Areia Branca promenade',
    group: 'local',
    category: 'skate',
    badge: 'good',
    type: 'Smooth tiled promenade, cruising',
    drive: '8 min from Lourinhã',
    surface: 'Polished tile + concrete, mostly flat',
    bestFor: 'Mornings before the wind',
    blurb: 'About a kilometre of seafront with a few low steps, ledges and gentle banks. Sunset rolls are unbeatable. Wind comes up around lunch.',
    lat: 39.2549, lng: -9.3367,
    photo: 'spot-areia-branca',
  },
  {
    id: 'praca-republica',
    name: 'Praça da República, Lourinhã',
    group: 'local',
    category: 'skate',
    badge: 'ok',
    type: 'Town square, granite ledges',
    drive: 'In town',
    surface: 'Polished granite slabs',
    bestFor: 'Casual street, ledge play',
    blurb: 'The main square. Tolerance is reasonable outside business hours; weekday market mornings less so.',
    lat: 39.2417, lng: -9.3133,
    photo: 'spot-praca-republica',
  },
  {
    id: 'n247-laybys',
    name: 'N247 lay-bys, north of town',
    group: 'local',
    category: 'skate',
    badge: 'maybe',
    type: 'Quiet asphalt, viewpoint pull-offs',
    drive: '5–15 min',
    surface: 'Patchy but smooth in places',
    bestFor: 'Downhill, sunset cruise',
    blurb: 'The coast road north has long quiet sections and pull-offs above the cliffs. Avoid weekend afternoons.',
    lat: 39.2880, lng: -9.3450,
    photo: 'spot-n247-cliffs',
  },
  {
    id: 'peniche-papoa',
    name: 'Peniche — Papoa skatepark',
    group: 'day',
    category: 'skate',
    badge: 'good',
    type: 'Concrete bowl + street section',
    drive: '25 min north',
    surface: 'Concrete, ocean-weathered',
    bestFor: 'The bowl session of the week',
    blurb: 'On the headland looking at the lighthouse, ocean on three sides. Cleanest in the morning. Pair with a fish lunch in Peniche town.',
    lat: 39.3679, lng: -9.3859,
    photo: 'spot-peniche-papoa',
  },
  {
    id: 'caldas-park',
    name: 'Caldas da Rainha — municipal park',
    group: 'day',
    category: 'skate',
    badge: 'ok',
    type: 'Municipal skatepark',
    drive: '30 min north-east',
    surface: 'Concrete',
    bestFor: 'Saturday combo with the market',
    blurb: 'Livelier inland town with a real scene. Saturday morning market is one of Portugal\'s best — make the full day of it.',
    lat: 39.4036, lng: -9.1369,
    photo: 'spot-caldas-park',
  },
  {
    id: 'torres-vedras',
    name: 'Torres Vedras',
    group: 'day',
    category: 'skate',
    badge: 'ok',
    type: 'Municipal skatepark',
    drive: '30 min south',
    surface: 'Concrete',
    bestFor: 'Quieter session, en route to Lisbon',
    blurb: 'Half-day option if you want a session away from the tourist towns.',
    lat: 39.0918, lng: -9.2592,
    photo: 'spot-torres-vedras',
  },
  {
    id: 'ericeira',
    name: 'Ericeira',
    group: 'day',
    category: 'skate',
    badge: 'ok',
    type: 'Small park + promenade cruising',
    drive: '40 min south',
    surface: 'Concrete park, smooth tile promenade',
    bestFor: 'Skate + surf + the best fish lunch',
    blurb: 'World Surfing Reserve. Park is small but the day is about the round trip.',
    lat: 38.9636, lng: -9.4163,
    photo: 'spot-ericeira',
  },
  {
    id: 'lisbon',
    name: 'Lisbon — central plazas and riverside',
    group: 'big',
    category: 'skate',
    badge: 'good',
    type: 'Urban cruise on polished stone',
    drive: '60 min south',
    surface: 'From glass-smooth to ankle-eating',
    bestFor: 'Planned whole-day route — LX Factory, MAAT, Comércio',
    blurb: 'Plan your line in advance. Riverside is the smoothest path; the historic centre is photogenic but cobbled.',
    lat: 38.7223, lng: -9.1393,
    photo: 'spot-lisbon-river',
  },
  {
    id: 'nazare',
    name: 'Nazaré clifftop',
    group: 'big',
    category: 'skate',
    badge: 'ok',
    type: 'Smooth tiled promenade with view',
    drive: '50 min north',
    surface: 'Polished tile',
    bestFor: 'Photo day, giant-wave canyon viewpoint',
    blurb: 'The giant waves are a winter thing, but the clifftop walk and funicular down to the beach work year-round.',
    lat: 39.6017, lng: -9.0707,
    photo: 'spot-nazare-cliff',
  },
  {
    id: 'cascais',
    name: 'Cascais seafront',
    group: 'big',
    category: 'skate',
    badge: 'ok',
    type: '~7 km seafront promenade',
    drive: '70 min south',
    surface: 'Smooth tile, uninterrupted',
    bestFor: 'The longest cruise of the trip',
    blurb: 'Roll Estoril casino to Cascais marina, lunch, return via the N247 over the Serra de Sintra.',
    lat: 38.6979, lng: -9.4215,
    photo: 'spot-cascais-seafront',
  },
]

export type MapPin = {
  cat: SpotCategory
  lat: number
  lng: number
  name: string
  blurb: string
}

export const extraPins: MapPin[] = [
  { cat: 'town',   lat: 39.2419, lng: -9.3127, name: 'Lourinhã (base)', blurb: 'The town. Centre walkable in twenty minutes.' },
  { cat: 'food',   lat: 39.2420, lng: -9.3122, name: 'Lourinhã supermarkets & market', blurb: 'Pingo Doce and municipal market in the centre. Lidl/Intermarché on the edges.' },
  { cat: 'town',   lat: 39.3577, lng: -9.3811, name: 'Peniche (town)', blurb: 'Fishing port, surf bars, fish lunches.' },
  { cat: 'town',   lat: 39.3603, lng: -9.1571, name: 'Óbidos', blurb: 'Walled medieval town. Cobbled — carry, don\'t skate. Drink a ginjinha.' },
  { cat: 'scenic', lat: 38.7805, lng: -9.4988, name: 'Cabo da Roca', blurb: 'Westernmost point of continental Europe. Cliffs, lighthouse, wind.' },
  { cat: 'scenic', lat: 38.7972, lng: -9.3905, name: 'Sintra', blurb: 'UNESCO. Palaces, forests, hairpins. Go early.' },
  { cat: 'town',   lat: 38.9367, lng: -9.3268, name: 'Mafra', blurb: 'Baroque palace and royal hunting forest.' },
  { cat: 'scenic', lat: 39.5052, lng: -9.1326, name: 'São Martinho do Porto', blurb: 'Shell-shaped sheltered bay. Lovely promenade.' },
  { cat: 'food',   lat: 39.4087, lng: -9.0850, name: 'Continente hypermarket, Caldas', blurb: 'Big weekly-shop run for a self-catered house.' },
]
