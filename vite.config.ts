import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/** GitHub Pages: kullanıcı sitesi `kullanici.github.io` → `/`, proje reposu → `/repo-adı/` */
function pagesBase(): string {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
  if (!repo) return '/'
  if (repo.endsWith('.github.io')) return '/'
  return `/${repo}/`
}

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS === 'true' ? pagesBase() : '/',
  plugins: [react()],
})
