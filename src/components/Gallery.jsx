import { gallery } from '../data/content.js'
import { useLang } from '../i18n.jsx'

export default function Gallery() {
  const { t } = useLang()

  return (
    <section className="section alt" id="gallery">
      <div className="wrap">
        <p className="eyebrow">{t.gallery.eyebrow}</p>
        <h2 className="h2">{t.gallery.title}</h2>
        <p className="lead">{t.gallery.lead}</p>

        <div className="gal-grid">
          {gallery.map((item, i) => (
            <figure className="gal-item" key={i}>
              <div className="gal-media" style={{ '--h': (i * 42) % 360 }}>
                <span className="gal-fallback">🖼️</span>
                <img
                  src={item.src}
                  alt={t.gallery.photoAlt}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
