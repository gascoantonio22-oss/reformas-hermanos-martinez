import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BookOpen, FileText, CheckCircle2 } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { buildBreadcrumbSchema, buildMetadata, buildWebPageSchema } from "@/lib/seo"

const title = "Recursos y guías sobre reformas | Hermanos Martínez"
const description = "Descubre nuestras guías prácticas, consejos y estimaciones de precios para tu próxima reforma en Madrid."
const path = "/recursos"

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path,
  keywords: ["guías de reformas", "consejos reformas", "precio reforma integral madrid"],
})

const resources = [
  {
    title: "¿Cuánto cuesta una reforma integral en Madrid?",
    description: "Desglose real de partidas, costes medios y consejos para no pasarte del presupuesto en tu reforma.",
    href: "/recursos/cuanto-cuesta-reforma-integral-madrid",
    icon: FileText,
  },
  {
    title: "10 Errores al reformar tu cocina (y cómo evitarlos)",
    description: "Conoce los fallos más comunes en distribución, materiales e iluminación antes de empezar tu obra.",
    href: "/recursos/errores-comunes-reforma-cocina",
    icon: CheckCircle2,
  },
  {
    title: "Guía para cambiar bañera por ducha en 24 horas",
    description: "Todo el proceso paso a paso, los mejores materiales antideslizantes y qué debes tener en cuenta.",
    href: "/recursos/guia-cambiar-banera-por-ducha",
    icon: BookOpen,
  },
]

export default function RecursosPage() {
  return (
    <main className="min-h-screen pt-20">
      <JsonLd
        data={[
          buildWebPageSchema({
            name: title,
            description,
            path,
          }),
          buildBreadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Recursos", path },
          ]),
        ]}
      />
      <Header />
      
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Recursos y Guías
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Todo lo que necesitas saber antes de empezar tu reforma. Artículos prácticos escritos por profesionales.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => {
              const Icon = resource.icon
              return (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div>
                    <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mb-2 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                      {resource.title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {resource.description}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center text-sm font-medium text-primary">
                    Leer artículo
                    <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
