import type { Metadata } from "next"

import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildMetadata } from "@/lib/seo"
import { getLandingByPath } from "@/lib/seo-content"

const landing = getLandingByPath("/reformas-integrales-madrid")

if (!landing) {
  throw new Error("Landing no encontrada: reformas-integrales-madrid")
}

export const metadata: Metadata = buildMetadata({
  title: landing.metaTitle,
  description: landing.metaDescription,
  path: landing.path,
  keywords: ["reformas integrales madrid", "empresa de reformas madrid", "reforma piso madrid"],
})

export default function ReformasIntegralesMadridPage() {
  return <ServiceLandingPage landing={landing} />
}
