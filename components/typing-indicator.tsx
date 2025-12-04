"use client"

import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export function TypingIndicator() {
  return (
    <div 
      className="inline-flex items-center gap-2 sm:gap-3 rounded-2xl px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4"
      style={{
        background: "linear-gradient(165deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.08) 100%)",
        backdropFilter: "blur(50px) saturate(180%)",
        WebkitBackdropFilter: "blur(50px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.12)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.25), 0 0 0 0.5px rgba(255, 255, 255, 0.15) inset"
      }}
    >
      {/* AI Avatar */}
      <div 
        className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center animate-spin"
        style={{
          background: "linear-gradient(145deg, rgba(0, 245, 255, 0.25) 0%, rgba(191, 0, 255, 0.25) 100%)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 0 15px rgba(0, 245, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          animationDuration: "3s"
        }}
      >
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-cyan-400" />
      </div>

      {/* Typing dots */}
      <div className="flex gap-1 sm:gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full"
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              delay: i * 0.12,
              ease: "easeInOut",
            }}
            style={{ 
              background: i === 0 
                ? "linear-gradient(135deg, #00f5ff 0%, #0066ff 100%)"
                : i === 1 
                  ? "linear-gradient(135deg, #bf00ff 0%, #ff00a8 100%)"
                  : "linear-gradient(135deg, #ff00a8 0%, #ff6b35 100%)",
              boxShadow: i === 0 
                ? "0 0 8px rgba(0, 245, 255, 0.4)"
                : i === 1 
                  ? "0 0 8px rgba(191, 0, 255, 0.4)"
                  : "0 0 8px rgba(255, 0, 168, 0.4)"
            }}
          />
        ))}
      </div>

      <span className="text-white/50 text-xs sm:text-sm ml-0.5 sm:ml-1 animate-pulse">
        AI is thinking...
      </span>
    </div>
  )
}
