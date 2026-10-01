import { site } from '../content/site'

export function About() {
  return (
    <section id="about" className="section">
      <div className="section-head">
        <h2>Hakkımda</h2>
        <p className="section-kicker">Kısa tanıtım</p>
      </div>
      <div className="about-grid">
        {site.about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
