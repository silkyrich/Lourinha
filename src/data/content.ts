export type AreaCard = { title: string; body: string; meta: string }

export const areaCards: AreaCard[] = [
  { title: 'The N247 coast — Peniche to Ericeira',
    body: 'The single best drive in the region. Cliffs, fishing villages, surf beaches, vineyards. Stops at Vimeiro, Areia Branca, Santa Cruz, Praia Azul.',
    meta: '2.5h with stops · paved · low traffic' },
  { title: 'Serra de Sintra loop',
    body: 'N375 climbs into the Sintra mountains — hairpins, eucalyptus shade. Drop down to Cabo da Roca, then the coast road into Cascais.',
    meta: '3h with stops · paved · busy at weekends' },
  { title: 'Inland wine country',
    body: 'Bombarral → Óbidos → Alcobaça. Vineyards, the walled medieval town, the cistercian monastery, and the tomb of Pedro and Inês.',
    meta: 'Half day · paved · cultural-heavy' },
  { title: 'Nazaré via São Martinho',
    body: 'Shell-shaped sheltered bay at São Martinho do Porto, then up to Nazaré and the funicular to Sítio for the giant-wave canyon viewpoint.',
    meta: 'Full day · paved · dramatic' },
  { title: 'Mafra & the royal road',
    body: 'The Palácio Nacional de Mafra is the largest baroque palace in Portugal; the royal hunting forest is open to visitors.',
    meta: 'Half day · paved · low-key' },
  { title: 'Sintra town',
    body: 'UNESCO, four fairy-tale palaces in walking distance, tourist-heavy by 10am. Go early or late. Monserrate is the quietest and arguably the best.',
    meta: 'Full day · steep · busy' },
]

export type ToDoItem = { tag: 'Skate' | 'See' | 'Eat' | 'Rest'; title: string; body: string }

export const todoItems: ToDoItem[] = [
  { tag: 'Skate', title: 'Bowl session at Peniche', body: 'Concrete bowl on the headland, ocean on three sides. The trip\'s anchor day.' },
  { tag: 'Skate', title: 'Long cruise: Estoril → Cascais', body: 'Seven uninterrupted kilometres of smooth tile along the Atlantic. The longest roll on the menu.' },
  { tag: 'Skate', title: 'Lisbon urban route', body: 'LX Factory, riverside to MAAT, Praça do Comércio. Plan it, eat well, come home tired.' },
  { tag: 'See',   title: 'Museu da Lourinhã — dinosaurs', body: 'One of the only nests of dinosaur eggs with embryos ever found. Tue–Sun, closed Mondays.' },
  { tag: 'See',   title: 'Cabo da Roca', body: 'The westernmost point of continental Europe. A lighthouse, a wall, a cliff, a wind.' },
  { tag: 'See',   title: 'Walled Óbidos', body: 'Medieval town, cobbled, hostile to wheels, gorgeous. Drink a ginjinha from a chocolate cup.' },
  { tag: 'Eat',   title: 'Saturday market in Caldas da Rainha', body: 'One of Portugal\'s best. Pair with the Caldas skatepark and the Bordallo Pinheiro ceramics factory.' },
  { tag: 'Eat',   title: 'Aguardente tasting', body: 'Lourinhã is one of only three demarcated brandy regions in Europe — Cognac, Armagnac, Lourinhã. The cooperative does tastings.' },
  { tag: 'Rest',  title: 'A beach day at Areia Branca', body: 'Cliff-backed Atlantic beach four kilometres west. Body in the water, lunch on the seafront, no board for a day.' },
]

export type Practical = { title: string; body: string }

export const practical: Practical[] = [
  { title: 'Getting there', body: 'Fly Lisbon (LIS). A8 motorway north, around an hour. Rent a car between two or three of you. Toll transponder via the rental desk.' },
  { title: 'Weather', body: 'Late May / early June: mid-20s °C, mostly dry, reliably windy after lunch. Layer up for the evening — Atlantic cools things off quickly.' },
  { title: 'Money & plugs', body: 'Euros. Cards work everywhere. €30 in cash for markets and small bars. Plugs Type F.' },
  { title: 'Emergencies', body: '112 — all services. English is understood. Hospital in Caldas da Rainha; health centre in Lourinhã.' },
  { title: 'Pads', body: 'Bring them. Concrete bowls and Atlantic salt damp are unforgiving.' },
  { title: 'Group comms', body: 'The WhatsApp group is where the week is run day-to-day — votes, where we\'re eating, who\'s skating what. Cez will pull you in if you\'re not already.' },
]
