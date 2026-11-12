"use client"

import { motion, type Variants } from "framer-motion"
import { Quote } from "lucide-react"
import { TESTIMONIALS } from "@/constants"
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

export function Testimonials() {
  return (
    <section
      id="clientes"
      className="relative overflow-hidden py-12 md:py-16"
    >
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[480px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.04] blur-[140px]" />

      <div className="section-container relative z-10">
        <SectionReveal>
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-200/80">
              Clientes y confianza
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="text-gradient">Ya trabajamos con negocios reales</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              No solo ofrecemos servicios: ya acompañamos proyectos de punta a
              punta. Acá, en pocas palabras, cómo se sintió del otro lado.
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
          {TESTIMONIALS.map((t) => (
            <motion.article
              key={t.id}
              variants={item}
              className="glass relative flex flex-col rounded-2xl border border-fuchsia-400/15 p-6 md:p-7"
            >
              <Quote
                className="mb-4 h-7 w-7 text-fuchsia-300/70"
                aria-hidden
              />
              <p className="flex-1 text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base">
                “{t.quote}”
              </p>
              <div className="mt-6 border-t border-white/[0.06] pt-4">
                <p className="font-display text-sm font-semibold text-white">
                  {t.name}
                </p>
                <p className="mt-0.5 text-xs text-[var(--color-text-tertiary)]">
                  {t.business}
                </p>
                <p className="mt-2 inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-violet-100">
                  {t.work}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
