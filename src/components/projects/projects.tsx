"use client"

import { useCallback, useEffect, useId, useRef, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { PROJECTS } from "@/constants"
import { useInView } from "@/hooks"
import { cn } from "@/lib/utils"

type Project = (typeof PROJECTS)[number]

const ACCENT: Record<
  string,
  { border: string; glow: string; chip: string; bar: string; mock: string }
> = {
  violet: {
    border: "border-violet-400/35",
    glow: "bg-violet-500/20",
    chip: "border-violet-400/30 bg-violet-500/15 text-violet-100",
    bar: "from-violet-400 via-fuchsia-400 to-purple-500",
    mock: "from-violet-500/30 via-purple-600/20 to-fuchsia-500/10",
  },
  cyan: {
    border: "border-cyan-400/30",
    glow: "bg-cyan-500/15",
    chip: "border-cyan-400/30 bg-cyan-500/15 text-cyan-100",
    bar: "from-cyan-400 via-sky-400 to-blue-500",
    mock: "from-cyan-500/25 via-sky-600/15 to-blue-500/10",
  },
  indigo: {
    border: "border-indigo-400/30",
    glow: "bg-indigo-500/15",
    chip: "border-indigo-400/30 bg-indigo-500/15 text-indigo-100",
    bar: "from-indigo-400 via-violet-400 to-blue-500",
    mock: "from-indigo-500/25 via-violet-600/15 to-blue-500/10",
  },
  fuchsia: {
    border: "border-fuchsia-400/30",
    glow: "bg-fuchsia-500/15",
    chip: "border-fuchsia-400/30 bg-fuchsia-500/15 text-fuchsia-100",
    bar: "from-fuchsia-400 via-pink-400 to-violet-500",
    mock: "from-fuchsia-500/25 via-pink-600/15 to-violet-500/10",
  },
  rose: {
    border: "border-rose-400/30",
    glow: "bg-rose-500/15",
    chip: "border-rose-400/30 bg-rose-500/15 text-rose-100",
    bar: "from-rose-400 via-pink-400 to-fuchsia-500",
    mock: "from-rose-500/25 via-pink-600/15 to-red-500/10",
  },
  pink: {
    border: "border-pink-400/30",
    glow: "bg-pink-500/15",
    chip: "border-pink-400/30 bg-pink-500/15 text-pink-100",
    bar: "from-pink-400 via-rose-400 to-fuchsia-500",
    mock: "from-pink-500/25 via-rose-600/15 to-fuchsia-500/10",
  },
  emerald: {
    border: "border-emerald-400/30",
    glow: "bg-emerald-500/15",
    chip: "border-emerald-400/30 bg-emerald-500/15 text-emerald-100",
    bar: "from-emerald-400 via-teal-400 to-green-500",
    mock: "from-emerald-500/25 via-teal-600/15 to-green-500/10",
  },
  amber: {
    border: "border-amber-400/30",
    glow: "bg-amber-500/15",
    chip: "border-amber-400/30 bg-amber-500/15 text-amber-100",
    bar: "from-amber-400 via-orange-400 to-yellow-500",
    mock: "from-amber-500/25 via-orange-600/15 to-yellow-500/10",
  },
  sky: {
    border: "border-sky-400/30",
    glow: "bg-sky-500/15",
    chip: "border-sky-400/30 bg-sky-500/15 text-sky-100",
    bar: "from-sky-400 via-cyan-400 to-blue-500",
    mock: "from-sky-500/25 via-cyan-600/15 to-blue-500/10",
  },
  lime: {
    border: "border-lime-400/30",
    glow: "bg-lime-500/15",
    chip: "border-lime-400/30 bg-lime-500/15 text-lime-100",
    bar: "from-lime-400 via-green-400 to-emerald-500",
    mock: "from-lime-500/25 via-green-600/15 to-emerald-500/10",
  },
}

function accentOf(key: string) {
  return ACCENT[key] ?? ACCENT.violet
}

function projectUrl(project: Project): string | undefined {
  return "url" in project && typeof project.url === "string"
    ? project.url
    : undefined
}

const STORY_STEPS = [
  { key: "situation" as const, label: "Situación" },
  { key: "work" as const, label: "Qué hicimos" },
  { key: "outcome" as const, label: "Cómo quedó" },
]

function ProjectPreview({
  name,
  accent,
  logo,
}: {
  name: string
  accent: string
  logo?: string
}) {
  const a = accentOf(accent)
  const monogram = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("")

  return (
    <div
      className={cn(
        "relative flex min-h-[180px] items-center justify-center overflow-hidden rounded-xl border sm:min-h-[220px] md:min-h-[260px]",
        a.border,
        "border-white/10"
      )}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-90", a.mock)} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(3,3,8,0.55)_100%)]" />

      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-4 px-6 py-8">
        <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.07] p-4 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:h-32 sm:w-32 md:h-36 md:w-36">
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={logo}
              alt=""
              className="max-h-full max-w-full object-contain"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <span className="font-display text-3xl font-bold tracking-wide text-white/85 sm:text-4xl">
              {monogram || "EN"}
            </span>
          )}
        </div>
        <p className="text-center text-[11px] font-medium tracking-[0.18em] text-white/45 uppercase">
          {name}
        </p>
      </div>
    </div>
  )
}

