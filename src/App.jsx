import { useEffect, useState } from 'react'
import { portfolio } from './data/portfolio'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Internship from './components/Internship'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('light-mode', !darkMode)
  }, [darkMode])

  return (
    <div className="app-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((value) => !value)} />
      <main>
        <Hero data={portfolio} />
        <About data={portfolio} />
        <Skills data={portfolio} />
        <Projects data={portfolio} />
        <Internship data={portfolio} />
        <Education data={portfolio} />
        <Certifications data={portfolio} />
        <Resume data={portfolio} />
        <Contact data={portfolio} />
      </main>
      <Footer data={portfolio} />
    </div>
  )
}

export default App
