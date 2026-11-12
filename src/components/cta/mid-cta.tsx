"use client"

import { WhatsAppCta } from "@/components/cta/whatsapp-cta"
import { SectionReveal } from "@/components/effects/section-reveal"
import { cn } from "@/lib/utils"

type MidCtaProps = {
  id?: string
  title?: string
  subtitle?: string
  className?: string
  compact?: boolean
}

export function MidCta({
  id,
  title = "¿Ya sabés que necesitás una mano?",
  subtitle = "Escribinos y lo vemos juntos. No hace falta elegir el servicio antes.",
  className,
  compact = false,
}: MidCtaProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden",
        compact ? "py-8 md:py-10" : "py-12 md:py-14",
        className
      )}
    >
      <div className="section-container relative z-10">
        <SectionReveal>
          <div className="glass relative overflow-hidden rounded-2xl border border-violet-400/20 px-6 py-8 text-center sm:px-10 sm:py-10">
            <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-fuchsia-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 bottom-0 h-36 w-36 rounded-full bg-violet-500/20 blur-3xl" />
            <h2 className="font-display relative text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {title}
            </h2>
            <p className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
              {subtitle}
            </p>
            <div className="relative mt-6 flex justify-center">
              <WhatsAppCta size="md" />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
