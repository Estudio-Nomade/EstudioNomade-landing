"use client"

import { useMemo } from "react"
import { motion, type Variants } from "framer-motion"
import { cn } from "@/lib/utils"
import { TECH_STACK } from "@/constants"
import { SectionReveal } from "@/components/effects/section-reveal"

type TechItem = { name: string; category: string }

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.2 },
  },
}

const itemAnim: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export function Tech() {
  const grouped = useMemo(() => {
    const map = new Map<string, TechItem[]>()
    for (const tech of TECH_STACK) {
      const existing = map.get(tech.category) ?? []
      existing.push({ name: tech.name, category: tech.category })
      map.set(tech.category, existing)
    }
    return Array.from(map.entries())
  }, [])

  return (
    <section
      id="tecnologias"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      <div className="section-container relative z-10">
        <SectionReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="text-gradient">Stack Tecnológico</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              Las herramientas que usamos para construir productos de clase mundial
            </p>
          </div>
        </SectionReveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12"
        >
          {grouped.map(([category, items]) => (
            <div key={category}>
              <motion.p
                variants={itemAnim}
                className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-tertiary)] mb-4 font-[family-name:var(--font-space-grotesk)]"
              >
                {category}
              </motion.p>
              <motion.div className="flex flex-wrap gap-3">
                {items.map((tech) => (
                  <motion.span
                    key={tech.name}
                    variants={itemAnim}
                    className={cn(
                      "glass rounded-full px-4 py-2 text-sm font-medium",
                      "text-[var(--color-text-primary)]",
                      "border-[rgba(255,255,255,0.04)] hover:border-primary/30",
                      "transition-all duration-300 cursor-default",
                      "font-[family-name:var(--font-sans)]"
                    )}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
