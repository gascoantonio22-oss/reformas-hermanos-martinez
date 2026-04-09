"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, Star, Shield, Clock, Sparkles, TrendingUp, Wrench, Quote, MapPin } from "lucide-react"
import { toast } from "sonner"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { EmbeddedContactForm } from "@/components/embedded-contact-form"
import { JsonLd } from "@/components/json-ld"
import { getLandingByPath, type SeoLanding } from "@/lib/seo-content"
import {
  buildBreadcrumbSchema,
  buildFAQSchema,
  buildServiceSchema,
  buildWebPageSchema,
} from "@/lib/seo"
import { getServiceBySlug } from "@/lib/services"
import { siteConfig } from "@/lib/site"

type ServiceLandingPageProps = {
  landing: SeoLanding
}

const IconMap: Record<string, any> = {
  "sparkles": Sparkles,
  "trending-up": TrendingUp,
  "clock": Clock,
  "wrench": Wrench,
}

export function ServiceLandingPage({ landing }: ServiceLandingPageProps) {
  const service = getServiceBySlug(landing.serviceSlug)

  if (!service) {
    throw new Error(`Servicio no encontrado para ${landing.path}`)
  }

  // Precalcula imágenes de galería evitando servicios mezclados
  const displayGallery = (landing.galleryImages && landing.galleryImages.length > 0)
    ? landing.galleryImages
    : [service.image, service.image, service.image]

  return (
    <>
      <Header />
      <main id="main-content" className="bg-background">
        <JsonLd
          data={[
            buildWebPageSchema({
              name: landing.title,
              description: landing.metaDescription,
              path: landing.path,
            }),
            buildBreadcrumbSchema([
              { name: "Inicio", path: "/" },
              { name: landing.title, path: landing.path },
            ]),
            buildServiceSchema({
              name: landing.title,
              description: landing.metaDescription,
              path: landing.path,
              serviceType: service.pageTitle,
              offerLabel: service.price,
            }),
            // Se conserva schema FAQ para los motores de búsqueda aunque no sea visible
            buildFAQSchema(landing.faqs),
          ]}
        />

        {/* 1. Hero principal */}
        <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <div className="relative overflow-hidden w-full h-full">
              <Image
                src={service.image}
                alt={landing.title}
                fill
                priority
                className="w-full h-full object-cover opacity-80"
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />
          </div>
          <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-36 md:pt-40 pb-16 sm:pb-24">
            <div className="max-w-4xl mx-auto text-center section-fade-up">
              {landing.heroEyebrow ? (
                <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-md">
                  {landing.heroEyebrow}
                </div>
              ) : null}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight text-balance">
                {landing.heroTitle ?? landing.title}
              </h1>
              {landing.heroParagraphs?.length ? (
                <div className="mx-auto mb-10 max-w-3xl space-y-5 px-2 text-left sm:text-center">
                  {landing.heroParagraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-white/90 sm:text-lg sm:leading-8"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                <>
                  <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed font-light px-2 text-balance">
                    {landing.heroSubtitle}
                  </p>
                  
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 px-2">
                    {landing.heroBadges.map((badge, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                        {idx === 0 && <Star className="h-4 w-4 text-[#d85b1d] flex-shrink-0" />}
                        {idx === 1 && <Shield className="h-4 w-4 text-[#d85b1d] flex-shrink-0" />}
                        {idx === 2 && <Clock className="h-4 w-4 text-[#d85b1d] flex-shrink-0" />}
                        <span className="text-white text-sm font-medium whitespace-nowrap">{badge}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center h-14 rounded-md bg-[#d85b1d] hover:bg-[#c24e15] text-white font-bold text-lg px-8 shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto whitespace-nowrap"
                >
                  Pedir Presupuesto
                </Link>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="inline-flex items-center justify-center gap-2 h-14 rounded-md border-2 border-white text-white hover:bg-white hover:text-[#1a2b3c] font-bold text-lg px-8 bg-transparent w-full sm:w-auto transition-colors whitespace-nowrap"
                >
                  <Phone className="h-5 w-5" />
                  Llamar ahora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Ventajas */}
        {landing.serviceSlug !== "reformas-cocinas" && (
          <section className="py-16 sm:py-20 md:py-28 bg-[#f7f9fc]">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="text-center mb-12 sm:mb-16 section-fade-up">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a2b3c] mb-4">
                  ¿Por qué elegirnos?
                </h2>
                <p className="text-lg sm:text-xl text-[#51677c] max-w-2xl mx-auto">
                  No somos simples intermediarios. Controlamos cada fase de la obra para asegurar la calidad final.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto section-fade-up-delayed">
                {landing.advantages.map((adv, idx) => {
                  const Icon = IconMap[adv.iconName] || Star
                  return (
                    <div key={idx} className="rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden group">
                      <div className="p-8 text-center h-full flex flex-col items-center">
                        <div className="w-16 h-16 rounded-2xl bg-[#eff3f7] flex items-center justify-center mb-6 group-hover:bg-[#1a2b3c] transition-colors duration-300">
                          <Icon className="h-8 w-8 text-[#d85b1d] group-hover:scale-110 transition-transform" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1a2b3c] mb-3">{adv.title}</h3>
                        <p className="text-[1.05rem] text-[#51677c] leading-relaxed">
                          {adv.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* 3. Bloque Editorial */}
        {landing.serviceSlug === "reformas-cocinas" ? (
          <section className="py-16 sm:py-20 md:py-24 bg-background overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#1a2b3c 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center">
                <div className="lg:order-1 section-fade-up pl-0 lg:pl-4 xl:pl-8">
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#f2f6ff] border border-[#d3e0fc]">
                    <span className="text-[#1a2b3c] font-bold text-sm tracking-wide">{landing.editorial.badge}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-extrabold text-[#1a2b3c] mb-6 sm:mb-8 leading-[1.15] tracking-tight text-balance">
                    {landing.editorial.title}
                  </h2>
                  <div className="space-y-5 sm:space-y-6">
                    <p className="text-[1.1rem] sm:text-[1.15rem] leading-relaxed text-[#1a2b3c] font-medium">
                      {landing.editorial.p1}
                    </p>
                    <p className="text-base sm:text-[1.1rem] leading-relaxed text-[#51677c]">
                      {landing.editorial.p2}
                    </p>
                    <p className="text-base sm:text-[1.1rem] leading-relaxed text-[#51677c]">
                      {landing.editorial.p3}
                    </p>
                  </div>
                </div>
                <div className="lg:order-2 section-fade-up-delayed mt-8 lg:mt-0">
                  <div className="relative aspect-[4/3] w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
                    <Image
                      src={landing.editorialImage || service.image}
                      alt={landing.editorial.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-20 sm:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="lg:order-1 section-fade-up">
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#f2f6ff] border border-[#d3e0fc]">
                    <span className="text-[#1a2b3c] font-bold text-sm">{landing.editorial.badge}</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a2b3c] mb-8 leading-tight text-balance">
                    {landing.editorial.title}
                  </h2>
                  <div className="space-y-6">
                    <p className="text-[1.1rem] leading-relaxed text-[#1a2b3c] font-medium">
                      {landing.editorial.p1}
                    </p>
                    <p className="text-[1.1rem] leading-relaxed text-[#51677c]">
                      {landing.editorial.p2}
                    </p>
                    <p className="text-[1.1rem] leading-relaxed text-[#51677c]">
                      {landing.editorial.p3}
                    </p>
                  </div>
                </div>
                <div className="relative lg:order-2 section-fade-up-delayed">
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={landing.editorial.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#1a2b3c]/20 to-transparent" />
                  </div>
                  {/* Elementos flotantes decorativos */}
                  <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#f2f6ff] rounded-2xl -z-10 hidden sm:block" />
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#eff3f7] rounded-full -z-10 hidden sm:block" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 4. Banda CTA */}
        <section className="py-16 sm:py-20 bg-[#1a2b3c] text-white relative overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-5xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="section-fade-up">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3">
                  Da el paso y empieza a planificar tu nueva cocina
                </h2>
                <p className="text-white/80 text-lg">
                  Pide asesoramiento sin compromiso para tu reforma de cocina en Madrid.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto section-fade-up-delayed">
                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 h-14 rounded-md bg-[#d85b1d] hover:bg-[#c24e15] text-white font-bold px-8 shadow-xl transition-all w-full sm:w-auto whitespace-nowrap"
                >
                  Pedir Presupuesto <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="inline-flex items-center justify-center gap-2 h-14 rounded-md px-8 border-2 border-white text-white hover:bg-white hover:text-[#1a2b3c] font-bold transition-all w-full sm:w-auto whitespace-nowrap"
                >
                  <Phone className="h-5 w-5" />
                  Llamar ahora
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Galería de proyectos del mismo servicio */}
        {landing.serviceSlug === "reformas-cocinas" ? (
          <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="text-center mb-8 sm:mb-10 md:mb-12 section-fade-up">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a2b3c] mb-4 tracking-tight">
                  Proyectos recientes de reformas de cocina
                </h2>
                <p className="text-lg text-[#51677c] max-w-2xl mx-auto">
                  Una selección de trabajos reales donde puedes ver distribuciones, materiales y
                  acabados en cocinas reformadas en Madrid.
                </p>
              </div>
              
              <div className="section-fade-up-delayed max-w-6xl mx-auto">
                <div className="relative mb-4 sm:mb-6 md:mb-8 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl group w-full h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                  <Image
                    src={landing.galleryImages[0] || service.image}
                    alt="Proyecto principal de cocina reformificada en Madrid con mobiliario a medida"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="100vw"
                  />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                  {landing.galleryImages.slice(1, 7).map((imgSrc, idx) => (
                    <div key={idx} className="relative rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 group aspect-[4/3]">
                      <Image
                        src={imgSrc || service.image}
                        alt={`Muestra de detalle en proyecto de cocina, vista ${idx + 2}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(min-width: 768px) 33vw, 50vw"
                      />
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8 sm:mt-10 md:mt-12">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      toast.info("No disponible en la Demo", {
                        description: "Esta es una galería visual de demostración.",
                      });
                    }}
                    className="inline-flex items-center justify-center h-12 rounded-md border-2 border-[#1a2b3c] text-[#1a2b3c] hover:bg-[#1a2b3c] hover:text-white font-bold px-8 transition-colors text-base sm:text-lg"
                  >
                    Ver más trabajos
                  </button>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-20 sm:py-28 bg-[#f7f9fc]">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
              <div className="text-center mb-12 sm:mb-16 section-fade-up">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a2b3c] mb-4">
                  Proyectos recientes
                </h2>
                <p className="text-lg text-[#51677c] max-w-2xl mx-auto">
                  Acabados pulidos y adaptados a las exigencias de vivienda actuales, ejecutados por nuestro propio equipo.
                </p>
              </div>
              
              <div className="grid gap-4 sm:gap-6 lg:grid-cols-3 section-fade-up-delayed">
                <div className="lg:col-span-2 relative aspect-[16/9] lg:aspect-auto w-full rounded-2xl overflow-hidden group shadow-xl bg-slate-200">
                  <Image
                    src={displayGallery[0] || service.image}
                    alt={`Proyecto de ${landing.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(min-width: 1024px) 66vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b3c]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="grid gap-4 sm:gap-6 grid-rows-2">
                  {displayGallery.slice(1, 3).map((imgSrc, idx) => (
                     <div key={idx} className="relative aspect-[16/9] lg:aspect-auto w-full rounded-2xl overflow-hidden group shadow-lg bg-slate-200">
                      <Image
                        src={imgSrc || service.image}
                        alt={`Detalle de ${landing.title}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(min-width: 1024px) 33vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-[#1a2b3c]/0 group-hover:bg-[#1a2b3c]/10 transition-colors duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 6. Proceso - Timeline Vertical */}
        {landing.serviceSlug === "reformas-cocinas" ? (
          <section className="py-16 sm:py-20 md:py-24 bg-[#1a2b3c] text-white relative overflow-hidden">
            <div 
              className="absolute inset-0 opacity-5" 
              style={{ 
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0v40M0 20h40' stroke='%23ffffff' stroke-width='1.5' stroke-opacity='1' fill='none'/%3E%3C/svg%3E\")" 
              }} 
            />
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="text-center mb-10 sm:mb-12 md:mb-16 section-fade-up">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                  Cómo trabajamos una reforma de cocina
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Seguimos un proceso claro para que la obra avance con orden, tiempos definidos y
                  decisiones bien resueltas desde el principio.
                </p>
              </div>

              <div className="relative max-w-4xl mx-auto section-fade-up-delayed mt-10 sm:mt-16">
                <div className="flex flex-col gap-10 sm:gap-12">
                  {landing.process.map((step, idx) => (
                    <div key={idx} className="relative bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-8 sm:p-10 pt-12 sm:pt-14 border border-white/10 text-center shadow-2xl transition-all hover:bg-white/10">
                      {/* Círculo superior centralizado */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#ffb800] text-[#1a2b3c] shadow-[0_0_20px_rgba(255,184,0,0.3)] z-10 border-[4px] border-[#1a2b3c]">
                        <span className="text-lg sm:text-xl font-extrabold">{idx + 1}</span>
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">
                        {step.title}
                      </h3>
                      <p className="text-white/75 leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="py-20 sm:py-28 bg-[#1a2b3c] text-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
              <div className="text-center mb-16 sm:mb-24 section-fade-up">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                  Cómo trabajamos
                </h2>
                <p className="text-lg text-white/80 max-w-2xl mx-auto">
                  Un flujo de actuación ordenado y transparente desde el primer día de contacto hasta la entrega definitiva.
                </p>
              </div>

              <div className="relative mx-auto section-fade-up-delayed">
                <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 md:-translate-x-1/2 rounded-full" />
                
                <div className="space-y-12 md:space-y-16">
                  {landing.process.map((step, idx) => {
                    const isEven = idx % 2 === 0
                    return (
                      <div key={idx} className="relative flex items-center md:justify-between w-full">
                        <div className="hidden md:flex w-5/12 justify-end text-right pr-6">
                          {isEven && (
                            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm w-full">
                              <span className="text-[#d85b1d] font-bold text-sm tracking-wider uppercase mb-2 block">{step.timeframe}</span>
                              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                              <p className="text-white/70 leading-relaxed">{step.description}</p>
                            </div>
                          )}
                        </div>

                        <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-[#d85b1d] border-4 border-[#1a2b3c] text-white font-bold shadow-xl z-10 text-lg">
                          {idx + 1}
                        </div>

                        <div className="flex md:w-5/12 ml-16 md:ml-0 pl-0 md:pl-6 text-left w-full">
                          {(!isEven || true) && (
                            <div className={`bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm w-full ${isEven ? 'md:hidden' : 'block'}`}>
                              <span className="text-[#d85b1d] font-bold text-sm tracking-wider uppercase mb-2 block">{step.timeframe}</span>
                              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                              <p className="text-white/70 leading-relaxed">{step.description}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 7. Testimonios */}
        {landing.serviceSlug === "reformas-cocinas" ? (
          <section className="py-16 sm:py-20 md:py-24 bg-[#f2f6ff]">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="text-center mb-10 sm:mb-12 md:mb-16 section-fade-up">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a2b3c] mb-3 sm:mb-4">
                  Opiniones de clientes que reformaron su cocina con nosotros
                </h2>
                <p className="text-base sm:text-lg text-[#51677c] max-w-2xl mx-auto px-2">
                  Estas son algunas experiencias de clientes que confiaron en nuestro equipo para
                  reformar su cocina en Madrid.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto section-fade-up-delayed">
                {landing.testimonials.map((testimonio, idx) => (
                  <div key={idx} className="rounded-lg text-[#1a2b3c] shadow-sm group hover:shadow-2xl transition-all duration-500 border-0 bg-white overflow-hidden relative">
                    {/* Banda superior */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#d85b1d] to-[#d85b1d]/50" />
                    
                    <div className="p-5 sm:p-6 md:p-8 flex flex-col h-full">
                      {/* Icono de comillas */}
                      <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-[#d85b1d]/20 mb-3 sm:mb-4" />
                      
                      {/* Estrellas */}
                      <div className="mb-3 sm:mb-4 flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 fill-[#d85b1d] text-[#d85b1d]" />
                        ))}
                      </div>

                      {/* Texto de reseña */}
                      <p className="text-[#1a2b3c] mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        {testimonio.quote}
                      </p>

                      {/* Pie de tarjeta */}
                      <div className="border-t border-slate-100 pt-4 sm:pt-6 mt-auto">
                        <div className="flex items-center gap-3 sm:gap-4 mb-2 sm:mb-3">
                          {/* Avatar */}
                          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#d85b1d] to-[#d85b1d]/60 flex items-center justify-center shadow-lg flex-shrink-0">
                            <span className="text-sm sm:text-lg font-bold text-white">
                              {testimonio.initial}
                            </span>
                          </div>
                          {/* Datos autor */}
                          <div className="overflow-hidden">
                            <h4 className="font-bold text-[#1a2b3c] text-sm sm:text-base truncate">
                              {testimonio.author}
                            </h4>
                            <p className="text-xs sm:text-sm text-[#51677c] truncate">
                              {testimonio.location}
                            </p>
                          </div>
                        </div>

                        {/* Bloque inferior */}
                        <div className="text-xs sm:text-sm">
                          {testimonio.role && (
                            <p className="font-semibold text-[#d85b1d] truncate">
                              {testimonio.role}
                            </p>
                          )}
                          {testimonio.date && (
                            <p className="text-[#51677c]">
                              {testimonio.date}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="py-20 sm:py-28 bg-[#f2f6ff]">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
              <div className="text-center mb-16 section-fade-up">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a2b3c]">
                  Clientes satisfechos
                </h2>
              </div>
              {/* Si solo hay 2 testimonios usa 2 columnas, si hay 3 usa 3 */}
              <div className={`grid gap-8 section-fade-up-delayed ${landing.testimonials.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:max-w-4xl lg:mx-auto'}`}>
                {landing.testimonials.map((testimonio, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col justify-between">
                    <div>
                      <div className="flex text-[#d85b1d] mb-6">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      <p className="text-[1.05rem] text-[#1a2b3c] font-medium italic leading-relaxed mb-8">
                        "{testimonio.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4 border-t border-slate-100 pt-6 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-[#1a2b3c] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                        {testimonio.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1a2b3c] text-lg leading-tight">{testimonio.author}</h4>
                        <p className="text-sm text-[#51677c] font-medium flex items-center mt-0.5">
                          <MapPin className="h-3.5 w-3.5 mr-1 text-[#d85b1d]" /> {testimonio.location}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}


        {/* 9. Gran Contacto / CTA Final */}
        <section className="py-24 bg-[#1a2b3c] relative overflow-hidden text-white" id="contacto">
          <div className="absolute inset-0 opacity-10 background-pattern" />
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-2 section-fade-up">
                <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight text-balance">
                  Cuéntanos tu proyecto de cocina
                </h2>
                <div className="h-1.5 w-16 bg-[#d85b1d] mb-8" />
                <p className="text-lg text-white/80 mb-10 leading-relaxed text-balance">
                  Explícanos qué necesitas y prepararemos una propuesta clara para tu reforma de
                  cocina en Madrid, con enfoque práctico, presupuesto definido y una obra bien
                  organizada.
                </p>
                <div className="p-8 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <h4 className="font-bold text-xl mb-3">Atención directa</h4>
                  <p className="text-white/70 mb-6">
                    Si prefieres hablar con nosotros antes de rellenar el formulario, llámanos y
                    resolvemos tus dudas.
                  </p>
                  <a
                    href={`tel:${siteConfig.phoneHref}`}
                    className="inline-flex items-center justify-center w-full bg-white text-[#1a2b3c] font-bold text-lg h-14 rounded-md transition-colors hover:bg-slate-100 whitespace-nowrap"
                  >
                    <Phone className="mr-3 h-5 w-5 text-[#d85b1d]" />
                    Llamar al {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>
              
              <div className="lg:col-span-3 section-fade-up-delayed">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden text-slate-900 border border-slate-100">
                  <EmbeddedContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
