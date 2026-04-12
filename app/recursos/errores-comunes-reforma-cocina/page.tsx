import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { JsonLd } from "@/components/json-ld"
import { buildBreadcrumbSchema, buildMetadata, buildArticleSchema } from "@/lib/seo"

const title = "10 Errores comunes al reformar tu cocina (y cómo evitarlos)"
const description = "Conoce los fallos más habituales en la distribución, la iluminación o la elección de materiales que pueden arruinar una reforma de cocina."
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
            La cocina es el corazón de la casa y también una de las estancias más complejas de
            reformar. Un error aquí se paga a diario. Estos son los fallos que más vemos y cómo
            prevenirlos.
          </p>
        </header>

        <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary">
          <h2>1. Ignorar el triángulo de trabajo</h2>
          <p>
            Situar lavaplatos, cocina y nevera muy separados. Asegúrate de que haya buena
            comunicación entre fregadero, fogones y frigorífico para ahorrar pasos al cocinar.
          </p>

          <h2>2. Falta de iluminación adecuada</h2>
          <p>
            No planificar suficientes luces o puntos de luz. Añade iluminación general y específica
            (por ejemplo, sobre la encimera y la zona de cocción) para evitar sombras molestas.
          </p>

          <h2>3. Elegir la estética antes que la funcionalidad en el suelo</h2>
          <p>
            Colocar un suelo bonito pero poco práctico. En la cocina es preferible un material fácil
            de limpiar y antideslizante, aunque sea más sencillo estéticamente.
          </p>

          <h2>4. Insuficientes enchufes</h2>
          <p>
            No prever suficientes tomas eléctricas o ubicarlas mal. Coloca enchufes en lugares
            estratégicos para pequeños electrodomésticos, cargadores y utensilios eléctricos
            (cafetera, microondas, etc.).
          </p>

          <h2>5. Renunciar a cajones de extracción total</h2>
          <p>
            Prescindir de cajones profundos que facilitan el acceso al interior. Los cajones de
            extracción completa permiten aprovechar todo el espacio útil para guardar ollas,
            utensilios y alimentos de forma ordenada.
          </p>

          <h2>6. No planificar suficiente almacenamiento</h2>
          <p>
            Subestimar la necesidad de armarios y despensas. Asegúrate de tener espacio de
            almacenamiento suficiente para menaje, alimentos y utensilios, usando armarios altos o
            soluciones extra si es necesario.
          </p>

          <h2>7. Muebles demasiado grandes</h2>
          <p>
            Colocar muebles que no permiten moverse libremente. Deja al menos 1 metro libre frente
            a las líneas de trabajo para poder abrir puertas y cajones con comodidad.
          </p>

          <h2>8. Encimeras estrechas</h2>
          <p>
            Colocar encimeras muy poco profundas, que limitan la superficie de trabajo. Opta por
            encimeras de mayor fondo (hasta 65-70 cm si el espacio lo permite) para ganar área
            útil.
          </p>

          <h2>9. Materiales de baja calidad</h2>
          <p>
            Escatimar en acabados y materiales pensando solo en el coste. En el largo plazo sale más
            caro: invierte en alicatados e instalaciones de calidad media y garantías.
          </p>

          <h2>10. Olvidar la ventilación</h2>
          <p>
            No instalar una campana extractora eficaz. Garantiza una buena ventilación para extraer
            humo, olores y humedad, protegiendo así muebles y acabados.
          </p>

          <div className="my-10 rounded-2xl bg-muted/50 p-6 sm:p-8">
            <h3 className="mt-0 text-xl font-bold text-foreground">¿Diseñamos tu cocina ideal en Madrid?</h3>
            <p className="mt-2 text-muted-foreground">
              En Hermanos Martínez te asesoramos desde el primer plano hasta el último acabado para
              que tu cocina sea práctica, bonita y adaptada a tu día a día.
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
                <h4 className="font-bold mb-2">¿Cuánto cuesta una reforma integral?</h4>
                <p className="text-sm text-muted-foreground">Desglose orientativo de partidas y precios para Madrid.</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">Leer más <ArrowRight className="ml-1 h-4 w-4"/></div>
              </Link>
              <Link href="/recursos/guia-cambiar-banera-por-ducha" className="block p-6 bg-card rounded-xl border border-border hover:shadow-md transition-all">
                <h4 className="font-bold mb-2">Guía para cambiar bañera por ducha</h4>
                <p className="text-sm text-muted-foreground">Proceso completo para ganar comodidad y seguridad.</p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">Leer más <ArrowRight className="ml-1 h-4 w-4"/></div>
              </Link>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
