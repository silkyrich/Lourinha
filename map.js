// Lourinhã trip map — Leaflet + OpenStreetMap, no API key required.
(function () {
  var el = document.getElementById('leaflet-map');
  if (!el || typeof L === 'undefined') return;

  var map = L.map(el, { scrollWheelZoom: false }).setView([39.30, -9.30], 10);
  map.on('click', function () { map.scrollWheelZoom.enable(); });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var styles = {
    town:   { color: '#2b6a8f', fillColor: '#2b6a8f', radius: 8 },
    skate:  { color: '#c8552b', fillColor: '#c8552b', radius: 9 },
    scenic: { color: '#5a7a3a', fillColor: '#5a7a3a', radius: 7 },
    food:   { color: '#a36b1c', fillColor: '#a36b1c', radius: 7 }
  };

  // Pin positions are approximate, refined enough to land you in the right town/headland.
  var pins = [
    // Base
    { cat: 'town',   lat: 39.2419, lng: -9.3127, name: 'Lourinhã (base)',
      blurb: 'The town. Centre is walkable end-to-end in twenty minutes.' },
    { cat: 'skate',  lat: 39.2549, lng: -9.3367, name: 'Praia da Areia Branca promenade',
      blurb: 'Smooth tiled seafront, ~1 km. Best before lunch, before the wind.' },
    { cat: 'skate',  lat: 39.2417, lng: -9.3133, name: 'Praça da República, Lourinhã',
      blurb: 'Granite ledges in the main square. Off-hours friendly.' },
    { cat: 'food',   lat: 39.2420, lng: -9.3122, name: 'Lourinhã supermarkets & market',
      blurb: 'Pingo Doce and the municipal market are in the centre. Lidl/Intermarché on the edges.' },

    // Day trips
    { cat: 'skate',  lat: 39.3679, lng: -9.3859, name: 'Peniche — Papoa skatepark',
      blurb: 'Concrete bowl + street, on the headland. The trip\'s main event.' },
    { cat: 'town',   lat: 39.3577, lng: -9.3811, name: 'Peniche (town)',
      blurb: 'Fishing port, surf bars, fish lunches.' },
    { cat: 'skate',  lat: 39.4036, lng: -9.1369, name: 'Caldas da Rainha skatepark',
      blurb: 'Municipal park; lively town. Saturday market is one of Portugal\'s best.' },
    { cat: 'town',   lat: 39.3603, lng: -9.1571, name: 'Óbidos',
      blurb: 'Walled medieval town. Cobbled — carry, don\'t skate. Drink a ginjinha.' },
    { cat: 'skate',  lat: 39.0918, lng: -9.2592, name: 'Torres Vedras',
      blurb: 'Quieter municipal park, en route to/from Lisbon.' },
    { cat: 'skate',  lat: 38.9636, lng: -9.4163, name: 'Ericeira',
      blurb: 'Small park, big surf-town vibe. World Surfing Reserve.' },

    // Bigger trips
    { cat: 'town',   lat: 38.7223, lng: -9.1393, name: 'Lisbon (Praça do Comércio)',
      blurb: 'Marble plazas, riverside cruising, LX Factory, MAAT.' },
    { cat: 'town',   lat: 39.6017, lng: -9.0707, name: 'Nazaré',
      blurb: 'Clifftop promenade, giant waves in winter, dramatic view year-round.' },
    { cat: 'town',   lat: 38.6979, lng: -9.4215, name: 'Cascais',
      blurb: '~7 km of seafront cruise from Estoril to Cascais marina.' },
    { cat: 'scenic', lat: 38.7805, lng: -9.4988, name: 'Cabo da Roca',
      blurb: 'Westernmost point of continental Europe. Cliffs, lighthouse, wind.' },
    { cat: 'scenic', lat: 38.7972, lng: -9.3905, name: 'Sintra',
      blurb: 'UNESCO. Palaces, forests, hairpins. Go early.' },
    { cat: 'town',   lat: 38.9367, lng: -9.3268, name: 'Mafra',
      blurb: 'Baroque palace and royal hunting forest. Quiet inland alternative.' },
    { cat: 'scenic', lat: 39.5052, lng: -9.1326, name: 'São Martinho do Porto',
      blurb: 'Shell-shaped sheltered bay. Family-grade water, lovely promenade.' },
    { cat: 'food',   lat: 39.4087, lng: -9.0850, name: 'Continente hypermarket, Caldas',
      blurb: 'Big weekly-shop run; everything you need for a self-catered house.' }
  ];

  var groups = { town: L.layerGroup(), skate: L.layerGroup(), scenic: L.layerGroup(), food: L.layerGroup() };

  pins.forEach(function (p) {
    var s = styles[p.cat];
    var marker = L.circleMarker([p.lat, p.lng], {
      color: s.color, fillColor: s.fillColor, fillOpacity: 0.85, weight: 2, radius: s.radius
    }).bindPopup('<strong>' + p.name + '</strong><br>' + p.blurb);
    marker.addTo(groups[p.cat]);
  });

  Object.keys(groups).forEach(function (k) { groups[k].addTo(map); });

  // Legend filters
  document.querySelectorAll('.legend-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var cat = btn.dataset.cat;
      var active = btn.classList.toggle('is-active');
      if (active) { groups[cat].addTo(map); }
      else { map.removeLayer(groups[cat]); }
    });
  });
})();
