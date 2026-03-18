import Image from "next/image"

const stats = [
  { value: "25", label: "Años" },
  { value: "1.500+", label: "Obras" },
  { value: "2 años", label: "Garantía" },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-16 md:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/team.jpg"
                alt="Equipo de Hermanos Martínez"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h2 className="text-[1.75rem] sm:text-3xl font-bold text-foreground text-balance">
              Profesionales de los de antes
            </h2>
            <p className="mt-4 text-left text-base sm:text-lg text-muted-foreground leading-relaxed sm:text-center lg:text-left">
              No somos una franquicia. Somos profesionales de los de antes. Desde 1999, tratamos cada reforma como si fuera para nuestra propia familia. Más de 1.500 hogares ya han confiado en nosotros.
            </p>

            <div className="mt-8 flex justify-center gap-8 lg:justify-start">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
