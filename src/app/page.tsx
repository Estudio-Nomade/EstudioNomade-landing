import { Navbar } from "@/components/navbar/navbar"
import { Hero } from "@/components/hero/hero"
import { Problems } from "@/components/problems/problems"
import { Services } from "@/components/services/services"
import { Process } from "@/components/process/process"
import Projects from "@/components/projects/projects"
import { Maintenance } from "@/components/maintenance/maintenance"
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
        <Problems />
        <Services />
        <Process />
        <Projects />
        <Maintenance />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
