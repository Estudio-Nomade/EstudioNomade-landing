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

  const hidden = dramatic
    ? { opacity: 0, y: 40, scale: 0.97, filter: "blur(12px)" }
    : { opacity: 0, y: 20, filter: "blur(8px)" }

  const shown = dramatic
    ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
    : { opacity: 1, y: 0, filter: "blur(0px)" }

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? shown : hidden}
      transition={{
        duration: dramatic ? 0.95 : 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
