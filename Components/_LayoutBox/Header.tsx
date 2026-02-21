"use client";
import Link from 'next/link';
import { navitems } from './type';
import { MdOutlinePlaylistPlay } from 'react-icons/md';
import { useMemo } from 'react';
import Alert from '../_Settings/Alert';
import { useTranslation } from "react-i18next";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { i18n } = useTranslation(); // ناخد الـ i18n عشان نحدد اللغة

  const today = useMemo(() => {
    // لو اللغة عربية نخلي locale "ar-EG" عشان التاريخ بالعربي
    const locale = i18n.language === "ar" ? "ar-EG" : "en-US";

    return new Date().toLocaleDateString(locale, {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "Africa/Cairo",
    });
  }, [i18n.language]); // نحدث التاريخ لما اللغة تتغير

  return (
    <div className="md:pl-45 z-10 fixed w-full">
      <header className='Special text-md flex items-center justify-between py-2 px-8 shadow'>
        <span className='md:hidden text-2xl cursor-pointer' onClick={onMenuClick}>
          <MdOutlinePlaylistPlay />
        </span>
        <h2>{today}</h2>

        <div className='flex gap-3'>
          <Alert />
          {navitems.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              aria-label={item.label}
              className='hover:-translate-y-0.5 transition-all duration-300'
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </header>
    </div>
  );
}