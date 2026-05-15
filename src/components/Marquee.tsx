const items = [
  'Lourinhã',
  'Portugal',
  'Skate Strong',
  '30.05 — 06.06.26',
  'Atlantic coast',
  'Twenty-one of us',
  'Skate · See · Eat · Rest',
]

export default function Marquee() {
  // Repeat the items so the loop is seamless when translateX(-50%) hits
  const loop = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
