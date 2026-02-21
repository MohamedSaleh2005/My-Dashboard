"use client";
import { MdDelete } from "react-icons/md";
import { useCurrencyContext } from "./DataContext";
import { useTranslation } from "react-i18next";

export default function ConverHistory() {
  const { history, deleteFromHistory } = useCurrencyContext();
  const { t, i18n } = useTranslation();

  const locale = i18n.language === "ar" ? "ar-EG" : "en-GB";

  return (
    <section className="Special pb-4 pt-2 px-2 h-75 md:h-60 mt-5 shadow-[rgba(75,192,192,0.3)] shadow rounded-xl">

      {/* Header */}
      <div className="flex items-center justify-between text-gray-400 text-sm">
        <h3>{t("allConversionHistory")}</h3>
        <span>{t("updatedJustNow")}</span>
      </div>

      <div className="mt-3">

        {/* Table Header */}
        <div className="flex px-2 md:px-0 bg-[rgba(85,216,216,0.19)] text-sm font-serif rounded-t-lg">
          {[
            "id",
            "amountShort",
            "from",
            "to",
            "resultShort",
            "date",
            "time",
            "action",
          ].map((title) => {

            if (title === "date") {
              return (
                <span key={title} className="flex-1 text-center py-2 hidden md:flex ml-2 md:relative left-4">
                  {t(title)}
                </span>
              );
            }

            return (
              <span key={title} className="flex-1 text-center py-2">
                {t(title)}
              </span>
            );
          })}
        </div>

        {/* Table Body */}
        <div className="h-55 md:h-40 overflow-y-auto no-scrollbar">
          {history.map((item) => (
            <span
              key={item.id}
              className="flex items-center justify-between bg-white/50 md:bg-transparent mb-2 md:mb-1 p-2 md:p-0 rounded-md shadow md:shadow-none w-full"
            >
              <span className="flex-1 text-center py-1">{item.id}</span>

              <span className="flex-1 text-center py-1 mr-1">
                {item.amount.toFixed(2)}
              </span>

              <span className="flex-1 text-center py-1">USD</span>

              <span className="flex-1 text-center py-1">{item.currency}</span>

              <span className="flex-1 text-center py-1">
                {item.result.toFixed(2)}
              </span>

              <span className="flex-1 text-center py-1 hidden md:flex">
                {new Date(item.date).toLocaleDateString(locale, {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>

              <span className="flex-1 text-center py-1 ml-2">
                {new Date(item.date).toLocaleTimeString(locale, {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </span>

              <span className="flex-1 text-center py-1">
                <button
                  className="px-2 py-1 bg-red-800 text-white rounded-md cursor-pointer hover:scale-95 transition-all duration-300"
                  onClick={() => deleteFromHistory(item.id)}
                >
                  <MdDelete />
                </button>
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}