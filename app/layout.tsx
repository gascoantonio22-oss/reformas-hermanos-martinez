import type { Metadata } from "next"
import { Suspense } from "react"
import { Inter } from "next/font/google"
import { JsonLd } from "@/components/json-ld"
import { DemoGuard } from "@/components/demo-guard"
import { ScrollReveal } from "@/components/scroll-reveal"
import { buildLocalBusinessSchema, buildOrganizationSchema, buildWebsiteSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.defaultTitle,
    template: "%s",
  },
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: [{ url: "/favicon-rhm.png", type: "image/png" }],
    shortcut: "/favicon-rhm.png",
    apple: "/favicon-rhm.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [
      {
        url: siteConfig.defaultOgImage,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    images: [siteConfig.defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
  },
}

import { Toaster } from "sonner"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <JsonLd data={[buildWebsiteSchema(), buildOrganizationSchema(), buildLocalBusinessSchema()]} />
        <Suspense fallback={null}>
          <DemoGuard />
        </Suspense>
        <ScrollReveal />
        {children}
        <Toaster richColors position="bottom-center" />
      </body>
    </html>
  )
}
