"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutConverter() {
  const { t } = useTranslation();

  return (
    <section className="pt-6 space-y-4">

      {/* Title */}
      <h4 className="MyFont text-2xl">
        🔄 {t("aboutConverter.title")}
      </h4>

      {/* Description */}
      <div className="text-sm space-y-3">

        <p>{t("aboutConverter.description1")}</p>

        <ul className="space-y-2 ml-4 list-disc">
          <li>{t("aboutConverter.list1")}</li>
          <li>{t("aboutConverter.list2")}</li>
          <li>{t("aboutConverter.list3")}</li>
          <li>{t("aboutConverter.list4")}</li>
        </ul>

        <p>{t("aboutConverter.description2")}</p>

      </div>

    </section>
  );
}