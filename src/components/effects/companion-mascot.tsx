"use client"

import { useEffect, useState } from "react"
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import Image from "next/image"

/**
 * Mascota del logo: arranca grande en el hero (derecha) y al scrollear
 * se achica y se queda fija abajo a la derecha, acompañando toda la web.
 */
export function CompanionMascot() {
  const reduceMotion = useReducedMotion()
  const [ready, setReady] = useState(false)
  const [vw, setVw] = useState(1280)
  const [vh, setVh] = useState(800)

  useEffect(() => {
    const measure = () => {
      setVw(window.innerWidth)
      setVh(window.innerHeight)
    }
    measure()
    setReady(true)
    window.addEventListener("resize", measure, { passive: true })
    return () => window.removeEventListener("resize", measure)
  }, [])

  const { scrollYProgress } = useScroll()

  // 0 → hero pleno; 1 → ya pasó el primer pantallazo
  const t = useSpring(scrollYProgress, {
    stiffness: reduceMotion ? 400 : 120,
    damping: reduceMotion ? 40 : 28,
    mass: 0.6,
  })

  const isMobile = vw < 1024
  const isNarrow = vw < 640

  // Tamaño: grande en hero → chip compañero
  const size = useTransform(
    t,
    [0, 0.12, 0.28],
    isNarrow ? [168, 120, 72] : isMobile ? [200, 140, 80] : [300, 180, 96]
  )

  // Posición: derecha del hero → esquina inferior derecha
  const right = useTransform(
    t,
    [0, 0.18, 0.32],
    isMobile
      ? [vw * 0.5 - (isNarrow ? 84 : 100), 20, 14]
      : [Math.max(48, (vw - 1280) / 2 + 40), 28, 22]
  )

  const bottom = useTransform(
    t,
    [0, 0.12, 0.3],
    isMobile
      ? [vh * 0.12, 28, 18]
      : [vh * 0.5 - 160, vh * 0.18, 28]
  )

  // Idle bob + tilt suave con el scroll
  const bob = useMotionValue(0)
  useEffect(() => {
    if (reduceMotion) return
    let frame = 0
    let raf = 0
    const loop = () => {
      frame += 0.035
      bob.set(Math.sin(frame) * 6)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [bob, reduceMotion])

  const rotate = useTransform(t, [0, 0.2, 0.5, 1], [0, -4, 3, -2])
  const descOpacity = useTransform(t, [0, 0.1, 0.18], [1, 0.4, 0])
  const descY = useTransform(t, [0, 0.18], [0, 16])
  const glow = useTransform(t, [0, 0.3], [0.5, 0.28])

  if (!ready) return null

  return (
    <motion.div
      className="pointer-events-none fixed z-[60] flex flex-col items-center"
      style={{
        right,
        bottom,
        width: size,
      }}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden
    >
      <motion.div
        className="relative w-full shrink-0"
        style={{
          y: reduceMotion ? 0 : bob,
          rotate: reduceMotion ? 0 : rotate,
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
          sizes="(max-width: 640px) 180px, (max-width: 1024px) 220px, 320px"
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
        style={{ opacity: descOpacity, y: descY }}
        className="mt-3 max-w-[15rem] text-center text-[11px] leading-snug font-medium tracking-wide text-violet-100/70 sm:max-w-[17rem] sm:text-xs"
      >
        Ordenamos el día a día del negocio: turnos, pedidos y clientes, sin
        tanto lío.
      </motion.p>
    </motion.div>
  )
}
