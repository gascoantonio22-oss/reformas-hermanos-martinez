import Link from "next/link"
import { ArrowRight, BookOpen, FileText, CheckCircle2 } from "lucide-react"

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

export function ResourcesSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/70">
            Recursos y Guías
          </p>
          <h2 className="mt-3 text-3xl font-bold text-foreground text-balance md:text-4xl">
            Aprende antes de reformar
          </h2>
          <p className="mt-3 text-muted-foreground">
            Artículos y guías prácticas para ayudarte a tomar mejores decisiones en tu proyecto.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
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
                  <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                    {resource.title}
                  </h3>
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

        <div className="mt-10 text-center">
          <Link
            href="/recursos"
            className="inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Ver todos los recursos
          </Link>
        </div>
      </div>
    </section>
  )
}
