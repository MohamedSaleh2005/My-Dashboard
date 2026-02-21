"use client";
import { useTranslation } from "react-i18next";

export default function Logout() {
  const { t } = useTranslation();

  return (
    <button className='cursor-pointer transition-all duration-300 hover:scale-95 bg-[#4daca767] shadow-sm py-1 px-8 rounded-sm mt-5 MyFont'>
      {t("logout")}
    </button>
  );
}