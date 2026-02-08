"use client";
import { useEffect, useState } from "react";
import { cards } from "./tybe";

export function useCurrencySnapshot(rates: Record<string, number>) {
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

  // إنشاء snapshot يوميًا الساعة 11:55 مساءً
  useEffect(() => {
    if (!rates) return;

    const checkAndSaveSnapshot = () => {
      const now = new Date();

      const hour = now.getHours();
      const minutes = now.getMinutes();
      const todayKey = now.toDateString();

      const lastSnapshotDay = localStorage.getItem("last_snapshot_day");

      // 11:55 مساءً أو بعدها
      if (hour === 23 && minutes >= 55 && lastSnapshotDay !== todayKey) {
        const newSnapshot: Record<string, number> = {};

        cards.forEach((card) => {
          const rate = rates[card.price];
          if (!rate) return;
          newSnapshot[card.id] = 1 / rate;
        });

        localStorage.setItem("old_prices", JSON.stringify(newSnapshot));
        localStorage.setItem("last_snapshot_day", todayKey);

        // تحديث الحالة فورًا
        setOldPrices(newSnapshot);

        console.log("Snapshot saved:", newSnapshot);
      }
    };

    // فحص كل دقيقة
    const interval = setInterval(checkAndSaveSnapshot, 60 * 1000);

    // فحص فوري عند تشغيل الموقع
    checkAndSaveSnapshot();

    return () => clearInterval(interval);
  }, [rates]);

  return oldPrices;
}
