"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"
import { useScrollProgress } from "@/hooks"

export function ScrollProgress() {
  const progress = useScrollProgress()
  const scaleX = useMotionValue(0)
  const smoothScale = useSpring(scaleX, { stiffness: 100, damping: 30 })

  useEffect(() => {
    scaleX.set(progress)
  }, [progress, scaleX])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
      style={{ scaleX: smoothScale }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-500 to-violet-600 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
    </motion.div>
  )
}
