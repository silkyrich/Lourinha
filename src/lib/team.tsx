import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Team = 'skateboard' | 'skate'

type TeamContextValue = {
  team: Team
  setTeam: (t: Team) => void
  toggleTeam: () => void
  hasChosen: boolean
}

const STORE = 'skatestrong.team'

const TeamContext = createContext<TeamContextValue | null>(null)

export function TeamProvider({ children }: { children: ReactNode }) {
  const [team, setTeamState] = useState<Team>('skateboard')
  const [hasChosen, setHasChosen] = useState(false)

  // Read stored choice on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORE) as Team | null
      if (stored === 'skate' || stored === 'skateboard') {
        setTeamState(stored)
        setHasChosen(true)
      }
    } catch {
      // localStorage may be blocked
    }
  }, [])

  // Sync to <html data-team>
  useEffect(() => {
    document.documentElement.setAttribute('data-team', team)
    const meta = document.querySelector('meta[name="theme-color"]')
    if (meta) meta.setAttribute('content', team === 'skate' ? '#fef0e8' : '#0a0a0a')
  }, [team])

  const setTeam = (t: Team) => {
    setTeamState(t)
    setHasChosen(true)
    try { localStorage.setItem(STORE, t) } catch { /* ignore */ }
  }

  const toggleTeam = () => setTeam(team === 'skate' ? 'skateboard' : 'skate')

  const value = useMemo(() => ({ team, setTeam, toggleTeam, hasChosen }), [team, hasChosen])

  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>
}

export function useTeam() {
  const ctx = useContext(TeamContext)
  if (!ctx) throw new Error('useTeam must be used inside TeamProvider')
  return ctx
}
