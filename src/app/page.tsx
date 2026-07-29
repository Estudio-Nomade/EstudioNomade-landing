import { Navbar } from "@/components/navbar/navbar"
import { Hero } from "@/components/hero/hero"
import { Services } from "@/components/services/services"
import { Process } from "@/components/process/process"
import Projects from "@/components/projects/projects"
import { CTA } from "@/components/cta/cta"
import { Footer } from "@/components/footer/footer"
import { ScrollProgress } from "@/components/effects/scroll-progress"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
