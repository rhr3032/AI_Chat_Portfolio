"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
}

export function SearchBar({ value, onChange, onSubmit }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSubmit()
    }
  }

  return (
    <div
      className={`relative flex items-center w-full bg-white rounded-full border transition-all duration-300 ${
        isFocused ? "border-gray-300 shadow-lg shadow-gray-200/50" : "border-gray-200 shadow-md shadow-gray-100/50"
      }`}
    >
      {/* Pulse glow on focus */}
      {isFocused && (
        <div
          className="absolute inset-0 rounded-full opacity-50 animate-pulse"
          style={{
            background: "linear-gradient(90deg, rgba(180, 255, 200, 0.2) 0%, rgba(200, 230, 255, 0.2) 100%)",
            filter: "blur(8px)",
          }}
        />
      )}

      <input
        type="text"
        placeholder="Ask me anything..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        className="relative flex-1 px-6 py-4 bg-transparent text-gray-700 placeholder-gray-400 text-base outline-none rounded-full"
      />

      <button
        onClick={onSubmit}
        className="relative mr-2 p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label="Send message"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}
