"use client"

import { useEffect, useState } from "react"

export default function LiveClock() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    setTime(new Date().toLocaleTimeString("vi-VN"))

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString("vi-VN"))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="flex items-center gap-3 rounded-full px-6 py-3 backdrop-blur-xl"
      style={{
        background: "rgba(255, 255, 255, 0.08)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <div className="relative">
        <svg className="h-5 w-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="font-mono text-sm font-semibold text-white">{time || "Loading..."}</span>
        <span className="text-xs text-white/50">Vietnam</span>
      </div>
    </div>
  )
}
