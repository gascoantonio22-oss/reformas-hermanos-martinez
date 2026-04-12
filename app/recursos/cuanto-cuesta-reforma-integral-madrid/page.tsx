import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { JsonLd } from "@/components/json-ld"
import { buildBreadcrumbSchema, buildMetadata, buildArticleSchema } from "@/lib/seo"

const title = "¿Cuánto cuesta una reforma integral en Madrid en 2026?"
const description = "Descubre el costo medio por partidas y aprende a comparar presupuestos con más criterio."
const path = "/recursos/cuanto-cuesta-reforma-integral-madrid"
const publishDate = "2026-04-09T08:00:00+02:00"

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path,
  keywords: ["precio reforma integral madrid", "cuanto cuesta reforma piso", "presupuesto reforma integral"],
})

export default function ArticlePage() {
  return (
    <main className="min-h-screen pt-20">
      <JsonLd
        data={[
          buildArticleSchema({
            title,
            description,
            path,
            publishDate,
            modifiedDate: publishDate,
            authorName: "Reformas Hermanos Martínez",
          }),
          buildBreadcrumbSchema([
            { name: "Inicio", path: "/" },
            { name: "Recursos", path: "/recursos" },
            { name: "Cuánto cuesta una reforma integral", path },
          ]),
        ]}
      />
      <Header />
      
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 md:py-20 lg:py-24">
        <header className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary/70">
            Presupuestos y Precios
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            {title}
          </h1>
          <p className="mt-6 text-lg tracking-tight text-muted-foreground">
            Cuando planeas renovar una vivienda antigua en Madrid, la primera pregunta suele ser
            cuánto puede costar. Aquí damos una orientación útil sobre precios actuales para que
            puedas comparar presupuestos con criterio.
          </p>
        </header>

        <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary">
          <h2>1. La regla de oro del precio por m²</h2>
          <p>
            Cada proyecto es único, pero en Madrid capital una reforma integral de calidades medias
            suele oscilar entre <strong>450 € y 750 € por metro cuadrado</strong>.
          </p>
          <p>
            Eso significa que un piso estándar de 80 m² podría situarse entre aproximadamente
            36.000 € y 60.000 €.
          </p>

          <h2>2. Desglose de partidas principales</h2>
          <p>
            Comprende las principales partidas del presupuesto: demoliciones y trabajos previos,
            albañilería y revestimientos, fontanería e instalación eléctrica, carpintería y
            ventanas, pintura, etc. Revisar cada partida te ayuda a ver en qué se invierte cada
            parte del presupuesto y a valorar cómo se distribuye el costo total.
          </p>

          <h2>3. Cómo evitar sobrecostes</h2>
          <p>
            El mayor error es pedir presupuestos online genéricos o no definir claramente las
            calidades deseadas. Pide siempre partidas desglosadas y confirma con el reformador las
            calidades exactas que quieres. Esto evita sorpresas y sobrecostes una vez iniciada la
            obra.
          </p>

          <div className="my-10 rounded-2xl bg-muted/50 p-6 sm:p-8">
            <h3 className="mt-0 text-xl font-bold text-foreground">¿Quieres un presupuesto exacto para tu piso?</h3>
            <p className="mt-2 text-muted-foreground">
              En Hermanos Martínez realizamos una visita técnica gratuita y te ofrecemos un
              presupuesto desglosado, honesto y sin inflar precios. Así tendrás todas las partidas
              claras y adaptadas a tu proyecto.
            </p>
            <Link
              href="/#contacto"
              className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Pedir presupuesto cerrado
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-muted py-16 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold mb-8">Artículos relacionados</h3>
            <div className="grid gap-6 md:grid-cols-2 text-left">
              <Link href="/recursos/errores-comunes-reforma-cocina" className="block p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                <h4 className="font-bold mb-2">10 errores al reformar tu cocina</h4>
                <p className="text-sm text-muted-foreground">Evita fallos de distribución, luz y materiales antes de empezar.</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">Leer más <ArrowRight className="ml-1 h-4 w-4"/></div>
              </Link>
              <Link href="/recursos/guia-cambiar-banera-por-ducha" className="block p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                <h4 className="font-bold mb-2">Guía para cambiar bañera por ducha</h4>
                <p className="text-sm text-muted-foreground">El proceso completo para ganar comodidad, seguridad y espacio.</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">Leer más <ArrowRight className="ml-1 h-4 w-4"/></div>
              </Link>
            </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
