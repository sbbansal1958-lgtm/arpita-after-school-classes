import { useState } from 'react'
import { site } from '../data/content.js'
import { useLang } from '../i18n.jsx'
import SiteLogo from './SiteLogo.jsx'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)

  const go = (e, id) => {
    e.preventDefault()
    setOpen(false)
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className="topbar">
        <div className="wrap topbar-in">
          <span>
            📞 <a href={`tel:${site.phoneDial}`}>{site.phoneDisplay}</a>
          </span>
          <span>📍 {t.shortLoc}</span>
          <span className="topbar-hours">🕗 {t.hours}</span>
          <a className="topbar-social" href={site.instagram} target="_blank" rel="noreferrer">
            📸 Instagram
          </a>
          <a className="topbar-social" href={site.facebook} target="_blank" rel="noreferrer">
            👍 Facebook
          </a>
          <a className="topbar-social" href={site.youtube} target="_blank" rel="noreferrer">
            ▶️ YouTube
          </a>
        </div>
      </div>

      <header className="header">
        <div className="wrap nav">
          <a className="brand" href="#top" onClick={(e) => go(e, 'top')}>
            <SiteLogo />
          </a>

          <nav className={open ? 'open' : ''}>
            {t.nav.map((item) => (
              <a key={item.id} className="navlink" href={`#${item.id}`} onClick={(e) => go(e, item.id)}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-right">
            <div className="lang-switch" role="group" aria-label="Language">
              <button className={lang === 'hi' ? 'on' : ''} onClick={() => setLang('hi')}>
                हिंदी
              </button>
              <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')}>
                English
              </button>
            </div>
            <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(!open)}>
              ☰
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
