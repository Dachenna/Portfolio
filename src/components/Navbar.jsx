import { useEffect } from "react"

export const Navbar = ({menuOpen, setMenuOpen}) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    },[menuOpen])

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return(
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-gray-800 shadow-lg">
            <div className="max-w-5xl mx-auto px-2 sm:px-4">
                <div className="flex justify-between items-center h-16">
                    <a href="#home"
                       className="font-mono text-xl font-bold">
                        {" "}
                        David<span className="text-blue-500">.bits</span>{" "}
                    </a>
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen(prev => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-4 sm:space-x-8">
                        {navLinks.map(link => (
                            <div key={link.href} className="relative group">
                                <a
                                    href={link.href}
                                    className="text-gray-300 hover:text-blue-600 transition-colors text-base sm:text-lg px-2"
                                >
                                    {link.label}
                                </a>
                                <div className="absolute left-0 -bottom-1 w-full h-[2px] bg-transparent group-hover:bg-gray-800 rounded overflow-hidden">
                                    <div className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] w-0 group-hover:animate-loading-bar"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}