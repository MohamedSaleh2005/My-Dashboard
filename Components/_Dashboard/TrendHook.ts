"use client";
import { useEffect, useState } from "react";
import { cards } from "./tybe";

export function useCurrencySnapshot(rates: Record<string, number>) {
  const [oldPrices, setOldPrices] = useState<Record<string, number>>({});

  useEffect(() => {
    const storedOldPrices = localStorage.getItem("old_prices");
    if (storedOldPrices) {
      try {
        setOldPrices(JSON.parse(storedOldPrices));
      } catch {
        setOldPrices({});
      }
    }
  }, []);

  useEffect(() => {
    if (!rates) return;

    const checkAndSaveSnapshot = () => {
      const now = new Date();
      const hour = now.getHours();
      const todayKey = now.toDateString();

      const lastSnapshotDay = localStorage.getItem("last_snapshot_day");

      const isSnapshotTime = hour === 23;
      const alreadySavedToday = lastSnapshotDay === todayKey;

      if (isSnapshotTime && !alreadySavedToday) {
        const newSnapshot: Record<string, number> = {};

        cards.forEach((card) => {
          const rate = rates[card.price];
          if (!rate) return;
          newSnapshot[card.id] = 1 / rate;
        });

        localStorage.setItem("old_prices", JSON.stringify(newSnapshot));
        localStorage.setItem("last_snapshot_day", todayKey);

        setOldPrices(newSnapshot);
        console.log("Snapshot saved:", newSnapshot);
      }
    };

    checkAndSaveSnapshot();
    const interval = setInterval(checkAndSaveSnapshot, 30000);

    return () => clearInterval(interval);
  }, [rates]);

  return oldPrices;
}
