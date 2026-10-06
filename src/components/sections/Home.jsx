import { RevealOnScroll } from "../RevealOnScroll"

function Home() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pt-28 pb-16">
      <div className="grain pointer-events-none absolute inset-0 opacity-70" />
      <RevealOnScroll>
        <div className="relative mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between text-xs tracking-[0.22em] text-[#9c968c]">
            <span>NIGERIA · STUDIO</span>
            <span>2026</span>
          </div>
          <p className="mb-4 text-sm text-[#d6b07a]">David Daniel · web, motion, product</p>
          <h1 className="serif max-w-4xl text-5xl leading-[0.92] text-[#f3efe6] sm:text-7xl">Interfaces with an aura, not another template.</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#cfc8bb] sm:text-lg">I design and ship websites, cinematic landings, and SaaS products for founders who need the work to look expensive and actually work.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="rounded-full bg-[#f3efe6] px-5 py-3 text-center text-sm font-medium text-[#0c0b09]">Selected work</a>
            <a href="#contact" className="rounded-full border border-white/15 px-5 py-3 text-center text-sm">Book a build</a>
          </div>
          <div className="mt-14 grid grid-cols-3 gap-3 border-t border-white/10 pt-6 text-sm">
            <div><p className="text-[#9c968c]">Focus</p><p>Product sites</p></div>
            <div><p className="text-[#9c968c]">Stack</p><p>Next · React</p></div>
            <div><p className="text-[#9c968c]">Studio</p><p>Dbits</p></div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default Home
