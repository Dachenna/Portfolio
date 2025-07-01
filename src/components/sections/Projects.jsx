export const Projects = () => {
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    {"  "}
                    Featured Project
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
                        <h3 className="text-xl font-bold mb-2">Automated fiber grading via image recognition</h3>
                        <p className="text-gray-400 leading-snug justify-center m-1">
                            Automated fiber grading is a project that utilizes image recognition to classify and grade fibers based on their characteristics. 
                            The system uses machine learning algorithms to analyze images of fibers and assign them a grade,
                            which can help in quality control and sorting processes in industries such as textiles and manufacturing.
                        </p>
                        <div>
                            {["React", "Firebase", "TensorFlow", "Cloudinary"].map((tech, key) =>(
                               <span key={key}
                                     className='bg-violet-500/10 text-blue-500 py-1 px-3 m-1 rounded-full border border-gray-500/50 text-sm hover:bg-violet-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all  '
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                        {/**Second Project */}
                     <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-purple-500/30 
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Naija Turf </h3>
                        <p className="text-gray-400 leading-snug justify-center m-1">
                           NiaJa Turf is a web application that provides a platform for users to explore and discover local events, activities, and attractions in Nigeria.
                           It offers a user-friendly interface for browsing events, reading reviews, and finding information about various location in Nigeria.
                        </p>
                        <div>
                            {["HTML", "CSS", "JavaScript", "Bootstrap"].map((tech, key) =>(
                               <span key={key}
                                     className='bg-violet-500/10 text-blue-500 py-1 px-3 m-1 rounded-full border border-gray-500/50 text-sm hover:bg-violet-500/20
                                     hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-between items-center">
                            <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors my-4"
                            >
                                View Project
                            </a>
                        </div>
                    </div>

                </div>

                {/**Project Two */}
                
            </div>
        </section>
    )
}