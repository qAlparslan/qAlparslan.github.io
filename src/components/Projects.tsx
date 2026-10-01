import { site } from '../content/site'

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head">
        <h2>Projeler</h2>
        <p className="section-kicker">Vitrin — canlı demo öncelikli</p>
      </div>
      <ul className="project-list">
        {site.projects.map((project) => (
          <li
            key={project.title}
            className={`project-card${project.highlight ? ' project-card--highlight' : ''}`}
          >
            <div className="project-card-top">
              <h3>{project.title}</h3>
              <ul className="tag-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </div>
            <p>{project.description}</p>
            <div className="project-links">
              {project.demoUrl && project.demoUrl !== 'https://' && (
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  Canlı demo
                </a>
              )}
              {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
