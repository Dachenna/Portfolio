import { useState } from "react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { LoadingScreen } from "./components/LoadingScreen"
import { Navbar } from "./components/Navbar"
import { MobileMenu } from "./components/MobileMenu"
import Home from "./components/sections/Home"
import { About } from "./components/sections/About"
import { Projects } from "./components/sections/Projects"
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
        <About />
        <Contact />
        <footer className="border-t border-white/10 px-4 py-6 text-center text-xs tracking-[0.18em] text-[#9c968c]">
          DBITS · DAVID DANIEL
        </footer>
        <SpeedInsights />
      </div>
    </div>
  )
}

export default App
