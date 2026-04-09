"use client"

import Image from "next/image"
import { Award, Shield, Users, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 overflow-hidden bg-[#f7f9fc]">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
          
          <div className="relative section-fade-up">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/team.jpg"
                alt="Equipo de Hermanos Martínez"
                width={800}
                height={600}
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className="section-fade-up-delayed mt-6 sm:mt-0">
            <span className="text-[#d85b1d] font-bold text-xs sm:text-sm uppercase tracking-wider block mb-2 md:mb-4">
              SOBRE NOSOTROS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2b3c] mb-6 md:mb-10 text-balance">
              Empresa familiar de reformas en Madrid desde 1999
            </h2>

            <div className="flex items-center gap-5 mb-8 md:mb-10 pt-2">
              <div className="text-[#d85b1d] font-black text-6xl md:text-7xl leading-none tracking-tighter">25</div>
              <div className="text-[#1a2b3c] font-bold text-lg md:text-xl leading-tight text-balance border-l-2 border-[#d85b1d]/20 pl-5 py-1">
                Años de experiencia <span className="block text-[#51677c] font-medium text-base mt-0.5">realizando obras en Madrid</span>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 text-[#51677c] text-base md:text-[1.05rem] leading-relaxed">
              <p>
                Hermanos Martínez nació con una idea sencilla: hacer reformas con seriedad,
                presupuestos claros y un trato cercano.
              </p>
              <p>
                Llevamos más de 25 años trabajando en viviendas de Madrid, realizando reformas
                integrales, reformas de cocinas y reformas de baños con una forma de trabajar
                basada en la transparencia y en los buenos acabados.
              </p>
              <p>
                Nuestro equipo propio se implica en cada obra para que el proceso sea más claro
                para el cliente y el resultado final esté a la altura de lo acordado.
              </p>
            </div>
            
            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-[#1a2b3c]/5 pt-8">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-[#d85b1d] flex-shrink-0" />
                <span className="font-bold text-[#1a2b3c] text-[1.05rem]">Profesionales Cualificados</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-[#d85b1d] flex-shrink-0" />
                <span className="font-bold text-[#1a2b3c] text-[1.05rem]">Garantía por Contrato</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14 section-fade-up mt-10 md:mt-16 pt-16 border-t border-[#1a2b3c]/5">
          
          <div className="flex flex-col items-start h-full">
            <Shield strokeWidth={1.5} className="h-10 w-10 text-[#d85b1d] mb-5" />
            <h3 className="text-xl font-bold text-[#1a2b3c] mb-3">Transparencia</h3>
            <p className="text-[#51677c] leading-relaxed text-[1.05rem]">
              Trabajamos con presupuestos claros, comunicación directa y una planificación
              realista desde el principio.
            </p>
          </div>

          <div className="flex flex-col items-start h-full">
            <Award strokeWidth={1.5} className="h-10 w-10 text-[#d85b1d] mb-5" />
            <h3 className="text-xl font-bold text-[#1a2b3c] mb-3">Calidad</h3>
            <p className="text-[#51677c] leading-relaxed text-[1.05rem]">
              Cuidamos materiales, ejecución y remates para que la reforma quede bien hecha y
              dure en el tiempo.
            </p>
          </div>

          <div className="flex flex-col items-start h-full">
            <Users strokeWidth={1.5} className="h-10 w-10 text-[#d85b1d] mb-5" />
            <h3 className="text-xl font-bold text-[#1a2b3c] mb-3">Experiencia</h3>
            <p className="text-[#51677c] leading-relaxed text-[1.05rem]">
              Más de 25 años reformando viviendas en Madrid y más de 1.500 proyectos realizados.
            </p>
          </div>

          <div className="flex flex-col items-start h-full">
            <Heart strokeWidth={1.5} className="h-10 w-10 text-[#d85b1d] mb-5" />
            <h3 className="text-xl font-bold text-[#1a2b3c] mb-3">Cuidado</h3>
            <p className="text-[#51677c] leading-relaxed text-[1.05rem]">
              Entramos en tu casa para trabajar con orden, respeto y atención al detalle en cada
              fase de la obra.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
