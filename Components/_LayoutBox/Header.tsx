import { MdOutlinePlaylistPlay } from 'react-icons/md';
import { useMemo } from 'react';
import Alert from '../_Settings/Alert';
import { useTranslation } from "react-i18next";
import AuthBtn from './AuthBtn';
import SettingBtn from '../_Settings/SettingBtn';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const { i18n } = useTranslation();

  const today = useMemo(() => {
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
    <header className="md:pl-45 z-10 fixed w-full">
      <div className='Special text-md flex items-center justify-between py-2 px-8 shadow'>
        <span className='md:hidden text-2xl cursor-pointer' onClick={onMenuClick}>
          <MdOutlinePlaylistPlay />
        </span>
        <h2>{today}</h2>

        <div className='flex gap-3 items-center'>
          <Alert />
          <SettingBtn />
          <AuthBtn />
        </div>
      </div>
    </header>
  );
}