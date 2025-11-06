"use client"

import { useState } from "react"
import { t } from "@/lib/translations"
import type { Language } from "@/lib/translations"

interface AccountCardProps {
  email: string
  password: string
  description: string
  updatedAt: string
  accessCount: number
  language: Language
}

export default function AccountCard({
  email,
  password,
  description,
  updatedAt,
  accessCount,
  language,
}: AccountCardProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <div
      className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-5 sm:p-8 backdrop-blur-2xl w-full"
      style={{
        background: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div className="relative">
        <p className="mb-4 sm:mb-6 text-base sm:text-lg font-semibold text-white/90">{description}</p>

        {/* Email Field */}
        <div className="mb-4 sm:mb-6">
          <label className="mb-2 block text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/60">
            {t("account.email", language)}
          </label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            <input
              type="text"
              value={email}
              readOnly
              className="flex-1 rounded-lg sm:rounded-2xl bg-white/10 px-3 sm:px-6 py-3 sm:py-4 font-mono text-xs sm:text-base text-white placeholder-white/40 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/50 overflow-hidden text-ellipsis"
            />
            <button
              onClick={() => handleCopy(email, "email")}
              className="rounded-lg sm:rounded-2xl bg-white/20 hover:bg-white/30 p-3 sm:p-4 transition-all duration-200 backdrop-blur-sm border border-white/20 flex-shrink-0"
            >
              {copiedField === "email" ? (
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Password Field */}
        <div className="mb-6 sm:mb-8">
          <label className="mb-2 block text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/60">
            {t("account.password", language)}
          </label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            <input
              type="text"
              value={password}
              readOnly
              className="flex-1 rounded-lg sm:rounded-2xl bg-white/10 px-3 sm:px-6 py-3 sm:py-4 font-mono text-xs sm:text-base text-white placeholder-white/40 backdrop-blur-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400/50 overflow-hidden text-ellipsis"
            />
            <button
              onClick={() => handleCopy(password, "password")}
              className="rounded-lg sm:rounded-2xl bg-white/20 hover:bg-white/30 p-3 sm:p-4 transition-all duration-200 backdrop-blur-sm border border-white/20 flex-shrink-0"
            >
              {copiedField === "password" ? (
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5 text-white/80"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Status */}
        <div className="border-t border-white/10 pt-4 sm:pt-6">
          <div>
            <p className="text-xs text-white/50">{t("account.lastUpdated", language)}</p>
            <p className="font-mono text-sm sm:text-base font-semibold text-white/80 mt-1">{updatedAt}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
