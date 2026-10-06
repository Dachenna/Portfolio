import { RevealOnScroll } from "../RevealOnScroll"

const work = [
  { index: "01", name: "FeedLoop", role: "Flagship SaaS", summary: "Surveys, a response inbox, and an on-demand AI brief. The strongest live product on the account, updated this month.", stack: ["Next.js", "Supabase", "Tailwind"], live: "https://feed-loop-two.vercel.app", code: "https://github.com/Dachenna/FeedLoop" },
  { index: "02", name: "Metallic", role: "Construction landing", summary: "A client-style landing for a construction company. Clean enough to pitch, not a free theme with the logo swapped.", stack: ["React", "JavaScript"], live: "https://metals-phi.vercel.app", code: "https://github.com/Dachenna/Metals" },
  { index: "03", name: "Vudka Pour", role: "Motion landing", summary: "A spirits and mocktail page where the motion is the product. GSAP, not a static card with a stock bottle.", stack: ["React", "GSAP", "Tailwind"], live: "https://gsap-2-gamma.vercel.app/", code: "https://github.com/Dachenna/Gsap" },
  { index: "04", name: "Pixclean", role: "Photo SaaS", summary: "A photo-editing product surface. Useful as proof of SaaS UI, not just brochure sites.", stack: ["TypeScript", "React", "Tailwind"], live: "https://pixclean.vercel.app/", code: "https://github.com/Dachenna/pix-clean" },
  { index: "05", name: "Perfume", role: "Product landing", summary: "A fragrance commerce landing with a live deploy. The design repo, not the older experiment sitting beside it.", stack: ["JavaScript", "React"], live: "https://perfume-seven-pied.vercel.app", code: "https://github.com/Dachenna/Perfume" },
  { index: "06", name: "Naija Turf", role: "Local discovery", summary: "An earlier Nigeria-focused discovery site. Kept because it is live, not because it is the current ceiling.", stack: ["HTML", "CSS", "JavaScript"], live: "https://naija-turf.netlify.app/", code: "https://github.com/Dachenna/Naija-turf" },
]

export const Projects = () => {
  return (
    <section id="work" className="px-4 py-16">
      <RevealOnScroll>
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs tracking-[0.22em] text-[#d6b07a]">SELECTED WORK</p>
              <h2 className="serif mt-3 text-4xl sm:text-5xl">Only what is live.</h2>
            </div>
            <a href="https://github.com/Dachenna" target="_blank" rel="noreferrer" className="text-sm text-[#cfc8bb]">All repos</a>
          </div>
          <div className="border-t border-white/10">
            {work.map((item) => (
              <article key={item.name} className="grid gap-4 border-b border-white/10 py-6 md:grid-cols-[80px_1.2fr_0.8fr] md:items-start">
                <p className="text-sm text-[#9c968c]">{item.index}</p>
                <div>
                  <h3 className="text-2xl">{item.name}</h3>
                  <p className="mt-1 text-sm text-[#d6b07a]">{item.role}</p>
                  <p className="mt-3 max-w-xl text-[#cfc8bb]">{item.summary}</p>
                </div>
                <div className="flex flex-col gap-3 md:items-end">
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {item.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-2 py-1 text-xs text-[#cfc8bb]">{tech}</span>
                    ))}
                  </div>
                  <div className="flex gap-4 text-sm">
                    <a href={item.live} target="_blank" rel="noreferrer" className="underline decoration-white/20 underline-offset-4">Live</a>
                    <a href={item.code} target="_blank" rel="noreferrer" className="underline decoration-white/20 underline-offset-4">Code</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}
