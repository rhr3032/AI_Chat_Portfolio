"use client"

import { useState } from "react"
import Image from "next/image"

export function ProfileSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col items-center text-center">
      {/* Greeting */}
      <p className="text-sm md:text-base font-medium text-gray-700 tracking-wide">{"Hi! I'm Raisul R."}</p>

      {/* Headline */}
      <h1 className="mt-2 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight text-balance">
        Web & UI/UX Designer
      </h1>

      {/* Profile Photo */}
      <div
        className="relative mt-8 group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glow Effect */}
        <div
          className={`absolute inset-0 rounded-full transition-all duration-500 ${
            isHovered ? "opacity-80 scale-110" : "opacity-40 scale-100"
          }`}
          style={{
            background: "linear-gradient(135deg, rgba(180, 255, 200, 0.6) 0%, rgba(200, 230, 255, 0.4) 100%)",
            filter: "blur(20px)",
          }}
        />

        {/* Photo Container */}
        <div
          className={`relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        >
          <Image
            src="/images/2025-12-03-2013-2043-2007.png"
            alt="Raisul R. - Web & UI/UX Designer"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </div>
  )
}
