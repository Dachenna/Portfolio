import { useEffect } from "react"

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
  }, [menuOpen])

  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#studio", label: "Studio" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-white/10 bg-[#0c0b09]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#home" className="text-sm font-semibold tracking-[0.22em]">
          DBITS
        </a>
        <button
          className="text-sm tracking-wide md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          Menu
        </button>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-[#cfc8bb] hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/Dachenna"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#d6b07a]/50 px-3 py-1 text-sm text-[#d6b07a]"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
