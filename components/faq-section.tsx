import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { FaqItem } from "@/lib/site"

export const defaultFaqs: FaqItem[] = [
  {
    question: "¿El presupuesto es gratuito y sin compromiso?",
    answer:
      "Sí. Realizamos una visita o valoración previa para entender bien el proyecto y preparar un presupuesto detallado, gratuito y sin compromiso.",
  },
  {
    question: "¿El presupuesto es cerrado o puede subir después?",
    answer:
      "Trabajamos con presupuestos claros y desglosados para evitar sorpresas. Si durante la obra aparece algún imprevisto, se informa antes de actuar y siempre con tu aprobación.",
  },
  {
    question: "¿Cuánto tarda una reforma?",
    answer:
      "El plazo depende del tipo y tamaño de la obra, pero antes de empezar te damos una estimación realista y un planning de trabajo. Nuestro objetivo es cumplir los tiempos acordados y mantenerte informado en todo momento.",
  },
  {
    question: "¿Ofrecéis garantía en los trabajos?",
    answer:
      "Sí. Todas nuestras reformas cuentan con garantía, porque confiamos en la calidad de los materiales, la ejecución y el acabado final.",
  },
  {
    question: "¿Os encargáis de permisos y licencias?",
    answer:
      "Sí, te asesoramos sobre los permisos necesarios y, si hace falta, podemos ayudarte a gestionar la documentación para que no tengas que preocuparte por los trámites.",
  },
  {
    question: "¿Qué pasa si surgen imprevistos durante la reforma?",
    answer:
      "Antes de tomar decisiones, revisamos contigo cualquier incidencia. Te explicamos la situación, te proponemos la mejor solución y dejamos todo aprobado por tu parte para evitar costes o cambios inesperados.",
  },
  {
    question: "¿Quién supervisa la obra?",
    answer:
      "La obra está coordinada y supervisada por profesionales responsables, para garantizar que cada fase se ejecute correctamente, con orden, calidad y seguimiento continuo.",
  },
  {
    question: "¿Puedo elegir los materiales y acabados?",
    answer:
      "Por supuesto. Te asesoramos según tu estilo, uso y presupuesto, pero la decisión final es tuya. Queremos que el resultado encaje contigo y con lo que buscas.",
  },
]

type FaqSectionProps = {
  id?: string
  eyebrow?: string
  title?: string
  description?: string
  faqs?: FaqItem[]
}

export function FaqSection({
  id,
  eyebrow = "Preguntas frecuentes",
  title = "Resolvemos las dudas más habituales antes de empezar",
  description = "Una sección clara y directa para que entiendas cómo trabajamos y qué puedes esperar en tu reforma.",
  faqs = defaultFaqs,
}: FaqSectionProps) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary/70">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index + 1}`}
              className="group rounded-2xl border border-border/60 bg-white px-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md data-[state=open]:border-primary/40 data-[state=open]:bg-primary/[0.02]"
            >
              <AccordionTrigger className="gap-5 py-6 text-left text-base font-semibold text-foreground hover:no-underline md:text-lg">
                <span className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary transition-colors group-data-[state=open]:bg-primary group-data-[state=open]:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-0.5 leading-tight">{faq.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pl-14 pb-6 pr-4 text-base leading-relaxed text-muted-foreground/90 md:pr-12 md:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
