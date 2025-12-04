"use client"

import { X, Bot, User, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Message {
  role: "user" | "assistant"
  content: string
}

interface AiChatBubbleProps {
  messages: Message[]
  onClose: () => void
}

export function AiChatBubble({ messages, onClose }: AiChatBubbleProps) {
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
          boxShadow: "0 16px 64px rgba(0, 0, 0, 0.35), 0 0 0 0.5px rgba(255, 255, 255, 0.2) inset"
        }}
      >
        {/* Header */}
        <div 
          className="flex items-center justify-between px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4"
          style={{
            background: "linear-gradient(135deg, rgba(0, 245, 255, 0.08) 0%, rgba(191, 0, 255, 0.08) 100%)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)"
          }}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div 
              className="p-1.5 sm:p-2 rounded-xl"
              style={{
                background: "linear-gradient(145deg, rgba(0, 245, 255, 0.2) 0%, rgba(191, 0, 255, 0.2) 100%)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 0 15px rgba(0, 245, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
              }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            </div>
            <div>
              <span className="font-semibold text-white text-sm sm:text-base">AI Assistant</span>
              <span className="text-[10px] sm:text-xs text-cyan-400/60 block">Powered by Gemini</span>
            </div>
          </div>
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-1.5 sm:p-2 rounded-xl transition-all duration-300 hover:bg-white/10 text-white/60 hover:text-white"
            aria-label="Close chat"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.button>
        </div>

        {/* Messages Area */}
        <div className="p-3 sm:p-4 md:p-5 space-y-3 sm:space-y-4 max-h-[250px] sm:max-h-[350px] md:max-h-[400px] overflow-y-auto">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              className={`flex gap-2 sm:gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.role === "assistant" && (
                <div 
                  className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(145deg, rgba(0, 245, 255, 0.2) 0%, rgba(191, 0, 255, 0.2) 100%)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 0 10px rgba(0, 245, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
                  }}
                >
                  <Bot className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-cyan-400" />
                </div>
              )}
              <div
                className={`max-w-[85%] sm:max-w-[80%] p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl ${
                  message.role === "user"
                    ? "rounded-br-sm"
                    : "rounded-bl-sm"
                }`}
                style={{
                  background: message.role === "user"
                    ? "linear-gradient(145deg, rgba(0, 245, 255, 0.25) 0%, rgba(0, 122, 255, 0.25) 100%)"
                    : "linear-gradient(145deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
                  backdropFilter: "blur(20px)",
                  border: message.role === "user"
                    ? "1px solid rgba(0, 245, 255, 0.25)"
                    : "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: message.role === "user"
                    ? "0 4px 15px rgba(0, 245, 255, 0.15)"
                    : "0 2px 10px rgba(0, 0, 0, 0.1)"
                }}
              >
                <p className={`text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                  message.role === "user" ? "text-white" : "text-white/80"
                }`}>
                  {message.content}
                </p>
              </div>
              {message.role === "user" && (
                <div 
                  className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(145deg, rgba(0, 245, 255, 0.35) 0%, rgba(0, 122, 255, 0.35) 100%)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 0 10px rgba(0, 245, 255, 0.2)"
                  }}
                >
                  <User className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
