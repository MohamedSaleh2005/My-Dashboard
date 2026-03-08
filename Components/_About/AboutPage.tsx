"use client"

import { useTranslation } from "react-i18next";
import AboutAuth from './AboutAuth'
import AboutConverter from './AboutConverter'
import AboutFavorites from './AboutFavourite'
import AboutLanguage from './AboutLanguage'
import AboutProject from './AboutProject'
import AboutTable from './AboutTable'
import AboutTheme from './AboutTheme'
import AboutFuture from './Futures'
import RateMe from './RateMe'
import ContactMe from "./ContactMe";

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="mt-15 px-4">

      {/* عنوان الصفحة ووصفها */}
      <div>
        <h3 className="MyFont font-bold">{t("title")}</h3>
        <p className="text-sm">{t("description")}</p>
      </div>

      {/* جميع أقسام الـ About */}
      <div className="md:h-120 h-screen overflow-y-scroll no-scrollbar space-y-6">
        <AboutProject />
        <AboutConverter />
        <AboutTable />
        <AboutFavorites />
        <AboutTheme />
        <AboutLanguage />
        <AboutAuth />
        <AboutFuture />
        <RateMe />
        <ContactMe />
      </div>

    </div>
  )
}