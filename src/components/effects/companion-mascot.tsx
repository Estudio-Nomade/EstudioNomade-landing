"use client"

import { useEffect, useRef, useState } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import Image from "next/image"

export const NAV_MENU_EVENT = "en-nav-menu"

const DETACH_SCROLL_PX = 90

/**
 * Mascota sin texto.
 * En hero (desktop): grande al lado del H1, quieta.
 * Al scrollear: se despega, achica al tamaño companion y sigue el cursor.
 * Menú hamburguesa: se esconde.
 */
export function CompanionMascot() {
  const reduceMotion = useReducedMotion()
  const [ready, setReady] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [detached, setDetached] = useState(false)
  const [vw, setVw] = useState(1280)
  const detachedRef = useRef(false)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const rawSize = useMotionValue(96)

  const springCfg = reduceMotion
    ? { stiffness: 500, damping: 42, mass: 0.35 }
    : { stiffness: 150, damping: 22, mass: 0.55 }

  const x = useSpring(rawX, springCfg)
  const y = useSpring(rawY, springCfg)
  const size = useSpring(rawSize, {
    stiffness: reduceMotion ? 400 : 120,
    damping: 22,
    mass: 0.5,
  })

  const { scrollY } = useScroll()

  const half = useTransform(size, (s) => s / 2)
  const left = useTransform(
    [x, half],
    ([px, h]) => (px as number) - (h as number)
  )
  const top = useTransform(
    [y, half],
    ([py, h]) => (py as number) - (h as number)
  )

  /** Tamaño parked (hero) vs companion (cursor) */
  const sizesFor = (w: number) => {
    if (w < 640) return { park: 88, companion: 64 }
    if (w < 1024) return { park: 120, companion: 72 }
    // desktop: grande al lado del H1
    return { park: 280, companion: 96 }
  }

  const parkPos = (w: number, h: number) => {
    const { park } = sizesFor(w)
    if (w < 1024) {
      // mobile: derecha, debajo del header sticky (~56px)
      return {
        px: w - park * 0.55 - 12,
        py: 72 + park * 0.45,
      }
    }
    // desktop: columna derecha del hero, a la altura del H1
    const contentMax = 1280
    const sidePad = Math.max(32, (w - contentMax) / 2)
    const gridMax = 1024
    const gridLeft =
      sidePad + Math.max(0, (Math.min(w, contentMax) - gridMax) / 2)
    const col1 = gridMax * (1.2 / 2)
    const col2Center = gridLeft + col1 + (gridMax - col1) * 0.5
    return {
      px: Math.min(w - park * 0.5 - 24, col2Center),
      py: Math.min(h * 0.42, 300),
    }
  }

  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      setVw(w)
      const { park, companion } = sizesFor(w)
      if (!detachedRef.current) {
        const { px, py } = parkPos(w, h)
        rawX.set(px)
        rawY.set(py)
        rawSize.set(park)
      } else {
        rawSize.set(companion)
      }
    }
    measure()
    setReady(true)
    window.addEventListener("resize", measure, { passive: true })
    return () => window.removeEventListener("resize", measure)
  }, [rawX, rawY, rawSize])

  useEffect(() => {
    const onMenu = (e: Event) => {
      const open = Boolean((e as CustomEvent<{ open: boolean }>).detail?.open)
      setMenuOpen(open)
    }
    window.addEventListener(NAV_MENU_EVENT, onMenu)
    return () => window.removeEventListener(NAV_MENU_EVENT, onMenu)
  }, [])

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => {
      const w = window.innerWidth
      const h = window.innerHeight
      const { park, companion } = sizesFor(w)

      if (v >= DETACH_SCROLL_PX && !detachedRef.current) {
        detachedRef.current = true
        setDetached(true)
        rawSize.set(companion)
        const dropX = w * (w < 1024 ? 0.72 : 0.78)
        const dropY = Math.min(h * 0.52, 400)
        rawX.set(dropX)
        rawY.set(dropY)
      }
      if (v < 24 && detachedRef.current) {
        detachedRef.current = false
        setDetached(false)
        const { px, py } = parkPos(w, h)
        rawX.set(px)
        rawY.set(py)
        rawSize.set(park)
      }
    })
    return () => unsub()
  }, [scrollY, rawX, rawY, rawSize])

  useEffect(() => {
    if (menuOpen || !detached) return

    const clamp = (v: number, min: number, max: number) =>
      Math.min(max, Math.max(min, v))

    const follow = (clientX: number, clientY: number) => {
      const pad = 28
      rawX.set(clamp(clientX, pad, window.innerWidth - pad))
      rawY.set(clamp(clientY, pad + 64, window.innerHeight - pad))
    }

    const onPointer = (e: PointerEvent) => follow(e.clientX, e.clientY)
    const onTouch = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (!touch) return
      follow(touch.clientX, touch.clientY)
    }

    window.addEventListener("pointermove", onPointer, { passive: true })
    window.addEventListener("touchmove", onTouch, { passive: true })
    window.addEventListener("pointerdown", onPointer, { passive: true })

    return () => {
      window.removeEventListener("pointermove", onPointer)
      window.removeEventListener("touchmove", onTouch)
      window.removeEventListener("pointerdown", onPointer)
    }
  }, [menuOpen, detached, rawX, rawY])

  if (!ready) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-[60]"
      style={{
        left,
        top,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0.82, rotate: -6 }}
      animate={{
        opacity: menuOpen ? 0 : 1,
        scale: menuOpen ? 0.7 : 1,
        rotate: menuOpen ? 10 : detached ? 0 : -2,
        y: menuOpen ? 18 : 0,
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <div className="relative h-full w-full">
        <div className="pointer-events-none absolute inset-0 -m-[18%] rounded-full bg-violet-500/20 blur-[32px]" />
        <Image
          src="/logo-clear.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 280px, 120px"
          className="object-contain drop-shadow-[0_0_28px_rgba(167,139,250,0.55)]"
          priority
        />
        <span
          className="sparkle-mark"
          style={{
            top: "10%",
            left: "14%",
            width: detached || vw < 1024 ? 8 : 14,
            height: detached || vw < 1024 ? 8 : 14,
            animationDelay: "0.2s",
          }}
        />
        {!detached && vw >= 1024 ? (
          <span
            className="sparkle-mark"
            style={{
              top: "22%",
              right: "12%",
              left: "auto",
              width: 16,
              height: 16,
              animationDelay: "1s",
            }}
          />
        ) : null}
      </div>
    </motion.div>
  )
}
