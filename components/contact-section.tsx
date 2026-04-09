"use client"

import { useState } from "react"
import { Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const reformaTypes = [
  { value: "reformas-cocinas", label: "Reformas de cocinas" },
  { value: "reformas-banos", label: "Reformas de baños" },
  { value: "reformas-integrales", label: "Reformas integrales" },
  { value: "cambio-banera-ducha", label: "Cambio de bañera por ducha" },
  { value: "alicatados-solados", label: "Alicatados y solados" },
  { value: "carpinteria-interior", label: "Carpintería interior" },
  { value: "pintura-acabados", label: "Pintura y acabados" },
  { value: "instalaciones", label: "Instalaciones" },
]

export function ContactSection() {
  const [formState, setFormState] = useState({
    nombre: "",
    telefono: "",
    tipoReforma: "",
    descripcion: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ nombre: "", telefono: "", tipoReforma: "", descripcion: "" })
  }

  return (
    <section id="contacto" className="scroll-mt-24 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-fade-up mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Pide presupuesto para tu reforma en Madrid
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            Déjanos tus datos y te llamaremos para valorar tu reforma en Madrid capital y concertar una visita sin
            compromiso.
          </p>
        </div>

        <div className="section-fade-up-delayed mx-auto mt-8 max-w-3xl rounded-2xl border border-border bg-white px-4 py-5 shadow-sm sm:px-8 sm:py-8">
          {isSubmitted ? (
            <div className="py-10 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/12">
                <svg className="h-7 w-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-foreground">Solicitud enviada</h3>
              <p className="mt-3 text-base leading-7 text-muted-foreground">
                Te llamaremos para comentar tu reforma.
              </p>
              <Button className="mt-5 bg-accent text-accent-foreground hover:bg-accent/92" onClick={() => setIsSubmitted(false)}>
                Enviar otra solicitud
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="border-b border-border pb-4 text-center sm:pb-5">
                <h3 className="text-2xl font-bold text-foreground sm:text-3xl">Cuéntanos qué quieres reformar</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground sm:mt-3 sm:text-base sm:leading-7">
                  Rellena el formulario y te contactaremos lo antes posible.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre *</Label>
                  <Input
                    id="nombre"
                    required
                    placeholder="¿Cómo te llamas?"
                    value={formState.nombre}
                    onChange={(e) => setFormState((current) => ({ ...current, nombre: e.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono *</Label>
                  <Input
                    id="telefono"
                    type="tel"
                    required
                    placeholder="Tu número de contacto"
                    value={formState.telefono}
                    onChange={(e) => setFormState((current) => ({ ...current, telefono: e.target.value }))}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tipo-reforma">Tipo de reforma *</Label>
                <select
                  id="tipo-reforma"
                  required
                  value={formState.tipoReforma}
                  onChange={(e) => setFormState((current) => ({ ...current, tipoReforma: e.target.value }))}
                  className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 md:text-sm"
                >
                  <option value="">Selecciona el trabajo</option>
                  {reformaTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="descripcion">Descripción</Label>
                <Textarea
                  id="descripcion"
                  rows={6}
                  placeholder="Cuéntanos brevemente qué necesitas"
                  value={formState.descripcion}
                  onChange={(e) => setFormState((current) => ({ ...current, descripcion: e.target.value }))}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="h-auto w-full whitespace-normal px-4 py-3 text-center text-[0.95rem] leading-snug font-semibold text-accent-foreground bg-accent hover:bg-accent/92 sm:h-12 sm:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Quiero mi presupuesto sin compromiso"}
              </Button>

              <div className="border-t border-border pt-4 text-center sm:pt-5">
                <p className="text-[13px] leading-6 text-muted-foreground sm:text-sm">
                  Al enviar el formulario aceptas nuestra{" "}
                  <span className="font-semibold text-foreground underline underline-offset-4">
                    política de privacidad
                  </span>
                  .
                </p>

                <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:mt-5 sm:flex-row sm:gap-6">
                  <a
                    href="tel:+34912345678"
                    className="inline-flex items-center gap-2 rounded-full border border-[#c8d2dc] bg-[#f8fbff] px-4 py-2.5 text-sm font-semibold text-primary sm:px-5 sm:py-3 sm:text-base"
                  >
                    <Phone className="h-4 w-4" />
                    912 345 678
                  </a>
                  <div className="inline-flex items-center gap-2 text-sm text-muted-foreground sm:text-base">
                    <Clock className="h-4 w-4 text-primary" />
                    Lun-Vie de 8:00 a 19:00
                  </div>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
