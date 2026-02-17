"use client";
import { useEffect, useState } from "react";

type Currency = {
  currencyCode: string
  currencyName: string
  icon: string
  status: string
}

type CurrencyItem = {
  code: string
  name: Currency
}

export function useCurrencySnapshot(
  data: CurrencyItem[],
  rates: Record<string, number>
) {
  const [oldPrices, setOldPrices] = useState<Record<string, number>>({});

  // قراءة snapshot القديم
  useEffect(() => {
    const stored = localStorage.getItem("old_prices");
    if (stored) {
      setOldPrices(JSON.parse(stored));
    }
  }, []);

  // حفظ snapshot بعد التحديث (delay بسيط)
  useEffect(() => {
    if (!rates || data.length === 0) return;

    const timer = setTimeout(() => {
      const newSnapshot: Record<string, number> = {};

      data.forEach((item) => {
        const rate = rates[item.name.currencyCode];
        if (!rate) return;
        newSnapshot[item.name.currencyCode] = 1 / rate;
      });

      localStorage.setItem("old_prices", JSON.stringify(newSnapshot));
    }, 5000); // بعد 5 ثواني

    return () => clearTimeout(timer);
  }, [data, rates]);

  return oldPrices;
}
