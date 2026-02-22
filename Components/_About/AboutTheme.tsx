"use client";
import React from "react";
import { useTranslation } from "react-i18next";

export default function AboutTheme() {
  const { t } = useTranslation();

  return (
    <section className="pt-6 space-y-4">

      {/* Title */}
      <h4 className="MyFont text-2xl ">
        {t("about.theme.title")}
      </h4>

      {/* Description */}
      <div className="text-sm space-y-2">
        <p>{t("about.theme.description")}</p>

        <ul className="space-y-2 ml-4 list-disc">
          <li>{t("about.theme.items.0")}</li>
          <li>{t("about.theme.items.1")}</li>
          <li>{t("about.theme.items.2")}</li>
          <li>{t("about.theme.items.3")}</li>
        </ul>

        <p>{t("about.theme.note")}</p>
      </div>

    </section>
  );
}