import { RevealOnScroll } from "../RevealOnScroll"

const offers = [
  ["Landing pages", "Conversion-first sites for hotels, construction, real estate, and product launches."],
  ["Product builds", "Auth, dashboards, payments, and the interface around them."],
  ["Motion", "GSAP and cinematic sections when the brand needs to feel expensive."],
]

export const About = () => {
  return (
    <section id="studio" className="px-4 py-16">
      <RevealOnScroll>
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs tracking-[0.22em] text-[#d6b07a]">STUDIO</p>
            <h2 className="serif mt-3 text-4xl sm:text-5xl">Built to be hired, not scrolled past.</h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-[#cfc8bb]">David Daniel is a web developer and solo product builder in Nigeria. The public work is Dbits Tech Studio: landings, e-commerce, and custom apps. The private obsession is FeedLoop, a feedback SaaS with surveys, an inbox, and an AI brief.</p>
            <p className="mt-4 text-base leading-relaxed text-[#cfc8bb]">Computer Science, Abia State University. Day-to-day stack is React, Next.js, Tailwind, Supabase, Firebase, and Paystack-ready flows.</p>
            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {offers.map(([title, copy]) => (
                <div key={title} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr]"><p className="font-medium">{title}</p><p className="text-[#cfc8bb]">{copy}</p></div>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
