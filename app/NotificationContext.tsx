"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface NotificationContextType {
  isActive: boolean;
  toggleNotification: () => void;
}

// إنشاء Context
const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [isActive, setIsActive] = useState(false);

  const toggleNotification = () => setIsActive(prev => !prev);

  return (
    <NotificationContext.Provider value={{ isActive, toggleNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}


export function useNotification() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
}