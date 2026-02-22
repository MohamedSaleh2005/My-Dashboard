"use client"
import { useEffect, useState } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { useTranslation } from "react-i18next"

export default function ThemeButton() {
  const [isDark, setIsDark] = useState<boolean>(false)
  const { t } = useTranslation()

  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"))
    }

    updateTheme()

    const observer = new MutationObserver(updateTheme)

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <span className="border border-gray-500 py-1 w-auto px-4 mb-3 flex items-center gap-2 rounded-2xl shadow MyFont text-sm">
      {isDark ? <MdDarkMode /> : <MdLightMode />}
      {isDark ? t("darkMode") : t("lightMode")}
    </span>
  )
}