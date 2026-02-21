"use client";

import Pagination from "./Pagination";
import TableHeader from "./TableHeader";
import CurrencyList from "./CurrencyList";
import { useTranslation } from "react-i18next";

export default function Table() {
  const { t } = useTranslation();

  return (
    <div className="Special p-3 h-170 md:h-115 mt-3 flex flex-col">
      <TableHeader />

      <div className="w-full bg-[rgba(75,192,192,0.19)] h-10 mt-2 flex justify-between items-center font-bold px-3 text-sm rounded">
        <span>{t("asset")}</span>
        <span>{t("symbol")}</span>
        <span>{t("price")}</span>
        <span>{t("status")}</span>
        <span>{t("trend")}</span>
        <span>{t("favourite")}</span>
      </div>

      <Pagination itemsPerPage={60}>
        {(paginatedData) => (
          <div className="flex-1 overflow-scroll no-scrollbar">
            <CurrencyList data={paginatedData} />
          </div>
        )}
      </Pagination>
    </div>
  );
}