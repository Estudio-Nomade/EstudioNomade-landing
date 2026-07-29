"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import { CONTACT } from "@/constants"
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

function DeviceMockups() {
  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-[4/3]">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.04] via-purple-500/[0.03] to-transparent rounded-3xl" />

      {/* Laptop */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%]">
        <div className="relative">
          {/* Lid */}
          <div className="rounded-t-xl overflow-hidden border border-white/[0.06] bg-[#0a0a10] shadow-2xl shadow-violet-500/5">
            <div className="h-2 bg-[#0d0d14] border-b border-white/[0.04] flex items-center px-2 gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            </div>
            <div className="p-3 space-y-2">
              <div className="flex gap-2">
                <div className="w-1/3 h-1 rounded-full bg-white/[0.05]" />
                <div className="w-1/4 h-1 rounded-full bg-violet-500/[0.15]" />
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-2 rounded bg-white/[0.03] border border-white/[0.02]"
                  />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                <div className="col-span-2 h-2 rounded bg-violet-500/[0.08] border border-violet-500/[0.06]" />
                <div className="h-2 rounded bg-white/[0.03] border border-white/[0.02]" />
              </div>
            </div>
          </div>
          {/* Base */}
          <div className="h-1.5 bg-[#0a0a10] rounded-b-md border border-white/[0.04] mx-2" />
          <div className="h-0.5 bg-[#0d0d14] rounded-b-sm mx-8 border border-white/[0.02]" />
        </div>
      </div>

      {/* Tablet */}
      <div className="absolute bottom-0 left-[8%] w-[38%]">
        <div className="rounded-2xl overflow-hidden border border-white/[0.06] bg-[#0a0a10] shadow-2xl shadow-violet-500/5">
          <div className="h-1.5 bg-[#0d0d14] border-b border-white/[0.03]" />
          <div className="p-2.5 space-y-1.5">
            <div className="h-0.5 w-2/3 rounded-full bg-white/[0.04]" />
            <div className="grid grid-cols-2 gap-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-3 rounded bg-white/[0.02] border border-white/[0.02]"
                />
              ))}
            </div>
            <div className="h-3 rounded bg-purple-500/[0.06] border border-purple-500/[0.04]" />
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="absolute bottom-0 right-[6%] w-[20%]">
        <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-[#0a0a10] shadow-2xl shadow-violet-500/5">
          <div className="h-1 bg-[#0d0d14] flex items-center justify-center">
            <div className="w-3 h-0.5 rounded-full bg-white/[0.08]" />
          </div>
          <div className="p-1.5 space-y-1">
            <div className="h-0.5 w-2/3 rounded-full bg-white/[0.04]" />
            <div className="space-y-0.5">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 rounded bg-white/[0.02] border border-white/[0.02]"
                />
              ))}
            </div>
            <div className="h-2 rounded bg-violet-500/[0.08] border border-violet-500/[0.04]" />
          </div>
          <div className="h-1 bg-[#0d0d14] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full border border-white/[0.06]" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-[15%] right-[35%] w-1 h-1 rounded-full bg-violet-400/30" />
      <div className="absolute top-[40%] right-[28%] w-0.5 h-0.5 rounded-full bg-purple-400/40" />
      <div className="absolute bottom-[30%] left-[30%] w-0.5 h-0.5 rounded-full bg-violet-300/30" />
      <div className="absolute top-[25%] left-[20%] w-1 h-1 rounded-full bg-purple-500/20 animate-pulse-glow" />
    </div>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <ParticleBackground />

      {/* Background glows */}
      <div className="absolute top-[-30%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-500/[0.06] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-600/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-indigo-500/[0.03] blur-[100px] pointer-events-none" />

      <div className="section-container w-full pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            className="lg:col-span-7 flex flex-col gap-8"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.08] tracking-tight"
            >
              No hacemos apps.
              <br />
              Resolvemos{" "}
              <span className="text-gradient">procesos de negocio</span>.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base sm:text-lg text-white/35 leading-relaxed max-w-xl"
            >
              Construimos una plataforma de soluciones reutilizables. Cada cliente
              hereda lo mejor de los anteriores: más rápido, más sólido, más barato.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.button
                onClick={() => handleScroll("#proyectos")}
                className="group relative px-6 py-3 rounded-full text-sm font-medium border border-white/[0.08] hover:border-violet-400/30 text-white/60 hover:text-white/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
                  }}
                />
                <span className="relative flex items-center gap-2">
                  Ver proyectos
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </motion.button>

              <motion.button
                onClick={() =>
                  window.open(
                    `https://wa.me/${CONTACT.whatsapp}`,
                    "_blank"
                  )
                }
                className="relative group px-6 py-3 rounded-full text-sm font-medium bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-400 hover:to-purple-500 transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.2)] hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="flex items-center gap-2">Hablemos</span>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <DeviceMockups />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-[10px] tracking-[0.3em] text-white/15 uppercase font-medium">
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
