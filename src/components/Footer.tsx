export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer-inner">
        <div>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="3" />
              <circle cx="20" cy="20" r="6" fill="currentColor" />
            </svg>
          </span>
          <p className="footer-brand-word">Skate Strong</p>
          <p className="footer-tag">Official trip · Lourinhã · 30.05 — 06.06.2026</p>
        </div>
        <p className="footer-credit">Made with the crew, for the crew. Have a good one.</p>
      </div>
    </footer>
  )
}
