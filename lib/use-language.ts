"use client"

import { useState, useCallback } from "react"
import type { Language } from "./translations"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en")

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "en" ? "vi" : "en"))
  }, [])

  return { language, setLanguage, toggleLanguage }
}
