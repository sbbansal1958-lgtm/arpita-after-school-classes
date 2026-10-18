import { site } from '../data/content.js'
import { useLang } from '../i18n.jsx'
import SocialLinks from './Social.jsx'
import GoogleRating from './GoogleRating.jsx'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="wrap footer-in">
        <div className="footer-brand">
          <b className="brand-3d">{t.brand}</b>
          <p>{t.tagline}</p>
        </div>

        <div>
          <b>{t.footer.quickLinks}</b>
          <div className="footer-links">
            {t.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <b>{t.footer.contactTitle}</b>
          <p>
            📞 <a href={`tel:${site.phoneDial}`}>{site.phoneDisplay}</a>
          </p>
          {site.email && (
            <p>
              ✉️ <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          )}
          <p>📍 {t.shortLoc}</p>
          <p>🕗 {t.hours}</p>
        </div>

        <div>
          <b>{t.footer.followTitle}</b>
          <SocialLinks className="footer-socials" />
          <GoogleRating className="footer-rating" />
        </div>
      </div>

      <div className="wrap copyright">
        © {new Date().getFullYear()} {t.brand}. {t.footer.rights}
      </div>
    </footer>
  )
}
