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
    <section id={id} className="py-4 md:py-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d85b1d]">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#182838] text-balance sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5b6d7e]">{description}</p>
        </div>

        <Accordion type="single" collapsible className="border-t border-border/70">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index + 1}`}
              className="border-b border-border/70 py-5"
            >
              <AccordionTrigger className="py-0 text-left text-base font-semibold text-[#182838] hover:no-underline sm:text-lg">
                <span className="leading-tight">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pt-4 text-base leading-7 text-[#5b6d7e] sm:text-[17px]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
