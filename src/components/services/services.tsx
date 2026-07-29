"use client"

import { motion, type Variants } from "framer-motion"
import {
  Smartphone,
  Calendar,
  ShoppingBag,
  Users,
  Package,
  Zap,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { SERVICES } from "@/constants"
import { SectionReveal } from "@/components/effects/section-reveal"

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Calendar,
  ShoppingBag,
  Users,
  Package,
  Zap,
}

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
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
      className="relative py-24 md:py-36 overflow-hidden"
    >
      <div className="section-container relative z-10">
        <SectionReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="text-gradient">Lo que construimos</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              Herramientas digitales para resolver los problemas operativos de tu negocio
            </p>
          </div>
        </SectionReveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon]
            return (
              <motion.div
                key={service.title}
                variants={item}
                className={cn(
                  "glass rounded-xl p-8 group transition-colors duration-300",
                  "hover:border-[rgba(255,255,255,0.08)] hover:-translate-y-1"
                )}
              >
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/20">
                    {IconComponent && (
                      <IconComponent className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </div>
                <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[var(--color-text-primary)] mb-3">
                  {service.title}
                </h3>
                <p className="font-[family-name:var(--font-sans)] text-[var(--color-text-secondary)] leading-relaxed text-sm">
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
