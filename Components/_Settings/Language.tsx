"use client";

import { useUser } from "@clerk/nextjs";
import { useLanguageTransition } from "@/app/LanguageTransitionContext";
import { useTranslation } from "react-i18next";

export default function Language() {
  const { changeLanguage } = useLanguageTransition();
  const { t } = useTranslation();
  const { isSignedIn } = useUser(); // ✅ نعرف إذا المستخدم مسجل دخول

  const handleChangeLanguage = (lang: "ar" | "en") => {
    if (!isSignedIn) {
      alert("الرجاء تسجيل الدخول لتغيير اللغة"); // تمنع التغيير
      return;
    }
    changeLanguage(lang);
  };

  return (
    <div className="Special flex items-center justify-between mt-4 px-4 py-3 rounded-xl shadow-sm border border-white/10">
      <span className="MyFont">{t("selectLanguage")}</span>

      <div className="flex gap-3">
        <span
          onClick={() => handleChangeLanguage("ar")}
          className={`cursor-pointer transition-all duration-300 hover:scale-95 ${!isSignedIn ? "opacity-50 pointer-events-none" : ""}`}
        >
          {t("arabic")}
        </span>

        <span>|</span>

        <span
          onClick={() => handleChangeLanguage("en")}
          className={`cursor-pointer transition-all duration-300 hover:scale-95 ${!isSignedIn ? "opacity-50 pointer-events-none" : ""}`}
        >
          {t("english")}
        </span>
      </div>
    </div>
  );
}