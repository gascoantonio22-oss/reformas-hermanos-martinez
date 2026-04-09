"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement
    root.classList.add("has-scroll-reveal")

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".section-fade-up, .section-fade-up-delayed"),
    )

    if (!targets.length) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("reveal-visible"))
      return
    }

    const isMobile = window.innerWidth < 768
    const eagerRevealLimit = window.innerHeight * (isMobile ? 1.35 : 1.08)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add("reveal-visible")
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: isMobile ? 0.01 : 0.14,
        rootMargin: isMobile ? "24% 0px -6% 0px" : "0px 0px -10% 0px",
      },
    )

    requestAnimationFrame(() => {
      targets.forEach((target) => {
        const rect = target.getBoundingClientRect()

        if (rect.top <= eagerRevealLimit) {
          target.classList.add("reveal-visible")
          return
        }

        observer.observe(target)
      })
    })

    return () => observer.disconnect()
  }, [pathname])

  return null
}
