"use client"

import { motion, type Variants } from "framer-motion"
import { FileText, Layers, Wrench, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { MAINTENANCE, CONTACT } from "@/constants"
import { SectionReveal } from "@/components/effects/section-reveal"

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Layers,
  Wrench,
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

export function Maintenance() {
  const waMsg = encodeURIComponent(
    "Hola Estudio Nómade, quiero consultar por mantenimiento web (cambios simples / medios / complejos)."
  )

  return (
    <section
      id="mantenimiento"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      <div className="section-container relative z-10">
        <SectionReveal>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-primary/80 text-sm font-medium tracking-wide uppercase mb-3 font-[family-name:var(--font-sans)]">
              Rango {MAINTENANCE.rangeLabel} · por tarea
            </p>
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="text-gradient">Mantenimiento web</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {MAINTENANCE.modeNote}
            </p>
          </div>
        </SectionReveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {MAINTENANCE.plans.map((plan) => {
            const IconComponent = iconMap[plan.icon]
            return (
              <motion.div
                key={plan.id}
                variants={item}
                className={cn(
                  "glass rounded-xl p-8 flex flex-col group transition-colors duration-300",
                  "hover:border-[rgba(255,255,255,0.08)] hover:-translate-y-1",
                  plan.highlighted &&
                    "border-primary/30 bg-primary/[0.04] shadow-[0_0_40px_rgba(139,92,246,0.08)]"
                )}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="relative inline-flex">
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20">
                      {IconComponent && (
                        <IconComponent className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </div>
                  {plan.highlighted && (
                    <span className="text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                      {plan.tagline}
                    </span>
                  )}
                  {!plan.highlighted && (
                    <span className="text-xs font-medium text-[var(--color-text-tertiary)] bg-[rgba(255,255,255,0.03)] rounded-full px-3 py-1">
                      {plan.tagline}
                    </span>
                  )}
                </div>

                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                  {plan.name}
                </h3>

                <div className="mb-4">
                  <span className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold text-gradient">
                    {plan.priceLabel}
                  </span>
                  <span className="text-[var(--color-text-tertiary)] text-sm ml-2">
                    / tarea
                  </span>
                </div>

                <p className="font-[family-name:var(--font-sans)] text-[var(--color-text-secondary)] leading-relaxed text-sm flex-1">
                  {plan.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        <SectionReveal delay={0.15}>
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 glass rounded-xl p-6 md:p-8">
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base max-w-xl text-center sm:text-left leading-relaxed">
              Trabajos cotizados previamente. Tiempos según cada pedido.{" "}
              <span className="text-[var(--color-text-tertiary)]">
                {MAINTENANCE.excludes}
              </span>
            </p>
            <a
              href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center shrink-0 px-6 py-3 rounded-xl",
                "bg-primary/15 border border-primary/30 text-primary font-semibold text-sm",
                "hover:bg-primary/25 hover:border-primary/50 transition-all duration-300",
                "font-[family-name:var(--font-sans)] min-h-12"
              )}
            >
              Pedir cotización
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
