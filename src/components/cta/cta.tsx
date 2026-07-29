"use client"

import { motion } from "framer-motion"
import { MessageCircle, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { CONTACT } from "@/constants"
import { SectionReveal } from "@/components/effects/section-reveal"

const buttonHover = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring" as const, stiffness: 400, damping: 17 },
}

export function CTA() {
  return (
    <section
      id="cta"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24 md:py-36"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[180px] animate-pulse-glow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/80" />
      </div>

      <div className="section-container relative z-10 w-full">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="text-gradient">¿Tenés una idea?</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-xl md:text-2xl mb-12 leading-relaxed font-[family-name:var(--font-sans)]">
              Automatizamos lo que hoy te frena. Hablemos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <motion.a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center gap-3 px-10 py-5 rounded-xl",
                  "bg-emerald-500/10 border border-emerald-500/25",
                  "text-emerald-400 font-semibold text-lg",
                  "hover:bg-emerald-500/15 hover:border-emerald-500/40",
                  "hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]",
                  "transition-all duration-300",
                  "font-[family-name:var(--font-sans)]"
                )}
                {...buttonHover}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </motion.a>

              <motion.a
                href={`mailto:${CONTACT.email}`}
                className={cn(
                  "inline-flex items-center gap-3 px-10 py-5 rounded-xl",
                  "bg-transparent border border-[rgba(255,255,255,0.08)]",
                  "text-[var(--color-text-primary)] font-semibold text-lg",
                  "hover:border-primary/40 hover:bg-[rgba(255,255,255,0.03)]",
                  "hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]",
                  "transition-all duration-300",
                  "font-[family-name:var(--font-sans)]"
                )}
                {...buttonHover}
              >
                <Mail className="w-5 h-5" />
                Email
              </motion.a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
