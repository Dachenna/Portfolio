import { useState } from "react"
import emailjs from "emailjs-com"
import { RevealOnScroll } from "../RevealOnScroll"

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("Sending")
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then(() => {
      setStatus("Sent. I will reply.")
      setFormData({ name: "", email: "", message: "" })
    }).catch(() => setStatus("Could not send. Try X or GitHub."))
  }

  return (
    <section id="contact" className="px-4 py-16 pb-24">
      <RevealOnScroll>
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.22em] text-[#d6b07a]">CONTACT</p>
            <h2 className="serif mt-3 text-4xl sm:text-5xl">If the site needs to sell, start here.</h2>
            <p className="mt-4 max-w-md text-[#cfc8bb]">Landings, product builds, and redesigns. Tell me the business and the deadline.</p>
            <div className="mt-8 flex flex-col gap-2 text-sm">
              <a href="https://github.com/Dachenna" target="_blank" rel="noreferrer">GitHub · Dachenna</a>
              <a href="https://x.com/Da_chenna" target="_blank" rel="noreferrer">X · @Da_chenna</a>
              <a href="https://dbit.com.ng" target="_blank" rel="noreferrer">Studio · dbit.com.ng</a>
            </div>
          </div>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <input name="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-[#d6b07a]" />
            <input type="email" name="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-[#d6b07a]" />
            <textarea name="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="What should the site do?" className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none focus:border-[#d6b07a]" />
            <button className="w-full rounded-full bg-[#d6b07a] py-3 text-sm font-medium text-[#0c0b09]">Send</button>
            {status && <p className="text-sm text-[#cfc8bb]">{status}</p>}
          </form>
        </div>
      </RevealOnScroll>
    </section>
  )
}
