import { Book } from 'lucide-react';
import
 { FaHtml5, 
   FaCloud,
   FaNpm
 } from 'react-icons/fa';
import { FaCss3Alt, FaCheckToSlot } from 'react-icons/fa6';
import { FaReact } from 'react-icons/fa6';
import 
{ SiTailwindcss,
  SiJavascript,
  SiShadcnui,
  SiCloudinary,
  SiGraphql,
  SiHostinger,
  SiVite,
  SiTensorflow
} from "react-icons/si";
import { RiFirebaseFill } from "react-icons/ri";
import { MdRuleFolder } from "react-icons/md";
import { TbApi, TbChartAreaLineFilled  } from "react-icons/tb";

export const About = () => {

  const frontend = [
    {
      skill: "HTML",
      icon: <FaHtml5 className='inline-block text-red-500' />
    },

    {
      skill: "CSS",
      icon: <FaCss3Alt className='inline-block text-pink-500' />
    },

   {
    skill: "JavaScript (ES6+)",
    icon: <SiJavascript className='inline-block text-yellow-500' />
   },
   
   {
    skill:"ShadCN/Ui",
    icon: <SiShadcnui className='inline-block text-purple-500' />
   },
   
   {
    skill: "Cloundinary",
    icon: <SiCloudinary className='inline-block text-white' />
   },
  
   {
    skill: "React",
    icon: <FaReact className='inline-block text-blue-500' />
   },
  
   {
    skill: "TensorFlow.js",
    icon: <SiTensorflow className='inline-block text-green-500' />
   },
  
   {
    skill: "Vite",
    icon: <SiVite className='inline-block text-cyan-500' />
   },

   {
    skill: "NPM",
    icon: <FaNpm className='inline-block  text-xl text-red-500' />
   },
  
   {
    skill: "Tailwind CSS",
    icon: <SiTailwindcss className='inline-block text-blue-400' />
   },

  "Responsive Design",
  ];

  const backend = [
   {
    skill: "GraphQL",
    icon: <SiGraphql className='inline-block text-purple-600' />
   },
  
   {
    skill: "Firebase",
    icon: <RiFirebaseFill className='inline-block text-yellow-500' />
   },
  
   {
    skill: "Firebase Authentication",
    icon: <FaCheckToSlot className='inline-block text-green-500' />
   },

   {
    skill: "Firestore Rules",
    icon: <MdRuleFolder className='inline-block text-yellow-500' />
   },
  
   {
    skill: "RESTful APIs Integration",
    icon: <TbApi className='inline-block text-violet-500' />
   },

   {
    skill: "Deployment & Hosting",
    icon: <SiHostinger className='inline-block text-orange-500' />
   },

   {
    skill: "Cloud Functions",
    icon: <FaCloud className='inline-block text-white' />
   },
  
   {
    skill: "Real-time Data Handling",
    icon: <TbChartAreaLineFilled className='inline-block text-green-500' />
   },
  ];

  return (
    <section id='about' className='max-w-3xl mx-auto px-4 '>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent'>
          {" "}
          About Me
        </h2>
        <div className='p-6 rounded-lg border-white/10 border hover:-translate-y-1 transition-all'>
          <p className='text-gray-300 mb-6 text-justify'>
            I'm a React web developer passionate about building fast,
            responsive, and visually engaging web applications. 
            I specialize in integrating Firebase for authentication and backend services,
            implementing Cloudinary for media handling, and using tools like TensorFlow.js for intelligent image recognition. 
            With a focus on UI/UX, I create sleek, animated interfaces that are both functional and user-friendly. 
            I’ve also built blockchain-integrated systems, showcasing my ability to handle advanced, scalable tech stacks.
            Whether for startups, agencies, or freelance clients, I deliver clean code, reliable performance, and real results.
          </p>
            {/*Frontend and Backend Skills*/}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='rounded-xl p-6 hover:translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4 text-gray-200'>
                Frontend
              </h3>
              <div className=' flex flex-wrap gap-2'>
                {frontend.map((frontend, key)=>(
                  <span key={key}
                    className='bg-violet-500/10 text-blue-500 py-1 px-3 rounded-full border border-gray-500/50 text-sm hover:bg-violet-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'
                  >
                    {frontend.icon ? (
                      <span className='inline-flex items-center gap-1'>
                        {frontend.icon} {frontend.skill}
                      </span>
                    ) : (
                      <span>{frontend}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
                {/* Backend Skills */}

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='rounded-xl p-6 hover:translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4 text-gray-200'>
                Backend
              </h3>
              <div className=' flex flex-wrap gap-2'>
                {backend.map((backend, index)=>(
                  <span key={index}
                   className='bg-violet-500/10 text-blue-500 py-1 px-3 rounded-full text-sm border border-gray-500/50 hover:bg-violet-500/20
                            hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition'
                  >
                    {backend.icon ? (
                      <span className='inline-flex items-center gap-1'>
                        {backend.icon} {backend.skill}
                      </span>
                    ) : (
                      <span>{backend}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'> 
              <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'> <Book /> Education</h3>
                <ul>
                  <li>
                    <strong>B.S in Computer Science</strong> -Abia State University [2020-2024]
                  </li>
                </ul>
              </div>
              <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Work Experience</h3>
              </div>
          </div>
        </div>
    </section>
  )
}