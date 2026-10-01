import { site } from '../content/site'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <p className="eyebrow">{site.location} · {site.availability}</p>
      <h1 id="hero-title">
        <span className="hero-name">{site.name}</span>
        <span className="hero-sub">{site.title}</span>
      </h1>
      <p className="lead">{site.tagline}</p>
      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">
          Projeleri gör
        </a>
        <a className="btn btn-ghost" href={`mailto:${site.email}`}>
          E-posta gönder
        </a>
      </div>
      <ul className="hero-social">
        {site.social.map((link) => (
          <li key={link.label}>
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
