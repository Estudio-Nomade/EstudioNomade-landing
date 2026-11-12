"use client"

import { motion } from "framer-motion"
import { Calendar, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { CONTACT } from "@/constants"
import { buildMailtoUrl } from "@/lib/whatsapp"
import { WhatsAppCta } from "@/components/cta/whatsapp-cta"
import { SectionReveal } from "@/components/effects/section-reveal"

const buttonHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 400, damping: 17 },
}

export function CTA() {
  const mailHref = buildMailtoUrl()
  const meetingUrl = CONTACT.meetingUrl?.trim()

  return (
    <section
      id="cta"
      className="relative flex items-center justify-center overflow-hidden py-16 md:py-24"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-violet-500/15 blur-[180px]" />
        <div className="absolute top-[20%] left-[15%] h-[220px] w-[220px] animate-pulse-glow rounded-full bg-fuchsia-500/10 blur-[100px]" />
        <span
          className="sparkle-mark"
          style={{ top: "22%", left: "18%", width: 14, height: 14 }}
          aria-hidden
        />
        <span
          className="sparkle-mark"
          style={{
            top: "30%",
            right: "20%",
            left: "auto",
            width: 18,
            height: 18,
            animationDelay: "0.8s",
          }}
          aria-hidden
        />
        <span
          className="sparkle-mark"
          style={{
            bottom: "28%",
            left: "30%",
            top: "auto",
            width: 12,
            height: 12,
            animationDelay: "1.4s",
          }}
          aria-hidden
        />
      </div>

      <div className="section-container relative z-10 w-full">
        <SectionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-shine">Tu próximo proyecto puede empezar acá.</span>
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
              Contanos qué tenés en mente. No importa si es una idea recién
              empezada o un negocio que necesita dar el siguiente paso.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
              <WhatsAppCta variant="whatsapp" />

              {meetingUrl ? (
                <motion.a
                  href={meetingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex min-h-14 items-center gap-3 rounded-full px-8 py-4",
                    "border border-violet-400/25 bg-violet-500/10",
                    "text-lg font-semibold text-violet-100",
                    "hover:border-violet-300/40 hover:bg-violet-500/20",
                    "transition-all duration-300"
                  )}
                  {...buttonHover}
                >
                  <Calendar className="h-5 w-5" />
                  Coordinar reunión online
                </motion.a>
              ) : null}

              <motion.a
                href={mailHref}
                className={cn(
                  "inline-flex min-h-14 items-center gap-3 rounded-full px-8 py-4",
                  "border border-[rgba(255,255,255,0.08)] bg-transparent",
                  "text-lg font-semibold text-[var(--color-text-primary)]",
                  "hover:border-primary/40 hover:bg-[rgba(255,255,255,0.03)]",
                  "transition-all duration-300"
                )}
                {...buttonHover}
              >
                <Mail className="h-5 w-5" />
                Email
              </motion.a>
            </div>

            {!meetingUrl ? (
              <p className="mt-6 text-sm text-[var(--color-text-tertiary)]">
                Preferís una call? Decinos por WhatsApp y coordinamos una
                reunión online.
              </p>
            ) : null}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
