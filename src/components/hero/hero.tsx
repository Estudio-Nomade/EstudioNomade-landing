"use client"

import { useRef } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import { SITE } from "@/constants"
import { WhatsAppCta } from "@/components/cta/whatsapp-cta"

const stagger = {
  animate: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

/** Solo transform/opacity — sin blur (LCP + non-composited) */
const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
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
    if (!el) return
    const header = document.getElementById("en-site-header")
    const offset = header?.getBoundingClientRect().height ?? 56
    const top = el.getBoundingClientRect().top + window.scrollY - offset - 8
    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" })
  }

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[min(100svh,820px)] items-center overflow-hidden md:min-h-[min(100svh,900px)]"
    >
      <div className="pointer-events-none absolute top-[-25%] left-[-12%] h-[640px] w-[640px] rounded-full bg-violet-600/[0.12] blur-[130px] animate-pulse-glow" />
      <div className="pointer-events-none absolute right-[-8%] bottom-[-18%] h-[520px] w-[520px] rounded-full bg-fuchsia-600/[0.07] blur-[130px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-[30%] left-[40%] h-[280px] w-[280px] rounded-full bg-indigo-400/[0.05] blur-[90px]" />

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

      <div className="section-container w-full pt-8 pb-10 sm:pt-12 sm:pb-12 md:pt-14 md:pb-14">
        <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-6">
          {/*
            LCP = párrafo del hero. Contenido crítico SIN opacity:0 inicial
            para que el paint no espere a Framer Motion.
          */}
          <div className="relative z-[1] flex flex-col gap-5 sm:gap-6">
            <motion.div
              variants={stagger}
              initial={reduceMotion ? false : "initial"}
              animate="animate"
              className="contents"
            >
              <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
                Diseño y código
                <br />
                <span className="text-shine">en movimiento.</span>
              </h1>

              <p className="max-w-xl text-base font-medium leading-relaxed text-white/90 sm:text-lg md:text-xl">
                {SITE.valueLine}
              </p>

              <p className="max-w-xl text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
                Somos {SITE.name}: marca, web y soluciones digitales con
                atención humana. Arrancamos por una conversación — después
                vemos qué necesita tu negocio.
              </p>

              <motion.div
                variants={fadeUp}
                className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
              >
                <WhatsAppCta />

                <motion.button
                  type="button"
                  onClick={() => handleScroll("#proyectos")}
                  className="group rounded-full border border-violet-300/20 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-violet-300/40 hover:bg-violet-500/10 hover:text-white"
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

              <motion.p
                variants={fadeUp}
                className="text-xs text-[var(--color-text-tertiary)] sm:text-sm"
              >
                {SITE.originLabel}
              </motion.p>
            </motion.div>
          </div>

          <div
            className="pointer-events-none hidden min-h-[180px] lg:block"
            aria-hidden
          />
        </div>
      </div>

      <motion.div
        className="absolute bottom-4 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 sm:bottom-6"
        style={{ opacity: hintOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.45 }}
      >
        <span className="text-[10px] font-medium tracking-[0.3em] text-[var(--color-text-tertiary)] uppercase">
          Scroll
        </span>
        <motion.div
          animate={
            reduceMotion
              ? undefined
              : { y: [0, 8, 0], opacity: [0.45, 0.9, 0.45] }
          }
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-violet-200/70"
        >
          <ChevronDown size={18} aria-hidden />
        </motion.div>
      </motion.div>
    </section>
  )
}
