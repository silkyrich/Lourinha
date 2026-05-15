import { useEffect, useRef } from 'react'
import { useTeam } from '../lib/team'
import SectionHeader from './SectionHeader'

const GISCUS_REPO = 'silkyrich/Lourinha'
const GISCUS_REPO_ID = 'REPLACE_ME'
const GISCUS_CATEGORY_ID = 'REPLACE_ME'

export default function Chat() {
  const { team } = useTeam()
  const mountRef = useRef<HTMLDivElement>(null)

  // Inject (and re-inject) giscus when the team theme changes
  useEffect(() => {
    const el = mountRef.current
    if (!el) return
    // Clear existing iframe/script so the new theme is applied
    el.querySelectorAll('.giscus, script[src*="giscus.app"]').forEach(n => n.remove())

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    script.setAttribute('data-repo', GISCUS_REPO)
    script.setAttribute('data-repo-id', GISCUS_REPO_ID)
    script.setAttribute('data-category', 'General')
    script.setAttribute('data-category-id', GISCUS_CATEGORY_ID)
    script.setAttribute('data-mapping', 'pathname')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', team === 'skate' ? 'light' : 'dark_dimmed')
    script.setAttribute('data-lang', 'en')
    script.setAttribute('data-loading', 'lazy')
    el.appendChild(script)
  }, [team])

  return (
    <section id="chat" className="section section--alt">
      <div className="wrap">
        <SectionHeader
          num="10"
          eyebrow="The lobby"
          title="Chat, intros and votes."
        />

        <div className="chat-intro">
          <div>
            <h3>How it works</h3>
            <p>Two minutes of setup the first time — sign in with GitHub — and the rest is real: comments persist, reactions count as votes, everyone sees them.</p>
          </div>
          <div>
            <h3>House rules</h3>
            <ul className="chat-rules">
              <li>Drop a comment to introduce yourself.</li>
              <li>For votes, find the comment that frames the question and react <strong>👍</strong>. Most reactions wins.</li>
              <li>Tip the comment box generously with photos and tip-offs all week.</li>
            </ul>
          </div>
        </div>

        <div ref={mountRef} className="giscus-mount">
          {(GISCUS_REPO_ID === 'REPLACE_ME' || GISCUS_CATEGORY_ID === 'REPLACE_ME') && (
            <div className="giscus-placeholder">
              <p><strong>Comments come online once giscus is wired up.</strong></p>
              <ol>
                <li>On GitHub: <strong>Settings → General → Features → Discussions</strong> (enable).</li>
                <li>Install the <a href="https://github.com/apps/giscus" rel="noopener">giscus app</a> on this repo.</li>
                <li>Visit <a href="https://giscus.app" rel="noopener">giscus.app</a>, paste <code>silkyrich/Lourinha</code>, pick the <em>General</em> Discussion category, copy the <code>data-repo-id</code> and <code>data-category-id</code>.</li>
                <li>Paste them into <code>GISCUS_REPO_ID</code> / <code>GISCUS_CATEGORY_ID</code> at the top of <code>src/components/Chat.tsx</code>. Commit.</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
