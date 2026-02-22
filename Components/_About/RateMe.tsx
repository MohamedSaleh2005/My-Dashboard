"use client";
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type StarRatingProps = {
  maxStars?: number;
  storageKey?: string; // مفتاح الحفظ في Local Storage
  onChange?: (rating: number) => void;
};

export default function RateMe({ maxStars = 5, storageKey = "userRating", onChange }: StarRatingProps) {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);

  // Load saved rating from Local Storage
  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setRating(Number(saved));
  }, [storageKey]);

  // Save rating to Local Storage whenever it changes
  const handleRating = (value: number) => {
    setRating(value);
    localStorage.setItem(storageKey, value.toString());
    if (onChange) onChange(value);
  };

  return (
    <div className="flex flex-col items-center justify-center my-15">
      
      {/* Title */}
      <h4 className="MyFont text-xl">
        {t("about.rateMe.title")}
      </h4>

      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: maxStars }, (_, index) => {
          const starValue = index + 1;
          return (
            <button
              key={starValue}
              type="button"
              className={`text-3xl transition-colors cursor-pointer ${
                starValue <= rating
                  ? "text-yellow-400"
                  : "text-gray-300 dark:text-gray-500"
              }`}
              onClick={() => handleRating(starValue)}
            >
              ★
            </button>
          );
        })}
      </div>

      {/* Rating Value */}
      <span className="text-sm">
        {rating} / {maxStars}
      </span>
    </div>
  );
}