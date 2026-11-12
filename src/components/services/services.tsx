"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import {
  Globe,
  Palette,
  Megaphone,
  ArrowRight,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SERVICES } from "@/constants"
import { SectionReveal } from "@/components/effects/section-reveal"
import { WhatsAppCta } from "@/components/cta/whatsapp-cta"

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Palette,
  Megaphone,
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
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-200/80">
              Qué hacemos
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="text-gradient">
                Marca, web y marketing que mueven el negocio
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              Tres caminos claros. De a uno o en combo — según lo que tu
              negocio necesite hoy.
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
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                variants={item}
                className={cn(
                  "glass glass-hover group flex flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
                )}
              >
                <div
                  className={cn(
                    "mb-5 h-1 w-16 rounded-full bg-gradient-to-r",
                    service.gradient
                  )}
                />
                <div className="relative mb-5 inline-flex">
                  <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                    {IconComponent ? (
                      <IconComponent className="h-5 w-5 text-primary" />
                    ) : null}
                  </div>
                </div>
                <h3 className="font-display mb-3 text-xl font-semibold text-[var(--color-text-primary)]">
                  {service.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-violet-200 transition-colors hover:text-violet-100"
                >
                  Ver más
                  <ArrowRight size={14} className="opacity-80" />
                </Link>
              </motion.div>
            )
          })}
        </motion.div>

        <SectionReveal>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
              No hace falta que sepas de antemano si necesitás marca, web o
              ads. Contanos el problema y lo ordenamos juntos.
            </p>
            <WhatsAppCta size="md" className="shrink-0" />
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
