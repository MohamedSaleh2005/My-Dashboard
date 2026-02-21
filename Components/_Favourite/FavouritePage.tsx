"use client";
import React from 'react';
import ThemeButton from '../_Dashboard/ThemeButton';
import FavouriteCurrencies from './FavouriteCurrencies';
import { useTranslation } from "react-i18next";

export default function Favourite() {
  const { t } = useTranslation();

  return (
    <div className='px-4 mt-15 w-full h-120'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='MyFont font-bold'>{t("favouriteCurrencies")}</h2>
          <p className='text-sm'>{t("livefavurite")}</p>
        </div>

        <div>
          <ThemeButton />
        </div>
      </div>

      <div>
        <FavouriteCurrencies />
      </div>
    </div>
  );
}