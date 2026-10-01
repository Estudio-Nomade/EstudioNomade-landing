"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { CONTACT_INTERESTS } from "@/constants"
import { buildMailtoUrl, buildWhatsAppUrl } from "@/lib/whatsapp"
import { SectionReveal } from "@/components/effects/section-reveal"

const buttonHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 400, damping: 17 },
}

export function CTA() {
  const [interest, setInterest] = useState<string | null>(null)

  const waHref = buildWhatsAppUrl(interest)
  const mailHref = buildMailtoUrl(interest)

  return (
    <section
      id="cta"
      className="relative flex items-center justify-center overflow-hidden py-14 md:py-20"
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
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display mb-5 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              <span className="text-shine">¿Tenés un proyecto en mente?</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-[var(--color-text-secondary)] md:text-xl">
              Elegí qué te interesa (si querés) y escribimos por WhatsApp con el
              mensaje listo. También podés mandar mail.
            </p>

            <div className="mb-8">
              <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-violet-300/60 uppercase">
                ¿Sobre qué?
              </p>
              <div
                className="flex flex-wrap justify-center gap-2"
                role="group"
                aria-label="Elegir interés de contacto"
              >
                {CONTACT_INTERESTS.map((label) => {
                  const selected = interest === label
                  return (
                    <button
                      key={label}
                      type="button"
                      onClick={() =>
                        setInterest((prev) => (prev === label ? null : label))
                      }
                      aria-pressed={selected}
                      className={cn(
                        "rounded-full border px-3.5 py-2 text-left text-sm transition-all duration-200",
                        "min-h-11 max-w-full sm:max-w-[20rem]",
                        selected
                          ? "border-violet-300/50 bg-violet-500/25 text-white shadow-[0_0_24px_rgba(139,92,246,0.25)]"
                          : "border-white/[0.08] bg-white/[0.03] text-white/55 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white/85"
                      )}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
              <p className="mt-3 text-xs text-white/30">
                {interest
                  ? "Listo: el mensaje va a nombrar eso."
                  : "Sin elegir también podés escribir: va un saludo genérico."}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <motion.a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex min-h-14 items-center gap-3 rounded-xl px-8 py-4",
                  "border border-emerald-500/25 bg-emerald-500/10",
                  "text-lg font-semibold text-emerald-400",
                  "hover:border-emerald-500/40 hover:bg-emerald-500/15",
                  "hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
                  "transition-all duration-300"
                )}
                {...buttonHover}
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </motion.a>

              <motion.a
                href={mailHref}
                className={cn(
                  "inline-flex min-h-14 items-center gap-3 rounded-xl px-8 py-4",
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
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
