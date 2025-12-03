"use client"

import type React from "react"
import { useState } from "react"
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
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {[
          {
            value: "5+",
            label: "Years Experience",
            icon: <Zap className="w-4 h-4" />,
            bgColor: "bg-amber-50",
            iconBg: "bg-amber-100",
            iconColor: "text-amber-600",
          },
          {
            value: "50+",
            label: "Clients Globally",
            icon: <Globe className="w-4 h-4" />,
            bgColor: "bg-sky-50",
            iconBg: "bg-sky-100",
            iconColor: "text-sky-600",
          },
          {
            value: "100+",
            label: "Projects Done",
            icon: <Star className="w-4 h-4" />,
            bgColor: "bg-violet-50",
            iconBg: "bg-violet-100",
            iconColor: "text-violet-600",
          },
        ].map((stat, i) => (
          <div key={i} className={`p-3 ${stat.bgColor} rounded-xl text-center`}>
            <div
              className={`w-8 h-8 ${stat.iconBg} ${stat.iconColor} rounded-lg flex items-center justify-center mx-auto mb-2`}
            >
              {stat.icon}
            </div>
            <div className="text-lg font-bold text-gray-800">{stat.value}</div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 rounded-lg">
        <Award className="w-5 h-5 text-amber-500" />
        <span className="text-sm text-gray-600">Featured on Dribbble & Behance</span>
      </div>
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="w-full flex items-center justify-center gap-2 p-3 bg-indigo-500 hover:bg-indigo-600 disabled:opacity-70 text-white rounded-xl font-medium transition-all"
      >
        {isDownloading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Preparing PDF...
          </>
        ) : (
          <>
            <Download className="w-5 h-5" /> Download Resume
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
    headerBg: string
    headerText: string
    iconBg: string
  }
> = {
  me: {
    title: "About Me",
    icon: <User className="w-5 h-5" />,
    headerBg: "bg-violet-100",
    headerText: "text-violet-700",
    iconBg: "bg-violet-200",
  },
  projects: {
    title: "My Projects",
    icon: <Briefcase className="w-5 h-5" />,
    headerBg: "bg-blue-100",
    headerText: "text-blue-700",
    iconBg: "bg-blue-200",
  },
  skills: {
    title: "My Skills",
    icon: <Layers className="w-5 h-5" />,
    headerBg: "bg-emerald-100",
    headerText: "text-emerald-700",
    iconBg: "bg-emerald-200",
  },
  fun: {
    title: "Fun Facts",
    icon: <Sparkles className="w-5 h-5" />,
    headerBg: "bg-amber-100",
    headerText: "text-amber-700",
    iconBg: "bg-amber-200",
  },
  contact: {
    title: "Get In Touch",
    icon: <Mail className="w-5 h-5" />,
    headerBg: "bg-rose-100",
    headerText: "text-rose-700",
    iconBg: "bg-rose-200",
  },
  video: {
    title: "Video Content",
    icon: <Video className="w-5 h-5" />,
    headerBg: "bg-red-100",
    headerText: "text-red-700",
    iconBg: "bg-red-200",
  },
  location: {
    title: "Location",
    icon: <MapPin className="w-5 h-5" />,
    headerBg: "bg-cyan-100",
    headerText: "text-cyan-700",
    iconBg: "bg-cyan-200",
  },
  resume: {
    title: "My Resume",
    icon: <FileText className="w-5 h-5" />,
    headerBg: "bg-indigo-100",
    headerText: "text-indigo-700",
    iconBg: "bg-indigo-200",
  },
}

const categoryContent: Record<CategoryKey, React.ReactNode> = {
  me: (
    <div className="space-y-4">
      <p className="text-gray-600 leading-relaxed">
        Hi there! I'm <span className="font-semibold text-violet-600">Raisul R.</span>, a passionate Web & UI/UX
        Designer with 5+ years of experience crafting beautiful digital experiences.
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 text-rose-600 rounded-full text-sm font-medium">
          <Heart className="w-4 h-4" /> Design Lover
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-600 rounded-full text-sm font-medium">
          <Zap className="w-4 h-4" /> Problem Solver
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-600 rounded-full text-sm font-medium">
          <Star className="w-4 h-4" /> Creative Thinker
        </span>
      </div>
    </div>
  ),
  projects: (
    <div className="space-y-4">
      <p className="text-gray-600 leading-relaxed">I've worked on some exciting projects across various industries!</p>
      <div className="grid grid-cols-2 gap-3">
        {[
          {
            name: "E-Commerce Platform",
            icon: <Globe className="w-4 h-4" />,
            bgColor: "bg-blue-50",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
          },
          {
            name: "SaaS Dashboard",
            icon: <Layers className="w-4 h-4" />,
            bgColor: "bg-purple-50",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
          },
          {
            name: "Mobile App Design",
            icon: <Figma className="w-4 h-4" />,
            bgColor: "bg-orange-50",
            iconBg: "bg-orange-100",
            iconColor: "text-orange-600",
          },
          {
            name: "Brand Identity",
            icon: <Palette className="w-4 h-4" />,
            bgColor: "bg-pink-50",
            iconBg: "bg-pink-100",
            iconColor: "text-pink-600",
          },
        ].map((project, i) => (
          <div
            key={i}
            className={`flex items-center gap-2 p-3 ${project.bgColor} rounded-xl hover:opacity-80 transition-opacity cursor-pointer`}
          >
            <div className={`p-2 ${project.iconBg} ${project.iconColor} rounded-lg`}>{project.icon}</div>
            <span className="text-sm font-medium text-gray-700">{project.name}</span>
          </div>
        ))}
      </div>
      <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm">
        View All Projects <ExternalLink className="w-4 h-4" />
      </button>
    </div>
  ),
  skills: (
    <div className="space-y-4">
      <div className="space-y-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-pink-100 rounded-lg">
              <Figma className="w-4 h-4 text-pink-600" />
            </div>
            <span className="font-medium text-gray-700">Design Tools</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Figma", "Adobe XD", "Sketch", "Photoshop"].map((skill) => (
              <span key={skill} className="px-2.5 py-1 bg-pink-50 text-pink-600 rounded-lg text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-blue-100 rounded-lg">
              <Code className="w-4 h-4 text-blue-600" />
            </div>
            <span className="font-medium text-gray-700">Development</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "React", "Tailwind"].map((skill) => (
              <span key={skill} className="px-2.5 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-violet-100 rounded-lg">
              <Sparkles className="w-4 h-4 text-violet-600" />
            </div>
            <span className="font-medium text-gray-700">UX Skills</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {["User Research", "Wireframing", "Prototyping", "Testing"].map((skill) => (
              <span key={skill} className="px-2.5 py-1 bg-violet-50 text-violet-600 rounded-lg text-xs font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
  fun: (
    <div className="space-y-4">
      <p className="text-gray-600 leading-relaxed">When I'm not designing, here's what keeps me inspired!</p>
      <div className="space-y-2">
        {[
          {
            icon: <Coffee className="w-5 h-5" />,
            bgColor: "bg-amber-50",
            iconBg: "bg-amber-100",
            iconColor: "text-amber-600",
            text: "Exploring new coffee shops",
          },
          {
            icon: <Gamepad2 className="w-5 h-5" />,
            bgColor: "bg-purple-50",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
            text: "Playing video games",
          },
          {
            icon: <Palette className="w-5 h-5" />,
            bgColor: "bg-pink-50",
            iconBg: "bg-pink-100",
            iconColor: "text-pink-600",
            text: "Experimenting with 3D art",
          },
        ].map((item, i) => (
          <div key={i} className={`flex items-center gap-3 p-3 ${item.bgColor} rounded-xl`}>
            <div className={`p-2 ${item.iconBg} ${item.iconColor} rounded-lg`}>{item.icon}</div>
            <span className="text-gray-700 font-medium">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  ),
  contact: (
    <div className="space-y-4">
      <p className="text-gray-600 leading-relaxed">Let's connect! I'm always open to new opportunities.</p>
      <div className="space-y-2">
        {[
          {
            icon: <Mail className="w-5 h-5" />,
            label: "Email",
            value: "hello@raisulr.design",
            bgColor: "bg-rose-50",
            iconBg: "bg-rose-100",
            iconColor: "text-rose-600",
          },
          {
            icon: <Twitter className="w-5 h-5" />,
            label: "Twitter",
            value: "@raisulr_design",
            bgColor: "bg-sky-50",
            iconBg: "bg-sky-100",
            iconColor: "text-sky-600",
          },
          {
            icon: <Linkedin className="w-5 h-5" />,
            label: "LinkedIn",
            value: "/in/raisulr",
            bgColor: "bg-blue-50",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
          },
          {
            icon: <Github className="w-5 h-5" />,
            label: "GitHub",
            value: "@raisulr",
            bgColor: "bg-gray-50",
            iconBg: "bg-gray-200",
            iconColor: "text-gray-700",
          },
        ].map((contact, i) => (
          <a
            key={i}
            href="#"
            className={`flex items-center gap-3 p-3 ${contact.bgColor} rounded-xl hover:opacity-80 transition-opacity`}
          >
            <div className={`p-2 ${contact.iconBg} ${contact.iconColor} rounded-lg`}>{contact.icon}</div>
            <div>
              <div className="text-xs text-gray-500">{contact.label}</div>
              <div className="text-sm font-medium text-gray-700">{contact.value}</div>
            </div>
            <ExternalLink className="w-4 h-4 ml-auto text-gray-400" />
          </a>
        ))}
      </div>
    </div>
  ),
  video: (
    <div className="space-y-4">
      <div className="flex items-center gap-3 p-4 bg-red-50 rounded-xl">
        <div className="p-3 bg-red-100 rounded-xl">
          <Youtube className="w-6 h-6 text-red-600" />
        </div>
        <div>
          <div className="font-semibold text-gray-800">YouTube Channel</div>
          <div className="text-sm text-gray-600">Design tutorials & tips</div>
        </div>
      </div>
      <div className="space-y-2">
        {["UI/UX Design Tutorials", "Process & Behind the Scenes", "Tips for Aspiring Designers"].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-gray-600 p-2 bg-emerald-50 rounded-lg">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            {item}
          </div>
        ))}
      </div>
      <button className="w-full flex items-center justify-center gap-2 p-3 bg-red-500 hover:bg-red-600 text-white rounded-xl font-medium transition-colors">
        <Youtube className="w-5 h-5" /> Subscribe Now
      </button>
    </div>
  ),
  location: (
    <div className="space-y-4">
      <div className="flex items-center gap-3 p-4 bg-cyan-50 rounded-xl">
        <div className="p-3 bg-cyan-100 rounded-xl">
          <MapPin className="w-6 h-6 text-cyan-600" />
        </div>
        <div>
          <div className="font-semibold text-gray-800">Dhaka, Bangladesh</div>
          <div className="text-sm text-gray-600">Currently based here</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="p-3 bg-blue-50 rounded-xl text-center">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-1">
            <Globe className="w-5 h-5 text-blue-600" />
          </div>
          <div className="text-xs text-gray-500">Remote Ready</div>
          <div className="text-sm font-semibold text-blue-600">Worldwide</div>
        </div>
        <div className="p-3 bg-emerald-50 rounded-xl text-center">
          <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-1">
            <Zap className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="text-xs text-gray-500">Open to</div>
          <div className="text-sm font-semibold text-emerald-600">Relocation</div>
        </div>
      </div>
    </div>
  ),
  resume: <ResumeContent />,
}

export function ChatBubble({ category, onClose }: ChatBubbleProps) {
  const config = categoryConfig[category]
  const content = categoryContent[category]

  return (
    <div className="relative animate-in slide-in-from-bottom-4 fade-in duration-500 ease-out">
      <div className="relative bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        {/* Header with light solid color */}
        <div className={`flex items-center justify-between px-4 py-3 ${config.headerBg}`}>
          <div className={`flex items-center gap-2 ${config.headerText}`}>
            <div className={`p-1.5 ${config.iconBg} rounded-lg`}>{config.icon}</div>
            <span className="font-semibold">{config.title}</span>
          </div>
          <button
            onClick={onClose}
            className={`p-1.5 rounded-lg hover:bg-white/50 transition-colors ${config.headerText}`}
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-5">{content}</div>
      </div>
    </div>
  )
}
