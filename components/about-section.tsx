"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const stats = [
  {
    target: 25,
    label: "Años de experiencia",
    format: (value: number) => `${value}`,
  },
  {
    target: 1500,
    label: "Reformas realizadas",
    format: (value: number) => `${new Intl.NumberFormat("es-ES").format(value)}+`,
  },
  {
    target: 2,
    label: "Garantía",
    format: (value: number) => `${value} años`,
  },
] as const

const ANIMATION_DURATION_MS = 1600

function easeOutCubic(progress: number) {
  return 1 - (1 - progress) ** 3
}

export function AboutSection() {
  const [counts, setCounts] = useState(() => stats.map(() => 0))
  const sectionRef = useRef<HTMLElement | null>(null)
  const hasAnimatedRef = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let frameId = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasAnimatedRef.current) return

        hasAnimatedRef.current = true
        const startTime = performance.now()

        const animate = (currentTime: number) => {
          const progress = Math.min((currentTime - startTime) / ANIMATION_DURATION_MS, 1)
          const easedProgress = easeOutCubic(progress)

          setCounts(stats.map((stat) => Math.round(stat.target * easedProgress)))

          if (progress < 1) {
            frameId = requestAnimationFrame(animate)
          }
        }

        frameId = requestAnimationFrame(animate)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(section)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="relative z-0 bg-white -mt-44 sm:-mt-44 md:-mt-32 lg:-mt-36 pt-64 sm:pt-64 md:pt-52 lg:pt-60 pb-20 md:pb-20 lg:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-fade-up grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-12">
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm">
            <Image
              src="/images/team.jpg"
              alt="Equipo de Hermanos Martínez"
              width={1200}
              height={900}
              className="w-full object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-balance text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Profesionales de verdad, trato cercano
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground lg:mx-0">
              Somos una empresa familiar, no una cadena. Desde 1999 trabajamos cada reforma con
              responsabilidad, cercanía y atención al detalle. Más de 1.500 viviendas ya han
              confiado en nuestro equipo.
            </p>

            <div className="mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-4 text-center lg:mx-0">
              {stats.map((stat, index) => (
                <div key={stat.label}>
                  <p className="whitespace-nowrap text-4xl font-bold leading-none tracking-[-0.04em] text-primary sm:text-5xl">
                    {stat.format(counts[index] ?? 0)}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
