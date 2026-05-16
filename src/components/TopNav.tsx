import { useState } from 'react'

const links = [
  { href: '#welcome', label: 'Welcome' },
  { href: '#map', label: 'Map' },
  { href: '#skate', label: 'Skate' },
  { href: '#around', label: 'Around' },
  { href: '#events', label: 'Events' },
  { href: '#do', label: 'Things to do' },
  { href: '#food', label: 'Food' },
  { href: '#phrases', label: 'Portuguese' },
  { href: '#album', label: 'Album' },
  { href: '#practical', label: 'Practical' },
]

export default function TopNav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="topnav" aria-label="Primary">
      <div className="topnav-inner">
        <a className="topnav-brand" href="#top" aria-label="Skate Strong — home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="3" />
              <circle cx="20" cy="20" r="6" fill="currentColor" />
            </svg>
          </span>
          <span>Skate Strong</span>
        </a>

        <button
          className="topnav-toggle"
          aria-expanded={open}
          aria-controls="topnav-links"
          aria-label="Open menu"
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>

        <ul id="topnav-links" className={`topnav-links${open ? ' is-open' : ''}`}>
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
