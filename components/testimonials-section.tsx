import { Star, BadgeCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "María García",
    location: "Madrid",
    rating: 5,
    text: "Reformaron nuestra cocina y el resultado fue espectacular. Cumplieron los plazos y el presupuesto. Muy profesionales y atentos a los detalles.",
  },
  {
    name: "Carlos Rodríguez",
    location: "Málaga",
    rating: 5,
    text: "Excelente trabajo en la reforma del baño. El equipo fue muy limpio y respetuoso. Sin duda los recomendaré a familiares y amigos.",
  },
  {
    name: "Ana Martín",
    location: "Ibiza",
    rating: 5,
    text: "Hicieron una reforma integral de nuestro piso y estamos encantados. La comunicación fue constante y resolvieron todas nuestras dudas.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground text-balance">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="mt-3 text-primary-foreground/80">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-0">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="flex items-center gap-1 text-accent">
                    <BadgeCheck className="h-4 w-4" />
                    <span className="text-xs font-medium">Verificado</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
