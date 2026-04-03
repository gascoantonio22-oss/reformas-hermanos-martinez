"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, Menu, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#servicios", label: "Servicios" },
    { href: "#proyectos", label: "Trabajos" },
    { href: "#proceso", label: "Cómo trabajamos" },
    { href: "#contacto", label: "Presupuesto" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-base sm:text-lg font-semibold text-foreground leading-tight">
            Hermanos Martínez
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+34912345678"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-primary"
            >
              <Phone className="h-4 w-4" />
              912 345 678
            </a>
            <Button asChild className="hidden sm:inline-flex bg-[#25D366] text-white hover:bg-[#20bd5a]">
              <a href="https://wa.me/34612345678?text=Hola,%20me%20gustaría%20solicitar%20un%20presupuesto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Habla con nosotros
              </a>
            </Button>
            <button
              type="button"
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+34912345678"
                className="flex items-center gap-2 text-sm font-semibold text-primary px-2 py-1"
              >
                <Phone className="h-4 w-4" />
                912 345 678
              </a>
              <Button asChild className="mt-2 bg-[#25D366] text-white hover:bg-[#20bd5a]">
                <a href="https://wa.me/34612345678?text=Hola,%20me%20gustaría%20solicitar%20un%20presupuesto" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Habla con nosotros
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
