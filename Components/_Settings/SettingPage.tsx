"use client";
import DarkBtn from './DarkMode';
import DefaultCurrency from './DefultCurrency';
import JoinUs from './JoinUs';
import Language from './Language';
import Logout from './Logout';
import Notification from './Notification';
import { DarkProvider } from './SettingContext';
import { useTranslation } from "react-i18next";

export default function SettingPage() {
  const { t } = useTranslation();

  return (
    <div className='px-4 mt-15 w-full h-120'>
      <div>
        <h3 className='MyFont font-bold'>{t("settings")}</h3>
        <p className='text-sm'>{t("pleaseCreateAccount")}</p>
      </div>
      <DarkProvider>
          <DarkBtn />
          <Notification />
          <DefaultCurrency />
          <Language />
          <JoinUs />
          <Logout />
      </DarkProvider>
    </div>
  );
}