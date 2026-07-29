"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { PROJECTS } from "@/constants"
import { useInView } from "@/hooks"
import LiftyMockup from "./mockups/lifty-mockup"
import SaasMockup from "./mockups/saas-mockup"
import AnastasiaMockup from "./mockups/anastasia-mockup"

const MOCKUPS = {
  lifty: LiftyMockup,
  "saas-fidelizacion": SaasMockup,
  anastasia: AnastasiaMockup,
} as const

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0, 1] as [number, number, number, number],
    },
  },
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const { ref: titleRef, isInView: titleInView } = useInView(0.2)

  return (
    <section
      ref={sectionRef}
      id="proyectos"
      className="relative py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-violet-500/3 blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
          className="max-w-2xl mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-gradient mb-6">
            Productos que venimos desarrollando
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-xl">
            Cada proyecto es una oportunidad para llevar al limite lo que la
            tecnologia puede hacer. Construimos productos robustos, escalables
            y disenados al detalle.
          </p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-12"
        >
          {PROJECTS.map((project, index) => {
            const Mockup = MOCKUPS[project.id]

            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="group relative"
              >
                <div className="glass rounded-2xl p-8 lg:p-12 border-white/[0.06] hover:border-white/[0.1] transition-colors duration-500">
                  <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Info side */}
                    <div className="flex flex-col justify-center">
                      {/* Category badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 w-fit mb-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        <span className="text-xs font-medium text-violet-300 tracking-wide">
                          {project.category}
                        </span>
                      </div>

                      {/* Name */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-text-primary group-hover:text-white transition-colors duration-300">
                        {project.name}
                      </h3>

                      {/* Description */}
                      <p className="mt-4 text-text-secondary leading-relaxed max-w-lg">
                        {project.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mt-5">
                        {project.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs text-text-secondary"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-violet-500/[0.06] border border-violet-500/10 text-xs text-violet-300/70"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* View link */}
                      <div className="mt-6">
                        <span className="inline-flex items-center gap-1.5 text-sm text-violet-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Ver caso de estudio
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* Mockup side */}
                    <div className="flex items-center justify-center lg:justify-end relative">
                      {/* Subtle glow behind mockup */}
                      <div className="absolute inset-0 bg-violet-500/[0.02] blur-3xl rounded-full pointer-events-none" />
                      <div className="relative z-10">
                        <Mockup />
                      </div>
                    </div>
                  </div>

                  {/* Number indicator */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#0a0a10] border border-white/[0.08] flex items-center justify-center">
                    <span className="text-xs font-display font-bold text-violet-400 tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
