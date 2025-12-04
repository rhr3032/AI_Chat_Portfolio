"use client"

import type React from "react"
import { User, Briefcase, Layers, Sparkles, Mail, Video, MapPin, FileText } from "lucide-react"
import { motion } from "framer-motion"
import type { CategoryKey } from "./portfolio-hero"

interface CategoryCardsProps {
  onCategoryClick: (category: CategoryKey) => void
  activeCategory: CategoryKey | null
}

const categories: {
  key: CategoryKey
  label: string
  icon: React.ReactNode
  gradient: string
  glowColor: string
}[] = [
  {
    key: "me",
    label: "Me",
    icon: <User className="w-4 h-4 sm:w-5 sm:h-5" />,
    gradient: "from-violet-500/20 to-purple-500/20",
    glowColor: "rgba(139, 92, 246, 0.3)",
  },
  {
    key: "projects",
    label: "Projects",
    icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />,
    gradient: "from-cyan-500/20 to-blue-500/20",
    glowColor: "rgba(0, 245, 255, 0.3)",
  },
  {
    key: "skills",
    label: "Skills",
    icon: <Layers className="w-4 h-4 sm:w-5 sm:h-5" />,
    gradient: "from-emerald-500/20 to-teal-500/20",
    glowColor: "rgba(16, 185, 129, 0.3)",
  },
  {
    key: "fun",
    label: "Fun",
    icon: <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />,
    gradient: "from-amber-500/20 to-orange-500/20",
    glowColor: "rgba(245, 158, 11, 0.3)",
  },
  {
    key: "contact",
    label: "Contact",
    icon: <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
    gradient: "from-pink-500/20 to-rose-500/20",
    glowColor: "rgba(236, 72, 153, 0.3)",
  },
  {
    key: "video",
    label: "Video",
    icon: <Video className="w-4 h-4 sm:w-5 sm:h-5" />,
    gradient: "from-red-500/20 to-pink-500/20",
    glowColor: "rgba(239, 68, 68, 0.3)",
  },
  {
    key: "location",
    label: "Location",
    icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
    gradient: "from-cyan-400/20 to-sky-500/20",
    glowColor: "rgba(34, 211, 238, 0.3)",
  },
  {
    key: "resume",
    label: "Resume",
    icon: <FileText className="w-4 h-4 sm:w-5 sm:h-5" />,
    gradient: "from-indigo-500/20 to-violet-500/20",
    glowColor: "rgba(99, 102, 241, 0.3)",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.25,
      ease: [0.25, 0.1, 0.25, 1] as const
    }
  }
}

export function CategoryCards({ onCategoryClick, activeCategory }: CategoryCardsProps) {
  return (
    <motion.div 
      className="flex flex-col items-center gap-1.5 sm:gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* First Row - 5 cards */}
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
        {categories.slice(0, 5).map((category, index) => (
          <motion.div key={category.key} variants={cardVariants}>
            <CategoryCard
              category={category}
              isActive={activeCategory === category.key}
              onClick={() => onCategoryClick(category.key)}
              index={index}
            />
          </motion.div>
        ))}
      </div>

      {/* Second Row - 3 cards */}
      <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
        {categories.slice(5).map((category, index) => (
          <motion.div key={category.key} variants={cardVariants}>
            <CategoryCard
              category={category}
              isActive={activeCategory === category.key}
              onClick={() => onCategoryClick(category.key)}
              index={index + 5}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

interface CategoryCardProps {
  category: {
    key: CategoryKey
    label: string
    icon: React.ReactNode
    gradient: string
    glowColor: string
  }
  isActive: boolean
  onClick: () => void
  index: number
}

function CategoryCard({ category, isActive, onClick, index }: CategoryCardProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative flex flex-col items-center justify-center 
        w-[60px] h-[55px] 
        sm:w-[75px] sm:h-[68px] 
        md:w-[85px] md:h-[75px] 
        lg:w-[100px] lg:h-[85px] 
        rounded-xl sm:rounded-2xl 
        transition-all duration-200 overflow-hidden`}
      style={{
        background: isActive
          ? "linear-gradient(165deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)"
          : "linear-gradient(165deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.06) 100%)",
        backdropFilter: "blur(40px) saturate(180%)",
        WebkitBackdropFilter: "blur(40px) saturate(180%)",
        border: isActive 
          ? `1px solid ${category.glowColor.replace("0.3", "0.4")}`
          : "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: isActive 
          ? `0 8px 32px ${category.glowColor}, 0 0 0 0.5px rgba(255, 255, 255, 0.15) inset, 0 2px 4px rgba(255, 255, 255, 0.1) inset`
          : "0 4px 24px rgba(0, 0, 0, 0.2), 0 0 0 0.5px rgba(255, 255, 255, 0.08) inset, 0 1px 2px rgba(255, 255, 255, 0.06) inset"
      }}
    >
      {/* Background Gradient */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon Container - iOS 26 Style */}
      <div
        className={`relative z-10 flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-lg transition-transform duration-200 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
        style={{
          background: `linear-gradient(145deg, ${category.glowColor.replace("0.3", "0.25")} 0%, ${category.glowColor.replace("0.3", "0.1")} 100%)`,
          backdropFilter: "blur(10px)",
          boxShadow: isActive 
            ? `0 0 20px ${category.glowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.2)` 
            : "inset 0 1px 0 rgba(255, 255, 255, 0.1)"
        }}
      >
        <span className={`transition-colors duration-300 ${
          isActive ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "text-white/70 group-hover:text-white"
        }`}>
          {category.icon}
        </span>
      </div>

      {/* Label */}
      <span
        className={`relative z-10 mt-1 sm:mt-1.5 md:mt-2 text-[10px] sm:text-xs md:text-sm font-medium transition-colors duration-200 ${
          isActive ? "text-white" : "text-white/60 group-hover:text-white/90"
        }`}
      >
        {category.label}
      </span>

      {/* Shimmer Effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.2) 50%, transparent 70%)",
        }}
      />
    </motion.button>
  )
}
