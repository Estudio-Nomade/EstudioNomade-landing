"use client"

import { useRef } from "react"
import { motion, useScroll } from "framer-motion"
import { PROCESS } from "@/constants"
import { useInView } from "@/hooks"
import { SectionReveal } from "@/components/effects/section-reveal"

function ProcessStep({
  step,
  title,
  description,
  duration,
  index,
}: {
  step: string
  title: string
  description: string
  duration: string
  index: number
}) {
  const { ref, isInView } = useInView(0.2)

  return (
    <div ref={ref} className="relative flex gap-8 pb-14 last:pb-0 md:gap-12">
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={
            isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }
          }
          transition={{
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.12 * index,
          }}
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center md:h-14 md:w-14"
        >
          <span className="font-display text-gradient text-3xl font-bold md:text-4xl">
            {step}
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.15 * index,
        }}
        className="min-w-0 flex-1"
      >
        <div className="glass rounded-2xl p-6 md:p-7">
          <div className="mb-2 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h3 className="font-display text-xl font-semibold text-[var(--color-text-primary)] md:text-2xl">
              {title}
            </h3>
            <span className="rounded-full bg-[rgba(255,255,255,0.03)] px-3 py-1 text-xs font-medium text-[var(--color-text-tertiary)]">
              {duration}
            </span>
          </div>
          <p className="leading-relaxed text-[var(--color-text-secondary)]">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 100px", "end 100px"],
  })

  return (
    <section id="proceso" className="relative overflow-hidden py-24 md:py-32">
      <div className="section-container relative z-10" ref={sectionRef}>
        <SectionReveal>
          <div className="mb-14 max-w-2xl md:mb-16">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300/70">
              Cómo trabajamos
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              <span className="text-gradient">
                El reloj arranca cuando pasás el contenido.
              </span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              Hablamos, nos pasás lo necesario y nos ocupamos nosotros. Sin
              laberintos de siete fases para un sitio o un módulo.
            </p>
          </div>
        </SectionReveal>

        <div className="relative">
          <motion.div
            className="absolute top-0 bottom-0 left-[23px] w-px md:left-[27px]"
            style={{
              background: "linear-gradient(to bottom, #8b5cf6, #7c3aed, #6d28d9)",
              scaleY: scrollYProgress,
              transformOrigin: "top",
            }}
          />
          <div
            className="absolute top-0 bottom-0 left-[23px] w-px opacity-15 md:left-[27px]"
            style={{
              background: "linear-gradient(to bottom, #8b5cf6, #7c3aed, #6d28d9)",
            }}
          />

          <div className="pl-16 md:pl-20">
            {PROCESS.map((item, index) => (
              <ProcessStep key={item.step} {...item} index={index} />
            ))}
          </div>
        </div>

        <p className="mt-10 max-w-xl text-sm text-white/30">
          El dominio y el producto quedan a tu nombre cuando aplica. Si mañana
          querés seguir con otra persona, te lo llevás — nadie te lo retiene.
        </p>
      </div>
    </section>
  )
}
