import { AnimatePresence, motion } from 'framer-motion'
import { useTeam, type Team } from '../lib/team'

export default function Splash() {
  const { setTeam, hasChosen } = useTeam()
  const show = !hasChosen

  const pick = (team: Team) => setTeam(team)
  const skip = () => setTeam('skateboard')

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="splash"
          role="dialog"
          aria-modal="true"
          aria-labelledby="splash-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="splash-bg" aria-hidden="true" />
          <motion.div
            className="splash-card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ delay: 0.05, duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <p className="splash-eyebrow eyebrow">Skate Strong presents</p>
            <h2 id="splash-title" className="splash-title display">Pick your team.</h2>
            <p className="splash-sub">The site theme follows. Switch any time from the nav.</p>

            <div className="splash-grid">
              <button className="splash-pick" type="button" onClick={() => pick('skateboard')}>
                <span className="splash-pick-icon" aria-hidden="true">
                  <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 28 q60 -22 104 0" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                    <circle cx="22" cy="44" r="8" fill="currentColor" />
                    <circle cx="98" cy="44" r="8" fill="currentColor" />
                  </svg>
                </span>
                <span className="splash-pick-name">Team Skateboard</span>
                <span className="splash-pick-vibe">Concrete · Bowls · Bold</span>
              </button>

              <button className="splash-pick" type="button" onClick={() => pick('skate')}>
                <span className="splash-pick-icon" aria-hidden="true">
                  <svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 30 h64 a8 8 0 0 1 8 8 v6 h-80 v-6 a8 8 0 0 1 8 -8 z" fill="currentColor" />
                    <circle cx="28" cy="50" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
                    <circle cx="52" cy="50" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
                    <circle cx="76" cy="50" r="6" fill="none" stroke="currentColor" strokeWidth="3" />
                  </svg>
                </span>
                <span className="splash-pick-name">Team Skate</span>
                <span className="splash-pick-vibe">Wheels · Glide · Glow</span>
              </button>
            </div>

            <p className="splash-fine">
              <button className="splash-skip" type="button" onClick={skip}>Just open the site</button>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
