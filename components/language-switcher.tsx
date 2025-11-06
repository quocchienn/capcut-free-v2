"use client"

import { useLanguageContext } from "@/lib/language-context"

export function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguageContext()

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 backdrop-blur-xl hover:bg-white/20"
      style={{
        background: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
      title={`Switch to ${language === "en" ? "Vietnamese" : "English"}`}
    >
      <span>{language === "en" ? "🇺🇸" : "🇻🇳"}</span>
      <span className="hidden sm:inline">{language === "en" ? "EN" : "VI"}</span>
    </button>
  )
}
