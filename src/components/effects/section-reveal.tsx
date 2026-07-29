"use client"

import { type ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "@/hooks"
import { cn } from "@/lib/utils"

interface SectionRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export function SectionReveal({ children, delay = 0, className }: SectionRevealProps) {
  const { ref, isInView } = useInView()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={
        isInView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 0, y: 20, filter: "blur(8px)" }
      }
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
