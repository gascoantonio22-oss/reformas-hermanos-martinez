"use client"

import { useEffect, useMemo, useState } from "react"
import { BadgeCheck, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "María García",
    location: "Madrid",
    yearsAgo: "hace 2 años",
    avatar: "M",
    avatarClassName: "bg-[#1a73e8]",
    text: "Nos reformaron la cocina y desde el principio supimos qué se iba a hacer y cuánto iba a costar. El resultado quedó impecable y el trato fue muy cercano.",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    location: "Málaga",
    yearsAgo: "hace 3 años",
    avatar: "C",
    avatarClassName: "bg-[#0f766e]",
    text: "El cambio del baño fue rápido, limpio y muy bien organizado. Da gusto trabajar con un equipo serio dentro de casa y que vaya cumpliendo lo hablado.",
  },
  {
    id: 3,
    name: "Ana Martín",
    location: "Ibiza",
    yearsAgo: "hace 1 año",
    avatar: "A",
    avatarClassName: "bg-[#7c2d12]",
    text: "En la reforma integral cumplieron todo lo acordado. La comunicación fue clara en todo momento y el resultado final mereció mucho la pena.",
  },
  {
    id: 4,
    name: "Pedro Ortega",
    location: "Barcelona",
    yearsAgo: "hace 2 años",
    avatar: "P",
    avatarClassName: "bg-[#14532d]",
    text: "Muy buenos profesionales. Nos ayudaron a ordenar toda la obra y fueron resolviendo dudas con rapidez. Se nota cuando hay experiencia detrás.",
  },
  {
    id: 5,
    name: "Soraya García",
    location: "Valencia",
    yearsAgo: "hace 4 años",
    avatar: "S",
    avatarClassName: "bg-[#3f6212]",
    text: "Reforma de baño completa muy bien ejecutada. Los acabados quedaron muy finos y el proceso fue más tranquilo de lo que esperábamos.",
  },
] as const

function GoogleMark() {
  return (
    <div aria-hidden="true" className="text-lg font-bold tracking-[-0.06em]">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#DB4437]">o</span>
      <span className="text-[#F4B400]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#0F9D58]">l</span>
      <span className="text-[#DB4437]">e</span>
    </div>
  )
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(3)

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1)
      } else if (window.innerWidth < 1280) {
        setCardsPerView(2)
      } else {
        setCardsPerView(3)
      }
    }

    updateCardsPerView()
    window.addEventListener("resize", updateCardsPerView)
    return () => window.removeEventListener("resize", updateCardsPerView)
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  const visibleTestimonials = useMemo(
    () =>
      Array.from({ length: cardsPerView }, (_, offset) => {
        return testimonials[(activeIndex + offset) % testimonials.length]
      }),
    [activeIndex, cardsPerView],
  )

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="bg-primary py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <div className="mb-7 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary-foreground/65 sm:text-sm">
                Testimonios
              </p>
              <h2 className="mt-2 text-balance text-[2rem] font-bold leading-[1.08] text-primary-foreground md:mt-3 md:text-4xl">
                Opiniones de clientes que ya han reformado con nosotros
              </h2>
              <p className="mt-2 text-sm leading-6 text-primary-foreground/80 md:mt-3 md:text-base md:leading-7">
                La mejor carta de presentación es un cliente satisfecho y una obra bien terminada.
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-white/12 bg-white/8 px-3 py-2 text-primary-foreground shadow-[0_18px_40px_-28px_rgba(0,0,0,0.34)] backdrop-blur-sm md:gap-3 md:px-4 md:py-2.5">
              <div aria-hidden="true" className="text-lg font-bold tracking-[-0.06em]">
                <GoogleMark />
              </div>
              <div className="flex items-center gap-1 text-[#f4b400]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-3.5 w-3.5 fill-current md:h-4 md:w-4" />
                ))}
              </div>
              <span className="text-xs font-semibold md:text-sm">5,0 en Google</span>
            </div>
          </div>

          <div className="relative mx-auto px-2 sm:px-5 md:px-8">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {visibleTestimonials.map((testimonial) => (
                <article
                  key={`${testimonial.id}-${activeIndex}`}
                  className="flex h-full flex-col rounded-[1.35rem] border border-white/12 bg-white p-4 text-foreground shadow-[0_18px_36px_-28px_rgba(10,18,28,0.42)] sm:rounded-[1.6rem] sm:p-5 sm:shadow-[0_22px_44px_-28px_rgba(10,18,28,0.45)]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-full text-base font-semibold text-white sm:h-11 sm:w-11 sm:text-lg ${testimonial.avatarClassName}`}
                      >
                        {testimonial.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground sm:text-base">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground sm:text-sm">{testimonial.yearsAgo}</p>
                      </div>
                    </div>
                    <GoogleMark />
                  </div>

                  <div className="mt-3 flex items-center gap-1 text-[#f4b400] sm:mt-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-3.5 w-3.5 fill-current sm:h-4 sm:w-4" />
                    ))}
                    <BadgeCheck className="ml-1 h-3.5 w-3.5 text-[#4285F4] sm:h-4 sm:w-4" />
                  </div>

                  <p className="mt-3 line-clamp-4 text-sm leading-6 text-foreground/90 sm:mt-4 sm:line-clamp-5 sm:text-[15px] sm:leading-7">
                    {testimonial.text}
                  </p>

                  <div className="mt-auto pt-4 sm:pt-5">
                    <p className="text-xs font-medium text-muted-foreground sm:text-sm">Google Reviews</p>
                    <p className="text-xs text-muted-foreground sm:text-sm">{testimonial.location}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 sm:flex">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Ver testimonios anteriores"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-accent text-accent-foreground shadow-[0_18px_35px_-20px_rgba(0,0,0,0.45)] transition hover:scale-[1.03] hover:bg-accent/92"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>

            <div className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 sm:flex">
              <button
                type="button"
                onClick={goToNext}
                aria-label="Ver testimonios siguientes"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-accent text-accent-foreground shadow-[0_18px_35px_-20px_rgba(0,0,0,0.45)] transition hover:scale-[1.03] hover:bg-accent/92"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2.5 sm:hidden">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Ver testimonios anteriores"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-accent text-accent-foreground shadow-[0_18px_35px_-20px_rgba(0,0,0,0.45)] transition hover:bg-accent/92"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
            </button>
            <div className="flex items-center justify-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={`mobile-${testimonial.id}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ir al testimonio ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-6 bg-accent" : "w-2 bg-white/25 hover:bg-white/45"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Ver testimonios siguientes"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-accent text-accent-foreground shadow-[0_18px_35px_-20px_rgba(0,0,0,0.45)] transition hover:bg-accent/92"
            >
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="mt-6 hidden items-center justify-center gap-2 sm:flex">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? "w-7 bg-accent" : "w-2.5 bg-white/25 hover:bg-white/45"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
