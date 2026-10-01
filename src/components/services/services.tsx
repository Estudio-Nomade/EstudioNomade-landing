"use client"

import { motion, type Variants } from "framer-motion"
import {
  Layers,
  Code2,
  Globe,
  Palette,
  Megaphone,
  Sparkles,
  Compass,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SERVICES } from "@/constants"
import { SectionReveal } from "@/components/effects/section-reveal"

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Code2,
  Globe,
  Palette,
  Megaphone,
  Sparkles,
  Compass,
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export function Services() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden py-12 md:py-16"
    >
      <div className="section-container relative z-10">
        <SectionReveal>
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300/70">
              Qué hacemos
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="text-gradient">
                Soluciones digitales, marca y marketing
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              Herramientas y webs a medida, identidad, publicidad y orden de
              marketing. De a uno o en combo, según lo que necesite el negocio.
            </p>
          </div>
        </SectionReveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon]
            return (
              <motion.div
                key={service.title}
                variants={item}
                className={cn(
                  "glass glass-hover group rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
                )}
              >
                <div className="mb-4 h-3" />
                <div className="relative mb-5 inline-flex">
                  <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                    {IconComponent ? (
                      <IconComponent className="h-5 w-5 text-primary" />
                    ) : null}
                  </div>
                </div>
                <h3 className="font-display mb-3 text-lg font-semibold text-[var(--color-text-primary)]">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <SectionReveal>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/35 sm:text-base md:mt-10">
            Cada propuesta se adapta a lo que hace falta: a veces alcanza con
            una pieza; otras conviene marca + web, ads o un sistema completo.
            Lo vemos juntos y armamos el camino.
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
