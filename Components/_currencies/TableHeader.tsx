"use client";
import SearchBox from "./SearchBox";
import { useTableContext } from "./TableContext";
import { useTranslation } from "react-i18next";

export default function TableHeader() {
  const { searchTerm, setSearchTerm } = useTableContext();
  const { t } = useTranslation();

  return (
    <div className="flex justify-between text-sm text-gray-400">
      <h3>{t("allCurrenciesHere")}</h3>
      <SearchBox value={searchTerm} onChange={setSearchTerm} />
    </div>
  );
}