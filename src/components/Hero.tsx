import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const calendarUrl = 'https://www.google.com/calendar/render?action=TEMPLATE&text=Lourinh%C3%A3+with+Skate+Strong&dates=20260530/20260607&details=The+official+Skate+Strong+trip+to+Lourinh%C3%A3.+Site%3A+https%3A%2F%2Flourinha.richmorgan.co.uk%2F&location=Lourinh%C3%A3%2C+Portugal'

const titleVariants = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.1 + i * 0.12, duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }
  })
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.6])

  return (
    <header id="top" className="hero" ref={ref}>
      <motion.div className="hero-photo" style={{ y, scale }} aria-hidden="true">
        <img
          src={`${import.meta.env.BASE_URL}img/hero-lourinha.jpg`}
          alt=""
          loading="eager"
        />
      </motion.div>
      <motion.div className="hero-tint" style={{ opacity: overlayOpacity }} aria-hidden="true" />

      <div className="wrap">
        <motion.div
          className="hero-eyebrow-row"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="hero-rule" />
          <p className="eyebrow">An official Skate Strong trip</p>
        </motion.div>

        <h1 className="display">
          <motion.span className="hero-line" custom={0} variants={titleVariants} initial="hidden" animate="show">
            Lourinhã.
          </motion.span>
          <motion.span className="hero-line" custom={1} variants={titleVariants} initial="hidden" animate="show">
            Atlantic coast.
          </motion.span>
          <motion.span className="hero-line hero-line--accent" custom={2} variants={titleVariants} initial="hidden" animate="show">
            One week.
          </motion.span>
        </h1>

        <motion.p
          className="hero-dates"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          30.05 — 06.06.2026
        </motion.p>

        <motion.p
          className="hero-lede"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          Fifteen of us. Eight days on the Portuguese coast. Bowls, bays, brandy, and the longest cruise of your summer.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a className="btn btn--primary" href={calendarUrl} target="_blank" rel="noopener">
            Add to calendar <span className="btn-arrow">→</span>
          </a>
          <a className="btn btn--ghost" href="#map">
            Open the map <span className="btn-arrow">→</span>
          </a>
        </motion.div>
      </div>
    </header>
  )
}
