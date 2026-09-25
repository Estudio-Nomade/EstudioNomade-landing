"use client"

import { useEffect } from "react"
import { useScrollProgress } from "@/hooks"

/**
 * Pinta la raya de progreso dentro del header (#en-scroll-progress-track)
 * en vez de una barra fixed separada que generaba “hueco” visual.
 */
export function ScrollProgress() {
  const progress = useScrollProgress()

  useEffect(() => {
    const el = document.getElementById("en-scroll-progress-track")
    if (!el) return
    el.style.transform = `scaleX(${Math.min(1, Math.max(0, progress))})`
  }, [progress])

  return null
}
