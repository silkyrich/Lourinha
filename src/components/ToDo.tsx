import { todoItems } from '../data/content'
import { Reveal } from '../lib/reveal'
import SectionHeader from './SectionHeader'

export default function ToDo() {
  return (
    <section id="do" className="section">
      <div className="wrap">
        <SectionHeader
          num="06"
          eyebrow="Worth a day"
          title="The week's menu."
          lede="No fixed plan. These are the things worth one of your eight days — pick, combine, vote in the chat."
        />

        <ul className="todo">
          {todoItems.map((item, i) => (
            <Reveal as="li" className="todo-item" key={item.title} delay={i * 0.03}>
              <span className={`todo-tag todo-tag--${item.tag}`}>{item.tag}</span>
              <div>
                <h4 className="todo-title">{item.title}</h4>
                <p className="todo-body">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
