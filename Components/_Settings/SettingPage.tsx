"use client";
import DarkBtn from './DarkMode';
import DefaultCurrency from './DefultCurrency';
import JoinUs from './JoinUs';
import Language from './Language';
import Logout from './Logout';
import Notification from './Notification';
import { DarkProvider } from './SettingContext';
import { useTranslation } from "react-i18next";
import { useUser } from "@clerk/nextjs"; // ✅ استيراد useUser

export default function SettingPage() {
  const { t } = useTranslation();
  // ✅ بيانات المستخدم
  

  return (
    <div className='px-4 mt-15 w-full h-120'>
      <div className="mb-4 flex justify-between">
        <div>
        <h3 className='MyFont font-bold'>{t("settings")}</h3>
        <p className='text-sm'>{t("pleaseCreateAccount")}</p>
        </div>

        {/* ✅ عرض اسم المستخدم لو مسجل دخول */}
      
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