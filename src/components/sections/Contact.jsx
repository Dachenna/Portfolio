import { RevealOnScroll } from "../RevealOnScroll"
import emailjs from 'emailjs-com';

export  const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    // EmailJS configuration
    const SERVICE_ID = 'service_go26d9b';
    const TEMPLATE_ID = 'template_e3rggwn';
    const PUBLIC_KEY = 'QmAVdmK_sUg2gieA2';

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY).then((result) => {
            alert("Message sent successfully!");
            setFormData({
                name: '',
                email: '',
                message: ''
            })
        }).catch(() => alert("Oops! Something went wrong. Please try again later."));
    }
    return (
        <section 
        id="contact"
         className="min-h-screen flex items-center justify-center py-20"
         >
            <RevealOnScroll>
                <div className="px-4 w-150">

                    <h2 className="text-3xl font-bold mb-8 
                     bg-gradient-to-r from-purple-500 to-cyan-400 
                     bg-clip-text text-transparent"
                     >
                        Contact me
                     </h2>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/**Name */}
                        <div className="relative">
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                required 
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Name..."
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                             />
                        </div>

                        {/**Email */}
                        <div className="relative">
                            <input 
                                type="email" 
                                id="email" 
                                name="name" 
                                value={formData.email}
                                required 
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="example@gmail.com"
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                             />
                        </div>

                         {/**Message */}
                        <div className="relative">
                            <textarea 
                                id="message" 
                                name="message" 
                                required 
                                value={formData.message}
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                                placeholder="Your Message..."
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                             />
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden
                             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            Lets Connect
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    )
}