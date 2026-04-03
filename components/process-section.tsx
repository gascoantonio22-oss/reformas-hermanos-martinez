import { Home, FileText, Hammer, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Home,
    number: "1",
    title: "Visita y Asesoramiento",
    description: "Escuchamos lo que necesitas, revisamos el espacio y te orientamos con soluciones realistas.",
  },
  {
    icon: FileText,
    number: "2",
    title: "Presupuesto Claro",
    description: "Recibes un presupuesto desglosado, sin partidas ambiguas ni extras escondidos.",
  },
  {
    icon: Hammer,
    number: "3",
    title: "Obra Bien Organizada",
    description: "Coordinamos la ejecución, cuidamos los acabados y respetamos las zonas comunes del edificio.",
  },
  {
    icon: CheckCircle,
    number: "4",
    title: "Entrega Final",
    description: "Revisamos contigo cada detalle y no damos por cerrada la obra hasta verte conforme.",
  },
]

export function ProcessSection() {
  return (
    <section id="proceso" className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
            Así hacemos una reforma sin sobresaltos
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
