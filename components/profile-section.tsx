"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export function ProfileSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col items-center text-center w-full px-4">
      {/* Greeting */}
      <motion.p 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-xs sm:text-sm md:text-base font-medium text-cyan-400/80 tracking-[0.2em] sm:tracking-widest uppercase"
      >
        {"Hi! I'm Raisul R."}
      </motion.p>

      {/* Headline with Gradient */}
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        className="mt-3 sm:mt-4 md:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance leading-tight"
      >
        <span className="text-white/90">UI/UX</span>
        <br />
        <motion.span 
          className="bg-clip-text text-transparent inline-block"
          style={{
            backgroundImage: "linear-gradient(135deg, #00f5ff 0%, #bf00ff 25%, #ff00a8 50%, #00f5ff 75%, #bf00ff 100%)",
            backgroundSize: "200% 200%"
          }}
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          Designer
        </motion.span>
      </motion.h1>

      {/* Profile Photo with iOS 26 Liquid Glass Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative mt-6 sm:mt-8 md:mt-10 lg:mt-12 group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Outer Glow Ring - Liquid Glass Style */}
        <motion.div 
          className="absolute inset-0 rounded-full"
          animate={{
            opacity: isHovered ? 1 : 0.5,
            scale: isHovered ? 1.3 : 1.15,
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            background: "conic-gradient(from 0deg, rgba(0, 245, 255, 0.25), rgba(191, 0, 255, 0.25), rgba(255, 0, 168, 0.25), rgba(0, 245, 255, 0.25))",
            filter: "blur(25px)",
          }}
        />
        
        {/* Animated Liquid Ring */}
        <motion.div 
          className="absolute -inset-3 sm:-inset-4 rounded-full"
          animate={{
            rotate: 360,
            borderColor: isHovered ? "rgba(0, 245, 255, 0.3)" : "rgba(0, 245, 255, 0.15)",
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{
            rotate: { duration: 12, repeat: Infinity, ease: "linear" },
            borderColor: { duration: 0.5 },
            scale: { duration: 0.5 },
          }}
          style={{
            border: "1px solid rgba(0, 245, 255, 0.15)",
          }}
        />

        {/* Photo Container - iOS 26 Liquid Glass */}
        <motion.div
          className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden"
          animate={{
            boxShadow: isHovered 
              ? "0 0 50px rgba(0, 245, 255, 0.35), 0 0 100px rgba(191, 0, 255, 0.25), inset 0 0 40px rgba(0, 0, 0, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)"
              : "0 0 25px rgba(0, 245, 255, 0.15), 0 0 50px rgba(191, 0, 255, 0.1), inset 0 0 25px rgba(0, 0, 0, 0.4), 0 4px 24px rgba(0, 0, 0, 0.25)",
          }}
          transition={{ duration: 0.5 }}
          style={{
            background: "linear-gradient(145deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            border: "1.5px solid rgba(255, 255, 255, 0.15)"
          }}
        >
          {/* Glass Overlay - Top Highlight */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, transparent 40%, rgba(0, 0, 0, 0.2) 100%)"
            }}
          />
          
          <Image
            src="/images/2025-12-03-2013-2043-2007.png"
            alt="Raisul R. - UI/UX Designer"
            fill
            className="object-cover object-top"
            priority
          />
          
          {/* Holographic Shimmer Effect */}
          <motion.div 
            className="absolute inset-0 opacity-20 z-20 pointer-events-none"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(45deg, transparent 25%, rgba(0, 245, 255, 0.4) 50%, transparent 75%)",
            }}
          />
        </motion.div>

        {/* Bottom Holographic Platform */}
        <motion.div 
          className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 w-32 sm:w-40 md:w-48 h-16 sm:h-20 md:h-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div 
            className="absolute inset-0 rounded-full opacity-35"
            style={{
              background: "radial-gradient(ellipse at center, rgba(0, 245, 255, 0.35) 0%, transparent 70%)",
              transform: "rotateX(75deg)"
            }}
          />
        </motion.div>
      </motion.div>

      {/* Spacer for gap between profile and search */}
      <div className="h-6 sm:h-8 md:h-10 lg:h-12" />
    </div>
  )
}
