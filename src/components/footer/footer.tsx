"use client"

import { motion } from "framer-motion"
import { NAV_LINKS, SITE, CONTACT } from "@/constants"
import { MessageCircle, Mail, ExternalLink } from "lucide-react"
import { buildMailtoUrl, buildWhatsAppUrl } from "@/lib/whatsapp"

const contactItems = [
  {
    label: "WhatsApp",
    href: buildWhatsAppUrl(),
    icon: MessageCircle,
  },
  {
    label: CONTACT.email,
    href: buildMailtoUrl(),
    icon: Mail,
  },
  {
    label: "GitHub",
    href: CONTACT.github,
    icon: ExternalLink,
  },
] as const

export function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-violet-400/10 bg-[#030308]/80 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-violet-500/[0.05]" />

      <div className="section-container relative py-10 md:py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div className="flex flex-col gap-4">
            <motion.a
              href="#"
              className="group flex w-fit items-center gap-2.5"
              whileHover={{ scale: 1.02 }}
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
            >
              <span className="logo-frame relative h-10 w-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo-nav.png"
                  alt=""
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                  decoding="async"
                  loading="lazy"
                />
              </span>
              <span className="font-display text-sm font-semibold tracking-wider text-white/90">
                ESTUDIO NÓMADE
              </span>
            </motion.a>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {SITE.tagline}. De Tandil, Buenos Aires — soluciones
              digitales, marca y marketing pensados para moverse con vos.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {/* h3 (no h4): evita saltar niveles tras h2/h3 de secciones */}
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[var(--color-text-tertiary)] uppercase">
              Navegación
            </p>
            <nav aria-label="Navegación del pie">
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-violet-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <p className="mb-2 text-xs font-semibold tracking-[0.2em] text-[var(--color-text-tertiary)] uppercase">
              Contacto
            </p>
            <div className="flex flex-col gap-2.5">
              {contactItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-sm text-[var(--color-text-secondary)] transition-colors duration-300 hover:text-violet-200"
                  whileHover={{ x: 4 }}
                >
                  <item.icon
                    size={14}
                    className="text-[var(--color-text-tertiary)] transition-colors duration-300 group-hover:text-violet-300"
                  />
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-violet-400/10 pt-8 sm:flex-row">
          <p className="text-xs text-[var(--color-text-tertiary)]">
            &copy; 2026 {SITE.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[var(--color-text-tertiary)]">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
