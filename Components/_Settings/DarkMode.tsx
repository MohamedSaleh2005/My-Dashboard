"use client";

import { useTheme } from "@/app/ThemeContext";
import { useTranslation } from "react-i18next";


export default function DarkBtn() {
  const { t } = useTranslation();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className='Special flex items-center justify-between mt-4 px-4 py-3 rounded-xl shadow-sm border border-white/10'>
      <span className='text-sm MyFont'>{t("darkMode")}</span>

      <div
        onClick={toggleTheme}
        className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition
        ${isDark ? "bg-[#4daca767]" : "bg-gray-300"}`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300
          ${isDark ? "translate-x-7" : "translate-x-0"}`}
        ></div>
      </div>
    </div>
  );
}