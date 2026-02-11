"use client";
import { useEffect, useState } from "react";
import { cards } from "./tybe";
//علشان اعمل التريند بشكل صحيح محتاج باك اند فنا عملتو هنا اقرب شئ للحقيقي
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

  // snapshot يوميًا الساعة 1:55 صباحا
  useEffect(() => {
    if (!rates) return;

    const checkAndSaveSnapshot = () => {
      const now = new Date();

      const hour = now.getHours();    
      const todayKey = now.toDateString();

      const lastSnapshotDay = localStorage.getItem("last_snapshot_day");

      // بما ان موقع الى الداتا اللى مستخدمو بيحدث الاسعار كل يوم الساعه اتنين بليل بتوقيت مصر
      const isSnapshotTime = hour === 24 ;                   
      const alreadySavedToday = lastSnapshotDay === todayKey;

      if ((!lastSnapshotDay || isSnapshotTime) && !alreadySavedToday) {

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


    checkAndSaveSnapshot();
    const interval = setInterval(checkAndSaveSnapshot, 30 * 1000);


    // فحص فوري عند تشغيل الموقع
    checkAndSaveSnapshot();

    return () => clearInterval(interval);
  }, [rates]);

  return oldPrices;
}
