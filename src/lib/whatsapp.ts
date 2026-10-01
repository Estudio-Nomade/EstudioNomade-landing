import { CONTACT } from "@/constants"

/** Dígitos E.164 sin + */
export function whatsappDigits(phone: string = CONTACT.whatsapp): string {
  return phone.replace(/\D/g, "")
}

/**
 * Mensaje base criollo. Si hay interés elegido, lo nombra;
 * si no, deja un pedido genérico de orden/automatizar.
 */
export function buildContactMessage(interest?: string | null): string {
  const topic = interest?.trim()
  if (topic) {
    return [
      "Hola! Me interesa cómo trabajan 👋",
      `Quiero que me ayuden con: ${topic}.`,
      "¿Me cuentan el siguiente paso?",
    ].join("\n")
  }
  return [
    "Hola! Me interesa cómo trabajan 👋",
    "Quiero que me ayuden a ordenar o automatizar algo del negocio.",
    "¿Me cuentan el siguiente paso?",
  ].join("\n")
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
