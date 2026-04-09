"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, MessageCircle, Phone, X, ChevronDown } from "lucide-react"
import { toast } from "sonner"

const navLinks = [
  { href: "/#proyectos", label: "Trabajos realizados" },
  { href: "/#contacto", label: "Presupuesto" },
]

const servicesLinks = [
  { href: "/reformas-cocinas-madrid", label: "Reformas de cocinas" },
  { href: "/reformas-integrales-madrid", label: "Reformas integrales" },
  { href: "/reformas-banos-madrid", label: "Reformas de baños" },
  { href: "/cambiar-banera-por-ducha-madrid", label: "Cambiar bañera por ducha" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="text-base font-semibold text-foreground sm:text-lg shrink-0">
            Hermanos Martínez
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            <div className="group relative flex h-16 items-center">
              <span className="flex cursor-pointer items-center gap-1 text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                Servicios <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </span>
              <div className="absolute left-0 top-[100%] z-50 hidden w-[260px] flex-col rounded-xl border border-border bg-white p-2 shadow-xl group-hover:flex">
                {servicesLinks.map((service) => {
                  if (service.href === "/reformas-cocinas-madrid") {
                    return (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="rounded-lg p-3 text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                      >
                        {service.label}
                      </Link>
                    )
                  }
                  
                  return (
                    <button
                      key={service.href}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        toast.info("No disponible en la Demo", {
                          description: "Para ver una referencia de cómo maquetamos un servicio completo, por favor entra en 'Reformas de cocinas'.",
                        })
                      }}
                      className="rounded-lg p-3 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted hover:text-primary"
                    >
                      {service.label}
                    </button>
                  )
                })}
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:+34912345678" className="hidden items-center gap-2 text-sm font-semibold text-primary lg:flex">
              <Phone className="h-4 w-4" />
              912 345 678
            </a>

            <a
              href="https://wa.me/34612345678?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-md bg-[#55d66a] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#48c85e] md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              Habla con nosotros
            </a>

            <button
              type="button"
              className="p-2 text-foreground lg:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-border py-4 lg:hidden">
            <nav className="flex flex-col gap-2">
              <div className="mb-2">
                <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Servicios
                </p>
                <div className="ml-3 flex flex-col gap-1 border-l-2 border-muted pl-3">
                  {servicesLinks.map((service) => {
                    if (service.href === "/reformas-cocinas-madrid") {
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="py-2 text-sm font-medium text-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.label}
                        </Link>
                      )
                    }
                    return (
                      <button
                        key={service.href}
                        type="button"
                        onClick={(e) => {
                          e.preventDefault()
                          setMobileMenuOpen(false)
                          toast.info("No disponible en la Demo", {
                            description: "Para ver una referencia de cómo maquetamos un servicio completo, por favor entra en 'Reformas de cocinas'.",
                          })
                        }}
                        className="py-2 text-left text-sm font-medium text-foreground"
                      >
                        {service.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="my-2 h-px w-full bg-border/50"></div>

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2 py-2 text-sm font-medium text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <a href="tel:+34912345678" className="mt-4 flex items-center gap-2 px-2 py-2 text-sm font-semibold text-primary">
                <Phone className="h-4 w-4" />
                912 345 678
              </a>

              <a
                href="https://wa.me/34612345678?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-[#55d66a] px-4 py-2 text-sm font-semibold text-white"
              >
                <MessageCircle className="h-4 w-4" />
                Habla con nosotros
              </a>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  )
}
