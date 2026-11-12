import { Navbar } from "@/components/navbar/navbar"
import { Hero } from "@/components/hero/hero"
import { Problems } from "@/components/problems/problems"
import { Services } from "@/components/services/services"
import Projects from "@/components/projects/projects"
import { MidCta } from "@/components/cta/mid-cta"
import { Testimonials } from "@/components/testimonials/testimonials"
import { Process } from "@/components/process/process"
import { CTA } from "@/components/cta/cta"
import { Footer } from "@/components/footer/footer"
import { ScrollProgress } from "@/components/effects/scroll-progress"
import { CompanionMascotLazy } from "@/components/effects/companion-mascot-lazy"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CompanionMascotLazy />
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Projects />
        <MidCta
          title="¿Viste algo parecido a lo que necesitás?"
          subtitle="Escribinos por WhatsApp y lo charlamos. Sin formularios ni elegir servicios de antemano."
        />
        <Testimonials />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
