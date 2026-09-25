"use client"

import { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import { CONTACT, SITE } from "@/constants"

const stagger = {
  animate: {
    transition: { staggerChildren: 0.14, delayChildren: 0.15 },
  },
}

const fadeUp = {
  initial: { opacity: 0, y: 36, filter: "blur(10px)", scale: 0.98 },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const sparkles = [
  { top: "12%", left: "8%", delay: "0s", size: 10 },
  { top: "22%", left: "78%", delay: "0.6s", size: 14 },
  { top: "58%", left: "88%", delay: "1.1s", size: 9 },
  { top: "70%", left: "14%", delay: "1.7s", size: 12 },
  { top: "38%", left: "52%", delay: "0.3s", size: 8 },
  { top: "18%", left: "42%", delay: "2.1s", size: 11 },
]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const hintOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0])

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const wa = CONTACT.whatsapp.replace(/\D/g, "")

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Nebulas del concepto */}
      <div className="pointer-events-none absolute top-[-25%] left-[-12%] h-[640px] w-[640px] rounded-full bg-violet-600/[0.12] blur-[130px] animate-pulse-glow" />
      <div className="pointer-events-none absolute right-[-8%] bottom-[-18%] h-[520px] w-[520px] rounded-full bg-fuchsia-600/[0.07] blur-[130px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-[30%] left-[40%] h-[280px] w-[280px] rounded-full bg-indigo-400/[0.05] blur-[90px]" />

      {/* Destellos CSS fijos del concepto */}
      {sparkles.map((s, i) => (
        <span
          key={i}
          className="sparkle-mark"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
          }}
          aria-hidden
        />
      ))}

      <div className="section-container w-full pt-[10.5rem] pb-24 sm:pt-40 md:pt-44 md:pb-28">
        {/* Espacio a la derecha en desktop para la mascota parked grande */}
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          <motion.div
            className="relative z-[1] flex flex-col gap-6 sm:gap-7"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.div
              variants={fadeUp}
              className="mt-1 flex items-center gap-3 sm:mt-0"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-violet-200/90 uppercase">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-300 shadow-[0_0_8px_rgba(196,181,253,0.9)]" />
                Estudio · Tandil
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl"
            >
              Tu negocio, en orden.
              <br />
              <span className="text-shine">Sin tanto lío de golpe.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-base leading-relaxed text-white/45 sm:text-lg"
            >
              Somos {SITE.name}. Con{" "}
              <strong className="font-semibold text-violet-100/90">Tumo</strong>{" "}
              armás turnos, pedidos, catálogo y clientes en un solo lugar — y
              también armamos a medida cuando hace falta: apps, webs y
              automatización. El reloj arranca cuando nos pasás el contenido.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <motion.button
                type="button"
                onClick={() => window.open(`https://wa.me/${wa}`, "_blank")}
                className="relative overflow-hidden rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_36px_rgba(139,92,246,0.35)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(167,139,250,0.5)]"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">Quiero cotizar</span>
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100" />
              </motion.button>

              <motion.button
                type="button"
                onClick={() => handleScroll("#proyectos")}
                className="group rounded-full border border-violet-300/20 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/70 backdrop-blur-sm transition-all duration-300 hover:border-violet-300/40 hover:bg-violet-500/10 hover:text-white"
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Ver proyectos
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </motion.button>
            </motion.div>

            <motion.p variants={fadeUp} className="text-sm text-white/30">
              ¿Buscabas solo una web? También.{" "}
              <button
                type="button"
                onClick={() => handleScroll("#servicios")}
                className="text-violet-300/80 underline-offset-4 transition-colors hover:text-violet-200 hover:underline"
              >
                Ver qué hacemos
              </button>
            </motion.p>
          </motion.div>

          {/* Columna vacía desktop: hueco visual para mascota grande parked */}
          <div
            className="pointer-events-none hidden min-h-[260px] lg:block"
            aria-hidden
          />
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        style={{ opacity: hintOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.35, duration: 0.6 }}
      >
        <span className="text-[10px] font-medium tracking-[0.3em] text-white/25 uppercase">
          Scroll
        </span>
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { y: [0, 8, 0], opacity: [0.35, 0.8, 0.35] }
          }
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-violet-200/50"
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  )
}
