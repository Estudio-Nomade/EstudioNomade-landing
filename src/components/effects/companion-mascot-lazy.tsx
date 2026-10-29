"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

const CompanionMascot = dynamic(
  () =>
    import("@/components/effects/companion-mascot").then(
      (m) => m.CompanionMascot
    ),
  { ssr: false }
)

/** Mascota después del primer paint / idle — no bloquea LCP. */
export function CompanionMascotLazy() {
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
      const id = w.requestIdleCallback(enable, { timeout: 2200 })
      return () => {
        cancelled = true
        w.cancelIdleCallback?.(id)
      }
    }

    const t = globalThis.setTimeout(enable, 1100)
    return () => {
      cancelled = true
      globalThis.clearTimeout(t)
    }
  }, [])

  if (!show) return null
  return <CompanionMascot />
}
