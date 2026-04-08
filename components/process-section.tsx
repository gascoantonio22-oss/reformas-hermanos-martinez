import { Check, ClipboardList, Hammer, House } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Visita técnica y asesoramiento",
    description:
      "Escuchamos lo que necesitas, revisamos el espacio y detectamos posibles complicaciones antes de preparar el presupuesto.",
    benefit: "Reduce miedo a sorpresas estructurales posteriores.",
    icon: House,
  },
  {
    number: "02",
    title: "Presupuesto cerrado y detallado",
    description:
      "Recibes un presupuesto claro, sin partidas ambiguas ni extras inesperados durante la obra.",
    benefit: "Ataca directamente el mayor miedo del cliente.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Coordinación completa de los trabajos",
    description:
      "Organizamos gremios, tiempos y materiales para que la obra avance según lo previsto.",
    benefit: "Reduce el miedo al caos típico de las reformas.",
    icon: Hammer,
  },
  {
    number: "04",
    title: "Revisión contigo antes de la entrega",
    description: "Comprobamos cada detalle contigo antes de dar la reforma por finalizada.",
    benefit: "Transmite control y responsabilidad hasta el final.",
    icon: Check,
  },
] as const

export function ProcessSection() {
  return (
    <section id="proceso" className="bg-secondary py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="section-kicker">CÓMO TRABAJAMOS</p>
          <h2 className="mx-auto mt-4 max-w-5xl text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Nuestro método para que tu reforma tenga precio claro y plazos definidos desde el inicio
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">
            Sabes qué se hace, cuándo se hace y cuánto cuesta antes de empezar la obra.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <article
                key={step.number}
                className="flex min-h-[250px] flex-col rounded-[1.65rem] border border-[rgba(43,62,82,0.08)] bg-white px-5 py-5 shadow-[0_18px_48px_-28px_rgba(24,35,48,0.18)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_26px_60px_-28px_rgba(24,35,48,0.24)] md:min-h-[280px] md:px-6 md:py-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(82,103,127,0.1)] text-sm font-bold tracking-[0.12em] text-[#52677f]">
                    {step.number}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-[1rem] border border-[rgba(43,62,82,0.06)] bg-[#f8fafb] text-[#52677f]">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>

                <h3 className="mt-5 text-balance text-[1.18rem] font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-[1.28rem]">
                  {step.title}
                </h3>

                <div className="mt-4 hidden h-px w-full bg-[linear-gradient(90deg,rgba(82,103,127,0.18),rgba(82,103,127,0.04))] sm:block" />

                <p className="mt-4 text-[14px] leading-7 text-muted-foreground md:text-[15px] md:leading-7">
                  {step.description}
                </p>

                <p className="mt-4 text-[12px] leading-5 text-[#52677f] md:mt-5 md:text-[12.5px]">
                  <span className="font-semibold uppercase tracking-[0.14em]">Por qué funciona:</span>{" "}
                  {step.benefit}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
