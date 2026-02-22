"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutFavorites() {
  const { t } = useTranslation();

  return (
    <section className="pt-6 space-y-4">

      {/* Title */}
      <h4 className="MyFont text-2xl ">
        {t("about.favorites.title")}
      </h4>

      {/* Description */}
      <div className="text-sm space-y-2">

        <p>{t("about.favorites.description")}</p>

        <ul className="space-y-2 ml-4 list-disc">
          <li>{t("about.favorites.items.0")}</li>
          <li>{t("about.favorites.items.1")}</li>
          <li>{t("about.favorites.items.2")}</li>
        </ul>

        <p>{t("about.favorites.note")}</p>

      </div>

    </section>
  );
}