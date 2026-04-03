import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "COCINA",
    image: "/images/services/cocina.png",
    description: "Reforma completa de cocina con distribución funcional, mobiliario bien resuelto y acabados pensados para el uso diario.",
  },
  {
    title: "BAÑO",
    image: "/images/services/bano.png",
    description: "Renovación de baño con nuevos revestimientos, sanitarios y una solución más cómoda y actual para el espacio.",
  },
  {
    title: "Reforma Integral",
    image: "/images/services/reforma-integral.png",
    description: "Transformación completa de la vivienda con una ejecución coordinada para que todas las estancias hablen el mismo lenguaje.",
  },
  {
    title: "Baño Plato ucha",
    image: "/images/services/bano-plato-ucha.png",
    description: "Cambio a plato de ducha con acceso más cómodo, limpieza sencilla y una imagen mucho más moderna del baño.",
  },
  {
    title: "alicatados",
    image: "/images/services/alicatados.png",
    description: "Colocación cuidada de azulejos y pavimentos con juntas, nivelación y remates que hacen que el resultado se vea sólido y limpio.",
  },
  {
    title: "carpinteria interior",
    image: "/images/services/carpinteria-interior.png",
    description: "Puertas, armarios y soluciones interiores a medida para aprovechar mejor el espacio y mantener una estética coherente.",
  },
  {
    title: "pinturas y acabados",
    image: "/images/services/pinturas-y-acabados.png",
    description: "Pintura, alisado y terminaciones finales para dejar cada estancia rematada, luminosa y lista para entrar a vivir.",
  },
  {
    title: "instalaciones",
    image: "/images/services/instalaciones.png",
    description: "Actualización de instalaciones eléctricas y de fontanería para mejorar seguridad, rendimiento y fiabilidad en el día a día.",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 md:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
            Todo lo que necesitas para reformar con tranquilidad
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {services.map((service) => (
            <Card key={service.title} className="group flex h-full flex-col overflow-hidden border-border transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <CardHeader className="space-y-0 pb-0 pt-5 text-center">
                <div className="mx-auto mb-3 h-1 w-12 rounded-full bg-primary/20" />
                <div className="px-2">
                  <CardTitle className="flex min-h-[2.8rem] items-center justify-center text-lg leading-tight">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 pt-3 text-center">
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
