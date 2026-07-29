"use client"

import { useEffect, useState, useRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  delay: number
  duration: number
}

interface SparklesProps {
  children?: ReactNode
  className?: string
  count?: number
  colors?: string[]
  size?: number
}

export function Sparkles({
  children,
  className,
  count = 20,
  colors = ["#c4b5fd", "#8b5cf6", "#7c3aed", "#a78bfa"],
  size = 2,
}: SparklesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const rect = container.getBoundingClientRect()

    setSparkles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: Math.random() * size + 1,
        opacity: Math.random() * 0.5 + 0.1,
        delay: Math.random() * 3,
        duration: Math.random() * 2 + 1,
      }))
    )
  }, [count, size])

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute rounded-full animate-pulse-glow"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            background: colors[sparkle.id % colors.length],
            opacity: sparkle.opacity,
            animationDelay: `${sparkle.delay}s`,
            animationDuration: `${sparkle.duration}s`,
          }}
        />
      ))}
      {children}
    </div>
  )
}
