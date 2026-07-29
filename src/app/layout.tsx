import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { SITE } from "@/constants"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "gestión de turnos",
    "gestión de clientes",
    "gestión de pedidos",
    "catálogo digital",
    "desarrollo de software",
    "aplicaciones mobile",
    "automatización",
    "productos digitales",
  ],
  authors: [{ name: "Estudio Nómade" }],
  creator: "Estudio Nómade",
  publisher: "Estudio Nómade",
  metadataBase: new URL("https://estudionomade.com"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${spaceGrotesk.variable} dark h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[#050508] text-[#f5f5f5] antialiased">
        {children}
      </body>
    </html>
  )
}
