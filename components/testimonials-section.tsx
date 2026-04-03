import { Star, BadgeCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "María García",
    location: "Madrid",
    rating: 5,
    text: "Nos reformaron la cocina y desde el principio supimos qué se iba a hacer y cuánto iba a costar. El acabado quedó impecable.",
  },
  {
    name: "Carlos Rodríguez",
    location: "Málaga",
    rating: 5,
    text: "El cambio del baño fue rápido, limpio y muy bien coordinado. Da gusto encontrar un equipo serio y cuidadoso dentro de casa.",
  },
  {
    name: "Ana Martín",
    location: "Ibiza",
    rating: 5,
    text: "En la reforma integral cumplieron lo hablado y estuvieron pendientes de todo. La comunicación fue clara y el resultado, excelente.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground text-balance">
            Opiniones de clientes que ya reformaron con nosotros
          </h2>
          <p className="mt-3 text-primary-foreground/80">
            La mejor carta de presentación es dejar una obra bien hecha y un cliente tranquilo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 bg-card">
              <CardContent className="p-6 text-center">
                <div className="mb-3 flex justify-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex flex-col items-center gap-2">
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
