"use client"
import { useEffect, useState } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"

export default function ThemeButton() {
  const [theme, setTheme] = useState<string>("")

  useEffect(() => {
    
    const updateTheme = () => {
      if (document.documentElement.classList.contains("dark")) {
        setTheme("Dark Mode")
      } else {
        setTheme("Light Mode")
      }
    }

    // أول قراءة
    updateTheme()

    // مراقبة أي تغيير في class
    const observer = new MutationObserver(updateTheme)

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <span className="border border-gray-500 py-1 pl-3 w-35 mb-3 flex items-center gap-2  rounded-2xl shadow MyFont text-sm">
      {theme === "Dark Mode" ? <MdDarkMode /> : <MdLightMode />}
      {theme === "Dark Mode" ? "Dark Mode" : "Light Mode"}
    </span>
  )
}
