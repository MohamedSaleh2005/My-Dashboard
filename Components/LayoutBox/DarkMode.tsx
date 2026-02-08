"use client"
import { useEffect, useState } from "react"
import { CgDarkMode } from "react-icons/cg"

export default function DarkMode() {
  const [isDark, setIsDark] = useState<boolean>(false)

  // DarkMode Before Render
  useEffect(() => {
    const stored = localStorage.getItem("DarkMode")
    setIsDark(stored ? JSON.parse(stored) : false)
  }, [])


  useEffect(() => {
    

    document.documentElement.classList.toggle("dark", isDark)
    document.documentElement.classList.toggle("light", !isDark)
    localStorage.setItem("DarkMode", JSON.stringify(isDark))
  }, [isDark])

  // New Tab On DarkMode
  useEffect(() => {
  const sync = (e: StorageEvent) => {
    if (e.key === "DarkMode") {
      setIsDark(e.newValue === "true")
    }
  }
  window.addEventListener("storage", sync)
  return () => window.removeEventListener("storage", sync)
}, [])


  

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={() => setIsDark(!isDark)}
      className="hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
    >
       <CgDarkMode /> 
    </button>
  )
}
