"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedBackground } from "./animated-background"
import { ProfileSection } from "./profile-section"
import { SearchBar } from "./search-bar"
import { CategoryCards } from "./category-cards"
import { ChatBubble } from "./chat-bubble"
import { TypingIndicator } from "./typing-indicator"
import { AiChatBubble } from "./ai-chat-bubble"

export type CategoryKey = "me" | "projects" | "skills" | "fun" | "contact" | "video" | "location" | "resume"

interface Message {
  role: "user" | "assistant"
  content: string
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
}

export function PortfolioHero() {
  const [activeChat, setActiveChat] = useState<CategoryKey | null>(null)
  const [isTyping, setIsTyping] = useState(false)
  const [showResponse, setShowResponse] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [messages, setMessages] = useState<Message[]>([])
  const [isAiChat, setIsAiChat] = useState(false)

  const handleCategoryClick = (category: CategoryKey) => {
    setActiveChat(category)
    setShowResponse(false)
    setIsTyping(true)
    setIsAiChat(false)
    setMessages([])

    setTimeout(() => {
      setIsTyping(false)
      setShowResponse(true)
    }, 1500)
  }

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      setActiveChat(null)
      setShowResponse(false)
      setIsAiChat(true)
      
      const userMessage: Message = { role: "user", content: searchQuery }
      setMessages((prev) => [...prev, userMessage])
      setIsTyping(true)
      
      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: searchQuery }),
        })

        const data = await response.json()
        
        setIsTyping(false)
        
        if (data.response) {
          const aiMessage: Message = { role: "assistant", content: data.response }
          setMessages((prev) => [...prev, aiMessage])
        } else if (data.error) {
          console.error("API Error:", data)
          const errorMessage: Message = { 
            role: "assistant", 
            content: `Error: ${data.error}${data.details ? '\n\nDetails: ' + data.details : ''}` 
          }
          setMessages((prev) => [...prev, errorMessage])
        }
      } catch (error) {
        console.error("Fetch error:", error)
        setIsTyping(false)
        const errorMessage: Message = { 
          role: "assistant", 
          content: "Sorry, I couldn't connect to the API. Please check the console for details." 
        }
        setMessages((prev) => [...prev, errorMessage])
      }
      
      setSearchQuery("")
    }
  }

  const handleCloseChat = () => {
    setActiveChat(null)
    setShowResponse(false)
    setIsTyping(false)
    setIsAiChat(false)
    setMessages([])
  }

  const hasActiveModal = showResponse || isTyping || (isAiChat && messages.length > 0)

  return (
    <div className="relative w-full min-h-screen safe-area-inset">
      <AnimatedBackground />

      {/* Main Content - Uses natural document scroll */}
      <motion.div 
        className="relative z-10 flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 pb-16 sm:pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Section - Profile */}
        <motion.div 
          className="w-full max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <ProfileSection />
        </motion.div>

        {/* Search Bar */}
        <motion.div 
          className="w-full max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-xl"
          variants={itemVariants}
        >
          <SearchBar value={searchQuery} onChange={setSearchQuery} onSubmit={handleSearch} />
        </motion.div>

        {/* Chat/Modal Area */}
        <motion.div 
          className={`mt-3 sm:mt-6 w-full max-w-[92vw] sm:max-w-md md:max-w-lg lg:max-w-xl ${hasActiveModal ? '' : 'min-h-[20px]'}`}
          layout
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence mode="wait">
            {isTyping && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TypingIndicator />
              </motion.div>
            )}
            {showResponse && activeChat && (
              <motion.div
                key="chat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <ChatBubble category={activeChat} onClose={handleCloseChat} />
              </motion.div>
            )}
            {isAiChat && messages.length > 0 && (
              <motion.div
                key="ai-chat"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <AiChatBubble messages={messages} onClose={handleCloseChat} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Category Cards - Always visible */}
        <motion.div 
          className="mt-3 sm:mt-6 w-full max-w-[95vw] sm:max-w-2xl lg:max-w-3xl"
          variants={itemVariants}
        >
          <CategoryCards onCategoryClick={handleCategoryClick} activeCategory={activeChat} />
        </motion.div>
      </motion.div>
    </div>
  )
}
