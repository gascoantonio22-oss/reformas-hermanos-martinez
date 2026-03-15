import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Clock, Shield, HardHat } from "lucide-react"
import { Button } from "@/components/ui/button"

const trustItems = [
  { icon: CheckCircle, text: "Presupuesto cerrado por contrato" },
  { icon: Clock, text: "Fecha de entrega garantizada" },
  { icon: Shield, text: "2 años de garantía total" },
  { icon: HardHat, text: "Personal propio, sin subcontratas" },
]

export function HeroSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-renovation.jpg"
          alt="Salón reformado moderno"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          priority
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground leading-tight text-balance">
            Reformas en España: Sin Sorpresas, Sin Retrasos y con Precio Cerrado.
          </h1>
          <p className="mt-5 text-lg text-primary-foreground/90 max-w-2xl leading-relaxed">
            Somos una empresa familiar con 25 años de experiencia. Nos encargamos de todo para que tú solo disfrutes de tu nuevo hogar. Cocinas, baños y reformas integrales con garantía por escrito.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
            >
              <Link href="#contacto">Solicitar Presupuesto Gratis</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="#proyectos">Ver Proyectos Realizados</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="relative bg-card border-t border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-between md:items-center md:gap-y-4">
            {trustItems.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-2 rounded-lg border border-border/70 bg-background/70 px-3 py-3 md:w-auto md:items-center md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0"
              >
                <item.icon className="mt-0.5 h-4 w-4 text-accent flex-shrink-0 md:mt-0 md:h-5 md:w-5" />
                <span className="text-xs leading-snug font-medium text-foreground md:text-sm md:leading-normal">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
