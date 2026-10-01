import { site } from '../content/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <p>
        © {year} {site.name}. Statik portfolyo — domain bağlamaya hazır.
      </p>
    </footer>
  )
}
