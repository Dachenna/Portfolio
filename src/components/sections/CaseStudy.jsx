import { RevealOnScroll } from "../RevealOnScroll"

const points = [
  ["Surveys", "NPS, CSAT, ratings, and open text. A public link, so the person answering does not need an account."],
  ["Inbox", "Responses stay under the survey you own, instead of a spreadsheet you stop opening."],
  ["AI brief", "Sentiment, themes, and next steps, only when you ask for them."],
  ["Pricing", "Free, Pro at $9, Team at $29. Naira option for Nigerian teams."],
]

export const CaseStudy = () => (
  <section id="case" className="px-4 py-16">
    <RevealOnScroll>
      <div className="mx-auto max-w-6xl">
        <p className="text-xs tracking-[0.22em] text-[#d6b07a]">CASE STUDY</p>
        <div className="mt-4 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="serif text-4xl leading-tight sm:text-6xl">FeedLoop is the product. The landings are the proof.</h2>
            <p className="mt-5 max-w-xl text-[#cfc8bb]">Most of the GitHub account is client-style surfaces. FeedLoop is the one with auth, a dashboard, public forms, and a price. That is the piece a founder should see first.</p>
            <div className="mt-6 flex gap-3">
              <a href="https://feed-loop-two.vercel.app" target="_blank" rel="noreferrer" className="rounded-full bg-[#f3efe6] px-4 py-2 text-sm text-[#0c0b09]">Open product</a>
              <a href="https://github.com/Dachenna/FeedLoop" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-sm">Source</a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[radial-gradient(120%_140%_at_20%_10%,rgba(214,176,122,0.35),transparent_60%),linear-gradient(160deg,#24180f,#0c0b09)] p-6">
            <p className="text-xs tracking-[0.18em] text-[#d6b07a]">STACK</p>
            <p className="serif mt-3 text-3xl">Next.js, Supabase, Tailwind, OpenRouter.</p>
            <p className="mt-3 text-sm text-[#cfc8bb]">Updated this month. Hosted on Vercel. The old portfolio never mentioned it.</p>
          </div>
        </div>
        <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {points.map(([title, body]) => (
            <div key={title} className="bg-[#0c0b09] p-5">
              <p className="text-sm text-[#d6b07a]">{title}</p>
              <p className="mt-2 text-[#cfc8bb]">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  </section>
)
