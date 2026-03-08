"use client";
import { HiMiniBellAlert } from "react-icons/hi2";
import { useUser } from "@clerk/nextjs";
import { useNotification } from "@/app/NotificationContext";
import { useState } from "react";

export default function NotificationBell() {
  const { isSignedIn, user } = useUser();
  const { isActive, toggleNotification } = useNotification();
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false); // ✅ هل المستخدم شاف الاشعار

  const handleClick = () => {
    if (!isSignedIn) return;
    setOpen(prev => !prev);    // يفتح/يغلق البوب أب
    setSeen(true);             // بعد الضغط، العلامة الحمراء تختفي
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleClick}
        className="relative hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
      >
        <HiMiniBellAlert className="text-lg" />

        
        {isActive && !seen && (
          <span className="absolute bottom-2.5 right-2.5 w-2.5 h-2.5 bg-red-700 rounded-full "></span>
        )}
      </button>

      <div
        className={`Special shadow shadow-slate-900 w-45 rounded right-3 h-15 transition-all duration-1000 fixed top-12 text-center MyFont Close ${isActive && open ? "Open" : ""}`}
      >
        <p className="text-sm py-1 px-2">
          {isSignedIn && user ? `Hello ${user.firstName || user.username} 👋` : ""}
        </p>
        <p className="text-sm py-1 px-2">Welcome Back!</p>
      </div>
    </div>
  );
}