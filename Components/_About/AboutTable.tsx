"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutTable() {
  const { t } = useTranslation();

  return (
    <section className="space-y-4 mt-6">

      {/* Title */}
      <div>
        <h4 className="MyFont text-2xl">
          {t("about.table.title")}
        </h4>
        <p className="text-sm mt-2">{t("about.table.description")}</p>
      </div>

      {/* Features List */}
      <div>
        <ul className="space-y-2 text-sm">
          <li>{t("about.table.features.0")}</li>
          <li>{t("about.table.features.1")}</li>
          <li>{t("about.table.features.2")}</li>
        </ul>
      </div>

      {/* Favorite Logic Description */}
      <div className="text-sm space-y-2">
        <p>{t("about.table.favoriteIntro")}</p>
        <ul className="space-y-1 ml-4 list-disc">
          <li>{t("about.table.favoriteItems.0")}</li>
          <li>{t("about.table.favoriteItems.1")}</li>
          <li>{t("about.table.favoriteItems.2")}</li>
        </ul>
        <p>{t("about.table.favoriteNote")}</p>
      </div>

    </section>
  );
}