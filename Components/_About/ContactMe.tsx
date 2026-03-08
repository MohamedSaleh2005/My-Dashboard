import { FaGithub, FaInstagram } from 'react-icons/fa6'
import { RiVercelLine } from 'react-icons/ri'

export default function ContactMe() {
  return (
    <footer className='mb-10'>
      <div className='flex justify-between px-5'>
        <p className='text-gray-400'>smaratrader2005@gmail.com</p>
        <div className='flex gap-2 text-sm'>
          <a href="https://www.instagram.com/xs_______707" className='border p-1 rounded-full hover:scale-95 transition-all duration-300'><FaInstagram /></a>
          <a href="https://github.com/MohamedSaleh2005" className='border p-1 rounded-full hover:scale-95 transition-all duration-300'><FaGithub /></a>
          <a href="https://vercel.com/mohamedsaleh2005s-projects" className='border p-1 rounded-full hover:scale-95 transition-all duration-300'><RiVercelLine /></a>
        </div>
      </div>
    </footer>
  )
}
