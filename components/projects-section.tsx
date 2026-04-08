"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"

type ProjectView = "before" | "after"

const projects = [
  {
    id: 1,
    title: "Cocina en Chamberí",
    location: "Madrid Centro",
    beforeImage: "/images/kitchen-before.jpg",
    afterImage: "/images/kitchen-after.jpg",
  },
  {
    id: 2,
    title: "Baño en Salamanca",
    location: "Barrio de Salamanca",
    beforeImage: "/images/bathroom-before.jpg",
    afterImage: "/images/bathroom-after.jpg",
  },
  {
    id: 3,
    title: "El Born",
    location: "Barcelona",
    beforeImage: "/images/projects-custom/project-01-before.png",
    afterImage: "/images/projects-custom/project-01-after.png",
  },
  {
    id: 4,
    title: "La Malagueta",
    location: "Málaga",
    beforeImage: "/images/projects-custom/project-02-before.png",
    afterImage: "/images/projects-custom/project-02-after.png",
  },
  {
    id: 5,
    title: "Dalt Vila",
    location: "Ibiza",
    beforeImage: "/images/projects-custom/project-03-before.png",
    afterImage: "/images/projects-custom/project-03-after.png",
  },
  {
    id: 6,
    title: "Justicia",
    location: "Madrid",
    beforeImage: "/images/projects-custom/project-04-before.png",
    afterImage: "/images/projects-custom/project-04-after.png",
  },
  {
    id: 7,
    title: "Sierra de Gredos",
    location: "Casa de campo",
    beforeImage: "/images/projects-custom/project-05-before.png",
    afterImage: "/images/projects-custom/project-05-after.png",
  },
  {
    id: 8,
    title: "La Alpujarra",
    location: "Casa rural",
    beforeImage: "/images/projects-custom/project-06-before.png",
    afterImage: "/images/projects-custom/project-06-after.png",
  },
]

const AUTO_BLEND_DELAY = 4200

export function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoView, setAutoView] = useState<ProjectView>("after")
  const [manualView, setManualView] = useState<ProjectView | null>(null)

  useEffect(() => {
    if (manualView) return

    const intervalId = window.setInterval(() => {
      setAutoView((prev) => (prev === "after" ? "before" : "after"))
    }, AUTO_BLEND_DELAY)

    return () => window.clearInterval(intervalId)
  }, [manualView])

  const activeProject = projects[activeIndex]
  const currentView = manualView ?? autoView

  const goToPrevious = () => {
    setManualView(null)
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setManualView(null)
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const handleViewChange = (view: ProjectView) => {
    setManualView(view)
  }

  return (
    <section id="proyectos" className="scroll-mt-24 bg-[rgba(240,244,248,0.7)] py-14 md:scroll-mt-28 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Reformas que hablan por sí solas
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Compara el antes y el después de algunos trabajos realizados por nuestro equipo.
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-6xl px-6 sm:px-10 lg:px-14">
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Proyecto anterior"
            className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-foreground shadow-lg transition hover:bg-white/95 sm:left-2 sm:h-12 sm:w-12 lg:-left-2 lg:h-14 lg:w-14"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_60px_-40px_rgba(24,35,48,0.45)]">
            <div className="relative overflow-hidden rounded-[2rem]">
              <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-white/95 p-1 shadow-sm">
                <button
                  type="button"
                  onClick={() => handleViewChange("before")}
                  className={`rounded-full px-4 py-2 text-xs font-semibold ${
                    currentView === "before" ? "bg-white text-foreground" : "text-muted-foreground"
                  }`}
                >
                  Antes
                </button>
                <button
                  type="button"
                  onClick={() => handleViewChange("after")}
                  className={`rounded-full px-4 py-2 text-xs font-semibold ${
                    currentView === "after" ? "bg-[#345781] text-white" : "text-muted-foreground"
                  }`}
                >
                  Después
                </button>
              </div>

              <div className="absolute right-4 top-4 z-10 rounded-full bg-[rgba(55,52,47,0.75)] px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                {manualView ? "Vista manual" : "Vista automática"}
              </div>

              <div className="relative aspect-[16/11] sm:aspect-[16/10] lg:aspect-[16/9]">
                <Image
                  key={`${activeProject.id}-before`}
                  src={activeProject.beforeImage}
                  alt={`${activeProject.title} antes de la reforma`}
                  fill
                  className={`object-cover transition-opacity duration-[1600ms] ${
                    currentView === "before" ? "opacity-100" : "opacity-0"
                  }`}
                />
                <Image
                  key={`${activeProject.id}-after`}
                  src={activeProject.afterImage}
                  alt={`${activeProject.title} después de la reforma`}
                  fill
                  className={`object-cover transition-opacity duration-[1600ms] ${
                    currentView === "after" ? "opacity-100" : "opacity-0"
                  }`}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.58))]" />
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-4 p-5 sm:p-7">
                <div>
                  <h3 className="text-balance text-2xl font-semibold text-white sm:text-3xl">
                    {activeProject.title}
                  </h3>
                  <p className="mt-2 inline-flex items-center gap-2 text-base text-white/84">
                    <MapPin className="h-4 w-4" />
                    {activeProject.location}
                  </p>
                </div>

                <span className="rounded-full bg-[rgba(55,52,47,0.75)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  {currentView === "before" ? "Antes" : "Después"}
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Proyecto siguiente"
            className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-foreground shadow-lg transition hover:bg-white/95 sm:right-2 sm:h-12 sm:w-12 lg:-right-2 lg:h-14 lg:w-14"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
