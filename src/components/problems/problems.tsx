"use client"

import { motion, type Variants } from "framer-motion"
import { PROBLEMS } from "@/constants"
import { SectionReveal } from "@/components/effects/section-reveal"

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
}

export function Problems() {
  return (
    <section
      id="problemas"
      className="relative overflow-hidden py-12 md:py-16"
    >
      <div className="section-container relative z-10">
        <SectionReveal>
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300/70">
              Por qué te buscan
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Estás perdiendo clientes{" "}
              <span className="text-gradient">antes de que te escriban</span>.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              No siempre los ves. Cada síntoma es alguien que se fue sin que te
              enteres — o tiempo tuyo que se va en lo mismo.
            </p>
          </div>
        </SectionReveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {PROBLEMS.map((p) => (
            <motion.article
              key={p.id}
              variants={item}
              className="glass glass-hover rounded-2xl p-6 md:p-7"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="font-display text-2xl font-bold text-violet-300/40 tabular-nums">
                  {p.id}
                </span>
                <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-200/80">
                  {p.tag}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold text-[var(--color-text-primary)] md:text-xl">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)] md:text-base">
                {p.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
