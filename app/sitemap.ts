import type { MetadataRoute } from "next"

import { seoLandings } from "@/lib/seo-content"
import { absoluteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const supportPages = [
    "/precios-reformas-madrid",
    "/preguntas-frecuentes-reformas-madrid",
    "/recursos",
    "/recursos/cuanto-cuesta-reforma-integral-madrid",
    "/recursos/errores-comunes-reforma-cocina",
    "/recursos/guia-cambiar-banera-por-ducha",
  ]

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...seoLandings.map((landing) => ({
      url: absoluteUrl(landing.path),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.88,
    })),
    ...supportPages.map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ]
}
