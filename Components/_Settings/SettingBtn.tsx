import Link from 'next/link'
import { IoSettingsSharp } from 'react-icons/io5'

export default function SettingBtn() {
  return (
    <Link href={"/settings"}><IoSettingsSharp className='hover:-translate-y-0.5 transition-all duration-300 cursor-pointer'/></Link>
  )
}
