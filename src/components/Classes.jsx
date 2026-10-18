import { useLang } from '../i18n.jsx'

export default function Classes() {
  const { t } = useLang()
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="section alt" id="classes">
      <div className="wrap">
        <p className="eyebrow">{t.classes.eyebrow}</p>
        <h2 className="h2">{t.classes.title}</h2>
        <p className="lead">{t.classes.lead}</p>

        <div className="grid">
          {t.activities.map((a) => (
            <article className="card activity" key={a.name}>
              <span className="card-icon">{a.icon}</span>
              <h3>{a.name}</h3>
              <p>{a.desc}</p>
              <ul className="chips">
                {a.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="fees-grid">
          <div className="fees-card">
            <span className="price">
              {t.fees.amount}
              <small> / {t.fees.period}</small>
            </span>
            <p className="fees-sub">{t.fees.perActivity}</p>
            <ul className="ticks">
              {t.fees.includes.map((f) => (
                <li key={f}>✅ {f}</li>
              ))}
            </ul>
            <button className="btn block" onClick={() => scrollTo('contact')}>
              📞 {t.fees.ctaLabel}
            </button>
          </div>

          <div className="fees-info">
            <h3 className="tt-title">🕗 {t.timetable.title}</h3>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>{t.timetable.dayCol}</th>
                    <th>{t.timetable.timeCol}</th>
                  </tr>
                </thead>
                <tbody>
                  {t.timetable.rows.map(([day, time]) => (
                    <tr key={day}>
                      <td>{day}</td>
                      <td>
                        <b>{time}</b>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="small">⭐ {t.timetable.note}</p>
            <p className="small">📌 {t.fees.note}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
