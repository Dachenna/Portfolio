import { useState } from "react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { LoadingScreen } from "./components/LoadingScreen"
import { Navbar } from "./components/Navbar"
import { MobileMenu } from "./components/MobileMenu"
import Home from "./components/sections/Home"
import { Projects } from "./components/sections/Projects"
import { CaseStudy } from "./components/sections/CaseStudy"
import { Studio } from "./components/sections/Studio"
import { Process } from "./components/sections/Process"
import { Contact } from "./components/sections/Contact"
import "./index.css"

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen bg-[#0c0b09] text-[#f3efe6] transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <Projects />
        <CaseStudy />
        <Studio />
        <Process />
        <Contact />
        <footer className="border-t border-white/10 px-4 py-10 text-center">
          <p className="serif text-4xl">Thank you.</p>
          <p className="mt-2 text-xs tracking-[0.18em] text-[#9c968c]">DBITS · DAVID DANIEL · NIGERIA</p>
        </footer>
        <SpeedInsights />
      </div>
    </div>
  )
}

export default App
