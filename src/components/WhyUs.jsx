import { useLang } from '../i18n.jsx'

export default function WhyUs() {
  const { t } = useLang()
  return (
    <section className="section" id="why">
      <div className="wrap">
        <p className="eyebrow">{t.why.eyebrow}</p>
        <h2 className="h2">{t.why.title}</h2>
        <p className="lead">{t.why.lead}</p>

        <div className="grid">
          {t.why.items.map((w) => (
            <article className="card why-card" key={w.title}>
              <span className="card-icon">{w.icon}</span>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </article>
          ))}
        </div>

        <div className="achievement">{t.achievement}</div>
      </div>
    </section>
  )
}
