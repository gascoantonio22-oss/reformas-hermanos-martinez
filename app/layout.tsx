import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Reformas Hermanos Martínez | Precio Claro y Reformas Bien Hechas',
  description: 'Empresa familiar especializada en cocinas, baños y reformas integrales. Presupuesto detallado, plazos serios y garantía por escrito.',
  metadataBase: new URL('https://reformas-hermanos-martinez.vercel.app'),
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://reformas-hermanos-martinez.vercel.app',
    title: 'Reformas Hermanos Martínez | Precio Claro y Reformas Bien Hechas',
    description:
      'Empresa familiar especializada en cocinas, baños y reformas integrales con presupuesto detallado y ejecución cuidada.',
    images: [
      {
        url: '/images/hero-renovation.jpg',
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
