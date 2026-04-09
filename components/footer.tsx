import { Clock, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1f2c3a] text-[rgba(228,235,242,0.9)]">
      <div className="section-fade-up mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="text-center">
          <h3 className="text-lg font-semibold tracking-[-0.03em] text-white sm:text-2xl">Contacto</h3>
          <ul className="mt-4 space-y-2.5 text-sm leading-6 text-[rgba(228,235,242,0.72)] sm:mt-5 sm:space-y-3 sm:text-base sm:leading-7">
            <li className="flex items-center justify-center gap-2.5">
              <MapPin className="h-3.5 w-3.5 flex-shrink-0 sm:h-4 sm:w-4" />
              <span>Toda España</span>
            </li>
            <li className="flex items-center justify-center gap-2.5">
              <Mail className="h-3.5 w-3.5 flex-shrink-0 sm:h-4 sm:w-4" />
              <a href="mailto:info@hermanosmartinez.es" className="hover:text-white">
                info@hermanosmartinez.es
              </a>
            </li>
            <li className="flex items-center justify-center gap-2.5">
              <Phone className="h-3.5 w-3.5 flex-shrink-0 sm:h-4 sm:w-4" />
              <a href="tel:+34912345678" className="hover:text-white">
                912 345 678
              </a>
            </li>
            <li className="flex items-center justify-center gap-2.5">
              <Clock className="h-3.5 w-3.5 flex-shrink-0 sm:h-4 sm:w-4" />
              <span>Lun-Vie 8:00 a 19:00</span>
            </li>
          </ul>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4 text-center text-[11px] text-[rgba(228,235,242,0.52)] sm:mt-8 sm:pt-6 sm:text-sm">
          <p>© 2026 Reformas Hermanos Martínez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
