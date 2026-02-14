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


export function useCurrencySnapshot(data: CurrencyItem[], rates: Record<string, number>) {
  const [oldPrices, setOldPrices] = useState<Record<string, number>>({});

  // تحميل الأسعار القديمة من localStorage
  useEffect(() => {
    const storedOldPrices = localStorage.getItem("old_prices");
    if (storedOldPrices) {
      try {
        setOldPrices(JSON.parse(storedOldPrices));
      } catch (error) {
        console.error("خطأ في قراءة الأسعار القديمة:", error);
        setOldPrices({});
      }
    }
  }, []);

  // حفظ snapshot فورًا
  useEffect(() => {
    if (!rates || data.length === 0) return;

    const newSnapshot: Record<string, number> = {};
    data.forEach((item) => {
      const rate = rates[item.name.currencyCode];
      if (!rate) return;
      newSnapshot[item.name.currencyCode] = 1 / rate;
    });

    localStorage.setItem("old_prices", JSON.stringify(newSnapshot));
    setOldPrices(newSnapshot);

  }, [data, rates]);

  return oldPrices;
}
