"use client";
import { useCurrencyContext } from "./DataContext";
import { useTranslation } from "react-i18next";

export default function CurrencyResult() {
  const { value, oneResult, result, setResult, addToHistory } = useCurrencyContext();
  const { t } = useTranslation();

  return (
    <div className="flex justify-between items-center mb-3">
      <div>
        <h3 className="text-3xl MyFont transition-all duration-1000">
          {(result)?.toFixed(2)}
        </h3>

        <p className="text-sm">
          1 USD = {(oneResult.price).toFixed(1)} {oneResult.currency}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          className="bg-[rgba(75,192,192,0.32)] py-1 px-3 shadow rounded-sm cursor-pointer hover:scale-95 transition-all duration-300"
          onClick={() => addToHistory()}
        >
          {t("add")}
        </button>

        <button
          className="bg-[rgba(75,192,192,0.27)] py-1 px-3 shadow rounded-sm cursor-pointer hover:scale-95 transition-all duration-300"
          onClick={() => setResult(value)}
        >
          {t("convert")}
        </button>
      </div>
    </div>
  );
}