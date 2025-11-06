"use client"

import { createContext, useContext } from "react"
import type { Language } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguageContext() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguageContext must be used within LanguageProvider")
  }
  return context
}
