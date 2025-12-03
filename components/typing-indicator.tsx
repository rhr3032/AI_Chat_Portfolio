"use client"

export function TypingIndicator() {
  return (
    <div className="animate-in fade-in duration-300">
      <div className="inline-flex items-center gap-1 bg-white rounded-2xl border border-gray-200 shadow-md px-4 py-3">
        {/* AI Avatar */}
        <div className="mr-2 w-6 h-6 rounded-full bg-gradient-to-br from-green-200 to-blue-200 flex items-center justify-center">
          <span className="text-[10px] font-bold text-gray-700">AI</span>
        </div>

        {/* Typing dots */}
        <div className="flex gap-1">
          <span
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "0ms", animationDuration: "600ms" }}
          />
          <span
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "150ms", animationDuration: "600ms" }}
          />
          <span
            className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
            style={{ animationDelay: "300ms", animationDuration: "600ms" }}
          />
        </div>
      </div>
    </div>
  )
}
