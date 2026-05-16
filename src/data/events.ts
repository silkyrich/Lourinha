export type EventCategory = 'music' | 'surf' | 'festival' | 'patron'
export type EventConfidence = 'confirmed' | 'tentative'

export type TripEvent = {
  id: string
  title: string
  date: string        // human-readable display
  startISO: string    // YYYYMMDD for Google Calendar
  endISO: string      // YYYYMMDD, exclusive
  location: string
  city: string
  category: EventCategory
  confidence: EventConfidence
  ticketed: boolean
  priceFrom?: string
  summary: string
  details: string
  url?: string
}

export const events: TripEvent[] = [
  {
    id: 'coala',
    title: 'COALA Festival',
    date: 'Sat 30 — Sun 31 May',
    startISO: '20260530',
    endISO: '20260601',
    location: 'Lisbon',
    city: 'Lisbon',
    category: 'music',
    confidence: 'confirmed',
    ticketed: true,
    priceFrom: '€80',
    summary: 'New Brazilian music scene — opening-weekend festival in Lisbon.',
    details: 'A two-day festival giving a stage to emerging artists from the new Brazilian music scene. Lands on the very first weekend of the trip — an easy ~1h drive south from Lourinhã. If a few people fancy a Saturday-night Lisbon mission, this is the obvious one.',
    url: 'https://www.songkick.com/metro-areas/31802-portugal-lisbon/may-2026',
  },
  {
    id: 'father-john-misty',
    title: 'Father John Misty — live',
    date: 'Mon 1 June',
    startISO: '20260601',
    endISO: '20260602',
    location: 'Sagres Campo Pequeno, Lisbon',
    city: 'Lisbon',
    category: 'music',
    confidence: 'confirmed',
    ticketed: true,
    priceFrom: '€22',
    summary: 'Indie-folk show in central Lisbon. €22 – €45.',
    details: 'Indie-folk show at the Sagres Campo Pequeno arena. Walkable to Bairro Alto for the after. If you\'re already going to Lisbon for COALA on the Saturday, this is a natural Monday extension on the way back.',
    url: 'https://www.songkick.com/metro-areas/31802-portugal-lisbon/may-2026',
  },
  {
    id: 'nazare-festa',
    title: 'Festa de Nossa Senhora da Nazaré',
    date: 'Early June — verify',
    startISO: '20260605',
    endISO: '20260608',
    location: 'Nazaré',
    city: 'Nazaré',
    category: 'patron',
    confidence: 'tentative',
    ticketed: false,
    summary: 'Patron-saint festa — procession, sardines, street parties. Free.',
    details: 'Nazaré\'s annual patron-saint celebration. Statue procession through town, stalls of grilled sardines, music and dance into the night. 50 minutes north of Lourinhã, pairs with a clifftop day. Confirm the exact 2026 dates with the local câmara before driving — patron-saint dates can shift year to year.',
    url: 'https://visitnazare.com/nazare/travel-guides/local-culture/nazar-festivals-events-annual-calendar',
  },
  {
    id: 'peniche-festa',
    title: 'Festa da Nossa Senhora da Boa Viagem',
    date: 'Early June — verify',
    startISO: '20260605',
    endISO: '20260608',
    location: 'Peniche',
    city: 'Peniche',
    category: 'patron',
    confidence: 'tentative',
    ticketed: false,
    summary: 'Fishing-village patron-saint festa — land and sea processions.',
    details: 'Peniche\'s patron-saint celebration of the fishermen\'s Madonna. The distinctive feature is a sea procession — the statue is carried out of the church, through the streets, and around the harbour on a flower-draped boat. 25 minutes north, pair with a bowl session at Papoa and a fish lunch in town. Verify dates with the câmara.',
  },
]
