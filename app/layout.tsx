import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Raisul R. | Futuristic AI Portfolio",
  description:
    "Personal portfolio of Raisul R. - A passionate Web & UI/UX Designer crafting beautiful digital experiences with cutting-edge AI.",
  keywords: ["UI/UX Designer", "Web Designer", "Portfolio", "Raisul R.", "AI", "Futuristic"],
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0a0a1a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" style={{ height: 'auto', minHeight: '100%' }}>
      <body className={`${inter.variable} font-sans antialiased`} style={{ height: 'auto', minHeight: '100%' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
