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
        {/* Nuevo gradient sutil: Oscuro abajo, suave y revelador hacia el centro/arriba */}
        <div className="absolute inset-0 bg-[#1a2b3c]/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a2b3c] via-[#1a2b3c]/40 to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[60vh] md:min-h-[70vh] max-w-7xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-4xl text-center transition-[opacity,transform] duration-700 ease-out ${
            isContentVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <h1 className="text-balance text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl md:text-6xl tracking-tight drop-shadow-sm">
            Reformas integrales en Madrid con presupuesto cerrado y fecha garantizada
          </h1>

          <p className="mx-auto mt-5 max-w-[38rem] text-[1.1rem] leading-relaxed text-white/90 sm:text-xl md:mt-6 drop-shadow-sm font-light">
            Empresa familiar con 25 años reformando cocinas, baños y viviendas completas. Nos ocupamos de todo para que vivas la obra sin estrés.
          </p>

          <div
            className={`mt-8 md:mt-10 flex flex-col justify-center gap-4 sm:flex-row transition-[opacity,transform] duration-700 delay-100 ease-out ${
              isContentVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <Button
              asChild
              className="h-14 rounded-md bg-[#d85b1d] px-8 text-base font-bold text-white shadow-[0_0_20px_rgba(216,91,29,0.15)] hover:bg-[#c24e15] hover:shadow-[0_0_25px_rgba(216,91,29,0.3)] hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto focus:ring-0"
            >
              <Link href="/#contacto">Pedir presupuesto gratis</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-14 rounded-md border border-white/30 bg-transparent px-8 text-base font-bold text-white hover:bg-white hover:text-[#1a2b3c] transition-all duration-300 w-full sm:w-auto"
            >
              <Link href="/#proyectos">Ver reformas</Link>
            </Button>
          </div>

          {/* Fila de Confianza Inline (Trust Row) */}
          <div 
            className={`mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-sm font-medium text-white/80 transition-[opacity,transform] duration-700 delay-200 ease-out ${
              isContentVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <Star className="h-4 w-4 text-[#d85b1d]" />
              <span>25 años en Madrid</span>
            </div>
            <span className="hidden sm:inline opacity-30 px-1">•</span>
            <div className="flex items-center gap-1.5">
              <Shield className="h-4 w-4 text-[#d85b1d]" />
              <span>Presupuesto cerrado</span>
            </div>
            <span className="hidden sm:inline opacity-30 px-1">•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#d85b1d]" />
              <span>Fecha garantizada</span>
            </div>
            <span className="hidden md:inline opacity-30 px-1">•</span>
            <div className="hidden md:flex items-center gap-1.5">
              <CheckCircle className="h-4 w-4 text-[#d85b1d]" />
              <span>+1500 reformas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
