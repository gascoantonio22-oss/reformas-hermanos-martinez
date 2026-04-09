import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { JsonLd } from "@/components/json-ld"
import { buildBreadcrumbSchema, buildMetadata, buildArticleSchema } from "@/lib/seo"

const title = "¿Cuánto cuesta una reforma integral en Madrid en 2026?"
const description = "Descubre el precio real de una reforma integral en Madrid desglosado por partidas. Consejos para evitar sobrecostes y pedir presupuestos."
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
            A la hora de comprar una vivienda antigua o querer renovar el hogar familiar, la primera pregunta siempre es la misma: ¿qué presupuesto necesito realmente? Aquí te detallamos los precios medios del mercado actual.
          </p>
        </header>

        <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:font-bold prose-a:text-primary">
          <h2>1. La regla de oro del precio por metro cuadrado</h2>
          <p>
            Aunque cada proyecto es único, en Madrid capital el precio de una reforma integral de calidades medias oscila actualmente entre los <strong>450€ y los 750€ por metro cuadrado</strong>.
          </p>
          <p>
            Esto significa que para un piso estándar de 80m², estaríamos hablando de un rango de entre 36.000€ y 60.000€. La diferencia radica en la calidad de los materiales elegidos (ventanas, suelos, revestimientos) y si se toca estructuralmente la distribución o no.
          </p>

          <h2>2. Desglose de partidas principales</h2>
          <ul>
            <li><strong>Demoliciones y trabajos previos:</strong> Es una de las partidas más subestimadas. Tirar tabiques, retirar escombros y pagar las tasas del vertedero suele llevarse alrededor del <strong>8-10%</strong> del presupuesto total.</li>
            <li><strong>Albañilería y revestimientos:</strong> Levantar nuevos tabiques, rasear paredes, nivelar suelos y los azulejos de baño/cocina. Representa un <strong>20-25%</strong>.</li>
            <li><strong>Fontanería e Instalación Eléctrica:</strong> Renovar esto es obligatorio en casas de más de 30 años. Suele ser el <strong>15%</strong>.</li>
            <li><strong>Carpintería y Ventanas:</strong> Puertas de interior y ventanas de PVC rotura de puente térmico. Puede llevarse un <strong>15-20%</strong> fácilmente.</li>
          </ul>

          <h2>3. ¿Cómo evitar sobrecostes innecesarios?</h2>
          <p>
            El mayor error es pedir presupuestos online basados en "estimadores automáticos" y no tener claro qué calidades se quieren. Obliga a la empresa de reformas a desglosar las partidas exactas. Además, siempre recomendamos reservar un 10% del total para "poyaques" ("ya que estamos... cambiamos esto también").
          </p>

          <div className="my-10 rounded-2xl bg-muted/50 p-6 sm:p-8">
            <h3 className="mt-0 text-xl font-bold text-foreground">¿Quieres un presupuesto exacto para tu piso?</h3>
            <p className="mt-2 text-muted-foreground">
              Nosotros realizamos una visita técnica sin coste para darte un número real, sin inflar y completamente desglosado.
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
                <h4 className="font-bold mb-2">10 Errores al reformar tu cocina</h4>
                <p className="text-sm text-muted-foreground">Evita dolores de cabeza en la zona más cara de reformar.</p>
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

      <ContactSection />
      <Footer />
    </main>
  )
}
