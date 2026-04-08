import { Clock, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1f2c3a] text-[rgba(228,235,242,0.9)]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div className="text-center lg:text-center">
            <div className="inline-flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-md bg-accent text-2xl font-bold text-white">
                HM
              </span>
              <span className="text-3xl font-semibold tracking-[-0.03em] text-white">
                Hermanos Martínez Reformas
              </span>
            </div>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[rgba(228,235,242,0.68)]">
              Empresa familiar con más de 25 años reformando viviendas con seriedad, experiencia y
              trato cercano.
            </p>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">Contacto</h3>
            <ul className="mt-6 space-y-4 text-lg text-[rgba(228,235,242,0.72)]">
              <li className="flex items-center justify-center gap-3 lg:justify-start">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span>Toda España</span>
              </li>
              <li className="flex items-center justify-center gap-3 lg:justify-start">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@hermanosmartinez.es" className="hover:text-white">
                  info@hermanosmartinez.es
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 lg:justify-start">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+34912345678" className="hover:text-white">
                  912 345 678
                </a>
              </li>
              <li className="flex items-center justify-center gap-3 lg:justify-start">
                <Clock className="h-5 w-5 flex-shrink-0" />
                <span>Lun-Vie 8:00 a 19:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center text-lg text-[rgba(228,235,242,0.54)]">
          <p>© 2026 Reformas Hermanos Martínez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
