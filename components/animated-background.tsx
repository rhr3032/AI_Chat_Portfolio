"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    let mouseX = 0
    let mouseY = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
      pulse: number
      pulseSpeed: number

      constructor() {
        this.x = Math.random() * (canvas?.width || window.innerWidth)
        this.y = Math.random() * (canvas?.height || window.innerHeight)
        this.size = Math.random() * 1.5 + 0.3
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.4 + 0.15
        this.pulse = 0
        this.pulseSpeed = Math.random() * 0.015 + 0.008
        
        const colors = [
          "rgba(0, 245, 255,",   // cyan
          "rgba(191, 0, 255,",    // purple
          "rgba(255, 0, 168,",    // pink
          "rgba(0, 122, 255,",    // iOS blue
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.pulse += this.pulseSpeed
        
        const pulseFactor = Math.sin(this.pulse) * 0.25 + 0.75
        this.opacity = pulseFactor * 0.4

        if (canvas) {
          if (this.x < 0) this.x = canvas.width
          if (this.x > canvas.width) this.x = 0
          if (this.y < 0) this.y = canvas.height
          if (this.y > canvas.height) this.y = 0
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `${this.color} ${this.opacity})`
        ctx.fill()
        
        // Soft glow effect
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `${this.color} ${this.opacity * 0.15})`
        ctx.fill()
      }
    }

    const init = () => {
      particles = []
      // Adjust particle count based on screen size for performance
      const baseCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 18000))
      const particleCount = window.innerWidth < 640 ? Math.floor(baseCount * 0.5) : baseCount
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const connectParticles = () => {
      if (!ctx) return
      const connectionDistance = window.innerWidth < 640 ? 100 : 130
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.1
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 245, 255, ${opacity})`
            ctx.lineWidth = 0.4
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const drawMouseGlow = () => {
      if (!ctx || !mouseX || !mouseY) return
      
      const glowRadius = window.innerWidth < 640 ? 120 : 180
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, glowRadius)
      gradient.addColorStop(0, "rgba(0, 245, 255, 0.08)")
      gradient.addColorStop(0.5, "rgba(191, 0, 255, 0.04)")
      gradient.addColorStop(1, "transparent")
      
      ctx.beginPath()
      ctx.arc(mouseX, mouseY, glowRadius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()
    }

    const animate = () => {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Draw subtle gradient background overlay
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 1.5
      )
      bgGradient.addColorStop(0, "rgba(25, 25, 60, 0.2)")
      bgGradient.addColorStop(1, "transparent")
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      drawMouseGlow()
      
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })
      
      connectParticles()
      
      animationFrameId = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = e.touches[0].clientX
        mouseY = e.touches[0].clientY
      }
    }

    resize()
    init()
    animate()

    window.addEventListener("resize", () => {
      resize()
      init()
    })
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleTouchMove, { passive: true })

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  return (
    <>
      {/* Animated Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />
      
      {/* Gradient Overlays - Optimized for mobile */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top gradient */}
        <div 
          className="absolute top-0 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 rounded-full opacity-25 sm:opacity-30 blur-3xl animate-pulse-glow"
          style={{
            background: "radial-gradient(circle, rgba(191, 0, 255, 0.35) 0%, transparent 70%)"
          }}
        />
        
        {/* Bottom right gradient */}
        <div 
          className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-[500px] h-64 sm:h-80 md:h-[500px] rounded-full opacity-15 sm:opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(0, 245, 255, 0.4) 0%, transparent 70%)",
            animation: "pulse-soft 6s ease-in-out infinite"
          }}
        />
        
        {/* Center accent - hidden on very small screens */}
        <div 
          className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] lg:w-[800px] h-[400px] md:h-[600px] lg:h-[800px] rounded-full opacity-[0.08] blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(255, 0, 168, 0.25) 0%, transparent 60%)"
          }}
        />
        
        {/* Subtle scan line effect - more subtle on mobile */}
        <div 
          className="absolute inset-0 opacity-[0.015] sm:opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)"
          }}
        />
      </div>

      {/* Floating Holographic Rings - hidden on mobile for performance */}
      <div className="hidden md:block fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-full border border-cyan-500/15"
          style={{
            transform: "translateX(-50%) translateY(-50%) rotateX(75deg)",
            animation: "float-ring 6s ease-in-out infinite"
          }}
        />
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] lg:w-[500px] h-[400px] lg:h-[500px] rounded-full border border-purple-500/10"
          style={{
            transform: "translateX(-50%) translateY(-50%) rotateX(75deg)",
            animation: "float-ring 6s ease-in-out infinite 0.5s"
          }}
        />
        <div 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] lg:w-[600px] h-[500px] lg:h-[600px] rounded-full border border-pink-500/[0.07]"
          style={{
            transform: "translateX(-50%) translateY(-50%) rotateX(75deg)",
            animation: "float-ring 6s ease-in-out infinite 1s"
          }}
        />
      </div>
    </>
  )
}
