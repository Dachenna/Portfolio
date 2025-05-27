export const Projects = () => {
    return(
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
                    {"  "}
                    Featured Project
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div>
                        <h3>Automated fiber grading via image recognition</h3>
                        <p>
                            Automated fiber grading is a project that utilizes image recognition to classify and grade fibers based on their characteristics. 
                            The system uses machine learning algorithms to analyze images of fibers and assign them a grade,
                            which can help in quality control and sorting processes in industries such as textiles and manufacturing.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}