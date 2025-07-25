import { RevealOnScroll } from '../RevealOnScroll';
import Spline from '@splinetool/react-spline';

function Home() {
  return (
    <section
      id='home'
      // On mobile, items will stack (grid-cols-1). On medium screens and up, they'll be side-by-side (grid-cols-2).
      // Added pt-24 for mobile to push content below a potential fixed navbar, md:pt-0 to remove it on larger screens.
      className='min-h-screen grid grid-cols-1 md:grid-cols-2 items-center justify-center relative px-2 md:px-0 pt-24 md:pt-0'
    >
      {/* Left Side: Text Content */}
      <RevealOnScroll>
        {/* Removed py-8 from here as pt-24 on the section handles the top offset, and py-8 would be redundant for top. */}
        {/* Keeping px-2 md:px-4 for horizontal padding. */}
        <div className="w-full flex flex-col items-center justify-center z-10 px-2 md:px-4 md:py-0 md:col-span-1">
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500
           bg-clip-text text-transparent leading-tight text-center'>
            Hi, I'm David
          </h1>

          <p className="text-base sm:text-lg text-justify text-gray-400 max-w-xs sm:max-w-md md:max-w-lg mx-auto mb-3">
            A passionate web developer with a mindset for finding innovative ways to solve problems, emphasizing efficiency and optimization.
          </p>

          {/* Spotlight Effect - Ensure this is positioned relative to its immediate parent for correct behavior */}
          <div className="relative w-full">
            <div className="h-0 w-[40rem] absolute top-[20%] right-[-100%]
            shadow-[0_0_900px_20px_#A98FEB] -rotate-[30deg] z-10"></div>
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

      {/* 3D greeting Robot - This will naturally go to the second column on md+ and stack below on mobile */}
      {/* Removed absolute positioning to allow it to flow with the document on mobile. */}
      {/* Added responsive height: h-96 for mobile, md:h-full for desktop to fill its grid cell. */}
      {/* Added flex utilities to center the Spline component within its container. */}
      <div className='w-full h-96 flex items-center justify-center z-20 md:h-full md:col-span-1'>
        <Spline scene="https://prod.spline.design/C63u83ckAo1NBFnp/scene.splinecode" />
      </div>

    </section>
  )
}

export default Home
