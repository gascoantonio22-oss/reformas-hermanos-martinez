import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { buildBreadcrumbSchema, buildMetadata, buildArticleSchema } from "@/lib/seo"

const title = "Guía definitiva para cambiar bañera por ducha en Madrid"
const description = "Descubre el proceso completo, los plazos reales y los materiales que conviene revisar al realizar esta reforma."
const path = "/recursos/guia-cambiar-banera-por-ducha"
const publishDate = "2026-04-09T08:00:00+02:00"

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path,
  keywords: ["cambiar bañera por ducha", "reforma baño madrid", "plato de ducha antideslizante"],
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
            { name: "Cambiar Bañera por Ducha", path },
          ]),
        ]}
      />
      <Header />
      
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 md:py-20 lg:py-24">
        <header className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary/70">
            Guías Prácticas
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            {title}
          </h1>
          <p className="mt-6 text-lg tracking-tight text-muted-foreground">
            Cambiar la bañera por una ducha es muy popular en Madrid para ganar seguridad y
            comodidad en el baño.
          </p>
        </header>

        <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary">
          <h2>Proceso y plazos</h2>
          <p>
            Aunque algunos prometen cambios en 24 horas, lo recomendable es dedicar al menos
            <strong> 2-3 días</strong> para asegurar un buen resultado.
          </p>

          <ol>
            <li><strong>Día 1:</strong> Demolición y retirada de la bañera antigua. Preparación de la base para el nuevo plato.</li>
            <li><strong>Día 2:</strong> Instalación del plato de ducha, verificación del nivel y colocación de azulejos en las zonas afectadas.</li>
            <li><strong>Día 3:</strong> Rejuntado, montaje de grifería y colocación de la mampara.</li>
          </ol>

          <h2>Los materiales clave</h2>
          <p>
            El plato de ducha es fundamental. Actualmente se recomiendan los platos de resina con
            carga mineral por su resistencia y ligereza.
          </p>
          <p>
            En cuanto a la mampara, para ganar amplitud visual se suele optar por una hoja de
            cristal templado. Los perfiles de aluminio o acero inoxidable aportan durabilidad y
            estilo.
          </p>

          <div className="my-10 rounded-2xl bg-muted/50 p-6 sm:p-8">
            <h3 className="mt-0 text-xl font-bold text-foreground">Gana seguridad hoy</h3>
            <p className="mt-2 text-muted-foreground">
              Somos especialistas en Madrid con más de 25 años de experiencia en reformas de
              baños. Trabajamos con proveedores de confianza y cuidamos cada milímetro para que el
              cambio quede perfectamente rematado. Garantizamos cada proyecto con documentación
              por escrito para tu tranquilidad.
            </p>
            <Link
              href="/cambiar-banera-por-ducha-madrid"
              className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Conoce nuestro servicio de cambio de bañera
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-muted py-16 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold mb-8">Artículos relacionados</h3>
            <div className="grid gap-6 md:grid-cols-2 text-left">
              <Link href="/recursos/cuanto-cuesta-reforma-integral-madrid" className="block p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                <h4 className="font-bold mb-2">¿Cuánto cuesta una reforma integral?</h4>
                <p className="text-sm text-muted-foreground">Desglose orientativo de partidas y precios para Madrid.</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">Leer más <ArrowRight className="ml-1 h-4 w-4"/></div>
              </Link>
              <Link href="/recursos/errores-comunes-reforma-cocina" className="block p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                <h4 className="font-bold mb-2">10 errores al reformar tu cocina</h4>
                <p className="text-sm text-muted-foreground">Evita fallos de distribución, luz y materiales antes de empezar.</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">Leer más <ArrowRight className="ml-1 h-4 w-4"/></div>
              </Link>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
