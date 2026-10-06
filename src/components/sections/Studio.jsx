import { RevealOnScroll } from "../RevealOnScroll"

// Lattice adapted from 21st.dev Feature Overview Bento (demo 27082, Hirael / Mohammad Shehadeh, MIT).
// Quote is the studio position, not a fake client.
const jobs = [
  ["Landings", "Hotels, construction, real estate, product launches. One page that can be sent to a buyer."],
  ["Products", "Auth, dashboards, payments, and the screens around them."],
  ["Motion", "GSAP when the brand needs to feel expensive, not when it needs a loading trick."],
]

export const Studio = () => (
  <section id="studio" className="px-4 py-16">
    <RevealOnScroll>
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.22em] text-[#d6b07a]">STUDIO</p>
        <h2 className="serif mt-3 max-w-2xl text-4xl sm:text-5xl">What the studio actually does.</h2>
        <p className="mt-4 max-w-2xl text-[#cfc8bb]">A position, two real counts, the latest ship, and the three jobs. Layout from the 21st Feature Overview Bento, content from this account.</p>
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-6">
          <div className="col-span-2 flex flex-col bg-[#141310] p-6 lg:col-span-4 lg:row-span-2">
            <p className="text-xs tracking-[0.18em] text-[#9c968c]">POSITION</p>
            <blockquote className="serif mt-4 text-2xl leading-snug sm:text-3xl">Interfaces with an aura. The site should look like the price, and the form should still send.</blockquote>
            <p className="mt-6 text-sm">David Daniel</p>
            <p className="text-xs tracking-[0.16em] text-[#9c968c]">DBITS · NIGERIA</p>
          </div>
          <div className="bg-[#0c0b09] p-6">
            <p className="text-xs tracking-[0.18em] text-[#9c968c]">LIVE BUILDS</p>
            <p className="mt-2 text-4xl">6</p>
            <p className="text-sm text-[#cfc8bb]">selected, with a working URL</p>
          </div>
          <div className="bg-[#0c0b09] p-6">
            <p className="text-xs tracking-[0.18em] text-[#9c968c]">FLAGSHIP</p>
            <p className="mt-2 text-4xl">1</p>
            <p className="text-sm text-[#cfc8bb]">SaaS in active build</p>
          </div>
          <div className="col-span-2 bg-[#141310] p-6 lg:col-span-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.18em] text-[#9c968c]">LATEST DROP</p>
                <p className="mt-2 text-xl">FeedLoop</p>
              </div>
              <a href="https://feed-loop-two.vercel.app" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-3 py-1 text-sm">Open →</a>
            </div>
            <p className="mt-3 max-w-md text-sm text-[#cfc8bb]">Surveys, an inbox, and an AI brief. Next.js and Supabase. Pushed yesterday.</p>
          </div>
          <div className="col-span-2 bg-[#0c0b09] p-6 lg:col-span-2">
            <p className="text-xs tracking-[0.18em] text-[#9c968c]">WHAT IT DOES</p>
            <ul className="mt-4 space-y-4">
              {jobs.map(([title, body]) => (
                <li key={title}>
                  <p className="text-sm font-medium">{title}</p>
                  <p className="text-sm text-[#cfc8bb]">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </RevealOnScroll>
  </section>
)
