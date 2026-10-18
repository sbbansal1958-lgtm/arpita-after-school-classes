import { useState } from 'react'
import { site } from '../data/content.js'
import { useLang } from '../i18n.jsx'
import SocialLinks from './Social.jsx'
import GoogleRating from './GoogleRating.jsx'

export default function Contact() {
  const { t } = useLang()
  const [msg, setMsg] = useState(null)
  const [form, setForm] = useState({
    parent: '',
    child: '',
    age: '',
    activity: '',
    phone: '',
    note: '',
  })

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const f = t.contact.form
    if (!form.parent || !form.child || !form.phone) {
      return setMsg(['no', f.errRequired])
    }
    if (!/^[0-9]{10}$/.test(form.phone.replace(/\D/g, ''))) {
      return setMsg(['no', f.errPhone])
    }

    const text = [
      f.waIntro,
      `${f.waParent}: ${form.parent}`,
      `${f.waChild}: ${form.child}${form.age ? ' (' + form.age + ')' : ''}`,
      `${f.waActivity}: ${form.activity || '-'}`,
      `${f.phone}: ${form.phone}`,
      form.note ? `${f.message}: ${form.note}` : '',
    ]
      .filter(Boolean)
      .join('\n')

    // Backend nahi hai — enquiry WhatsApp par taiyaar karke bheji jaati hai.
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, '_blank')
    setMsg(['ok', f.success])
  }

  return (
    <section className="section alt" id="contact">
      <div className="wrap">
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h2 className="h2">{t.contact.title}</h2>

        <div className="contact-grid">
          <div>
            <ul className="contact-list">
              <li>👩‍🏫 <b>{t.brand}</b></li>
              <li>
                📞 {t.contact.phoneLabel}: <a href={`tel:${site.phoneDial}`}>{site.phoneDisplay}</a>
              </li>
              <li>
                💬 {t.contact.whatsappLabel}:{' '}
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
                  {site.phoneDisplay}
                </a>
              </li>
              {site.email && (
                <li>
                  ✉️ {t.contact.emailLabel}: <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              )}
              <li>
                📍 {t.contact.addressLabel}: <span>{t.address}</span>
              </li>
              <li>🕗 {t.contact.timeLabel}: {t.hours}</li>
            </ul>

            <p className="contact-social-label">{t.contact.socialLabel}</p>
            <SocialLinks />
            <GoogleRating />

            <p className="small">{t.contact.note}</p>
          </div>

          <form className="form-card" onSubmit={submit}>
            <h3>📝 {t.contact.form.title}</h3>

            <div className="two">
              <label>
                {t.contact.form.parent}
                <input value={form.parent} onChange={set('parent')} placeholder={t.contact.form.parentPh} />
              </label>
              <label>
                {t.contact.form.child}
                <input value={form.child} onChange={set('child')} placeholder={t.contact.form.childPh} />
              </label>
            </div>

            <div className="two">
              <label>
                {t.contact.form.age}
                <input value={form.age} onChange={set('age')} placeholder={t.contact.form.agePh} inputMode="numeric" />
              </label>
              <label>
                {t.contact.form.activity}
                <select value={form.activity} onChange={set('activity')}>
                  <option value="">{t.contact.form.selectPh}</option>
                  {t.activities.map((a) => (
                    <option key={a.name} value={a.name}>
                      {a.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label>
              {t.contact.form.phone}
              <input
                value={form.phone}
                onChange={set('phone')}
                placeholder={t.contact.form.phonePh}
                maxLength="10"
                inputMode="numeric"
              />
            </label>

            <label>
              {t.contact.form.message}
              <textarea value={form.note} onChange={set('note')} rows="3" placeholder={t.contact.form.messagePh} />
            </label>

            <button className="btn primary block" type="submit">
              💬 {t.contact.form.submit}
            </button>

            {msg && <p className={'form-msg ' + msg[0]}>{msg[1]}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
