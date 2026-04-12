"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Clock, Shield, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroImage from "@/public/images/hero-renovation.jpg"

export function HeroSection() {
  const [isImageReady, setIsImageReady] = useState(false)
  const [isContentVisible, setIsContentVisible] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsContentVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#1a2b3c]">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Salón reformado moderno en Madrid"
          fill
          priority
          placeholder="blur"
          onLoad={() => setIsImageReady(true)}
          className={`object-cover transition-[opacity,transform] duration-1000 ease-out ${
            isImageReady ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 block sm:hidden bg-gradient-to-r from-[#1a2b3c]/90 via-[#1a2b3c]/60 to-transparent" />
        <div className="absolute inset-0 bg-[#1a2b3c]/30 sm:bg-[#1a2b3c]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b3c]/90 via-[#1a2b3c]/40 to-transparent sm:from-[#1a2b3c]" />
      </div>

      <div className="relative mx-auto flex min-h-[60vh] md:min-h-[70vh] lg:min-h-[85vh] xl:min-h-[88vh] max-w-7xl items-center px-4 pt-20 pb-12 sm:py-20 lg:py-24 lg:px-8">
        <div
          className={`mx-0 sm:mx-auto max-w-4xl text-left sm:text-center transition-[opacity,transform] duration-700 ease-out ${
            isContentVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[#d85b1d] font-bold text-[11px] uppercase tracking-wider mb-3 sm:mb-5 sm:text-white/90 sm:backdrop-blur-md">
            Construyendo Hogares Desde 1999
          </span>
          <h1 className="text-balance text-[28px] leading-[1.1] font-extrabold text-white sm:text-5xl md:text-6xl tracking-tight drop-shadow-sm">
            Tu reforma bien hecha, con precio claro y plazos que se cumplen
          </h1>

          <p className="mx-0 sm:mx-auto mt-4 sm:mt-5 max-w-[44rem] text-[15px] sm:text-[1.08rem] leading-relaxed text-white/90 md:mt-6 lg:mt-8 drop-shadow-sm font-light">
            Somos una empresa familiar de reformas integrales en Madrid con más de 25 años de
            experiencia. Planificamos y ejecutamos cada proyecto (cocinas, baños o vivienda
            completa) con un equipo propio que se encarga de todo, ofreciendo presupuestos
            transparentes desde el primer día y plazos por escrito para vivir tu reforma con total
            tranquilidad.
          </p>

          <div
            className={`mt-8 md:mt-10 lg:mt-12 flex flex-col justify-center sm:grid sm:auto-cols-auto sm:grid-flow-col gap-2 sm:gap-4 transition-[opacity,transform] duration-700 delay-100 ease-out ${
              isContentVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Button
              asChild
              className="h-14 rounded-md bg-[#d85b1d] px-8 text-base font-bold text-white shadow-[0_0_20px_rgba(216,91,29,0.15)] hover:bg-[#c24e15] hover:shadow-[0_0_25px_rgba(216,91,29,0.3)] hover:-translate-y-0.5 transition-all duration-300 w-full focus:ring-0"
            >
              <Link href="/#contacto">Pedir presupuesto gratis</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-auto py-1 px-0 border-transparent bg-transparent underline underline-offset-4 rounded-md sm:py-0 sm:h-14 sm:border sm:border-white/30 sm:no-underline sm:px-8 text-[15px] sm:text-base font-medium sm:font-bold text-white/70 sm:text-white hover:text-white hover:bg-transparent sm:hover:bg-white sm:hover:text-[#1a2b3c] transition-all duration-300 w-full"
            >
              <Link href="/#proyectos">Ver reformas</Link>
            </Button>
          </div>

          {/* Fila de Confianza Inline (Trust Row) */}
          <div 
            className={`mt-5 sm:mt-10 lg:mt-14 flex flex-wrap items-center sm:justify-center gap-x-3 sm:gap-x-4 gap-y-2 sm:gap-y-3 text-[13px] sm:text-sm font-medium text-white/80 transition-[opacity,transform] duration-700 delay-200 ease-out ${
              isContentVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-[#d85b1d]" />
              <span>Precio claro desde el inicio</span>
            </div>
            <span className="opacity-30 sm:px-1">•</span>
            <div className="flex items-center gap-1.5">
               <Shield className="h-4 w-4 text-[#d85b1d]" />
              <span>Plazos acordados</span>
            </div>
            <span className="hidden sm:inline opacity-30 px-1">•</span>
            <div className="hidden sm:flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#d85b1d]" />
              <span>Garantía mínima de 2 años</span>
            </div>
            <span className="hidden md:inline opacity-30 px-1">•</span>
            <div className="hidden md:flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-[#d85b1d]" />
              <span>Equipo propio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
