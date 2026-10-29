"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const StarfieldBackground = dynamic(
  () =>
    import("@/components/effects/starfield-background").then(
      (m) => m.StarfieldBackground
    ),
  { ssr: false }
)

/** Monta el canvas después del LCP (idle) para no competir con el hero. */
export function StarfieldLazy() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let cancelled = false
    const enable = () => {
      if (!cancelled) setShow(true)
    }

    const w = window as Window &
      typeof globalThis & {
        requestIdleCallback?: (
          cb: IdleRequestCallback,
          opts?: IdleRequestOptions
        ) => number
        cancelIdleCallback?: (id: number) => void
      }

    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(enable, { timeout: 1800 })
      return () => {
        cancelled = true
        w.cancelIdleCallback?.(id)
      }
    }

    const t = globalThis.setTimeout(enable, 900)
    return () => {
      cancelled = true
      globalThis.clearTimeout(t)
    }
  }, [])

  if (!show) return null
  return <StarfieldBackground />
}
