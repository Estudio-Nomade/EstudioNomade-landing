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
}: { step: string; title: string; description: string; duration: string; index: number }) {
  const { ref, isInView } = useInView(0.2)

  return (
    <div
      ref={ref}
      className="relative flex gap-8 md:gap-12 pb-16 last:pb-0"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 * index }}
          className="flex-shrink-0 flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
        >
          <span className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold text-gradient">
            {step}
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 * index }}
        className="flex-1 min-w-0"
      >
        <div className="glass rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl font-semibold text-[var(--color-text-primary)]">
              {title}
            </h3>
            <span className="text-xs font-medium text-[var(--color-text-tertiary)] bg-[rgba(255,255,255,0.03)] rounded-full px-3 py-1 font-[family-name:var(--font-sans)]">
              {duration}
            </span>
          </div>
          <p className="text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-sans)]">
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
    <section
      id="proceso"
      className="relative py-24 md:py-36 overflow-hidden"
    >
      <div className="section-container relative z-10" ref={sectionRef}>
        <SectionReveal>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
              <span className="text-gradient">Nuestro proceso</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
              De la idea al producto en 7 pasos. Ágil, transparente, colaborativo.
            </p>
          </div>
        </SectionReveal>

        <div className="relative">
          <motion.div
            className="absolute left-[23px] md:left-[27px] top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, #8b5cf6, #7c3aed, #6d28d9)",
              scaleY: scrollYProgress,
              transformOrigin: "top",
            }}
          />
          <div
            className="absolute left-[23px] md:left-[27px] top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, #8b5cf6, #7c3aed, #6d28d9)",
              opacity: 0.15,
            }}
          />

          <div className="pl-16 md:pl-20">
            {PROCESS.map((item, index) => (
              <ProcessStep key={item.step} {...item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
