"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { NAV_LINKS, SITE, CONTACT } from "@/constants"
import { MessageCircle, Mail, ExternalLink } from "lucide-react"

const waDigits = CONTACT.whatsapp.replace(/\D/g, "")

const contactItems = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${waDigits}`,
    icon: MessageCircle,
  },
  {
    label: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
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
    <footer className="relative border-t border-white/[0.04] bg-[#050508]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.01] to-violet-500/[0.02]" />

      <div className="section-container py-16 md:py-20">
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
              <span className="relative h-8 w-8 overflow-hidden rounded-md border border-white/10 bg-white/[0.04]">
                <Image
                  src="/logo-en.png"
                  alt=""
                  width={32}
                  height={32}
                  className="h-full w-full object-contain p-0.5"
                />
              </span>
              <span className="font-display text-sm font-semibold tracking-wider text-white/80">
                ESTUDIO NÓMADE
              </span>
            </motion.a>
            <p className="max-w-xs text-sm leading-relaxed text-white/30">
              {SITE.tagline}. Tumo, a medida y webs — con los colores del
              estudio y sin saturar de info.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="mb-2 text-xs font-semibold tracking-[0.2em] text-white/20 uppercase">
              Navegación
            </h4>
            <nav>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-white/35 transition-colors duration-300 hover:text-white/70"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="mb-2 text-xs font-semibold tracking-[0.2em] text-white/20 uppercase">
              Contacto
            </h4>
            <div className="flex flex-col gap-2.5">
              {contactItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-sm text-white/35 transition-colors duration-300 hover:text-white/70"
                  whileHover={{ x: 3 }}
                >
                  <item.icon
                    size={14}
                    className="text-white/20 transition-colors duration-300 group-hover:text-violet-400/60"
                  />
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.03] pt-8 sm:flex-row">
          <p className="text-xs text-white/15">
            &copy; 2026 {SITE.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/10">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
