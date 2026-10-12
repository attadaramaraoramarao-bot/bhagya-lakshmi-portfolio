import { useState } from 'react'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Work', '#projects'],
  ['Journey', '#journey'],
  ['Contact', '#contact'],
]

function Navbar({ darkMode, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={() => setOpen(false)} aria-label="A. Bhagya Lakshmi home">
          <span className="wordmark-mark">B</span>
          <span>bhagya<span className="wordmark-dot">.</span></span>
        </a>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
          <span className="sr-only">Toggle menu</span>
          <span className="menu-line" />
          <span className="menu-line" />
        </button>
        <div className={`nav-links ${open ? 'nav-links-open' : ''}`} id="mobile-menu">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}>
            <span className="theme-icon" aria-hidden="true">{darkMode ? '☼' : '◐'}</span>
            <span>{darkMode ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
