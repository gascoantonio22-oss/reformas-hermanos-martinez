import type { Metadata } from "next"

import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildMetadata } from "@/lib/seo"
import { getLandingByPath } from "@/lib/seo-content"

const landing = getLandingByPath("/cambiar-banera-por-ducha-madrid")

if (!landing) {
  throw new Error("Landing no encontrada: cambiar-banera-por-ducha-madrid")
}

export const metadata: Metadata = buildMetadata({
  title: landing.metaTitle,
  description: landing.metaDescription,
  path: landing.path,
  keywords: [
    "cambiar bañera por ducha madrid",
    "cambio bañera ducha madrid",
    "precio cambiar bañera por ducha madrid",
  ],
})

export default function CambiarBaneraPorDuchaMadridPage() {
  return <ServiceLandingPage landing={landing} />
}
