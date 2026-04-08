"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, MessageCircle, Phone, X } from "lucide-react"

const navLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proyectos", label: "Trabajos realizados" },
  { href: "/#contacto", label: "Presupuesto" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/" className="text-base font-semibold text-foreground sm:text-lg">
            Hermanos Martínez
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
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
              className="p-2 text-foreground md:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-border py-4 md:hidden">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 text-sm font-medium text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <a href="tel:+34912345678" className="mt-2 flex items-center gap-2 py-2 text-sm font-semibold text-primary">
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
