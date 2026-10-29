import { Navbar } from "@/components/navbar/navbar"
import { Hero } from "@/components/hero/hero"
import { Problems } from "@/components/problems/problems"
import { Services } from "@/components/services/services"
import { Process } from "@/components/process/process"
import Projects from "@/components/projects/projects"
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
        <Process />
        <Projects />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
