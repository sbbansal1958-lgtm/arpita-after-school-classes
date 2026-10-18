import { site } from '../data/content.js'
import { useLang } from '../i18n.jsx'

/* "Google par rate karein" button — Contact aur Footer dono me use hota hai.
   Click karne par Google ka review dialog khulta hai (site.googleReview). */
export default function GoogleRating({ className = '' }) {
  const { t } = useLang()
  return (
    <a
      className={`google-rate ${className}`.trim()}
      href={site.googleReview}
      target="_blank"
      rel="noreferrer"
      title={t.rating.note}
    >
      <span className="gr-g" aria-hidden="true">
        G
      </span>
      <span className="gr-txt">
        <span className="gr-top">
          <b>{t.rating.value}</b>
          <span className="gr-stars" aria-hidden="true">
            ★★★★★
          </span>
        </span>
        <span className="gr-cta">{t.rating.title}</span>
      </span>
    </a>
  )
}
