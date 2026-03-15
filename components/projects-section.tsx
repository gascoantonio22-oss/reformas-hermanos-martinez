"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Array of 20 project images - update paths as needed
const projects = [
  { id: 1, title: "Cocina en Chamberí", location: "Madrid Centro", beforeImage: "/images/kitchen-before.jpg", afterImage: "/images/kitchen-after.jpg" },
  { id: 2, title: "Baño en Salamanca", location: "Barrio de Salamanca", beforeImage: "/images/bathroom-before.jpg", afterImage: "/images/bathroom-after.jpg" },
  { id: 3, title: "Reforma integral en Retiro", location: "Retiro", beforeImage: "/images/kitchen-before.jpg", afterImage: "/images/kitchen-after.jpg" },
  { id: 4, title: "Baño en Moncloa", location: "Moncloa-Aravaca", beforeImage: "/images/bathroom-before.jpg", afterImage: "/images/bathroom-after.jpg" },
  { id: 5, title: "Cocina en Argüelles", location: "Argüelles", beforeImage: "/images/kitchen-before.jpg", afterImage: "/images/kitchen-after.jpg" },
  { id: 6, title: "Baño en Chamartín", location: "Chamartín", beforeImage: "/images/bathroom-before.jpg", afterImage: "/images/bathroom-after.jpg" },
  { id: 7, title: "Cocina en Tetuán", location: "Tetuán", beforeImage: "/images/kitchen-before.jpg", afterImage: "/images/kitchen-after.jpg" },
  { id: 8, title: "Baño en Latina", location: "La Latina", beforeImage: "/images/bathroom-before.jpg", afterImage: "/images/bathroom-after.jpg" },
  { id: 9, title: "Reforma integral en Malasaña", location: "Malasaña", beforeImage: "/images/kitchen-before.jpg", afterImage: "/images/kitchen-after.jpg" },
  { id: 10, title: "Baño en Lavapiés", location: "Lavapiés", beforeImage: "/images/bathroom-before.jpg", afterImage: "/images/bathroom-after.jpg" },
  { id: 11, title: "Cocina en Vallecas", location: "Vallecas", beforeImage: "/images/kitchen-before.jpg", afterImage: "/images/kitchen-after.jpg" },
  { id: 12, title: "Baño en Carabanchel", location: "Carabanchel", beforeImage: "/images/bathroom-before.jpg", afterImage: "/images/bathroom-after.jpg" },
  { id: 13, title: "Cocina en Usera", location: "Usera", beforeImage: "/images/kitchen-before.jpg", afterImage: "/images/kitchen-after.jpg" },
  { id: 14, title: "Baño en Villaverde", location: "Villaverde", beforeImage: "/images/bathroom-before.jpg", afterImage: "/images/bathroom-after.jpg" },
  { id: 15, title: "Reforma integral en Hortaleza", location: "Hortaleza", beforeImage: "/images/kitchen-before.jpg", afterImage: "/images/kitchen-after.jpg" },
  { id: 16, title: "Baño en San Blas", location: "San Blas", beforeImage: "/images/bathroom-before.jpg", afterImage: "/images/bathroom-after.jpg" },
  { id: 17, title: "Cocina en Moratalaz", location: "Moratalaz", beforeImage: "/images/kitchen-before.jpg", afterImage: "/images/kitchen-after.jpg" },
  { id: 18, title: "Baño en Ciudad Lineal", location: "Ciudad Lineal", beforeImage: "/images/bathroom-before.jpg", afterImage: "/images/bathroom-after.jpg" },
  { id: 19, title: "Cocina en Fuencarral", location: "Fuencarral-El Pardo", beforeImage: "/images/kitchen-before.jpg", afterImage: "/images/kitchen-after.jpg" },
  { id: 20, title: "Baño en Barajas", location: "Barajas", beforeImage: "/images/bathroom-before.jpg", afterImage: "/images/bathroom-after.jpg" },
]

export function ProjectsSection() {
  const [activeViews, setActiveViews] = useState<Record<number, "before" | "after">>({})
  const scrollRef = useRef<HTMLDivElement>(null)

  const getView = (projectId: number) => activeViews[projectId] || "after"

  const toggleView = (projectId: number, view: "before" | "after") => {
    setActiveViews((prev) => ({
      ...prev,
      [projectId]: view,
    }))
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="proyectos" className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
            Proyectos Realizados
          </h2>
          <p className="mt-3 text-muted-foreground">
            Mira el antes y después de algunas de nuestras reformas más recientes
          </p>
        </div>

        <div className="relative">
          {/* Navigation buttons */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex shadow-lg bg-card hover:bg-card/90 -ml-4"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden md:flex shadow-lg bg-card hover:bg-card/90 -mr-4"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Carousel container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-4 px-4 md:mx-0 md:px-0"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project) => (
              <Card
                key={project.id}
                className="flex-shrink-0 w-80 sm:w-96 overflow-hidden border-border group"
              >
                <div className="relative aspect-[4/3] h-64 sm:h-80">
                  <Image
                    src={getView(project.id) === "before" ? project.beforeImage : project.afterImage}
                    alt={`${project.title} - ${getView(project.id) === "before" ? "Antes" : "Después"}`}
                    fill
                    sizes="(max-width: 640px) 20rem, 24rem"
                    className="object-cover transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-2 left-2 flex gap-1">
                    <Button
                      size="sm"
                      variant={getView(project.id) === "before" ? "default" : "secondary"}
                      onClick={() => toggleView(project.id, "before")}
                      className="text-[10px] h-6 px-2"
                    >
                      Antes
                    </Button>
                    <Button
                      size="sm"
                      variant={getView(project.id) === "after" ? "default" : "secondary"}
                      onClick={() => toggleView(project.id, "after")}
                      className="text-[10px] h-6 px-2"
                    >
                      Después
                    </Button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-sm font-medium truncate">{project.title}</p>
                    <p className="text-white/70 text-xs truncate">{project.location}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
