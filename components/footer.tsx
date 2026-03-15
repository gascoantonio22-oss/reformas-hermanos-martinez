import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-accent">
                <span className="text-lg font-bold text-accent-foreground">HM</span>
              </div>
              <div>
                <p className="font-semibold leading-tight">Hermanos Martínez</p>
                <p className="text-sm text-background/70">Reformas</p>
              </div>
            </div>
            <p className="text-sm text-background/70">
              Empresa familiar con más de 25 años de experiencia en reformas de confianza en Madrid.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link href="#servicios" className="hover:text-background">Reformas de Cocinas</Link></li>
              <li><Link href="#servicios" className="hover:text-background">Reformas de Baños</Link></li>
              <li><Link href="#servicios" className="hover:text-background">Reformas Integrales</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-background/70">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Calle Falsa 123, Madrid</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@hermanosmartinez.es" className="hover:text-background">info@hermanosmartinez.es</a>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+34912345678" className="hover:text-background">912 345 678</a>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Clock className="h-4 w-4 flex-shrink-0" />
                <span>Lun-Vie 8:00 a 19:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Reformas Hermanos Martínez. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
