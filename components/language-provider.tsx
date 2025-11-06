"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { LanguageContext } from "@/lib/language-context"
import type { Language } from "@/lib/translations"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "vi" : "en"))
  }, [])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>{children}</LanguageContext.Provider>
  )
}
