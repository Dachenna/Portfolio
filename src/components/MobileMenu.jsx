import React from 'react'

export const MobileMenu= ({menuOpen, setMenuOpen}) => {

  const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

  return (
    <div className={`fixed top-0 left-0 w-full h-screen bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
    transition-all duration-300 ease-in-out
    ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
    `}>
      <button onClick={() => setMenuOpen(false)} 
      className="absolute top-4 right-8 text-gray-300 text-3xl focus:outline-none cursor-pointer "
      aria-label="Close Menu">
        &times;
      </button>

      <div className=" md:flex items-center justify-center space-x-8">
        {navLinks.map(link => (
            <div key={link.href} className="relative group">
                <a
                    href={link.href}
                    className="text-2xl font-semibold text-gray-300 my-4 transform transition-transform duration-400 hover:text-blue-600"
                >
                    {link.label}
                </a>
            </div>
        ))}
      </div>
    </div>
  )
}
