"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import { CONTACT, SITE } from "@/constants"
import { ParticleBackground } from "@/components/effects/particle-background"

const stagger = {
  animate: {
    transition: { staggerChildren: 0.12 },
  },
}

const fadeUp = {
  initial: { opacity: 0, y: 30, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

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
      <ParticleBackground />

      <div className="pointer-events-none absolute top-[-30%] left-[-10%] h-[600px] w-[600px] rounded-full bg-violet-500/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute right-[-5%] bottom-[-20%] h-[500px] w-[500px] rounded-full bg-purple-600/[0.04] blur-[120px]" />

      <div className="section-container w-full pt-28 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-3xl">
          <motion.div
            className="flex flex-col gap-7"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/70"
            >
              Estudio de software · Tandil
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl"
            >
              Software que ordena el negocio.
              <br />
              <span className="text-gradient">Sin tanto ruido de golpe.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-base leading-relaxed text-white/40 sm:text-lg"
            >
              Somos {SITE.name}. Vendemos{" "}
              <strong className="font-semibold text-white/70">Tumo</strong> — un
              sistema de módulos listo para operar — y también armamos a medida
              cuando hace falta: apps, webs y automatización. El reloj arranca
              cuando nos pasás el contenido.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <motion.button
                type="button"
                onClick={() => window.open(`https://wa.me/${wa}`, "_blank")}
                className="relative rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-6 py-3.5 text-sm font-medium text-white shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-300 hover:from-violet-400 hover:to-purple-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Quiero cotizar
              </motion.button>

              <motion.button
                type="button"
                onClick={() => handleScroll("#proyectos")}
                className="group rounded-full border border-white/[0.08] px-6 py-3.5 text-sm font-medium text-white/60 transition-all duration-300 hover:border-violet-400/30 hover:text-white/90"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Ver proyectos
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </motion.button>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-sm text-white/25"
            >
              ¿Buscabas solo una web? También.{" "}
              <button
                type="button"
                onClick={() => handleScroll("#servicios")}
                className="text-violet-300/70 underline-offset-4 hover:text-violet-200 hover:underline"
              >
                Ver qué hacemos
              </button>
            </motion.p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-[10px] font-medium tracking-[0.3em] text-white/15 uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/15"
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}
