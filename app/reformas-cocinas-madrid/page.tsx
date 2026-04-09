import type { Metadata } from "next"

import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildMetadata } from "@/lib/seo"
import { getLandingByPath } from "@/lib/seo-content"

const landing = getLandingByPath("/reformas-cocinas-madrid")

if (!landing) {
  throw new Error("Landing no encontrada: reformas-cocinas-madrid")
}

export const metadata: Metadata = buildMetadata({
  title: landing.metaTitle,
  description: landing.metaDescription,
  path: landing.path,
  keywords: ["reformas cocinas madrid", "reforma cocina madrid", "empresa reformas cocina madrid"],
})

export default function ReformasCocinasMadridPage() {
  return <ServiceLandingPage landing={landing} />
}
