"use client";
import { useTranslation } from "react-i18next";
import { useUser } from "@clerk/nextjs";
import { useNotification } from "@/app/NotificationContext";

export default function Notification() {
  const { t } = useTranslation();
  const { isSignedIn } = useUser();
  const { isActive, toggleNotification } = useNotification();

  const handleClick = () => {
    if (!isSignedIn) return;
    toggleNotification();
  };

  return (
    <div className='Special flex items-center justify-between mt-4 px-4 py-3 rounded-xl shadow-sm border border-white/10'>
      <span className='text-sm MyFont'>{t("notification")}</span>

      <div
        onClick={handleClick}
        className={`w-14 h-7 flex items-center rounded-full p-1 transition
          ${!isSignedIn ? "bg-gray-300 opacity-50 cursor-not-allowed" : isActive ? "bg-[#1f747084] cursor-pointer" : "bg-gray-300 cursor-pointer"}`}
      >
        <div
          className={`w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300
            ${isActive ? "translate-x-7" : "translate-x-0"}`}
        ></div>
      </div>
    </div>
  );
}