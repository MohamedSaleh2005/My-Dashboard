"use client";
import React from 'react';
import { useTranslation } from "react-i18next";

export default function JoinUs() {
    const { t } = useTranslation();

    return (
        <div className='Special flex items-center justify-between mt-4 px-4 py-3 rounded-xl shadow-sm border border-white/10'>
            <span className="MyFont">{t("letsAccessAccount")}</span>

            <div className='flex gap-3'>
                <button className='cursor-pointer transition-all duration-300 hover:scale-95'>
                    {t("login")}
                </button>
                <span>|</span>
                <button className='cursor-pointer transition-all duration-300 hover:scale-95'>
                    {t("register")}
                </button>
            </div>
        </div>
    );
}