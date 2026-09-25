"use client"

import { useEffect, useState } from "react"
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

/**
 * Mascota que sigue el cursor / dedo.
 * Se esconde cuando el menú hamburguesa está abierto.
 */
export function CompanionMascot() {
  const reduceMotion = useReducedMotion()
  const [ready, setReady] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [vw, setVw] = useState(1280)
  const [vh, setVh] = useState(800)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const springCfg = reduceMotion
    ? { stiffness: 500, damping: 40, mass: 0.4 }
    : { stiffness: 140, damping: 22, mass: 0.55 }

  const x = useSpring(rawX, springCfg)
  const y = useSpring(rawY, springCfg)

  const { scrollYProgress } = useScroll()
  const t = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 400 : 100,
    damping: 28,
    mass: 0.5,
  })

  const isNarrow = vw < 640
  const isMobile = vw < 1024

  // Grande en hero → más chico al bajar (sigue al cursor en ambos casos)
  const size = useTransform(
    t,
    [0, 0.15, 0.35],
    isNarrow ? [150, 110, 78] : isMobile ? [180, 130, 88] : [260, 160, 100]
  )

  const half = useTransform(size, (s) => s / 2)
  const left = useTransform([x, half], ([px, h]) => (px as number) - (h as number))
  const top = useTransform([y, half], ([py, h]) => (py as number) - (h as number))

  const descOpacity = useTransform(t, [0, 0.12, 0.22], [1, 0.35, 0])
  const glow = useTransform(t, [0, 0.3], [0.45, 0.25])

  const bob = useMotionValue(0)

  useEffect(() => {
    const measure = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      setVw(w)
      setVh(h)
      // posición inicial: derecha del hero
      rawX.set(w * (w < 1024 ? 0.72 : 0.78))
      rawY.set(h * (w < 1024 ? 0.62 : 0.48))
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

  useEffect(() => {
    if (menuOpen) return

    const clamp = (v: number, min: number, max: number) =>
      Math.min(max, Math.max(min, v))

    const follow = (clientX: number, clientY: number) => {
      const pad = 40
      rawX.set(clamp(clientX, pad, window.innerWidth - pad))
      rawY.set(clamp(clientY, pad + 56, window.innerHeight - pad))
    }

    const onPointer = (e: PointerEvent) => {
      // no pelear con el scroll de barra / drag de UI
      if (e.pointerType === "mouse" || e.buttons === 0 || e.pointerType === "touch") {
        follow(e.clientX, e.clientY)
      }
    }

    const onTouch = (e: TouchEvent) => {
      const touch = e.touches[0]
      if (!touch) return
      follow(touch.clientX, touch.clientY)
    }

    window.addEventListener("pointermove", onPointer, { passive: true })
    window.addEventListener("touchmove", onTouch, { passive: true })
    // primer toque también mueve
    window.addEventListener("pointerdown", onPointer, { passive: true })

    return () => {
      window.removeEventListener("pointermove", onPointer)
      window.removeEventListener("touchmove", onTouch)
      window.removeEventListener("pointerdown", onPointer)
    }
  }, [menuOpen, rawX, rawY])

  useEffect(() => {
    if (reduceMotion || menuOpen) {
      bob.set(0)
      return
    }
    let frame = 0
    let raf = 0
    const loop = () => {
      frame += 0.04
      bob.set(Math.sin(frame) * 5)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [bob, reduceMotion, menuOpen])

  if (!ready) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-[60] flex flex-col items-center"
      style={{
        left,
        top,
        width: size,
      }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{
        opacity: menuOpen ? 0 : 1,
        scale: menuOpen ? 0.7 : 1,
        y: menuOpen ? 24 : 0,
      }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <motion.div
        className="relative shrink-0"
        style={{
          y: reduceMotion || menuOpen ? 0 : bob,
          height: size,
          width: size,
        }}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 -m-[18%] rounded-full bg-violet-500/25 blur-[42px]"
          style={{ opacity: glow }}
        />
        <Image
          src="/logo-clear.png"
          alt=""
          fill
          sizes="(max-width: 640px) 160px, (max-width: 1024px) 200px, 280px"
          className="object-contain drop-shadow-[0_0_36px_rgba(167,139,250,0.55)]"
          priority
        />
        <span
          className="sparkle-mark"
          style={{
            top: "12%",
            left: "16%",
            width: 12,
            height: 12,
            animationDelay: "0.2s",
          }}
        />
        <span
          className="sparkle-mark"
          style={{
            top: "20%",
            right: "12%",
            left: "auto",
            width: 16,
            height: 16,
            animationDelay: "1.1s",
          }}
        />
      </motion.div>

      <motion.p
        style={{ opacity: descOpacity }}
        className="mt-2 max-w-[14rem] text-center text-[11px] leading-snug font-medium tracking-wide text-violet-100/70 sm:max-w-[16rem] sm:text-xs"
      >
        Ordenamos el día a día del negocio: turnos, pedidos y clientes, sin
        tanto lío.
      </motion.p>
    </motion.div>
  )
}
