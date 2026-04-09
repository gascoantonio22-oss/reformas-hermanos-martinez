"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowLeft, ArrowRight, X } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/images/reformas-gallery/1.jpg",
    alt: "Cocina en reforma con mobiliario blanco en proceso de instalación",
  },
  {
    id: 2,
    src: "/images/reformas-gallery/2.jpg",
    alt: "Interior de vivienda durante una reforma integral",
  },
  {
    id: 4,
    src: "/images/reformas-gallery/4.jpg",
    alt: "Cocina reformada en tonos claros y líneas rectas",
  },
  {
    id: 5,
    src: "/images/reformas-gallery/5.jpg",
    alt: "Vivienda en obras con escalera de madera y cableado visible",
  },
  {
    id: 6,
    src: "/images/reformas-gallery/6.jpg",
    alt: "Cocina acabada con encimera efecto mármol y luz integrada",
  },
  {
    id: 7,
    src: "/images/reformas-gallery/7.jpg",
    alt: "Pasillo en proceso de reforma con escalera y suelo de madera",
  },
  {
    id: 8,
    src: "/images/reformas-gallery/8.jpg",
    alt: "Baño reformado con espejo iluminado y muebles de madera",
  },
  {
    id: 9,
    src: "/images/reformas-gallery/9.jpg",
    alt: "Cocina acabada con encimera porcelánica y luz cálida",
  },
  {
    id: 10,
    src: "/images/reformas-gallery/10.jpg",
    alt: "Baño moderno con iluminación integrada y acabados claros",
  },
  {
    id: 11,
    src: "/images/reformas-gallery/11.jpg",
    alt: "Detalle de baño reformado con nichos iluminados y espejo grande",
  },
]

export function ProjectsSection() {
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([])
  const closeTimeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(1)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isLightboxVisible, setIsLightboxVisible] = useState(false)

  useEffect(() => {
    const updateVisibleCards = () => {
      setVisibleCards(window.innerWidth >= 768 ? 2 : 1)
    }

    updateVisibleCards()
    window.addEventListener("resize", updateVisibleCards)

    return () => window.removeEventListener("resize", updateVisibleCards)
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (selectedIndex === null) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox()
      }
    }

    const frame = window.requestAnimationFrame(() => {
      setIsLightboxVisible(true)
    })

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleEscape)

    return () => {
      window.cancelAnimationFrame(frame)
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEscape)
    }
  }, [selectedIndex])

  const maxIndex = Math.max(galleryImages.length - visibleCards, 0)
  const selectedImage = selectedIndex !== null ? galleryImages[selectedIndex] : null

  useEffect(() => {
    setActiveIndex((current) => Math.min(current, maxIndex))
  }, [maxIndex])

  const scrollToIndex = (index: number) => {
    const target = itemRefs.current[index]
    target?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    })
    setActiveIndex(index)
  }

  const goToPrevious = () => {
    const nextIndex = activeIndex === 0 ? maxIndex : activeIndex - 1
    scrollToIndex(nextIndex)
  }

  const goToNext = () => {
    const nextIndex = activeIndex === maxIndex ? 0 : activeIndex + 1
    scrollToIndex(nextIndex)
  }

  const handleSliderScroll = () => {
    const slider = sliderRef.current
    if (!slider) return

    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    itemRefs.current.forEach((item, index) => {
      if (!item) return
      const distance = Math.abs(item.offsetLeft - slider.scrollLeft)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    setActiveIndex(Math.min(closestIndex, maxIndex))
  }

  const openLightbox = (index: number) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current)
      closeTimeoutRef.current = null
    }

    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setIsLightboxVisible(false)

    closeTimeoutRef.current = window.setTimeout(() => {
      setSelectedIndex(null)
      closeTimeoutRef.current = null
    }, 240)
  }

  return (
    <>
      <section id="proyectos" className="scroll-mt-24 bg-[#f3f6fa] py-14 md:scroll-mt-28 md:py-20">
        <div className="mx-auto max-w-[112rem] px-4 sm:px-6 lg:px-8">
          <div className="section-fade-up mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Reformas que hablan por sí solas
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Una selección de trabajos reales para que puedas ver acabados, materiales y resultados con más detalle.
            </p>
          </div>

          <div className="section-fade-up-delayed mx-auto mt-10 max-w-[108rem]">
            <div
              ref={sliderRef}
              onScroll={handleSliderScroll}
              className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth md:gap-6"
            >
              {galleryImages.map((image, imageIndex) => (
                <button
                  key={image.id}
                  ref={(element) => {
                    itemRefs.current[imageIndex] = element
                  }}
                  type="button"
                  onClick={() => openLightbox(imageIndex)}
                  className="group relative block shrink-0 snap-start overflow-hidden rounded-none bg-white text-left shadow-[0_26px_70px_-46px_rgba(24,35,48,0.34)] basis-[100%] md:basis-[calc((100%-1.5rem)/2)]"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={imageIndex < 3}
                      quality={92}
                      sizes="(max-width: 767px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                    />
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 md:mt-8 md:gap-4">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Ver foto anterior"
                className="inline-flex h-10 min-w-10 items-center justify-center border border-[#d9e1ea] bg-transparent px-3 text-[#4f6a89] transition-all duration-200 hover:-translate-x-0.5 hover:border-[#c5d2de] hover:bg-white/70"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, pageIndex) => (
                  <button
                    key={`project-page-${pageIndex}`}
                    type="button"
                    onClick={() => scrollToIndex(pageIndex)}
                    aria-label={`Ir a la vista ${pageIndex + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-200 ${
                      activeIndex === pageIndex ? "w-8 bg-[#345781]" : "w-2.5 bg-[#c9d3de]"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Ver foto siguiente"
                className="inline-flex h-10 min-w-10 items-center justify-center border border-[#d9e1ea] bg-transparent px-3 text-[#4f6a89] transition-all duration-200 hover:translate-x-0.5 hover:border-[#c5d2de] hover:bg-white/70"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {selectedImage ? (
        <div
          className={`fixed inset-0 z-[90] flex items-center justify-center bg-[rgba(22,33,47,0.62)] p-2 backdrop-blur-[2px] transition-opacity duration-300 sm:p-4 ${
            isLightboxVisible ? "opacity-100" : "opacity-0"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de la reforma"
          onClick={closeLightbox}
        >
          <button
            type="button"
            aria-label="Cerrar imagen ampliada"
            className={`absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/12 text-white transition-all duration-300 hover:bg-white/20 sm:right-5 sm:top-5 ${
              isLightboxVisible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
            onClick={closeLightbox}
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className={`relative h-[92vh] w-full max-w-[1800px] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isLightboxVisible ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-[0.985] opacity-0"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              quality={100}
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </>
  )
}
