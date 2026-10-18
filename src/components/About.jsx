import { useLang } from '../i18n.jsx'

export default function About() {
  const { t } = useLang()
  return (
    <section className="section" id="about">
      <div className="wrap about-grid">
        <div>
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 className="h2">{t.about.heading}</h2>
          {t.about.paras.map((p, i) => (
            <p className="para" key={i}>
              {p}
            </p>
          ))}
          <ul className="ticks">
            {t.about.points.map((p) => (
              <li key={p}>✅ {p}</li>
            ))}
          </ul>
        </div>

        <aside className="quote-card">
          <p>
            <span className="quote-mark" aria-hidden="true">“</span>
            {t.about.quote}
            <span className="quote-mark close" aria-hidden="true">”</span>
          </p>
          <b>{t.about.quoteBy}</b>
        </aside>
      </div>
    </section>
  )
}
