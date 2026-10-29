"use client"

import { type ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "@/hooks"
import { cn } from "@/lib/utils"

interface SectionRevealProps {
  children: ReactNode
  delay?: number
  className?: string
  /** Más dramático: escala + blur + slide */
  dramatic?: boolean
}

export function SectionReveal({
  children,
  delay = 0,
  className,
  dramatic = true,
}: SectionRevealProps) {
  const { ref, isInView } = useInView(0.12)

  // Sin filter/blur: evita animaciones non-composited (PageSpeed)
  const hidden = dramatic
    ? { opacity: 0, y: 28, scale: 0.985 }
    : { opacity: 0, y: 16 }

  const shown = dramatic
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 1, y: 0 }

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? shown : hidden}
      transition={{
        duration: dramatic ? 0.55 : 0.4,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
