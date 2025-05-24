import React from 'react'

function Home() {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>
      <div className="text-center z-10 px-4">
        <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent leading-right'>
          Hi, I'm David
        </h1>

        <p className="text-lg text-gray-400 max-w-lg mx-auto mb-4"></p>
        
        <p className="text-lg text-justify justify-around text-gray-400 max-w-lg mx-auto mb-3">
         A passionate web developer a thinking format of looking
         for innovative ways to solve problems by ephasizing efficency and optimization
        </p>

        <div className='flex justify-center space-x-4'>
          <a href="#projects" className='bg-violet-600 text-white px-4 py-3 rounded-md font-medium transition relative overflow-hidden hover:-translate-0.5 
          hover:shadow-[0_0_15px_rgba(59,130,246, 0.4)] hover:bg-gradient-to-bl from-blue-500 to-purple-900 duration-400 '>
            view Projects
          </a>

          <a href="#contact" className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium  
            transition-all hover:-translate-0.5 hover:shadow-[0_0_15px_rgba(59,130,246, 0.4)]
           hover:bg-blue-500/50 hover:text-white duration-400'>
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
