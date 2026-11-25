import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('aaroha-theme') === 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? 'dark' : 'light'
    localStorage.setItem('aaroha-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <header className="site-header">
      <nav className="nav-inner" aria-label="Main navigation">
        <Link to="/" className="brand-lockup" aria-label="Aaroha Travel and Tourism home">
          <span className="brand-mark">AR</span>
          <span className="brand-name">AAROHA<span>TRAVEL &amp; TOURISM</span></span>
        </Link>

        <div className="nav-links">
          <Link className="nav-home" to="/">Home</Link>
          <a href="/#destinations">Destinations <span aria-hidden="true">⌄</span></a>
          <a href="/#about">About</a>
          <Link className="nav-mobile-saved" to="/saved">♡ Saved Trips</Link>
        </div>

        <div className="nav-actions">
          <button
            className={`theme-toggle${isDark ? ' is-dark' : ''}`}
            type="button"
            role="switch"
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-checked={isDark}
            onClick={() => setIsDark((value) => !value)}
          >
            <span className="toggle-track-icon toggle-sun" aria-hidden="true">☼</span>
            <span className="toggle-track-icon toggle-moon" aria-hidden="true">☾</span>
            <span className="toggle-thumb" aria-hidden="true">{isDark ? '☾' : '☼'}</span>
          </button>
          <Link to="/saved" className="saved-link"><span aria-hidden="true">♡</span> Saved Trips</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
