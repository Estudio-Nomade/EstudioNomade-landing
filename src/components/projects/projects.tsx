"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { PROJECTS } from "@/constants"
import { useInView } from "@/hooks"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0, 1] as [number, number, number, number],
    },
  },
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const { ref: titleRef, isInView: titleInView } = useInView(0.2)

  const featured = PROJECTS.filter((p) => p.featured)
  const rest = PROJECTS.filter((p) => !p.featured)

  return (
    <section
      ref={sectionRef}
      id="proyectos"
      className="relative overflow-hidden py-12 md:py-16"
    >
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/[0.03] blur-[150px]" />

      <div className="section-container relative z-10">
        <motion.div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0, 1] }}
          className="mb-8 max-w-2xl md:mb-10"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-300/70">
            Proyectos
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-gradient">Lo que construimos</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
            Primero el producto que vendemos. Después el resto del estudio:
            productos propios y trabajos a medida.
          </p>
        </motion.div>

        {/* Featured: Tumo */}
        <div className="mb-10 space-y-6">
          {featured.map((project) => (
            <article
              key={project.id}
              className="glass relative overflow-hidden rounded-2xl border border-violet-400/20 p-7 md:p-10"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />
              <div className="relative z-10 max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  <span className="text-xs font-medium tracking-wide text-violet-200">
                    {project.category}
                  </span>
                </div>
                <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/45 sm:text-lg">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-xs text-white/50"
                    >
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-violet-500/15 bg-violet-500/[0.08] px-2 py-0.5 text-xs text-violet-200/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {"url" in project && project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-violet-500/10 px-4 py-2.5 text-sm font-medium text-violet-100 transition-all duration-200 hover:border-violet-300/45 hover:bg-violet-500/20 hover:text-white hover:shadow-[0_0_28px_rgba(139,92,246,0.35)]"
                  >
                    Chusmear Tumo
                    <ExternalLink size={14} className="opacity-80" />
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {/* Grid resto */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rest.map((project, index) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="glass group relative flex flex-col rounded-2xl p-6 transition-colors duration-300 hover:border-white/[0.1]"
            >
              <div className="mb-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1">
                <span className="text-[10px] font-medium tracking-wide text-white/40">
                  {project.category}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white/90 group-hover:text-white">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/40">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.features.slice(0, 4).map((f) => (
                  <span
                    key={f}
                    className="rounded-md border border-white/[0.05] bg-white/[0.02] px-2 py-0.5 text-[11px] text-white/35"
                  >
                    {f}
                  </span>
                ))}
              </div>
              <span className="absolute top-5 right-5 font-display text-xs tabular-nums text-violet-400/40">
                {String(index + 2).padStart(2, "0")}
              </span>
            </motion.article>
          ))}
        </motion.div>

        <p className="mt-10 text-sm text-white/30">
          ¿Tu rubro no está en la lista? También hacemos a medida para otros
          locales y equipos — contanos el caso.
        </p>
      </div>
    </section>
  )
}
