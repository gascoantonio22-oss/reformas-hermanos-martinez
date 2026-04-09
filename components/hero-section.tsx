"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Clock, HardHat, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import heroImage from "@/public/images/hero-renovation.jpg"

const trustItems = [
  {
    icon: CheckCircle,
    text: "Presupuesto claro desde el principio",
    mobileText: "Presupuesto claro",
  },
  {
    icon: Clock,
    text: "Plazos por escrito",
    mobileText: "Plazos por escrito",
  },
  {
    icon: Shield,
    text: "2 años de garantía",
    mobileText: "2 años de garantía",
  },
  {
    icon: HardHat,
    text: "Equipo propio (sin subcontratas)",
    mobileText: "Personal propio",
  },
]

export function HeroSection() {
  const [isImageReady, setIsImageReady] = useState(false)
  const [isContentVisible, setIsContentVisible] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsContentVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[rgba(41,74,113,0.72)]" />
        <Image
          src={heroImage}
          alt="Salón reformado moderno"
          fill
          priority
          placeholder="blur"
          onLoad={() => setIsImageReady(true)}
          className={`object-cover transition-[opacity,transform] duration-700 ease-out ${
            isImageReady ? "scale-100 opacity-[0.28]" : "scale-[1.02] opacity-0"
          }`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_48%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[64svh] max-w-7xl items-center px-4 py-14 sm:px-6 md:min-h-[78svh] md:py-32 lg:px-8 lg:py-36">
        <div
          className={`mx-auto max-w-4xl text-center transition-[opacity,transform] duration-700 ease-out ${
            isContentVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
        >
          <h1 className="mt-4 text-balance text-3xl font-bold leading-tight text-primary-foreground sm:mt-6 sm:text-5xl md:text-6xl">
            Reformas integrales en Madrid con presupuesto cerrado y fecha garantizada
          </h1>

          <p className="mx-auto mt-4 max-w-[34rem] text-base leading-relaxed text-primary-foreground/90 sm:mt-6 sm:text-xl">
            Empresa familiar con 25 años reformando cocinas, baños y viviendas completas. Nos
            ocupamos de todo para que vivas la obra sin estrés.
          </p>

          <div
            className={`mt-7 flex flex-col justify-center gap-3 transition-[opacity,transform] duration-700 delay-100 ease-out sm:mt-10 sm:flex-row ${
              isContentVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <Button
              asChild
              className="h-11 rounded-md bg-accent px-6 text-sm font-semibold text-accent-foreground hover:bg-accent/90 sm:h-12 sm:px-7 sm:text-base"
            >
              <Link href="/#contacto">Pedir presupuesto gratis</Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="h-11 rounded-md border-primary-foreground/30 bg-transparent px-6 text-sm text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:h-12 sm:px-7 sm:text-base"
            >
              <Link href="/#proyectos">Ver reformas</Link>
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`relative border-y border-border bg-card transition-[opacity,transform] duration-700 delay-150 ease-out ${
          isContentVisible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 md:py-4 lg:px-8">
          <div className="grid grid-cols-4 gap-2 md:flex md:flex-wrap md:items-center md:justify-between md:gap-y-4">
            {trustItems.map((item) => (
              <div
                key={item.text}
                className="flex min-w-0 flex-col items-center justify-start gap-1.5 px-1 text-center md:w-auto md:flex-row md:items-center md:justify-center md:gap-2 md:px-0"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/10 text-accent md:h-auto md:w-auto md:rounded-none md:bg-transparent">
                  <item.icon className="h-3.5 w-3.5 flex-shrink-0 md:h-5 md:w-5" />
                </div>
                <span className="hidden text-sm font-medium text-foreground md:inline">{item.text}</span>
                <span className="text-balance text-[10px] font-medium leading-[1.2] text-foreground md:hidden">
                  {item.mobileText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
