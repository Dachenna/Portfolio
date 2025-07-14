import { RevealOnScroll } from '../RevealOnScroll';
import Spline from '@splinetool/react-spline';

function Home() {
  return (
    <section
      id='home'
      className='min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-center relative px-2 md:px-0'
    >
      <RevealOnScroll>
        {/* Left Side: Text Content */}
        <div className="w-full flex flex-col items-center justify-center z-10 px-2 md:px-4 py-8 md:py-0 md:col-span-1">
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500
           bg-clip-text text-transparent leading-tight text-center'>
            Hi, I'm David
          </h1>

          <p className="text-base sm:text-lg text-justify text-gray-400 max-w-xs sm:max-w-md md:max-w-lg mx-auto mb-3">
            A passionate web developer with a mindset for finding innovative ways to solve problems, emphasizing efficiency and optimization.
          </p>

          {/* Spotlight Effect */}
          <div>
            <div className="h-0 w-[40rem] absolute top-[20%] right-[-100%]
            shadow-[0_0_900px_20px_#A98FEB] -rotate-[30deg] z-10"></div>

          {/**3D greeting Robot */}
            <div className=' absolute -right-[80%] -top-2 flex flex-col w-full z-20'>
              <Spline scene="https://prod.spline.design/C63u83ckAo1NBFnp/scene.splinecode" />
            </div>

          </div>
          
          <div className='flex flex-col sm:flex-row w-full sm:w-auto px-0 sm:px-7 space-y-3 sm:space-y-0 sm:space-x-4 items-center justify-center'>
            <a
              href="#projects"
              className='w-full sm:w-auto bg-violet-600 text-white px-4 py-3 rounded-md font-medium transition relative overflow-hidden hover:-translate-0.5 
              hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-gradient-to-bl from-blue-500 to-purple-900 duration-400 text-center'
            >
              View Projects
            </a>

            <a
              href='#contact'
              className='w-full sm:w-auto border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium  
              transition-all hover:-translate-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
              cursor-pointer hover:bg-blue-500/50 hover:text-white duration-400 text-center'
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Home
