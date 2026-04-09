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
    <section id="servicios" className="bg-[#f7f9fc] pt-20 pb-16 md:pt-32 md:pb-20">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 section-fade-up-delayed">
          {selectedServices.map((service) => {
            const serviceBadges = (badgesMap[service.slug] || []).slice(0, 2)

            return (
              <article
                key={service.slug}
                className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[#1a2b3c]/5 transition-shadow duration-300 transform-gpu"
              >
                {/* Bloque de imagen unificado */}
                <div className="relative h-[240px] md:h-[280px] w-full overflow-hidden bg-[#eff3f7]">
                  <Image
                    src={service.image}
                    alt={service.cardTitle}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  {/* Overlay extremadamente sutil para enaltecer la foto */}
                  <div className="absolute inset-0 bg-black/5 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0" />
                </div>

                {/* Contenido continuo */}
                <div className="flex-1 flex flex-col p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1a2b3c] mb-3">
                    {displayTitleMap[service.slug] ?? service.cardTitle}
                  </h3>
                  <p className="text-[15px] sm:text-[1.05rem] leading-relaxed text-[#51677c] mb-6">
                    {service.shortDescription}
                  </p>
                  
                  {/* Píldoras/Badges limitadas a 2 */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {serviceBadges.map((badge, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-md bg-[#f4f7fb] px-3 py-1.5 text-[13px] font-medium text-[#4f6a89]"
                      >
                        <Check className="mr-1.5 h-3.5 w-3.5 text-[#4f6a89]" />
                        {badge}
                      </span>
                    ))}
                  </div>

                  {/* CTA interno de tarjeta alineado abajo */}
                  <div className="mt-auto pt-4 border-t border-[#1a2b3c]/5">
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

        {/* CTA Inferior de Sección (Footer Auxiliar) */}
        <div className="mx-auto mt-16 md:mt-20 max-w-3xl border-t border-[#1a2b3c]/10 pt-10 md:pt-12 text-center section-fade-up">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <p className="text-[15px] sm:text-base font-medium text-[#51677c]">
              ¿Buscas otro tipo de trabajo dentro de tu reforma?
            </p>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center rounded-md border border-[#c5d2de] bg-transparent px-5 py-2.5 text-[14px] font-semibold text-[#4f6a89] transition-colors hover:border-[#1a2b3c] hover:text-[#1a2b3c] focus:ring-0 whitespace-nowrap"
            >
              Contactar al equipo
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
