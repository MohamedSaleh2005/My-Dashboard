"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutAuth() {
  const { t } = useTranslation();

  return (
    <section className="pt-6 space-y-4">

      {/* Title */}
      <h4 className="MyFont text-2xl">
        🔐 {t("titl")}
      </h4>

      {/* Description */}
      <div className="text-sm space-y-2">

        <p>{t("description1")}</p>

        <ul className="space-y-2 ml-4 list-disc">
          <li>{t("list1")}</li>
          <li>{t("list2")}</li>
          <li>{t("list3")}</li>
        </ul>

        <p>{t("description2")}</p>

      </div>

    </section>
  );
}