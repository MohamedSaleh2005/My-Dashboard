"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import i18n from "./Translate"; // إعداد i18n جاهز


type LanguageContextType = {
  fade: boolean;
  changeLanguage: (lng: string) => void;
};

const LanguageTransitionContext = createContext<LanguageContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [fade, setFade] = useState(false);

const changeLanguage = (lng: string) => {
  setFade(true);

  setTimeout(() => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // 👈 نحفظ هنا
    setFade(false);
  }, 300);
};

  return (
    <LanguageTransitionContext.Provider value={{ fade, changeLanguage }}>
      <div className={`transition-opacity duration-300 ${fade ? "opacity-0" : "opacity-100"}`}>
        {children}
      </div>
    </LanguageTransitionContext.Provider>
  );
}

export function useLanguageTransition() {
  const context = useContext(LanguageTransitionContext);
  if (!context) throw new Error("useLanguageTransition must be used within I18nProvider");
  return context;
}