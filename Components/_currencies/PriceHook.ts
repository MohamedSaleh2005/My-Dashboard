"use client";
import { useEffect, useState } from "react";

export function useDailyRatesSnapshot(rates: Record<string, number>) {
  const [previousRates, setPreviousRates] = useState<Record<string, number>>({});

 
  useEffect(() => {
    const saved = localStorage.getItem("rates_history");
    if (saved) {
      try {
        setPreviousRates(JSON.parse(saved));
      } catch {
        setPreviousRates({});
      }
    }
  }, []);

  useEffect(() => {
    if (!rates || Object.keys(rates).length === 0) return;

    const handleSnapshot = () => {
      const now = new Date();
      const currentHour = now.getHours();
      const today = now.toDateString();

      const lastSavedDay = localStorage.getItem("last_saved_day");
      const alreadySaved = lastSavedDay === today;

      
      if ((currentHour === 11 && !alreadySaved) || !lastSavedDay) {
        
        const snapshot: Record<string, number> = {};
        Object.keys(rates).forEach((code) => {
          const rate = rates[code];
          if (!rate) return;
          snapshot[code] = 1 / rate;
        });

        localStorage.setItem("rates_history", JSON.stringify(snapshot));
        localStorage.setItem("last_saved_day", today);
        setPreviousRates(snapshot);
        console.log("Daily snapshot stored:", snapshot);
      }
    };

    handleSnapshot();
    const timer = setInterval(handleSnapshot, 30000);

    return () => clearInterval(timer);
  }, [rates]);

 
  const getOldPrice = (code: string) => {
    return previousRates[code];
  };

  return { previousRates, getOldPrice };
}
