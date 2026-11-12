import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  PROJECTS,
  SERVICE_LANDINGS,
  SITE,
  type ServiceLandingSlug,
} from "@/constants"
import { Navbar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer/footer"
import { WhatsAppCta } from "@/components/cta/whatsapp-cta"
import { ExternalLink } from "lucide-react"

const SLUGS = Object.keys(SERVICE_LANDINGS) as ServiceLandingSlug[]

export function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const landing = SERVICE_LANDINGS[slug as ServiceLandingSlug]
  if (!landing) return {}
  return {
    title: landing.title,
    description: landing.description,
    alternates: { canonical: `/servicios/${landing.slug}` },
    openGraph: {
      title: `${landing.title} — ${SITE.name}`,
      description: landing.description,
      url: `${SITE.url}/servicios/${landing.slug}`,
    },
  }
}

export default async function ServicioPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const landing = SERVICE_LANDINGS[slug as ServiceLandingSlug]
  if (!landing) notFound()

  const related = landing.relatedProjectIds
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter((p): p is (typeof PROJECTS)[number] => Boolean(p))

  return (
    <>
      <Navbar />
      <main className="pb-16">
        <section className="section-container relative overflow-hidden pt-10 pb-12 md:pt-16 md:pb-16">
          <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-violet-200/80">
            {landing.eyebrow}
          </p>
          <h1 className="font-display max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="text-shine">{landing.headline}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
            {landing.description}
          </p>
          <ul className="mt-8 max-w-xl space-y-3">
            {landing.bullets.map((b) => (
              <li
                key={b}
                className="flex gap-3 text-sm text-[var(--color-text-secondary)] sm:text-base"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-300" />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppCta interest={landing.title} />
            <Link
              href="/#proyectos"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/80 transition-colors hover:border-violet-300/40 hover:text-white"
            >
              Ver proyectos
            </Link>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="section-container pb-4">
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              <span className="text-gradient">Proyectos relacionados</span>
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => {
                const url =
                  "url" in p && typeof p.url === "string" ? p.url : undefined
                return (
                  <article
                    key={p.id}
                    className="glass rounded-2xl border border-violet-400/15 p-5"
                  >
                    <p className="text-[10px] font-medium uppercase tracking-wider text-violet-200/70">
                      {p.category}
                    </p>
                    <h3 className="font-display mt-2 text-lg font-semibold text-white">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {p.outcome}
                    </p>
                    {url ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-fuchsia-200 hover:text-fuchsia-100"
                      >
                        Ver en vivo
                        <ExternalLink size={12} />
                      </a>
                    ) : null}
                  </article>
                )
              })}
            </div>
          </section>
        ) : null}

        <section className="section-container pt-10 text-center">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">
            ¿Empezamos por acá?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-[var(--color-text-secondary)] sm:text-base">
            Escribinos y contanos tu caso. Si después conviene sumar otra pieza
            (marca, web o marketing), lo vemos juntos.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppCta interest={landing.title} variant="whatsapp" />
          </div>
          <p className="mt-6 text-sm text-[var(--color-text-tertiary)]">
            <Link href="/" className="text-violet-200 hover:underline">
              ← Volver al inicio
            </Link>
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
