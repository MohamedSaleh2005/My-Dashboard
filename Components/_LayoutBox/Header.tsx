import Link from 'next/link'
import { navitems } from './data'
import DarkMode from './DarkMode';
import { MdOutlinePlaylistPlay } from 'react-icons/md';
import { useMemo } from 'react';

interface HeaderProps {
  onMenuClick: () => void;
}
export default function Header({ onMenuClick }: HeaderProps) {
const today = useMemo(() => {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Africa/Cairo",
  });
}, []);


  return (
    <div className="md:pl-45 z-10 fixed w-full">

    <header className='Special text-md flex items-center justify-between py-2 px-8 shadow '>
      <span className='md:hidden text-2xl cursor-pointer' onClick={onMenuClick}><MdOutlinePlaylistPlay /></span>
      <h2>{today}</h2>

      <div className='flex gap-3'>
        <DarkMode />
        {navitems.map((item) => (
          <Link key={item.id} href={item.link} aria-label={item.label} className='hover:-translate-y-0.5 transition-all duration-300'>{item.icon}</Link>
        ))}
      </div>

    </header>
          </div>
  )
}
