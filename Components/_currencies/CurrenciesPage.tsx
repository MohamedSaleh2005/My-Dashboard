"use client";
import ThemeButton from "../_Dashboard/ThemeButton";
import { FavouriteProvider } from "../_Favourite/FavouriteContext";
import Table from "./Table";
import { TableProvider } from "./TableContext";
import { useTranslation } from "react-i18next";

export default function CurrenciesPage() {
  const { t } = useTranslation();

  return (
    <div className="px-4 mt-15 w-full h-120">
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='MyFont font-bold'>{t("currenciesTable")}</h2>
          <p className='text-sm'>{t("liveExchangeRates")}</p>
        </div>

        <div>
          <ThemeButton />
        </div>
      </div>

      <div>
        <TableProvider>
          <Table />
        </TableProvider>
      </div>
    </div>
  );
}