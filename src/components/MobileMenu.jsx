export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#case", label: "Case" },
    { href: "#studio", label: "Studio" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <div className={`fixed inset-0 z-30 flex flex-col justify-end overflow-auto bg-[#0c0b09] px-6 pb-10 pt-20 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}>
      <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 text-sm" aria-label="Close menu">Close</button>
      <p className="mb-4 text-xs tracking-[0.22em] text-[#9c968c]">DAVID DANIEL</p>
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="border-t border-white/10 py-3 text-3xl">{link.label}</a>
      ))}
    </div>
  )
}
