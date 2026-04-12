"use client"

import { Clock, Mail, MapPin, Phone, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#1f2c3a] text-[rgba(228,235,242,0.9)]">
      <div className="section-fade-up mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Hermanos Martínez</h3>
            <p className="text-sm leading-relaxed text-[rgba(228,235,242,0.72)] max-w-xs">
              Empresa familiar de reformas integrales en Madrid y alrededores desde 1999.
              Reformamos cocinas, baños y viviendas completas con un presupuesto claro y trato
              directo.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Servicios y guías</h3>
            <ul className="space-y-3 text-sm text-[rgba(228,235,242,0.72)]">
              <li>
                <Link href="/reformas-cocinas-madrid" className="hover:text-white transition-colors">
                  Reformas de cocinas en Madrid
                </Link>
              </li>
              <li>
                <Link href="/reformas-integrales-madrid" className="hover:text-white transition-colors">
                  Reformas integrales en Madrid
                </Link>
              </li>
              <li>
                <Link href="/reformas-banos-madrid" className="hover:text-white transition-colors">
                  Reformas de baños en Madrid
                </Link>
              </li>
              <li>
                <Link href="/cambiar-banera-por-ducha-madrid" className="hover:text-white transition-colors">
                  Cambio de bañera por ducha en Madrid
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/recursos" className="inline-flex items-center hover:text-white transition-colors font-medium text-primary-foreground">
                  Recursos y guías <ArrowUpRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm leading-6 text-[rgba(228,235,242,0.72)]">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span>Madrid capital y alrededores</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@hermanosmartinez.es" className="hover:text-white transition-colors">
                  info@hermanosmartinez.es
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+34912345678" className="hover:text-white transition-colors">
                  912 345 678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Lun-Vie 8:00-19:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[rgba(228,235,242,0.52)]">
          <p>© {currentYear} Hermanos Martínez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
