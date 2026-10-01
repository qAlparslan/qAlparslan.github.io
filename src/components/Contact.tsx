import { site } from '../content/site'

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact-inner">
        <h2>İletişim</h2>
        <p>
          Proje fikri, iş birliği veya sadece merhaba demek için yazabilirsin.
        </p>
        <a className="contact-email" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <ul className="contact-social">
          {site.social.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
