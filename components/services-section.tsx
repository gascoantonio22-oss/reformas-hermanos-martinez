"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { toast } from "sonner"

import { getSeoHrefForService } from "@/lib/seo-content"
import { services } from "@/lib/services"

export function ServicesSection() {
  const displayedServices = [
    "reformas-cocinas",
    "reformas-banos",
    "reformas-integrales",
    "cambio-banera-ducha",
  ]

  const selectedServices = services
    .filter((s) => displayedServices.includes(s.slug))
    .sort((a, b) => displayedServices.indexOf(a.slug) - displayedServices.indexOf(b.slug))

  const badgesMap: Record<string, string[]> = {
    "reformas-cocinas": ["Mobiliario a medida", "Encimeras", "Electricidad y fontanería"],
    "reformas-banos": ["Plato de ducha", "Alicatado", "Sanitarios y mueble"],
    "reformas-integrales": ["Coordinación total", "Presupuesto claro", "Plazos definidos"],
    "cambio-banera-ducha": ["Obra rápida", "Mampara", "Acabado sellado"],
  }

  const displayTitleMap: Record<string, string> = {
    "reformas-cocinas": "Reformas de cocinas en Madrid",
    "reformas-banos": "Reformas de baños en Madrid",
    "reformas-integrales": "Reformas integrales en Madrid",
    "cambio-banera-ducha": "Cambio de bañera por ducha en Madrid",
  }

  return (
    <section id="servicios" className="bg-[#f7f9fc] py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera superior centrada */}
        <div className="mx-auto max-w-3xl text-center mb-20 section-fade-up">
          <p className="text-sm font-bold tracking-[0.2em] text-[#6a7c8f] uppercase mb-4">
            Servicios
          </p>
          <h2 className="text-balance text-4xl font-extrabold tracking-tight text-[#1a2b3c] sm:text-5xl lg:text-6xl mb-6">
            Servicios de reformas en Madrid para viviendas, cocinas y baños
          </h2>
          <p className="text-lg leading-relaxed text-[#51677c]">
            Realizamos reformas pensadas para que tengas un único equipo al frente de la obra, un
            presupuesto claro y un resultado bien ejecutado.
          </p>
        </div>

        {/* Grid de 4 servicios destacados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 section-fade-up-delayed">
          {selectedServices.map((service) => {
            const serviceBadges = badgesMap[service.slug] || []

            return (
              <article
                key={service.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#eff3f7] shadow-xl hover:shadow-2xl transition-shadow duration-300 transform-gpu"
              >
                {/* Bloque de imagen con degradado */}
                <div className="relative h-[320px] md:h-[400px] w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.cardTitle}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  {/* Overlay en degradado azul oscuro */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#152332]/90 via-[#152332]/20 to-transparent pointer-events-none" />
                </div>

                {/* Panel blanco solapado hacia arriba */}
                <div className="relative z-10 mx-6 -mt-20 flex-1 flex flex-col md:mx-10 md:-mt-24 mb-6 md:mb-10 rounded-xl bg-white p-8 shadow-2xl transition-transform duration-300">
                  <h3 className="text-2xl font-bold tracking-tight text-[#1a2b3c] mb-3">
                    {displayTitleMap[service.slug] ?? service.cardTitle}
                  </h3>
                  <p className="text-[1.05rem] leading-relaxed text-[#51677c] mb-6">
                    {service.shortDescription}
                  </p>
                  
                  {/* Píldoras/Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {serviceBadges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded bg-[#f2f6ff] px-3 py-1 text-sm font-medium text-[#294a71]"
                      >
                        <Check className="mr-1.5 h-3.5 w-3.5 text-[#294a71]" />
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* CTA interno de tarjeta alineado abajo */}
                  <div className="mt-auto">
                    {service.slug === "reformas-cocinas" ? (
                      <Link
                        href={getSeoHrefForService(service.slug)}
                        className="inline-flex items-center text-base font-bold text-[#294a71] transition-colors hover:text-[#d85b1d] group/link"
                      >
                        Ver detalles del servicio
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          toast.info("No disponible en la Demo", {
                            description: "Para ver una referencia de cómo maquetamos un servicio completo, por favor entra en 'Reformas de cocinas'.",
                          });
                        }}
                        className="inline-flex items-center text-base font-bold text-[#294a71] transition-colors hover:text-[#d85b1d] group/link text-left"
                      >
                        Ver detalles del servicio
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover/link:translate-x-1" />
                      </button>
                    )}
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* CTA Inferior de Sección */}
        <div className="mx-auto mt-24 max-w-2xl text-center section-fade-up">
          <p className="text-lg font-medium text-[#51677c] mb-6">
            ¿Buscas otro tipo de trabajo dentro de tu reforma?
          </p>
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center rounded border-2 border-[#1a2b3c] bg-transparent px-8 py-3.5 text-base font-bold text-[#1a2b3c] transition-colors hover:bg-[#1a2b3c] hover:text-white"
          >
            Cuéntanos tu proyecto
          </Link>
        </div>

      </div>
    </section>
  )
}
