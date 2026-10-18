import { useLang } from '../i18n.jsx'

export default function Stats() {
  const { t } = useLang()
  return (
    <section className="stats">
      <div className="wrap stats-grid">
        {t.stats.map(([value, label]) => (
          <div className="stat" key={label}>
            <b>{value}</b>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
