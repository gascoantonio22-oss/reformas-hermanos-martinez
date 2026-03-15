import { Home, FileText, Hammer, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Home,
    number: "1",
    title: "Visita y Medición",
    description: "Vamos a tu casa gratis, escuchamos tu idea y tomamos medidas exactas.",
  },
  {
    icon: FileText,
    number: "2",
    title: "Presupuesto Detallado",
    description: "Te entregamos un desglose partida por partida. Lo que ves es lo que pagas.",
  },
  {
    icon: Hammer,
    number: "3",
    title: "Ejecución Profesional",
    description: "Trabajamos con materiales de calidad y protegiendo siempre las zonas comunes de tu edificio.",
  },
  {
    icon: CheckCircle,
    number: "4",
    title: "Entrega y Revisión",
    description: "Solo cuando tú estás 100% satisfecho, damos la obra por terminada.",
  },
]

export function ProcessSection() {
  return (
    <section id="proceso" className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
            Tu reforma en 4 pasos sencillos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative flex flex-col items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold mb-4 relative z-10">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
