import type { Metadata } from "next"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { buildBreadcrumbSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Reformas integrales en Madrid con presupuesto claro | Hermanos Martínez",
  description:
    "Empresa familiar de reformas en Madrid capital. Reformas integrales, cocinas, baños y cambio de bañera por ducha con presupuesto claro, plazos definidos y atención cercana.",
  path: "/",
  keywords: [
    "reformas en madrid",
    "empresa de reformas madrid",
    "reformas integrales madrid",
    "reformas baños madrid",
    "reformas cocinas madrid",
  ],
})

export default function HomePage() {
  return (
    <main>
      <JsonLd
        data={[
          buildWebPageSchema({
            name: "Reformas en Madrid | Hermanos Martínez",
            description:
              "Empresa familiar de reformas en Madrid capital especializada en reformas integrales, cocinas, baños y cambio de bañera por ducha.",
            path: "/",
          }),
          buildBreadcrumbSchema([{ name: "Inicio", path: "/" }]),
        ]}
      />
      <Header />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
