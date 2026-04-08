import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { services } from "@/lib/services"

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-background py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Todo lo que necesitas para reformar sin preocuparte por nada
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.slug}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative">
                <Image
                  src={service.image}
                  alt={service.pageTitle}
                  width={1200}
                  height={900}
                  className="w-full object-cover"
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-4 md:px-6 md:pb-6 md:pt-5">
                <div className="flex-1 text-center">
                  <h3 className="text-balance text-[1.05rem] font-semibold leading-tight text-foreground md:text-[1.15rem]">
                    {service.cardTitle}
                  </h3>
                  <p className="mt-4 text-[1.05rem] font-semibold text-[#496a91]">{service.price}</p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{service.shortDescription}</p>
                </div>

                <Link
                  href="/#contacto"
                  className="mt-auto inline-flex items-center justify-center gap-2 pt-5 text-base font-semibold text-[#496a91] transition-colors hover:text-primary"
                >
                  Saber más
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
