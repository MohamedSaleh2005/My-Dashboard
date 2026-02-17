"use client";
import { useEffect, useState } from "react";
import { cards } from "../Components/_Dashboard/tybe";

export function useCurrencySnapshot(rates: Record<string, number>) {
  const [oldPrices, setOldPrices] = useState<Record<string, number>>({});

  // قراءة snapshot القديم
  useEffect(() => {
    const stored = localStorage.getItem("old_prices");
    if (stored) {
      try {
        setOldPrices(JSON.parse(stored));
      } catch {
        setOldPrices({});
      }
    }
  }, []);

  // حفظ snapshot مرة يوميًا الساعة 11
  useEffect(() => {
    if (!rates) return;

    const saveSnapshotIfNeeded = () => {
      const now = new Date();
      const hour = now.getHours();
      const todayKey = now.toDateString();

      const lastSnapshotDay = localStorage.getItem("last_snapshot_day");

      if (hour === 23 && lastSnapshotDay !== todayKey) {
        const newSnapshot: Record<string, number> = {};

        cards.forEach((card) => {
          const rate = rates[card.price];
          if (!rate) return;
          newSnapshot[card.id] = 1 / rate;
        });

        localStorage.setItem("old_prices", JSON.stringify(newSnapshot));
        localStorage.setItem("last_snapshot_day", todayKey);

        setOldPrices(newSnapshot);
      }
    };

    saveSnapshotIfNeeded();

    const interval = setInterval(saveSnapshotIfNeeded, 30000);
    return () => clearInterval(interval);
  }, [rates]);

  return oldPrices;
}
