"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

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
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative flex items-center w-full rounded-full transition-all duration-500 liquid-glass-input`}
      style={{
        background: isFocused
          ? "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.05) 100%)"
          : "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
        backdropFilter: "blur(50px) saturate(180%)",
        WebkitBackdropFilter: "blur(50px) saturate(180%)",
        border: isFocused 
          ? "1px solid rgba(0, 245, 255, 0.35)" 
          : "1px solid rgba(255, 255, 255, 0.12)",
        boxShadow: isFocused 
          ? "0 8px 32px rgba(0, 0, 0, 0.35), 0 0 25px rgba(0, 245, 255, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.1)"
          : "0 4px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.08), inset 0 -1px 0 rgba(0, 0, 0, 0.08)"
      }}
    >
      {/* AI Icon */}
      <motion.div 
        className="pl-3 sm:pl-4 md:pl-5 pr-1 sm:pr-2"
        animate={{ 
          rotate: isFocused ? [0, 15, -15, 0] : 0,
          scale: isFocused ? 1.1 : 1
        }}
        transition={{ duration: 0.5 }}
      >
        <Sparkles className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
          isFocused ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(0,245,255,0.5)]" : "text-white/40"
        }`} />
      </motion.div>

      <input
        type="text"
        placeholder="Ask me anything..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
        className="relative flex-1 px-2 sm:px-3 py-3 sm:py-3.5 md:py-4 bg-transparent text-white placeholder-white/40 text-sm sm:text-base outline-none rounded-full"
      />

      <motion.button
        onClick={onSubmit}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative mr-1.5 sm:mr-2 p-2.5 sm:p-3 rounded-full transition-all duration-300 group"
        style={{
          background: "linear-gradient(135deg, rgba(0, 245, 255, 0.7) 0%, rgba(0, 122, 255, 0.7) 100%)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 4px 15px rgba(0, 245, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
        }}
        aria-label="Send message"
      >
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </motion.button>
    </motion.div>
  )
}
