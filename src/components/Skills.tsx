import { site } from '../content/site'

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-head">
        <h2>Yetenekler</h2>
        <p className="section-kicker"></p>
      </div>
      <div className="skills-grid">
        {site.skillGroups.map((group) => (
          <article key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
