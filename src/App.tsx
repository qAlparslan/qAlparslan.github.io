import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { site } from './content/site'

function App() {
  return (
    <div id="top">
      <a className="skip-link" href="#about">
        İçeriğe atla
      </a>
      <div className="page-glow" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <span className="sr-only">{site.title}</span>
    </div>
  )
}

export default App
