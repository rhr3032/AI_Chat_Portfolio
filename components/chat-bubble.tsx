"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  X,
  User,
  Briefcase,
  Layers,
  Sparkles,
  Mail,
  Video,
  MapPin,
  FileText,
  ExternalLink,
  Download,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Coffee,
  Gamepad2,
  Palette,
  Code,
  Figma,
  Globe,
  Heart,
  Zap,
  Star,
  Award,
  CheckCircle2,
  Loader2,
} from "lucide-react"
import type { CategoryKey } from "./portfolio-hero"
import { generateResumePDF } from "@/lib/generate-resume-pdf"

interface ChatBubbleProps {
  category: CategoryKey
  onClose: () => void
}

function ResumeContent() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    generateResumePDF()
    setIsDownloading(false)
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {[
          {
            value: "5+",
            label: "Years Experience",
            icon: <Zap className="w-3 h-3 sm:w-4 sm:h-4" />,
            gradient: "from-amber-500/20 to-orange-500/20",
            iconColor: "text-amber-400",
          },
          {
            value: "50+",
            label: "Clients Globally",
            icon: <Globe className="w-3 h-3 sm:w-4 sm:h-4" />,
            gradient: "from-cyan-500/20 to-blue-500/20",
            iconColor: "text-cyan-400",
          },
          {
            value: "100+",
            label: "Projects Done",
            icon: <Star className="w-3 h-3 sm:w-4 sm:h-4" />,
            gradient: "from-violet-500/20 to-purple-500/20",
            iconColor: "text-violet-400",
          },
        ].map((stat, i) => (
          <div 
            key={i} 
            className={`p-2 sm:p-3 rounded-xl text-center bg-gradient-to-br ${stat.gradient}`}
            style={{
              border: "1px solid rgba(255, 255, 255, 0.05)"
            }}
          >
            <div
              className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2 ${stat.iconColor}`}
              style={{
                background: "rgba(255, 255, 255, 0.1)"
              }}
            >
              {stat.icon}
            </div>
            <div className="text-sm sm:text-lg font-bold text-white">{stat.value}</div>
            <div className="text-[10px] sm:text-xs text-white/50">{stat.label}</div>
          </div>
        ))}
      </div>
      <div 
        className="flex items-center gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg"
        style={{
          background: "linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)",
          border: "1px solid rgba(245, 158, 11, 0.2)"
        }}
      >
        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
        <span className="text-xs sm:text-sm text-white/70">Featured on Dribbble & Behance</span>
      </div>
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="w-full flex items-center justify-center gap-2 p-2.5 sm:p-3 rounded-xl font-medium transition-all disabled:opacity-70 text-sm sm:text-base"
        style={{
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.8) 0%, rgba(139, 92, 246, 0.8) 100%)",
          boxShadow: "0 4px 20px rgba(99, 102, 241, 0.3)"
        }}
      >
        {isDownloading ? (
          <>
            <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin text-white" /> <span className="text-white">Preparing...</span>
          </>
        ) : (
          <>
            <Download className="w-4 h-4 sm:w-5 sm:h-5 text-white" /> <span className="text-white">Download Resume</span>
          </>
        )}
      </button>
    </div>
  )
}

const categoryConfig: Record<
  CategoryKey,
  {
    title: string
    icon: React.ReactNode
    gradient: string
    glowColor: string
  }
> = {
  me: {
    title: "About Me",
    icon: <User className="w-5 h-5" />,
    gradient: "from-violet-500/30 to-purple-500/30",
    glowColor: "rgba(139, 92, 246, 0.3)",
  },
  projects: {
    title: "My Projects",
    icon: <Briefcase className="w-5 h-5" />,
    gradient: "from-cyan-500/30 to-blue-500/30",
    glowColor: "rgba(0, 245, 255, 0.3)",
  },
  skills: {
    title: "My Skills",
    icon: <Layers className="w-5 h-5" />,
    gradient: "from-emerald-500/30 to-teal-500/30",
    glowColor: "rgba(16, 185, 129, 0.3)",
  },
  fun: {
    title: "Fun Facts",
    icon: <Sparkles className="w-5 h-5" />,
    gradient: "from-amber-500/30 to-orange-500/30",
    glowColor: "rgba(245, 158, 11, 0.3)",
  },
  contact: {
    title: "Get In Touch",
    icon: <Mail className="w-5 h-5" />,
    gradient: "from-pink-500/30 to-rose-500/30",
    glowColor: "rgba(236, 72, 153, 0.3)",
  },
  video: {
    title: "Video Content",
    icon: <Video className="w-5 h-5" />,
    gradient: "from-red-500/30 to-pink-500/30",
    glowColor: "rgba(239, 68, 68, 0.3)",
  },
  location: {
    title: "Location",
    icon: <MapPin className="w-5 h-5" />,
    gradient: "from-cyan-400/30 to-sky-500/30",
    glowColor: "rgba(34, 211, 238, 0.3)",
  },
  resume: {
    title: "My Resume",
    icon: <FileText className="w-5 h-5" />,
    gradient: "from-indigo-500/30 to-violet-500/30",
    glowColor: "rgba(99, 102, 241, 0.3)",
  },
}

const categoryContent: Record<CategoryKey, React.ReactNode> = {
  me: (
    <div className="space-y-4">
      <p className="text-white/70 leading-relaxed">
        Hi there! I'm <span className="font-semibold text-violet-400">Raisul R.</span>, a passionate Web & UI/UX
        Designer with 5+ years of experience crafting beautiful digital experiences.
      </p>
      <div className="flex flex-wrap gap-2">
        {[
          { icon: <Heart className="w-4 h-4" />, text: "Design Lover", color: "from-rose-500/20 to-pink-500/20", textColor: "text-rose-400" },
          { icon: <Zap className="w-4 h-4" />, text: "Problem Solver", color: "from-amber-500/20 to-orange-500/20", textColor: "text-amber-400" },
          { icon: <Star className="w-4 h-4" />, text: "Creative Thinker", color: "from-emerald-500/20 to-teal-500/20", textColor: "text-emerald-400" },
        ].map((item, i) => (
          <span 
            key={i}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r ${item.color} ${item.textColor}`}
            style={{ border: "1px solid rgba(255, 255, 255, 0.05)" }}
          >
            {item.icon} {item.text}
          </span>
        ))}
      </div>
    </div>
  ),
  projects: (
    <div className="space-y-4">
      <p className="text-white/70 leading-relaxed">I've worked on some exciting projects across various industries!</p>
      <div className="grid grid-cols-2 gap-3">
        {[
          { name: "E-Commerce Platform", icon: <Globe className="w-4 h-4" />, gradient: "from-cyan-500/20 to-blue-500/20", iconColor: "text-cyan-400" },
          { name: "SaaS Dashboard", icon: <Layers className="w-4 h-4" />, gradient: "from-purple-500/20 to-violet-500/20", iconColor: "text-purple-400" },
          { name: "Mobile App Design", icon: <Figma className="w-4 h-4" />, gradient: "from-orange-500/20 to-amber-500/20", iconColor: "text-orange-400" },
          { name: "Brand Identity", icon: <Palette className="w-4 h-4" />, gradient: "from-pink-500/20 to-rose-500/20", iconColor: "text-pink-400" },
        ].map((project, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 p-3 rounded-xl cursor-pointer transition-all hover:scale-105 bg-gradient-to-br ${project.gradient}`}
            style={{ border: "1px solid rgba(255, 255, 255, 0.05)" }}
          >
            <div className={`p-2 rounded-lg ${project.iconColor}`} style={{ background: "rgba(255, 255, 255, 0.1)" }}>
              {project.icon}
            </div>
            <span className="text-sm font-medium text-white/80">{project.name}</span>
          </div>
        ))}
      </div>
      <button className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors">
        View All Projects <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  ),
  skills: (
    <div className="space-y-4">
      {[
        { title: "Design Tools", icon: <Figma className="w-4 h-4" />, color: "text-pink-400", skills: ["Figma", "Adobe XD", "Sketch", "Photoshop"], gradient: "from-pink-500/10 to-rose-500/10" },
        { title: "Development", icon: <Code className="w-4 h-4" />, color: "text-cyan-400", skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind"], gradient: "from-cyan-500/10 to-blue-500/10" },
        { title: "UX Skills", icon: <Sparkles className="w-4 h-4" />, color: "text-violet-400", skills: ["User Research", "Wireframing", "Prototyping", "Testing"], gradient: "from-violet-500/10 to-purple-500/10" },
      ].map((category, i) => (
        <div key={i}>
          <div className="flex items-center gap-2 mb-2">
            <div className={`p-1.5 rounded-lg ${category.color}`} style={{ background: "rgba(255, 255, 255, 0.1)" }}>
              {category.icon}
            </div>
            <span className="font-medium text-white/90">{category.title}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <span 
                key={skill} 
                className={`px-2.5 py-1 rounded-lg text-xs font-medium ${category.color} bg-gradient-to-r ${category.gradient}`}
                style={{ border: "1px solid rgba(255, 255, 255, 0.05)" }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  fun: (
    <div className="space-y-4">
      <p className="text-white/70 leading-relaxed">When I'm not designing, here's what keeps me inspired!</p>
      <div className="space-y-2">
        {[
          { icon: <Coffee className="w-5 h-5" />, gradient: "from-amber-500/20 to-orange-500/20", iconColor: "text-amber-400", text: "Exploring new coffee shops" },
          { icon: <Gamepad2 className="w-5 h-5" />, gradient: "from-purple-500/20 to-violet-500/20", iconColor: "text-purple-400", text: "Playing video games" },
          { icon: <Palette className="w-5 h-5" />, gradient: "from-pink-500/20 to-rose-500/20", iconColor: "text-pink-400", text: "Experimenting with 3D art" },
        ].map((item, i) => (
          <div 
            key={i} 
            className={`flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r ${item.gradient}`}
            style={{ border: "1px solid rgba(255, 255, 255, 0.05)" }}
          >
            <div className={`p-2 rounded-lg ${item.iconColor}`} style={{ background: "rgba(255, 255, 255, 0.1)" }}>
              {item.icon}
            </div>
            <span className="text-white/80 font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  ),
  contact: (
    <div className="space-y-4">
      <p className="text-white/70 leading-relaxed">Let's connect! I'm always open to new opportunities.</p>
      <div className="space-y-2">
        {[
          { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@raisulr.design", gradient: "from-rose-500/20 to-pink-500/20", iconColor: "text-rose-400" },
          { icon: <Twitter className="w-5 h-5" />, label: "Twitter", value: "@raisulr_design", gradient: "from-sky-500/20 to-blue-500/20", iconColor: "text-sky-400" },
          { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", value: "/in/raisulr", gradient: "from-blue-500/20 to-indigo-500/20", iconColor: "text-blue-400" },
          { icon: <Github className="w-5 h-5" />, label: "GitHub", value: "@raisulr", gradient: "from-gray-500/20 to-slate-500/20", iconColor: "text-gray-400" },
        ].map((contact, i) => (
          <a
            key={i}
            href="#"
            className={`flex items-center gap-3 p-3 rounded-xl transition-all hover:scale-[1.02] bg-gradient-to-r ${contact.gradient}`}
            style={{ border: "1px solid rgba(255, 255, 255, 0.05)" }}
          >
            <div className={`p-2 rounded-lg ${contact.iconColor}`} style={{ background: "rgba(255, 255, 255, 0.1)" }}>
              {contact.icon}
            </div>
            <div>
              <div className="text-xs text-white/50">{contact.label}</div>
              <div className="text-sm font-medium text-white/80">{contact.value}</div>
            </div>
            <ExternalLink className="w-4 h-4 ml-auto text-white/30" />
          </a>
        ))}
      </div>
    </div>
  ),
  video: (
    <div className="space-y-4">
      <div 
        className="flex items-center gap-3 p-4 rounded-xl"
        style={{
          background: "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)",
          border: "1px solid rgba(239, 68, 68, 0.2)"
        }}
      >
        <div className="p-3 rounded-xl text-red-400" style={{ background: "rgba(255, 255, 255, 0.1)" }}>
          <Youtube className="w-6 h-6" />
        </div>
        <div>
          <div className="font-semibold text-white">YouTube Channel</div>
          <div className="text-sm text-white/50">Design tutorials & tips</div>
        </div>
      </div>
      <div className="space-y-2">
        {["UI/UX Design Tutorials", "Process & Behind the Scenes", "Tips for Aspiring Designers"].map((item, i) => (
          <div 
            key={i} 
            className="flex items-center gap-2 text-sm text-white/70 p-2 rounded-lg"
            style={{
              background: "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)",
              border: "1px solid rgba(16, 185, 129, 0.1)"
            }}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {item}
          </div>
        ))}
      </div>
      <button 
        className="w-full flex items-center justify-center gap-2 p-3 rounded-xl font-medium text-white transition-all hover:scale-[1.02]"
        style={{
          background: "linear-gradient(135deg, rgba(239, 68, 68, 0.8) 0%, rgba(220, 38, 38, 0.8) 100%)",
          boxShadow: "0 4px 20px rgba(239, 68, 68, 0.3)"
        }}
      >
        <Youtube className="w-5 h-5" /> Subscribe Now
      </button>
    </div>
  ),
  location: (
    <div className="space-y-4">
      <div 
        className="flex items-center gap-3 p-4 rounded-xl"
        style={{
          background: "linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(14, 165, 233, 0.1) 100%)",
          border: "1px solid rgba(34, 211, 238, 0.2)"
        }}
      >
        <div className="p-3 rounded-xl text-cyan-400" style={{ background: "rgba(255, 255, 255, 0.1)" }}>
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <div className="font-semibold text-white">Dhaka, Bangladesh</div>
          <div className="text-sm text-white/50">Currently based here</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: <Globe className="w-5 h-5" />, label: "Remote Ready", value: "Worldwide", gradient: "from-blue-500/20 to-indigo-500/20", iconColor: "text-blue-400", valueColor: "text-blue-400" },
          { icon: <Zap className="w-5 h-5" />, label: "Open to", value: "Relocation", gradient: "from-emerald-500/20 to-teal-500/20", iconColor: "text-emerald-400", valueColor: "text-emerald-400" },
        ].map((item, i) => (
          <div 
            key={i}
            className={`p-3 rounded-xl text-center bg-gradient-to-br ${item.gradient}`}
            style={{ border: "1px solid rgba(255, 255, 255, 0.05)" }}
          >
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mx-auto mb-1 ${item.iconColor}`} style={{ background: "rgba(255, 255, 255, 0.1)" }}>
              {item.icon}
            </div>
            <div className="text-xs text-white/50">{item.label}</div>
            <div className={`text-sm font-semibold ${item.valueColor}`}>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  ),
  resume: <ResumeContent />,
}

export function ChatBubble({ category, onClose }: ChatBubbleProps) {
  const config = categoryConfig[category]
  const content = categoryContent[category]

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <div 
        className="relative rounded-2xl sm:rounded-3xl overflow-hidden liquid-glass-elevated"
        style={{
          background: "linear-gradient(165deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.08) 100%)",
          backdropFilter: "blur(60px) saturate(180%)",
          WebkitBackdropFilter: "blur(60px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.15)",
          boxShadow: `0 16px 64px rgba(0, 0, 0, 0.35), 0 0 30px ${config.glowColor}, 0 0 0 0.5px rgba(255, 255, 255, 0.2) inset`
        }}
      >
        {/* Header */}
        <div 
          className={`flex items-center justify-between px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r ${config.gradient}`}
          style={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
          }}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div 
              className="p-1.5 sm:p-2 rounded-xl text-white"
              style={{
                background: "linear-gradient(145deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.1) 100%)",
                backdropFilter: "blur(10px)",
                boxShadow: `0 0 15px ${config.glowColor}, inset 0 1px 0 rgba(255, 255, 255, 0.2)`
              }}
            >
              {config.icon}
            </div>
            <span className="font-semibold text-white text-sm sm:text-base">
              {config.title}
            </span>
          </div>
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-1.5 sm:p-2 rounded-xl hover:bg-white/10 transition-colors text-white/60 hover:text-white"
            aria-label="Close chat"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.button>
        </div>

        {/* Content Area - with max height and scroll on mobile */}
        <div className="p-3 sm:p-4 md:p-5 text-xs sm:text-sm md:text-base max-h-[45vh] sm:max-h-[50vh] overflow-y-auto">
          {content}
        </div>
      </div>
    </motion.div>
  )
}
