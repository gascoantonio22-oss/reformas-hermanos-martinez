import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { buildBreadcrumbSchema, buildMetadata, buildArticleSchema } from "@/lib/seo"

const title = "Guía definitiva para cambiar bañera por ducha en Madrid"
const description = "Descubre el proceso completo, precios y tiempos reales para realizar un cambio de bañera por ducha seguro y accesible."
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
            Es la reforma estrella y la que más nos solicitan en Madrid. Ganarás en seguridad (sobre todo para personas mayores), espacio y modernidad. ¿Cómo lo hacemos y cuánto se tarda?
          </p>
        </header>

        <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary">
          <h2>El proceso y los plazos</h2>
          <p>
            Mucha publicidad promete este cambio "en 24 horas". Nuestro consejo es huir de las prisas que sacrifican el secado de los materiales. Un cambio hecho por profesionales requiere, como mínimo, <strong>dos o tres jornadas completas</strong> para asegurar que todo el perímetro quede estanco y no haya goteras en un mes.
          </p>

          <ol>
            <li><strong>Día 1:</strong> Demolición, retirada de escombros de la antigua bañera, y subida del nivel del desagüe para el nuevo plato extraplano. Se prepara la pared (se rasea con mortero).</li>
            <li><strong>Día 2:</strong> Instalación del plato de ducha (asegurando el nivel para que corra el agua) y alicatado en la zona donde estaba la bañera.</li>
            <li><strong>Día 3:</strong> Rejuntado, colocación de grifería y mampara.</li>
          </ol>

          <h2>Los Materiales Clave</h2>
          <p>
            El corazón de esta reforma es el plato. El estándar hoy son los <strong>platos de resina con carga mineral</strong>. Son muy cálidos, apenas levantan 3cm del suelo y lo más importante: tienen clasificación C3 antideslizante (la máxima).
          </p>
          <p>
            Respecto a la mampara, para ganar amplitud visual recomendamos una hoja fija de cristal templado (mínimo 6mm, preferible 8mm) con tratamiento antical. Evita perfiles en la parte inferior para que sea fácil pasar la fregona.
          </p>

          <div className="my-10 rounded-2xl bg-muted/50 p-6 sm:p-8">
            <h3 className="mt-0 text-xl font-bold text-foreground">Gana seguridad hoy</h3>
            <p className="mt-2 text-muted-foreground">
              Somos especialistas. Trabajamos con los mejores proveedores nacionales y cuidamos cada milímetro.
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
                <h4 className="font-bold mb-2">Precio de Reforma Integral</h4>
                <p className="text-sm text-muted-foreground">Desglose de precios para reformar un piso en Madrid.</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">Leer más <ArrowRight className="ml-1 h-4 w-4"/></div>
              </Link>
              <Link href="/recursos/errores-comunes-reforma-cocina" className="block p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                <h4 className="font-bold mb-2">10 Errores al reformar tu cocina</h4>
                <p className="text-sm text-muted-foreground">Evita dolores de cabeza en la zona más cara de reformar.</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">Leer más <ArrowRight className="ml-1 h-4 w-4"/></div>
              </Link>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
