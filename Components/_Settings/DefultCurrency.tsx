"use client";
import { useTranslation } from "react-i18next";

export default function DefaultCurrency() {
  const { t } = useTranslation();

  return (
    <div className="Special flex items-center justify-between mt-4 px-4 py-3 rounded-xl shadow-sm border border-white/10 cursor-not-allowed">
      
      <div>
        <p className="text-sm MyFont">{t("defaultCurrency")}</p>
        <p className="text-xs text-gray-400">{t("comingSoon")}</p>
      </div>

      <div className="px-3 py-1 rounded-md text-sm text-gray-300">
        USD
      </div>

    </div>
  );
}