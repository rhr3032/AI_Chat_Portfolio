"use client"

import type React from "react"
import { User, Briefcase, Layers, Sparkles, Mail, Video, MapPin, FileText } from "lucide-react"
import type { CategoryKey } from "./portfolio-hero"

interface CategoryCardsProps {
  onCategoryClick: (category: CategoryKey) => void
  activeCategory: CategoryKey | null
}

const categories: {
  key: CategoryKey
  label: string
  icon: React.ReactNode
  iconColor: string
  bgColor: string
}[] = [
  {
    key: "me",
    label: "Me",
    icon: <User className="w-5 h-5" />,
    iconColor: "text-violet-500",
    bgColor: "bg-violet-50",
  },
  {
    key: "projects",
    label: "Projects",
    icon: <Briefcase className="w-5 h-5" />,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    key: "skills",
    label: "Skills",
    icon: <Layers className="w-5 h-5" />,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    key: "fun",
    label: "Fun",
    icon: <Sparkles className="w-5 h-5" />,
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    key: "contact",
    label: "Contact",
    icon: <Mail className="w-5 h-5" />,
    iconColor: "text-pink-500",
    bgColor: "bg-pink-50",
  },
  {
    key: "video",
    label: "Video",
    icon: <Video className="w-5 h-5" />,
    iconColor: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    key: "location",
    label: "Location",
    icon: <MapPin className="w-5 h-5" />,
    iconColor: "text-cyan-500",
    bgColor: "bg-cyan-50",
  },
  {
    key: "resume",
    label: "Resume",
    icon: <FileText className="w-5 h-5" />,
    iconColor: "text-indigo-500",
    bgColor: "bg-indigo-50",
  },
]

export function CategoryCards({ onCategoryClick, activeCategory }: CategoryCardsProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* First Row - 5 cards */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.slice(0, 5).map((category) => (
          <CategoryCard
            key={category.key}
            category={category}
            isActive={activeCategory === category.key}
            onClick={() => onCategoryClick(category.key)}
          />
        ))}
      </div>

      {/* Second Row - 3 cards */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.slice(5).map((category) => (
          <CategoryCard
            key={category.key}
            category={category}
            isActive={activeCategory === category.key}
            onClick={() => onCategoryClick(category.key)}
          />
        ))}
      </div>
    </div>
  )
}

interface CategoryCardProps {
  category: {
    key: CategoryKey
    label: string
    icon: React.ReactNode
    iconColor: string
    bgColor: string
  }
  isActive: boolean
  onClick: () => void
}

function CategoryCard({ category, isActive, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-center justify-center w-[100px] h-[88px] md:w-[115px] md:h-[95px] rounded-2xl border transition-all duration-300 ${
        isActive
          ? "bg-white border-gray-200 shadow-md"
          : "bg-white/80 border-gray-100 hover:border-gray-200 hover:shadow-sm hover:bg-white"
      }`}
    >
      {/* Icon Container with light colored background */}
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-xl ${category.bgColor} ${category.iconColor} transition-all duration-300 group-hover:scale-105`}
      >
        {category.icon}
      </div>

      {/* Label */}
      <span
        className={`mt-2 text-sm font-medium transition-colors duration-300 ${
          isActive ? "text-gray-800" : "text-gray-500 group-hover:text-gray-700"
        }`}
      >
        {category.label}
      </span>
    </button>
  )
}
