import { RevealOnScroll } from "../RevealOnScroll"

const steps = [
  ["01", "Brief", "What the business sells, who opens the link, and what a yes looks like. Not a feature list."],
  ["02", "Structure", "One path. Hero, proof, offer, ask. Extra pages only if the sale needs them."],
  ["03", "Surface", "Type, motion, and the first screen. This is where 21st.dev components get adapted, not pasted."],
  ["04", "Build", "React or Next, auth if the product needs it, Paystack or the gateway the client can actually use."],
  ["05", "Ship", "Vercel, a real domain, and a form that reaches a person. Then the next page."],
]

export const Process = () => (
  <section id="process" className="px-4 py-16">
    <RevealOnScroll>
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.22em] text-[#d6b07a]">PROCESS</p>
        <h2 className="serif mt-3 text-4xl sm:text-5xl">Five moves, then it is live.</h2>
        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {steps.map(([n, title, body]) => (
            <div key={n} className="grid gap-2 py-5 sm:grid-cols-[70px_180px_1fr] sm:items-baseline">
              <p className="text-[#d6b07a]">{n}</p>
              <p className="text-xl">{title}</p>
              <p className="text-[#cfc8bb]">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-[#9c968c]">Computer Science, Abia State University. Day stack is React, Next.js, Tailwind, Supabase, Firebase, GSAP. Studio site is dbit.com.ng.</p>
      </div>
    </RevealOnScroll>
  </section>
)
