"use client"

import { motion, type Variants } from "framer-motion"
import { Layers, Code2, Globe, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { SERVICES } from "@/constants"
import { SectionReveal } from "@/components/effects/section-reveal"

const iconMap: Record<string, LucideIcon> = {
  Layers,
  Code2,
  Globe,
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
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
      className="relative overflow-hidden py-24 md:py-32"
    >
      <div className="section-container relative z-10">
        <SectionReveal>
          <div className="mb-14 max-w-2xl md:mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300/70">
              Qué hacemos
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="text-gradient">Tres caminos claros</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              No tiramos diez servicios de golpe. Elegís producto modular,
              custom o web — y avanzamos.
            </p>
          </div>
        </SectionReveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {SERVICES.map((service, i) => {
            const IconComponent = iconMap[service.icon]
            return (
              <motion.div
                key={service.title}
                variants={item}
                className={cn(
                  "glass glass-hover group rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1",
                  i === 0 && "md:ring-1 md:ring-violet-400/25"
                )}
              >
                {i === 0 ? (
                  <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-violet-300/80">
                    Producto principal
                  </p>
                ) : (
                  <div className="mb-4 h-3" />
                )}
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
      </div>
    </section>
  )
}
