import { site } from '../data/content.js'
import { useLang } from '../i18n.jsx'

/* Hamesha dikhne wale Call + WhatsApp buttons (mobile friendly) */
export default function FloatingActions() {
  const { t } = useLang()
  return (
    <div className="fab-group">
      <a
        className="fab call"
        href={`tel:${site.phoneDial}`}
        aria-label={t.actions.call}
        title={t.actions.call}
      >
        <span aria-hidden="true">📞</span>
      </a>
      <a
        className="fab wa"
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        aria-label={t.actions.whatsapp}
        title={t.actions.whatsapp}
      >
        <span aria-hidden="true">💬</span>
      </a>
    </div>
  )
}
