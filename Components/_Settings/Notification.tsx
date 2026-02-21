"use client";
import { useTranslation } from "react-i18next";

export default function Notification() {
    const { t } = useTranslation();

    return (
        <div className='Special flex items-center justify-between mt-4 px-4 py-3 rounded-xl shadow-sm border border-white/10'>
            <span className='text-sm MyFont'>{t("notification")}</span>

            <div className="w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer">
                <div className="w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300"></div>
            </div>
        </div>
    );
}