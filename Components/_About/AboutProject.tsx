import { useTranslation } from "react-i18next";

export default function AboutProject() {
  const { t } = useTranslation();

  return (
    <section className="pt-6 space-y-4">

      {/* Title */}
      <h4 className="MyFont text-2xl">
        {t("about.project.title")}
      </h4>

      {/* Description */}
      <div className="text-sm space-y-1">
        <p>{t("about.project.paragraphs.0")}</p>
        <p>{t("about.project.paragraphs.1")}</p>
        <p>{t("about.project.paragraphs.2")}</p>
      </div>

    </section>
  );
}