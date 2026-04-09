"use client"

import { useEffect, useRef, useState } from "react"
import { Check, ChevronDown, ClipboardList, Hammer, House } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Visita técnica y asesoramiento",
    description: "Escuchamos tu idea y revisamos el espacio antes de preparar el presupuesto.",
    icon: House,
  },
  {
    number: "02",
    title: "Presupuesto cerrado y detallado",
    description:
      "Recibes un presupuesto claro, sin partidas ambiguas ni extras inesperados durante la obra.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Coordinación completa de la obra",
    description:
      "Organizamos gremios, tiempos y materiales para que la reforma avance según lo previsto.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Revisión final contigo",
    description: "Comprobamos cada detalle contigo antes de dar la reforma por finalizada.",
    icon: Check,
  },
] as const

export function ProcessSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimated, setIsAnimated] = useState(false)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const updateActiveIndex = () => {
      if (window.innerWidth >= 768) return

      const center = slider.scrollLeft + slider.clientWidth / 2
      const items = Array.from(slider.children) as HTMLElement[]

      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      items.forEach((item, index) => {
        const itemCenter = item.offsetLeft + item.offsetWidth / 2
        const distance = Math.abs(itemCenter - center)

        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex(closestIndex)
    }

    updateActiveIndex()

    slider.addEventListener("scroll", updateActiveIndex, { passive: true })
    window.addEventListener("resize", updateActiveIndex)

    return () => {
      slider.removeEventListener("scroll", updateActiveIndex)
      window.removeEventListener("resize", updateActiveIndex)
    }
  }, [])

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => {
            setIsAnimated(true)
          }, 1200)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    )

    observer.observe(slider)

    return () => {
      observer.disconnect()
    }
  }, [])

  const scrollToStep = (index: number) => {
    const slider = sliderRef.current
    const item = slider?.children[index] as HTMLElement | undefined

    if (!slider || !item) return

    slider.scrollTo({
      left: item.offsetLeft - (slider.clientWidth - item.offsetWidth) / 2,
      behavior: "smooth",
    })
  }

  return (
    <section
      id="proceso"
      className="relative z-10 overflow-visible pt-14 pb-0 md:pt-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 bottom-44 sm:bottom-44 md:bottom-32 lg:bottom-36 bg-[#eef3f7] -z-10"
      />
      <div className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="section-fade-up mx-auto max-w-5xl text-center">
          <p className="section-kicker">CÓMO TRABAJAMOS</p>
          <h2 className="mx-auto mt-4 max-w-5xl text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            <span className="sm:hidden">Nuestro método para que tu reforma salga bien desde el inicio</span>
            <span className="hidden sm:inline">
              Nuestro método para que tu reforma tenga precio claro y plazos definidos desde el inicio
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            Sabes qué se hace, cuándo se hace y cuánto cuesta antes de empezar la obra.
          </p>
        </div>

        <div className="relative mt-10">

          <div
            ref={sliderRef}
            className="section-fade-up-delayed no-scrollbar relative z-20 mx-auto flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 pr-4 md:grid md:overflow-visible md:pb-0 md:pr-0 md:grid-cols-2 xl:max-w-[62rem] xl:grid-cols-4 xl:gap-5"
          >
            {steps.map((step, index) => {
              const Icon = step.icon

              return (
                <article
                  key={step.number}
                  className={`flex min-h-[22rem] w-[min(82vw,19rem)] max-w-[19rem] shrink-0 snap-center snap-always flex-col border border-[rgba(36,55,74,0.06)] bg-[#69819B] px-6 py-6 text-white shadow-[0_20px_42px_-30px_rgba(24,35,48,0.28)] transition-all hover:-translate-y-1 hover:bg-[#5E758E] hover:shadow-[0_24px_48px_-28px_rgba(24,35,48,0.3)] md:min-h-[248px] md:w-auto md:max-w-none md:shrink md:px-6 md:py-6 xl:min-h-[258px] xl:px-5 xl:py-5 ${
                    !isVisible
                      ? "opacity-0 -translate-y-6 duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] pointer-events-none"
                      : !isAnimated
                        ? "opacity-100 translate-y-0 duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                        : "duration-200"
                  }`}
                  style={{ transitionDelay: !isAnimated && isVisible ? `${index * 130}ms` : "0ms" }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="inline-flex items-center gap-3">
                      <span className="h-px w-6 bg-white/70 md:w-8" />
                      <span className="text-[0.98rem] font-semibold tracking-[0.08em] text-white md:text-[1.05rem]">
                        {step.number}
                      </span>
                    </div>
                    <span className="flex h-9 w-9 items-center justify-center text-white/95 md:h-10 md:w-10">
                      <Icon className="h-5.5 w-5.5 md:h-7 md:w-7" strokeWidth={1.85} />
                    </span>
                  </div>

                  <div className="mt-5 min-h-[4.1rem] md:mt-6 md:min-h-[4rem]">
                    <h3 className="max-w-[14ch] text-balance text-[1.18rem] font-semibold leading-[1.12] tracking-[-0.03em] text-white md:text-[1.38rem] xl:text-[1.36rem]">
                      {step.title}
                    </h3>
                  </div>

                  <div className="mt-4 min-h-[8.8rem] md:mt-4 md:min-h-[8.2rem] xl:min-h-[7.4rem]">
                    <p className="max-w-[22ch] text-[1rem] leading-7 text-white/88 md:max-w-[24ch] md:text-[0.97rem] md:leading-7 xl:max-w-[23ch]">
                      {step.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 md:hidden">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                aria-label={`Ir al paso ${index + 1}`}
                onClick={() => scrollToStep(index)}
                className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-7 bg-[#69819B]" : "w-2.5 bg-[#69819B]/28"
                  }`}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-center translate-y-6 md:hidden">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-white/95 text-primary/45 shadow-[0_16px_32px_-24px_rgba(24,35,48,0.28)] transition-transform hover:translate-y-1">
              <ChevronDown className="h-4 w-4" strokeWidth={1.8} />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
