import { RevealOnScroll } from "../RevealOnScroll"

export  const Contact = () => {
    return (
        <section 
        id="contact"
         className="min-h-screen flex items-center justify py-20"
         >
            <RevealOnScroll>
                <div className="px-4 w-150">

                    <h2 className="text-3xl font-bold mb-8 
                     bg-gradient-to-r from-purple-500 to-cyan-400 
                     bg-clip-text text-transparent"
                     >
                        Contact me
                     </h2>
                    <form className="space-y-6">
                        {/**Name */}
                        <div className="relative">
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required 
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name..."
                             />
                        </div>

                        {/**Email */}
                        <div className="relative">
                            <input 
                                type="email" 
                                id="email" 
                                name="name" 
                                required 
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                             />
                        </div>

                         {/**Message */}
                        <div className="relative">
                            <textarea 
                                id="message" 
                                name="message" 
                                required 
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Message..."
                             />
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Lets Connect
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}