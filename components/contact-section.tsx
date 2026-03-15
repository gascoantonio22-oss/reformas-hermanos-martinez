"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactInfo = [
  { icon: Phone, label: "Teléfono", value: "912 345 678", href: "tel:+34912345678" },
  { icon: Mail, label: "Email", value: "info@hermanosmartinez.es", href: "mailto:info@hermanosmartinez.es" },
  { icon: MapPin, label: "Dirección", value: "Calle Falsa 123, Madrid", href: null },
  { icon: Clock, label: "Horario", value: "Lun-Vie 8:00 a 19:00", href: null },
]

const reformaTypes = [
  { value: "cocina", label: "Reforma de Cocina" },
  { value: "bano", label: "Reforma de Baño" },
  { value: "integral", label: "Reforma Integral" },
  { value: "otro", label: "Otro" },
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
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ nombre: "", telefono: "", tipoReforma: "", descripcion: "" })
  }

  return (
    <section id="contacto" className="py-16 md:py-20 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-balance">
            ¿Hablamos de tu proyecto?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Déjanos tus datos y te llamaremos en menos de 24 horas para agendar una visita gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 border-border">
            <CardHeader>
              <CardTitle>Formulario de Contacto</CardTitle>
              <CardDescription>Rellena el formulario y te llamaremos sin compromiso</CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mx-auto mb-4">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Mensaje Enviado</h3>
                  <p className="mt-2 text-muted-foreground">Te contactaremos en menos de 24 horas.</p>
                  <Button className="mt-4" onClick={() => setIsSubmitted(false)}>
                    Enviar otro mensaje
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre *</Label>
                      <Input
                        id="nombre"
                        required
                        placeholder="Tu nombre"
                        value={formState.nombre}
                        onChange={(e) => setFormState((s) => ({ ...s, nombre: e.target.value }))}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input
                        id="telefono"
                        type="tel"
                        required
                        placeholder="Tu teléfono"
                        value={formState.telefono}
                        onChange={(e) => setFormState((s) => ({ ...s, telefono: e.target.value }))}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tipoReforma">Tipo de Reforma *</Label>
                    <Select
                      required
                      value={formState.tipoReforma}
                      onValueChange={(value) => setFormState((s) => ({ ...s, tipoReforma: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona el tipo de reforma" />
                      </SelectTrigger>
                      <SelectContent>
                        {reformaTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="descripcion">Breve descripción</Label>
                    <Textarea
                      id="descripcion"
                      rows={4}
                      placeholder="Describe brevemente qué tipo de reforma necesitas..."
                      value={formState.descripcion}
                      onChange={(e) => setFormState((s) => ({ ...s, descripcion: e.target.value }))}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Enviar y pedir presupuesto sin compromiso"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Al enviar este formulario aceptas nuestra política de privacidad
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className="border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-medium text-foreground hover:text-primary">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-accent bg-accent/5">
              <CardContent className="p-4">
                <p className="font-semibold text-foreground">Respuesta rápida garantizada</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Te llamamos en menos de 24 horas para concertar una visita sin compromiso.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
