import { site } from '../data/content.js'

/* Social + listing links — Contact aur Footer dono me use hota hai */
export default function SocialLinks({ className = '' }) {
  return (
    <div className={`socials ${className}`.trim()}>
      <a className="social ig" href={site.instagram} target="_blank" rel="noreferrer">
        <span aria-hidden="true">📸</span> Instagram
      </a>
      <a className="social fb" href={site.facebook} target="_blank" rel="noreferrer">
        <span aria-hidden="true">👍</span> Facebook
      </a>
      <a className="social yt" href={site.youtube} target="_blank" rel="noreferrer">
        <span aria-hidden="true">▶️</span> YouTube
      </a>
      <a className="social gm" href={site.maps} target="_blank" rel="noreferrer">
        <span aria-hidden="true">🗺️</span> Google Maps
      </a>
    </div>
  )
}
