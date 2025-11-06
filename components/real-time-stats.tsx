"use client"

import { useEffect, useState } from "react"
import { t } from "@/lib/translations"
import type { Language } from "@/lib/translations"

interface StatsData {
  lastUpdate: string
}

export default function RealTimeStats({ language }: { language: Language }) {
  const [stats, setStats] = useState<StatsData>({
    lastUpdate: new Date().toLocaleTimeString("vi-VN"),
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const incrementVisitor = async () => {
      try {
        const response = await fetch("/api/visitors", {
          method: "POST",
        })
        if (response.ok) {
          setStats({
            lastUpdate: new Date().toLocaleTimeString("vi-VN"),
          })
        }
      } catch (error) {
        console.error("Failed to increment visitor:", error)
      } finally {
        setIsLoading(false)
      }
    }

    incrementVisitor()
  }, [])

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const response = await fetch("/api/visitors", {
          method: "GET",
        })
        if (response.ok) {
          setStats({
            lastUpdate: new Date().toLocaleTimeString("vi-VN"),
          })
        }
      } catch (error) {
        console.error("Failed to fetch stats:", error)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid gap-6 md:grid-cols-1">
      {/* Last Update */}
      <div
        className="relative overflow-hidden rounded-3xl p-6 backdrop-blur-2xl transition-all duration-300 hover:bg-white/15"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div className="relative flex items-start justify-between">
          <div>
            <p className="text-sm font-semibold text-white/60 uppercase tracking-wider">
              {t("stats.lastUpdate", language)}
            </p>
            <p className="mt-3 font-mono text-lg font-bold text-white">
              <span className="text-purple-400">{stats.lastUpdate}</span>
            </p>
          </div>
          <div className="rounded-2xl bg-purple-400/20 p-3 backdrop-blur-sm">
            <svg className="h-6 w-6 text-purple-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