/** Carrusel interno: una idea por vez (Situación → Qué hicimos → Cómo quedó). */
function StoryCarousel({
  project,
  active,
}: {
  project: Project
  active: boolean
}) {
  const reduceMotion = useReducedMotion()
  const [step, setStep] = useState(0)
  const labelId = useId()

  useEffect(() => {
    if (!active || reduceMotion) return
    const id = window.setInterval(() => {
      setStep((s) => (s + 1) % STORY_STEPS.length)
    }, 4200)
    return () => window.clearInterval(id)
  }, [active, reduceMotion])

  const current = STORY_STEPS[step]
  const text =
    current.key === "situation"
      ? project.situation
      : current.key === "work"
        ? project.work
        : project.outcome

  return (
    <div className="mt-5">
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label={`Historia de ${project.name}`}
      >
        {STORY_STEPS.map((s, i) => (
          <button
            key={s.key}
            type="button"
            role="tab"
            aria-selected={i === step}
            aria-controls={labelId}
            onClick={() => setStep(i)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-[11px] font-semibold tracking-wide uppercase transition-colors",
              i === step
                ? "border-fuchsia-300/40 bg-fuchsia-500/20 text-fuchsia-100"
                : "border-white/10 bg-white/[0.03] text-[var(--color-text-tertiary)] hover:border-white/20 hover:text-white/80"
            )}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div
        id={labelId}
        role="tabpanel"
        className="relative mt-4 min-h-[5.5rem] sm:min-h-[4.75rem]"
      >
        <AnimatePresence mode="wait">
          <motion.p
            key={current.key}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base"
          >
            {text}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-3 flex items-center gap-1.5" aria-hidden>
        {STORY_STEPS.map((s, i) => (
          <span
            key={s.key}
            className={cn(
              "h-1 rounded-full transition-all duration-300",
              i === step ? "w-6 bg-fuchsia-300/80" : "w-1.5 bg-white/20"
            )}
          />
        ))}
      </div>
    </div>
  )
}

function ProjectSlide({
  project,
  index,
  total,
  active,
}: {
  project: Project
  index: number
  total: number
  active: boolean
}) {
  const url = projectUrl(project)
  const a = accentOf(project.accent)
  const logo =
    "logo" in project && typeof project.logo === "string"
      ? project.logo
      : undefined

  return (
    <article
      className={cn(
        "glass relative flex h-full w-full shrink-0 snap-center flex-col overflow-hidden rounded-2xl border p-5 sm:p-7 md:p-8",
        a.border
      )}
      aria-roledescription="slide"
      aria-label={`${index + 1} de ${total}: ${project.name}`}
    >
      <div
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl",
          a.glow
        )}
      />

      <div className="relative z-10 grid flex-1 gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-stretch md:gap-8">
        <ProjectPreview
          name={project.name}
          accent={project.accent}
          logo={logo}
        />

        <div className="flex min-w-0 flex-col">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "inline-flex rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-wide",
                a.chip
              )}
            >
              {project.category}
            </span>
            <span className="font-display text-xs tabular-nums text-fuchsia-300/50">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>

          <h3 className="font-display mt-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            {project.name}
          </h3>

          <StoryCarousel
            key={project.id}
            project={project}
            active={active}
          />

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.features.map((f) => (
              <span
                key={f}
                className="rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 text-xs text-[var(--color-text-secondary)]"
              >
                {f}
              </span>
            ))}
          </div>

          {url ? (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-white/10 hover:shadow-[0_0_28px_rgba(244,114,182,0.25)]"
            >
              Ver en vivo
              <ExternalLink size={14} className="opacity-80" />
            </a>
          ) : (
            <p className="mt-6 text-xs text-[var(--color-text-tertiary)]">
              Proyecto interno / sin demo pública.
            </p>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const { ref: titleRef, isInView: titleInView } = useInView(0.2)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const total = PROJECTS.length

  const scrollToIndex = useCallback((index: number) => {
    const el = scrollerRef.current
    if (!el) return
    const clamped = ((index % total) + total) % total
    const child = el.children[clamped] as HTMLElement | undefined
    if (!child) return
    el.scrollTo({ left: child.offsetLeft, behavior: "smooth" })
    setActive(clamped)
  }, [total])

  const onScroll = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const children = Array.from(el.children) as HTMLElement[]
    if (!children.length) return
    const mid = el.scrollLeft + el.clientWidth / 2
    let best = 0
    let bestDist = Infinity
    children.forEach((child, i) => {
      const center = child.offsetLeft + child.offsetWidth / 2
      const dist = Math.abs(center - mid)
      if (dist < bestDist) {
        bestDist = dist
        best = i
      }
    })
    setActive(best)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    onScroll()
    el.addEventListener("scroll", onScroll, { passive: true })
    return () => el.removeEventListener("scroll", onScroll)
  }, [onScroll])

  return (
    <section id="proyectos" className="relative overflow-hidden py-12 md:py-16">
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/[0.05] blur-[150px]" />

      <div className="section-container relative z-10">
        <motion.div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          initial={{ opacity: 0, y: 24 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0, 1] }}
          className="mb-8 max-w-2xl md:mb-10"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-200/80">
            Proyectos
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            <span className="text-gradient">Trabajos que hablan por nosotros</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
            Deslizá entre proyectos. En cada uno, la historia va de a un paso:
            situación, qué hicimos y cómo quedó.
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="region"
            aria-roledescription="carrusel"
            aria-label="Proyectos del estudio"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                e.preventDefault()
                scrollToIndex(active + 1)
              }
              if (e.key === "ArrowLeft") {
                e.preventDefault()
                scrollToIndex(active - 1)
              }
            }}
          >
            {PROJECTS.map((project, index) => (
              <div
                key={project.id}
                className="w-[min(100%,40rem)] shrink-0 snap-center md:w-[min(100%,52rem)] lg:w-[min(100%,58rem)]"
              >
                <ProjectSlide
                  project={project}
                  index={index}
                  total={total}
                  active={index === active}
                />
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollToIndex(active - 1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition-colors hover:border-violet-300/40 hover:bg-violet-500/15 hover:text-white"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => scrollToIndex(active + 1)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/80 transition-colors hover:border-violet-300/40 hover:bg-violet-500/15 hover:text-white"
                aria-label="Proyecto siguiente"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div
              className="flex max-w-full flex-wrap items-center justify-end gap-1.5"
              role="tablist"
              aria-label="Ir a proyecto"
            >
              {PROJECTS.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={p.name}
                  onClick={() => scrollToIndex(i)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === active
                      ? "w-7 bg-fuchsia-300/90"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-[var(--color-text-tertiary)]">
          ¿Tu rubro no está en la lista? También hacemos a medida — contanos el
          caso.
        </p>
      </div>
    </section>
  )
}
