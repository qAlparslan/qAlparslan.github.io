import { site } from '../content/site'

export function Header() {
  return (
    <header className="site-header">
      <a className="logo" href="#top">
        {site.name.split(' ')[0]}
        <span className="logo-dot">.</span>
      </a>
      <nav aria-label="Ana menü">
        <ul className="nav-list">
          {site.nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <a className="nav-cta" href="#contact">
        Konuşalım
      </a>
    </header>
  )
}
