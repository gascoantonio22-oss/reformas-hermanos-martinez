import { UtensilsCrossed, Bath, Home, ShowerHead, Grid3X3, DoorOpen, PaintBucket, Wrench } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: UtensilsCrossed,
    title: "Reformas de Cocinas",
    description: "Diseñamos y montamos tu cocina completa. Fontanería, electricidad, muebles y encimera sin que tengas que coordinar a nadie.",
  },
  {
    icon: Bath,
    title: "Reformas de Baños",
    description: "Especialistas en cambio de bañera por plato de ducha o reforma completa con nuevos azulejos, sanitarios y mobiliario.",
  },
  {
    icon: Home,
    title: "Reformas Integrales",
    description: "Transformamos tu piso antiguo en una vivienda totalmente renovada. Coordinamos todos los gremios y cuidamos cada detalle de la obra.",
  },
  {
    icon: ShowerHead,
    title: "Cambio de Bañera por Ducha",
    description: "Retiramos tu bañera y colocamos un plato de ducha moderno, seguro y fácil de limpiar en muy poco tiempo.",
  },
  {
    icon: Grid3X3,
    title: "Alicatados y Solados",
    description: "Colocación profesional de azulejos, suelos porcelánicos y pavimentos resistentes para cocina, baño o cualquier estancia.",
  },
  {
    icon: DoorOpen,
    title: "Carpintería Interior",
    description: "Instalación de puertas, armarios empotrados, suelos laminados y soluciones de almacenamiento hechas a medida.",
  },
  {
    icon: PaintBucket,
    title: "Pintura y Acabados",
    description: "Trabajos de pintura interior, alisado de paredes, reparación de grietas y acabados que dejan tu casa lista para disfrutar.",
  },
  {
    icon: Wrench,
    title: "Instalaciones",
    description: "Renovamos instalaciones de electricidad y fontanería antiguas para que tu vivienda cumpla con la normativa actual y sea segura.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 md:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
            Soluciones Reales para tu Hogar
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((service) => (
            <Card key={service.title} className="flex h-full flex-col border-border transition-shadow hover:shadow-md">
              <CardHeader className="space-y-0 pb-0 text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="flex min-h-[2.4rem] items-center justify-center text-lg leading-tight">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 pt-1 text-center">
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
