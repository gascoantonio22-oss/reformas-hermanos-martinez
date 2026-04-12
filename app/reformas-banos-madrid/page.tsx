import type { Metadata } from "next"

import { ServiceLandingPage } from "@/components/service-landing-page"
import { buildMetadata } from "@/lib/seo"
import { getLandingByPath } from "@/lib/seo-content"

const landing = getLandingByPath("/reformas-banos-madrid")

if (!landing) {
  throw new Error("Landing no encontrada: reformas-banos-madrid")
}

export const metadata: Metadata = buildMetadata({
  title: landing.metaTitle,
  description: landing.metaDescription,
  path: landing.path,
  keywords: ["reformas baños madrid", "reforma baño madrid", "cambiar bañera por ducha madrid"],
})

export default function ReformasBanosMadridPage() {
  return <ServiceLandingPage landing={landing} />
}
