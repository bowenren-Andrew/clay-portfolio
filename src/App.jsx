import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import { useScrollSpy } from './hooks/useScrollSpy.js'
import { useReveal } from './hooks/useReveal.js'
import { useParallax } from './hooks/useParallax.js'

const SECTION_IDS = ['about', 'work', 'skills', 'contact']

export default function App() {
  const active = useScrollSpy(SECTION_IDS)
  useReveal()
  useParallax()

  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (!id) return undefined
    const target = document.getElementById(id)
    if (!target) return undefined

    const root = document.documentElement
    const previous = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY)
    root.style.scrollBehavior = previous
    return undefined
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        跳到主要内容
      </a>
      <div className="page-noise" aria-hidden="true" />
      <Nav active={active} />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
