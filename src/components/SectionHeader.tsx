import { Reveal } from '../lib/reveal'

export default function SectionHeader({
  num,
  eyebrow,
  title,
  lede,
}: {
  num: string
  eyebrow: string
  title: string
  lede?: string
}) {
  return (
    <Reveal as="header" className="section-header">
      <div className="section-num">{num}</div>
      <div className="section-titles">
        <p className="section-eyebrow eyebrow">{eyebrow}</p>
        <h2 className="display">{title}</h2>
        {lede && <p className="section-lede">{lede}</p>}
      </div>
    </Reveal>
  )
}
