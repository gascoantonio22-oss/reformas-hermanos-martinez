import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { JsonLd } from "@/components/json-ld"
import { buildBreadcrumbSchema, buildMetadata, buildArticleSchema } from "@/lib/seo"

const title = "10 Errores comunes al reformar tu cocina (y cómo evitarlos)"
const description = "Conoce los fallos más habituales en distribución, elección de materiales e iluminación que arruinan la reforma de una cocina."
const path = "/recursos/errores-comunes-reforma-cocina"
const publishDate = "2026-04-09T08:00:00+02:00"

export const metadata: Metadata = buildMetadata({
  title,
  description,
  path,
  keywords: ["errores reforma cocina", "consejos reforma cocina", "reformar cocina madrid"],
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
            { name: "Errores comunes reforma cocina", path },
          ]),
        ]}
      />
      <Header />
      
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 md:py-20 lg:py-24">
        <header className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary/70">
            Diseño e Interiorismo
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
            {title}
          </h1>
          <p className="mt-6 text-lg tracking-tight text-muted-foreground">
            La cocina es el corazón de la casa y también la estancia más cara y compleja de reformar metro a metro. Un error aquí se paga a diario. Estos son los fallos que más vemos y cómo prevenirlos.
          </p>
        </header>

        <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary">
          <h2>1. Ignorar el "triángulo de trabajo"</h2>
          <p>
            El triángulo de trabajo está formado por las zonas de almacenamiento (nevera), preparación (fregadero/encimera) y cocción (vitrocerámica). Si hay obstáculos en este triángulo o la distancia entre ellos es enorme, cocinar será incómodo. Es el error número uno.
          </p>

          <h2>2. Insuficiente iluminación o mal planificada</h2>
          <p>
            Poner solo un foco central en el techo hace que, al estar de pie cocinando, te des sombra a ti mismo sobre la encimera. Siempre debes incluir luces LED bajo los muebles altos para iluminar directamente el área de trabajo.
          </p>

          <h2>3. Elegir la estética sobre la funcionalidad en los suelos</h2>
          <p>
            Ese suelo laminado precioso pero delicado, o esas baldosas blancas que se manchan con mirar... En la cocina, el suelo tiene que ser un "terreno de batalla". Recomendamos porcelánico: imita madera divinamente, es indestructible y fácil de limpiar.
          </p>

          <h2>4. Falta de enchufes</h2>
          <p>
            Cafetera, tostadora, freidora de aire, microondas, batidora, cargador del móvil, Thermomix... Hoy en día las cocinas necesitan muchísimos enchufes. Planea al menos un 30% más de los que crees que vas a necesitar.
          </p>

          <h2>5. Cajones en lugar de puertas abajo</h2>
          <p>
            Los armarios bajos con puertas abatibles donde tienes que ponerte de rodillas para buscar el tupper del fondo son historia. Ahora se utilizan enormes cajones gaveteros de extracción total que traen todo el contenido hacia ti. Es ligeramente más caro, pero vale cada euro.
          </p>

          <div className="my-10 rounded-2xl bg-muted/50 p-6 sm:p-8">
            <h3 className="mt-0 text-xl font-bold text-foreground">¿Diseñamos tu cocina ideal?</h3>
            <p className="mt-2 text-muted-foreground">
              En Hermanos Martínez te asesoramos desde el plano hasta el último acabado para que tu cocina sea perfecta.
            </p>
            <Link
              href="/reformas-cocinas-madrid"
              className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Ver servicio de cocinas
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
              <Link href="/recursos/guia-cambiar-banera-por-ducha" className="block p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                <h4 className="font-bold mb-2">Guía: Cambiar bañera por ducha</h4>
                <p className="text-sm text-muted-foreground">El proceso completo para hacer tu baño más accesible y moderno.</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">Leer más <ArrowRight className="ml-1 h-4 w-4"/></div>
              </Link>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
