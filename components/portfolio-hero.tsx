"use client"

import { useState } from "react"
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
      // Close any category chat
      setActiveChat(null)
      setShowResponse(false)
      
      // Show AI chat mode
      setIsAiChat(true)
      
      // Add user message
      const userMessage: Message = { role: "user", content: searchQuery }
      setMessages((prev) => [...prev, userMessage])
      
      // Show typing indicator
      setIsTyping(true)
      
      try {
        // Call AI API
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
          // Add AI response
          const aiMessage: Message = { role: "assistant", content: data.response }
          setMessages((prev) => [...prev, aiMessage])
        } else if (data.error) {
          // Show actual error message for debugging
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
      
      // Clear search query
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

  return (
    <div className="relative min-h-screen w-full bg-white">
      <AnimatedBackground />

      <div className="relative z-10 flex flex-col items-center px-4 py-8 md:py-12 lg:py-16">
        <ProfileSection />

        <div className="mt-8 w-full max-w-xl">
          <SearchBar value={searchQuery} onChange={setSearchQuery} onSubmit={handleSearch} />
        </div>

        <div className="mt-6 w-full max-w-xl min-h-[100px]">
          {isTyping && <TypingIndicator />}
          {showResponse && activeChat && <ChatBubble category={activeChat} onClose={handleCloseChat} />}
          {isAiChat && messages.length > 0 && <AiChatBubble messages={messages} onClose={handleCloseChat} />}
        </div>

        <div className="mt-6 w-full max-w-3xl">
          <CategoryCards onCategoryClick={handleCategoryClick} activeCategory={activeChat} />
        </div>

        {/* Watermark */}
        <div className="mt-12 select-none">
          <span className="text-[120px] md:text-[180px] font-bold text-gray-100 tracking-tight opacity-60">
            rhr3032
          </span>
        </div>
      </div>
    </div>
  )
}
