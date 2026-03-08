import { useTranslation } from "react-i18next";

export default function AboutFuture() {
  const { t } = useTranslation();

  return (
    <section className="pt-6 space-y-4">

      {/* Title Head*/}
      <h4 className="MyFont text-2xl">
        {t("about.future.title")}
      </h4>

      {/* Description */}
      <div className="text-sm space-y-2">
        <p>{t("about.future.description")}</p>

        <ul className="space-y-2 ml-4 list-disc">
          <li>{t("about.future.item1")}</li>
          <li>{t("about.future.item2")}</li>
          <li>{t("about.future.item3")}</li>
          <li>{t("about.future.item4")}</li>
          <li>{t("about.future.item5")}</li>
          <li>{t("about.future.item6")}</li>
        </ul>

        <p>{t("about.future.note")}</p>
      </div>

    </section>
  );
}