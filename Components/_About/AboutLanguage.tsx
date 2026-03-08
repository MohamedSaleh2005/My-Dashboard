import { useTranslation } from "react-i18next";

export default function AboutLanguage() {
  const { t } = useTranslation();

  return (
    <section className="pt-6 space-y-4">

      {/* Title */}
      <h4 className="MyFont text-2xl">
        {t("about.language.title")}
      </h4>

      {/* Description */}
      <div className="text-sm space-y-2">

        <p>{t("about.language.description")}</p>

        <ul className="space-y-2 ml-4 list-disc">
          <li>{t("about.language.items.0")}</li>
          <li>{t("about.language.items.1")}</li>
          <li>{t("about.language.items.2")}</li>
        </ul>

        <p>{t("about.language.note")}</p>

      </div>

    </section>
  );
}