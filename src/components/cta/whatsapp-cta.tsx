"use client"

import { motion } from "framer-motion"
import { MessageCircle, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

type WhatsAppCtaProps = {
  label?: string
  interest?: string | null
  className?: string
  size?: "md" | "lg"
  variant?: "primary" | "whatsapp" | "ghost"
  icon?: LucideIcon
  fullWidth?: boolean
}

const sizeClass = {
  md: "min-h-12 px-6 py-3 text-sm",
  lg: "min-h-14 px-8 py-4 text-base sm:text-lg",
} as const

export function WhatsAppCta({
  label = "Hablemos de tu proyecto",
  interest = null,
  className,
  size = "lg",
  variant = "primary",
  icon: Icon = MessageCircle,
  fullWidth = false,
}: WhatsAppCtaProps) {
  const href = buildWhatsAppUrl(interest)

  const variantClass =
    variant === "whatsapp"
      ? "border border-emerald-500/30 bg-emerald-500/15 text-emerald-300 hover:border-emerald-400/45 hover:bg-emerald-500/25 hover:shadow-[0_0_40px_rgba(16,185,129,0.2)]"
      : variant === "ghost"
        ? "border border-violet-300/25 bg-white/[0.03] text-white/85 hover:border-violet-300/45 hover:bg-violet-500/10 hover:text-white"
        : "bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 text-white shadow-[0_0_36px_rgba(139,92,246,0.35)] hover:shadow-[0_0_50px_rgba(167,139,250,0.5)]"

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300",
        sizeClass[size],
        variantClass,
        fullWidth && "w-full",
        className
      )}
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon className="h-5 w-5 shrink-0" aria-hidden />
      <span>{label}</span>
    </motion.a>
  )
}
