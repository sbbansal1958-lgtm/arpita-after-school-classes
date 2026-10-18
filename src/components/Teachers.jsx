import { useLang } from '../i18n.jsx'

export default function Teachers() {
  const { t } = useLang()
  return (
    <section className="section" id="teachers">
      <div className="wrap">
        <p className="eyebrow">{t.teachers.eyebrow}</p>
        <h2 className="h2">{t.teachers.title}</h2>
        <p className="lead">{t.teachers.lead}</p>

        <div className="grid">
          {t.teachers.items.map((item) => (
            <article className="card teacher" key={item.subject}>
              <div className="avatar">{item.icon}</div>
              <h3>{item.subject}</h3>
              <p className="role">{item.role}</p>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
