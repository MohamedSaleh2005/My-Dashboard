import { FiLogIn } from 'react-icons/fi'

export default function Logout() {
  return (
    <div>
         <button className='flex w-full cursor-pointer items-center mt-[80%] text-md  gap-1 pl-5 py-1 bg-[rgba(75,192,192,0.3)] hover:opacity-70 transition-all duration-300'><FiLogIn />Logout</button>
    </div>
  )
}
