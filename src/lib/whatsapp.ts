import { CONTACT, WHATSAPP_DEFAULT_MESSAGE } from "@/constants"

/** Dígitos E.164 sin + */
export function whatsappDigits(phone: string = CONTACT.whatsapp): string {
  return phone.replace(/\D/g, "")
}

/**
 * Mensaje de contacto.
 * Por defecto: conversación abierta (sin obligar a elegir servicio).
 * Si se pasa `interest`, se nombra el tema (landings de ads / contexto).
 */
export function buildContactMessage(interest?: string | null): string {
  const topic = interest?.trim()
  if (topic) {
    return [
      WHATSAPP_DEFAULT_MESSAGE,
      `Me interesa especialmente: ${topic}.`,
    ].join("\n")
  }
  return WHATSAPP_DEFAULT_MESSAGE
}

export function buildWhatsAppUrl(interest?: string | null): string {
  const text = encodeURIComponent(buildContactMessage(interest))
  return `https://wa.me/${whatsappDigits()}?text=${text}`
}

export function buildMailtoUrl(interest?: string | null): string {
  const topic = interest?.trim()
  const subject = encodeURIComponent(
    topic
      ? `Consulta Estudio Nómade — ${topic}`
      : "Consulta Estudio Nómade"
  )
  const body = encodeURIComponent(buildContactMessage(interest))
  return `mailto:${CONTACT.email}?subject=${subject}&body=${body}`
}
