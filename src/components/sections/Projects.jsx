import { useRef, useState } from "react"
import { RevealOnScroll } from "../RevealOnScroll"

// Adapted from 21st.dev Project Index by ssycui (demo 30554).
// Hover cover is CSS, not framer-motion, so the Vite build stays dependency-free.
const work = [
  { title: "FeedLoop", tag: "Flagship SaaS", year: "2026", live: "https://feed-loop-two.vercel.app", code: "https://github.com/Dachenna/FeedLoop", grad: "radial-gradient(120% 140% at 20% 10%, rgba(214,176,122,0.55), transparent 60%), linear-gradient(150deg, #2b2010, #0c0b09)" },
  { title: "Metallic", tag: "Construction landing", year: "2025", live: "https://metals-phi.vercel.app", code: "https://github.com/Dachenna/Metals", grad: "radial-gradient(120% 140% at 80% 15%, rgba(180,180,186,0.45), transparent 60%), linear-gradient(150deg, #1c1c1f, #0c0b09)" },
  { title: "Vudka Pour", tag: "Motion landing", year: "2025", live: "https://gsap-2-gamma.vercel.app/", code: "https://github.com/Dachenna/Gsap", grad: "radial-gradient(120% 140% at 30% 85%, rgba(214,176,122,0.4), transparent 60%), linear-gradient(150deg, #24180f, #0c0b09)" },
  { title: "Pixclean", tag: "Photo SaaS", year: "2025", live: "https://pixclean.vercel.app/", code: "https://github.com/Dachenna/pix-clean", grad: "radial-gradient(120% 140% at 70% 20%, rgba(120,160,210,0.4), transparent 60%), linear-gradient(150deg, #141c28, #0c0b09)" },
  { title: "Perfume", tag: "Product landing", year: "2026", live: "https://perfume-seven-pied.vercel.app", code: "https://github.com/Dachenna/Perfume", grad: "radial-gradient(120% 140% at 40% 80%, rgba(196,150,170,0.4), transparent 60%), linear-gradient(150deg, #24161c, #0c0b09)" },
  { title: "Naija Turf", tag: "Local discovery", year: "2024", live: "https://naija-turf.netlify.app/", code: "https://github.com/Dachenna/Naija-turf", grad: "radial-gradient(120% 140% at 80% 80%, rgba(42,161,115,0.4), transparent 60%), linear-gradient(150deg, #10241c, #0c0b09)" },
]

export const Projects = () => {
  const wrap = useRef(null)
  const [hover, setHover] = useState(null)
  const [pos, setPos] = useState({ x: 24, y: 24 })

  const onMove = (e) => {
    const r = wrap.current?.getBoundingClientRect()
    if (!r) return
    setPos({
      x: Math.min(Math.max(e.clientX - r.left + 16, 8), r.width - 200),
      y: Math.max(e.clientY - r.top - 70, 8),
    })
  }

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
          <div ref={wrap} onPointerMove={onMove} className="relative">
            {work.map((item, i) => (
              <a
                key={item.title}
                href={item.live}
                target="_blank"
                rel="noreferrer"
                onPointerEnter={() => setHover(i)}
                onPointerLeave={() => setHover(null)}
                className="group flex items-baseline gap-4 border-t border-white/10 py-4 last:border-b"
              >
                <span className={`text-lg font-semibold transition-colors sm:text-xl ${
                  hover === null || hover === i ? "text-[#f3efe6]" : "text-[#f3efe6]/30"
                }`}>
                  {item.title}
                </span>
                <span className="min-w-0 flex-1 truncate text-xs text-[#9c968c]">{item.tag}</span>
                <span className="text-[11px] text-[#9c968c]">{item.year}</span>
                <span className="text-sm text-[#f3efe6]/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#d6b07a]">→</span>
              </a>
            ))}
            <div
              aria-hidden
              className="pointer-events-none absolute z-10 hidden w-[180px] overflow-hidden rounded-lg border border-white/10 shadow-2xl transition-opacity duration-200 md:block"
              style={{
                left: pos.x,
                top: pos.y,
                opacity: hover === null ? 0 : 1,
                background: hover === null ? "transparent" : work[hover].grad,
              }}
            >
              <div className="relative aspect-[4/3]">
                <span className="absolute left-[8%] top-[12%] h-[7%] w-[40%] rounded-full bg-white/15" />
                <span className="absolute inset-x-[8%] bottom-[12%] top-[36%] rounded-md border border-white/10 bg-black/25" />
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-[#9c968c]">Work index adapted from 21st.dev / ssycui Project Index.</p>
        </div>
      </RevealOnScroll>
    </section>
  )
}
