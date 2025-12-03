"use client"

import { X, Bot, User } from "lucide-react"

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
    <div className="relative animate-in slide-in-from-bottom-4 fade-in duration-500 ease-out">
      <div className="relative bg-white rounded-2xl border border-gray-100 shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-indigo-100 to-purple-100">
          <div className="flex items-center gap-2 text-indigo-700">
            <div className="p-1.5 bg-indigo-200 rounded-lg">
              <Bot className="w-5 h-5" />
            </div>
            <span className="font-semibold">AI Assistant</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-white/50 transition-colors text-indigo-700"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="p-5 space-y-4 max-h-[400px] overflow-y-auto">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.role === "assistant" && (
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-indigo-600" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.role === "user"
                    ? "bg-indigo-500 text-white rounded-br-sm"
                    : "bg-gray-100 text-gray-800 rounded-bl-sm"
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
              </div>
              {message.role === "user" && (
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
