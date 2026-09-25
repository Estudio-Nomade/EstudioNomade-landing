"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { NAV_LINKS, SITE, CONTACT } from "@/constants"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
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
    return () => {
      document.body.style.overflow = ""
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
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        /* Alta y opaca: el nombre no se mezcla con el hero detrás */
        "fixed top-0 right-0 left-0 z-[100] border-b transition-colors duration-300",
        scrolled || isOpen
          ? "border-white/[0.08] bg-[#050508]/95 shadow-lg shadow-black/40 backdrop-blur-xl"
          : "border-white/[0.06] bg-[#050508]/90 backdrop-blur-md"
      )}
    >
      <nav className="section-container flex h-16 items-center justify-between gap-3 sm:h-[4.25rem]">
        {/* Brand: logo real + nombre SIEMPRE visible (también mobile) */}
        <a
          href="#"
          className="group relative z-[101] flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] sm:h-10 sm:w-10">
            <Image
              src="/logo-en.png"
              alt=""
              width={40}
              height={40}
              className="h-full w-full object-contain p-0.5"
              priority
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
                className="rounded-lg px-2.5 py-2 text-[13px] font-medium tracking-wide text-white/45 transition-colors duration-200 hover:bg-white/[0.04] hover:text-white/90"
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
            className="hidden items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.05] px-4 py-2 text-sm font-medium text-white/80 transition-all duration-200 hover:border-violet-400/30 hover:bg-white/[0.08] hover:text-white md:inline-flex"
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
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden border-t border-white/[0.06] bg-[#050508] lg:hidden"
          >
            <ul className="section-container flex flex-col gap-1 py-4 pb-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="w-full rounded-xl px-4 py-3.5 text-left text-base font-medium text-white/70 transition-all hover:bg-white/[0.05] hover:text-white"
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
                  className="w-full rounded-full bg-gradient-to-r from-violet-500 to-purple-600 px-4 py-3.5 text-center text-sm font-semibold text-white"
                >
                  Hablemos
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
