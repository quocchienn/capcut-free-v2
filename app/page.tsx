"use client"

import { useEffect, useState } from "react"
import { useLanguageContext } from "@/lib/language-context"
import { t } from "@/lib/translations"
import { LanguageSwitcher } from "@/components/language-switcher"
import RealTimeStats from "@/components/real-time-stats"
import AccountCard from "@/components/account-card"
import LiveClock from "@/components/live-clock"

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const { language } = useLanguageContext()

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="dark min-h-screen bg-black">
      <header
        className="sticky top-0 z-50 border-b border-white/20 backdrop-blur-xl w-full"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row items-start sm:items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-400/50"></div>
                <div className="relative flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-700">
                  <span className="text-lg sm:text-xl font-bold text-white">C</span>
                </div>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white">{t("app.title", language)}</h1>
                <p className="text-xs text-white/50">{t("app.subtitle", language)}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
              <LanguageSwitcher />
              <LiveClock />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-12">
          <h2 className="mb-4 sm:mb-6 text-lg font-semibold text-white/80">{t("stats.title", language)}</h2>
          <RealTimeStats language={language} />
        </div>

        <div className="mb-10 sm:mb-12">
          <h2 className="mb-4 sm:mb-6 text-lg font-semibold text-white/80">{t("accounts.title", language)}</h2>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <AccountCard
              email="capcut@example.com"
              password="Demo@12345"
              description={t("account.premium", language)}
              updatedAt="2 mins ago"
              accessCount={45}
              language={language}
            />
            <AccountCard
              email="capcut.pro@email.com"
              password="ProEdit2024!"
              description={t("account.pro", language)}
              updatedAt="5 mins ago"
              accessCount={32}
              language={language}
            />
            <AccountCard
              email="capcut.team@studio.com"
              password="TeamStudio#99"
              description={t("account.team", language)}
              updatedAt="1 hour ago"
              accessCount={18}
              language={language}
            />
          </div>
        </div>

        <div
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 backdrop-blur-xl"
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-4">
            <div className="rounded-2xl bg-blue-500/20 p-2 sm:p-3 backdrop-blur-sm flex-shrink-0">
              <svg
                className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="mb-3 sm:mb-4 text-lg sm:text-xl font-bold text-white">
                {t("instructions.title", language)}
              </h2>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 flex-shrink-0 mt-1">✓</span>
                  <span>{t("instructions.step1", language)}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 flex-shrink-0 mt-1">✓</span>
                  <span>{t("instructions.step2", language)}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 flex-shrink-0 mt-1">✓</span>
                  <span>{t("instructions.step3", language)}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 flex-shrink-0 mt-1">✓</span>
                  <span>{t("instructions.step4", language)}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400 flex-shrink-0 mt-1">✓</span>
                  <span className="font-semibold">{t("instructions.step5", language)}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer
        className="border-t border-white/20 py-6 sm:py-8 text-center backdrop-blur-xl"
        style={{
          background: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <p className="text-xs sm:text-sm text-gray-400 px-4">{t("footer.description", language)}</p>
        <p className="mt-1 sm:mt-2 text-xs text-gray-500">{t("footer.powered", language)}</p>
      </footer>
    </div>
  )
}
