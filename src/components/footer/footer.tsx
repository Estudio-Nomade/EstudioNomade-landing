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
                <Image
                  src="/logo-clear.png"
                  alt="Estudio Nómade"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-display text-sm font-semibold tracking-wider text-white/85">
                ESTUDIO NÓMADE
              </span>
            </motion.a>
            <p className="max-w-xs text-sm leading-relaxed text-white/35">
              {SITE.tagline}. Tumo, a medida y webs — con los colores del
              estudio y sin saturar de info.
            </p>
            <a
              href={CONTACT.tumo}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-sm text-violet-300/70 underline-offset-4 transition-colors hover:text-violet-200 hover:underline"
            >
              tumo.com.ar
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="mb-2 text-xs font-semibold tracking-[0.2em] text-white/25 uppercase">
              Navegación
            </h4>
            <nav>
              <ul className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(link.href)}
                      className="text-sm text-white/40 transition-colors duration-300 hover:text-violet-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="mb-2 text-xs font-semibold tracking-[0.2em] text-white/25 uppercase">
              Contacto
            </h4>
            <div className="flex flex-col gap-2.5">
              {contactItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-sm text-white/40 transition-colors duration-300 hover:text-violet-200"
                  whileHover={{ x: 4 }}
                >
                  <item.icon
                    size={14}
                    className="text-white/25 transition-colors duration-300 group-hover:text-violet-300"
                  />
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-violet-400/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/20">
            &copy; 2026 {SITE.name}. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/15">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
