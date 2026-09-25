"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect } from "react"
import { useScrollProgress } from "@/hooks"

export function ScrollProgress() {
  const progress = useScrollProgress()
  const scaleX = useMotionValue(0)
  const smoothScale = useSpring(scaleX, { stiffness: 120, damping: 28 })

  useEffect(() => {
    scaleX.set(progress)
  }, [progress, scaleX])

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-[110] h-[2.5px] origin-left"
      style={{ scaleX: smoothScale }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-300 via-fuchsia-400 to-purple-500 shadow-[0_0_14px_rgba(167,139,250,0.7)]" />
    </motion.div>
  )
}
