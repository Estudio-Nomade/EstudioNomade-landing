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
 * Mascota chica, sin texto debajo.
 * Arriba quieta en el hero → al scrollear se despega / cae y sigue el cursor.
 * Se esconde con el menú hamburguesa.
 */
export function CompanionMascot() {
  const reduceMotion = useReducedMotion()
  const [ready, setReady] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [detached, setDetached] = useState(false)
  const [vw, setVw] = useState(1280)
  const [vh, setVh] = useState(800)
  const detachedRef = useRef(false)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springCfg = reduceMotion
    ? { stiffness: 500, damping: 42, mass: 0.35 }
    : { stiffness: 160, damping: 20, mass: 0.5 }

  const x = useSpring(rawX, springCfg)
  const y = useSpring(rawY, springCfg)

  const { scrollY } = useScroll()

  const isNarrow = vw < 640
  // Más chica para no tapar el copy
  const size = isNarrow ? 72 : vw < 1024 ? 84 : 96
  const half = size / 2

  const left = useTransform(x, (px) => px - half)
  const top = useTransform(y, (py) => py - half)

  const park = (w: number, h: number) => {
    // Arriba a la derecha, debajo del navbar — quieta en el hero
    const px = w < 1024 ? w * 0.82 : Math.min(w - 72, w * 0.78)
    const py = w < 1024 ? 118 : 132
    return { px, py }
  }

  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      setVw(w)
      setVh(h)
      if (!detachedRef.current) {
        const { px, py } = park(w, h)
        rawX.set(px)
        rawY.set(py)
      }
    }
    measure()
    setReady(true)
    window.addEventListener("resize", measure, { passive: true })
    return () => window.removeEventListener("resize", measure)
  }, [rawX, rawY])

  useEffect(() => {
    const onMenu = (e: Event) => {
      const open = Boolean((e as CustomEvent<{ open: boolean }>).detail?.open)
      setMenuOpen(open)
    }
    window.addEventListener(NAV_MENU_EVENT, onMenu)
    return () => window.removeEventListener(NAV_MENU_EVENT, onMenu)
  }, [])

  // Detach al scrollear un poco: “se cae” y empieza a seguir
  useEffect(() => {
    const unsub = scrollY.on("change", (v) => {
      if (v >= DETACH_SCROLL_PX && !detachedRef.current) {
        detachedRef.current = true
        setDetached(true)
        // caída inicial hacia el centro-bajo de la pantalla
        const dropX = window.innerWidth * (window.innerWidth < 1024 ? 0.7 : 0.75)
        const dropY = Math.min(window.innerHeight * 0.55, 420)
        rawX.set(dropX)
        rawY.set(dropY)
      }
      if (v < 24 && detachedRef.current) {
        // volver al park si el user vuelve al tope
        detachedRef.current = false
        setDetached(false)
        const { px, py } = park(window.innerWidth, window.innerHeight)
        rawX.set(px)
        rawY.set(py)
      }
    })
    return () => unsub()
  }, [scrollY, rawX, rawY])

  // Seguir cursor solo cuando ya se despegó
  useEffect(() => {
    if (menuOpen || !detached) return

    const clamp = (v: number, min: number, max: number) =>
      Math.min(max, Math.max(min, v))

    const follow = (clientX: number, clientY: number) => {
      const pad = 28
      rawX.set(clamp(clientX, pad, window.innerWidth - pad))
      rawY.set(clamp(clientY, pad + 64, window.innerHeight - pad))
    }

    const onPointer = (e: PointerEvent) => {
      follow(e.clientX, e.clientY)
    }

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
      initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
      animate={{
        opacity: menuOpen ? 0 : 1,
        scale: menuOpen ? 0.65 : detached ? 1 : 1,
        rotate: menuOpen ? 12 : detached ? 0 : -3,
        y: menuOpen ? 20 : 0,
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <div className="relative h-full w-full">
        <div className="pointer-events-none absolute inset-0 -m-[20%] rounded-full bg-violet-500/20 blur-[28px]" />
        <Image
          src="/logo-clear.png"
          alt=""
          fill
          sizes="96px"
          className="object-contain drop-shadow-[0_0_22px_rgba(167,139,250,0.5)]"
          priority
        />
        <span
          className="sparkle-mark"
          style={{
            top: "10%",
            left: "14%",
            width: 8,
            height: 8,
            animationDelay: "0.2s",
          }}
        />
      </div>
    </motion.div>
  )
}
