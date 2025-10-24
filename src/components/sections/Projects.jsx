import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-10 px-2 sm:px-0">
            <RevealOnScroll>
            <div className="w-full max-w-5xl mx-auto px-2 sm:px-4">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Project
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/*First Project */}
                    <div className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Automated fiber grading via image recognition</h3>
                        <p className="text-gray-400 leading-snug justify-center m-1 text-sm sm:text-base">
                            Automated fiber grading is a project that utilizes image recognition to classify and grade fibers based on their characteristics. 
                            The system uses machine learning algorithms to analyze images of fibers and assign them a grade,
                            which can help in quality control and sorting processes in industries such as textiles and manufacturing.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Firebase", "TensorFlow", "Cloudinary"].map((tech, key) =>(
                               <span key={key}
                                     className='bg-violet-500/10 text-blue-500 py-1 px-3 m-1 rounded-full border border-gray-500/50 text-xs sm:text-sm hover:bg-violet-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all  '
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors my-4 text-sm sm:text-base"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>
                    {/* Second Project */}
                    <div className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Naija Turf </h3>
                        <p className="text-gray-400 leading-snug justify-center m-1 text-sm sm:text-base">
                           NiaJa Turf is a web application that provides a platform for users to explore and discover local events, activities, and attractions in Nigeria.
                           It offers a user-friendly interface for browsing events, reading reviews, and finding information about various location in Nigeria.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML", "CSS", "JavaScript", "Bootstrap"].map((tech, key) =>(
                               <span key={key}
                                     className='bg-violet-500/10 text-blue-500 py-1 px-3 m-1 rounded-full border border-gray-500/50 text-xs sm:text-sm hover:bg-violet-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://naija-turf.netlify.app/" target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors my-4 text-sm sm:text-base"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>
                    {/* Third Project */}
                   <div className="p-4 sm:p-6 m-0 rounded-xl border  border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">E-commerce Web App </h3>
                        <p className="text-gray-400 leading-snug justify-center m-1 text-sm sm:text-base">
                          Full Stack e-commerce with a sleek, modern UI designed for an intuitive shopping experience. Features secure payment integration, customizable product inventory, real-time order tracking, and responsive layouts for seamless browsing on any device. Built with performance and scalability in mind, this project demonstrates expertise in both front-end and back-end development, delivering a robust and user-friendly online store.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Tailwind", "NodeJs", "MongoDB", "RESTful-APIs"].map((tech, key) =>(
                               <span key={key}
                                     className='bg-violet-500/10 text-blue-500 py-2 px-2 m-2 rounded-full border border-gray-500/50 text-xs sm:text-sm hover:bg-violet-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all '
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors my-4 text-sm sm:text-base"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>
                    {/* Fourth Project */}
                    <div className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Toka </h3>
                        <p className="text-gray-400 leading-snug justify-center m-1 text-sm sm:text-base">
                          Toka is a Web3 Landing Page designed to welcome aspiring web3 users into the world of NFT creation and trading.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "TailwindCSS", "ThreeJs", "FireBase"].map((tech, key) =>(
                               <span key={key}
                                     className='bg-violet-500/10 text-blue-500 py-1 px-3 m-1 rounded-full border border-gray-500/50 text-xs sm:text-sm hover:bg-violet-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors my-4 text-sm sm:text-base"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>

                    {/* Fift Project */}
                    <div className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Vudka Pour </h3>
                        <p className="text-gray-400 leading-snug justify-center m-1 text-sm sm:text-base">
                          Vudka Pour is a sleek, modern landing page designed to showcase the premium qualities of Vudka, Cocktails and other non achoholic Mocktails.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "TailwindCSS"].map((tech, key) =>(
                               <span key={key}
                                     className='bg-violet-500/10 text-blue-500 py-1 px-3 m-1 rounded-full border border-gray-500/50 text-xs sm:text-sm hover:bg-violet-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://gsap-2-gamma.vercel.app/" target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors my-4 text-sm sm:text-base"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>
                    
                    {/* Sixth Project */}
                    <div className="p-4 sm:p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">Pixclean </h3>
                        <p className="text-gray-400 leading-snug justify-center m-1 text-sm sm:text-base">
                            Pixclean is a modern Saas project designed to provide the premium qualities of a photo editing service.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "TailwindCSS"].map((tech, key) =>(
                               <span key={key}
                                     className='bg-violet-500/10 text-blue-500 py-1 px-3 m-1 rounded-full border border-gray-500/50 text-xs sm:text-sm hover:bg-violet-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="https://pixclean.vercel.app/" target="_blank" className="text-purple-400 hover:text-purple-300 transition-colors my-4 text-sm sm:text-base"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            </RevealOnScroll>
        </section>
    )
}