"use client";
import CurrencyConverter from './CurrencyConverter';
import MarketNews from './MarketNews';
import ConverHistory from './ConverHistory';
import ThemeButton from '../_Dashboard/ThemeButton';
import { CurrencyProvider } from './DataContext';
import { useTranslation } from "react-i18next";

export default function Converter() {
  const { t } = useTranslation();

  return (
    <main className='mt-15 px-4'>

      <div className='flex justify-between items-center'>
        <div>
          <h2 className='MyFont font-bold'>{t("currencyConverter")}</h2>
          <p className='text-sm'>{t("liveExchangeRates")}</p>
        </div>

        <ThemeButton />
      </div>

      <CurrencyProvider> 
        <div className='md:flex items-center gap-5'>
          <CurrencyConverter />
          <MarketNews />
        </div>

        <div>
          <ConverHistory />
        </div>
      </CurrencyProvider>

    </main>
  );
}