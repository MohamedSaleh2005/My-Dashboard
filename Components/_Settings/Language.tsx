"use client";
import { useLanguageTransition } from "@/app/LanguageTransitionContext";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type languages = "ar" | "en"
export default function Language() {
  
  const { changeLanguage } = useLanguageTransition(); // ناخد الدالة من الـ context
  const { t } = useTranslation();


  return (
    <div className='Special flex items-center justify-between mt-4 px-4 py-3 rounded-xl shadow-sm border border-white/10'>
      <span className="MyFont">{t("selectLanguage")}</span>

      <div className='flex gap-3'>
        <span
          onClick={() => changeLanguage("ar")} // استخدمنا الدالة من context
          className='cursor-pointer transition-all duration-300 hover:scale-95'
        >
          {t("arabic")}
        </span>

        <span>|</span>

        <span
          onClick={() => changeLanguage("en")} // نفس الشي
          className='cursor-pointer transition-all duration-300 hover:scale-95'
        >
          {t("english")}
        </span>
      </div>
    </div>
  );
}