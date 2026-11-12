"use client"

import { motion, type Variants } from "framer-motion"
import { PROCESS } from "@/constants"
import { SectionReveal } from "@/components/effects/section-reveal"

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export function Process() {
  return (
    <section id="proceso" className="relative overflow-hidden py-12 md:py-16">
      <div className="section-container relative z-10">
        <SectionReveal>
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-200/80">
              Cómo trabajamos
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="text-gradient">Simple, en tres pasos</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              Sin laberintos. Primero entendemos tu negocio; después armamos la
              solución y la dejamos lista para usar.
            </p>
          </div>
        </SectionReveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-4 md:grid-cols-3"
        >
          {PROCESS.map((step) => (
            <motion.article
              key={step.step}
              variants={item}
              className="glass relative overflow-hidden rounded-2xl border border-violet-400/15 p-6 md:p-7"
            >
              <span className="font-display text-4xl font-bold text-violet-300/40 tabular-nums">
                {step.step}
              </span>
              <h3 className="font-display mt-4 text-xl font-semibold text-[var(--color-text-primary)]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base">
                {step.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-8 max-w-xl text-sm text-[var(--color-text-tertiary)]">
          El dominio y el trabajo quedan a tu nombre cuando aplica. Si mañana
          querés seguir con otra persona, te lo llevás.
        </p>
      </div>
    </section>
  )
}
