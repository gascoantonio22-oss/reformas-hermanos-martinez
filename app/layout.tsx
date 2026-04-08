import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Reformas Hermanos Martínez | Reformas Integrales con Precio Cerrado",
  description:
    "Empresa familiar con más de 25 años de experiencia en reformas de cocinas, baños y reformas integrales. Presupuesto sin compromiso y cumplimiento de plazos garantizado.",
  metadataBase: new URL("https://reformas-hermanos-martinez-five.vercel.app"),
  icons: {
    icon: [{ url: "/favicon-rhm.png", type: "image/png" }],
    shortcut: "/favicon-rhm.png",
    apple: "/favicon-rhm.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://reformas-hermanos-martinez-five.vercel.app",
    title: "Reformas Hermanos Martínez | Reformas Integrales con Precio Cerrado",
    description:
      "Empresa familiar con más de 25 años de experiencia en reformas de cocinas, baños y reformas integrales.",
    images: [
      {
        url: "/images/hero-renovation.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
