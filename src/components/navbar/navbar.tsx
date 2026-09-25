"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { NAV_LINKS, CONTACT } from "@/constants"
import { cn } from "@/lib/utils"
import { NAV_MENU_EVENT } from "@/components/effects/companion-mascot"

/**
 * Barra sticky (no fixed flotante): queda arriba de todo sin hueco al scrollear.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    window.dispatchEvent(
      new CustomEvent(NAV_MENU_EVENT, { detail: { open: isOpen } })
    )
    return () => {
      document.body.style.overflow = ""
      window.dispatchEvent(
        new CustomEvent(NAV_MENU_EVENT, { detail: { open: false } })
      )
    }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        margin: 0,
        transform: "none",
      }}
      className={cn(
        "relative z-[100] w-full border-b",
        /* Fondo sólido: no se ve contenido/estrellas “en el medio” */
        "bg-[#030308]",
        scrolled || isOpen
          ? "border-violet-400/20 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.85)]"
          : "border-white/[0.06]"
      )}
    >
      {/* raya de progreso integrada al borde superior de la barra */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[2px] overflow-hidden"
        aria-hidden
      >
        <div id="en-scroll-progress-track" className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-violet-300 via-fuchsia-400 to-purple-500" />
      </div>

      <nav className="section-container relative flex h-14 items-center justify-between gap-3 sm:h-16">
        <a
          href="#"
          className="group relative z-[101] flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          <span className="logo-frame animate-logo-breathe relative h-9 w-9 shrink-0 sm:h-10 sm:w-10">
            <Image
              src="/logo-clear.png"
              alt="Estudio Nómade"
              width={40}
              height={40}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
              priority
            />
            <span
              className="pointer-events-none absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-violet-300/90 shadow-[0_0_10px_rgba(196,181,253,0.9)]"
              aria-hidden
            />
          </span>
          <span className="font-display truncate text-[13px] font-semibold tracking-[0.12em] text-white sm:text-sm sm:tracking-[0.14em]">
            ESTUDIO NÓMADE
          </span>
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="rounded-lg px-2.5 py-2 text-[13px] font-medium tracking-wide text-white/45 transition-all duration-200 hover:bg-violet-500/10 hover:text-white/90"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() =>
              window.open(
                `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`,
                "_blank"
              )
            }
            className="hidden items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-100/90 transition-all duration-200 hover:border-violet-300/40 hover:bg-violet-500/20 hover:text-white hover:shadow-[0_0_24px_rgba(139,92,246,0.35)] md:inline-flex"
          >
            Hablemos
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition-colors hover:bg-white/[0.08] hover:text-white lg:hidden"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[110] overflow-hidden border-t border-violet-400/10 bg-[#030308] lg:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4 pb-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="w-full rounded-xl px-4 py-3.5 text-left text-base font-medium text-white/70 transition-all hover:bg-violet-500/10 hover:text-white"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() =>
                    window.open(
                      `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`,
                      "_blank"
                    )
                  }
                  className="w-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-3.5 text-center text-sm font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)]"
                >
                  Hablemos
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
