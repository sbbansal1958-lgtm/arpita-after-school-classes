import { site } from '../data/content.js'
import { useLang } from '../i18n.jsx'

export default function Hero() {
  const { t } = useLang()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="top">
      <div className="wrap hero-in">
        <div>
          <span className="tag">🎉 {t.hero.tag}</span>
          <h1>
            <span className="brandline brand-3d">{t.brand}</span>{' '}
            <span className="hindi">{t.hero.title}</span>
          </h1>
          <p>{t.hero.intro}</p>

          <div className="hero-btns">
            <button className="btn primary" onClick={() => scrollTo('contact')}>
              🎒 {t.hero.ctaPrimary}
            </button>
            <a
              className="btn accent"
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noreferrer"
            >
              💬 {t.hero.ctaSecondary}
            </a>
          </div>

          <ul className="hero-points">
            {t.hero.points.map((p) => (
              <li key={p}>✅ {p}</li>
            ))}
          </ul>
        </div>

        <div className="hero-art">
          <div className="hero-card">
            <p className="hero-card-title">{t.hero.activitiesTitle}</p>
            <div className="icon-grid">
              {t.activities.map((a) => (
                <span key={a.name}>
                  {a.icon}
                  <small>{a.name}</small>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
