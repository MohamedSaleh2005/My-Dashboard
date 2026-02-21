"use client";
import { createContext, useContext, useState } from "react";

type DarkContextType = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const DarkContext = createContext<DarkContextType | null>(null);

export function DarkProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  return (
    <DarkContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkContext.Provider>
  );
}

export function useDark() {
  const context = useContext(DarkContext);
  if (!context) throw new Error("useDark لازم يتستخدم جوه DarkProvider");
  return context;
}