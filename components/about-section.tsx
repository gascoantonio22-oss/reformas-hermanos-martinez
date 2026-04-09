"use client"

import Image from "next/image"
import { Award, Shield, Users, Heart } from "lucide-react"

export function AboutSection() {
  return (
    <section id="nosotros" className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-[#f7f9fc]">
      {/* Transición Suave Inter-Sección (Gradient Divider) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 max-w-5xl h-px bg-gradient-to-r from-transparent via-[#1a2b3c]/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-24">
          
          <div className="relative section-fade-up">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/team.jpg"
                alt="Equipo de Hermanos Martínez"
                width={800}
                height={600}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          
          <div className="section-fade-up-delayed mt-6 sm:mt-0">
            <span className="text-[#d85b1d] font-bold text-xs sm:text-sm uppercase tracking-wider block mb-2 md:mb-4">
              SOBRE NOSOTROS
            </span>
            <h2 className="text-[28px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2b3c] mb-6 md:mb-10 text-balance">
              Empresa familiar de reformas en Madrid desde 1999
            </h2>

            <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-10 pt-1 md:pt-2">
              <div className="text-[#d85b1d] font-black text-5xl md:text-7xl leading-none tracking-tighter">25</div>
              <div className="text-[#1a2b3c] font-bold text-[17px] md:text-xl leading-tight text-balance border-l-2 border-[#d85b1d]/20 pl-4 md:pl-5 py-0.5 md:py-1">
                Años de experiencia <span className="block text-[#51677c] font-medium text-[15px] md:text-base mt-0 md:mt-0.5">realizando obras en Madrid</span>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 text-[#51677c] text-[15px] md:text-[1.05rem] leading-relaxed">
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
            
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-10 border-t border-[#1a2b3c]/5 pt-6 md:pt-8">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-[#d85b1d] flex-shrink-0" />
                <span className="font-bold text-[#1a2b3c] text-[15px] md:text-[1.05rem]">Profesionales Cualificados</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-[#d85b1d] flex-shrink-0" />
                <span className="font-bold text-[#1a2b3c] text-[15px] md:text-[1.05rem]">Garantía por Contrato</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-14 section-fade-up mt-8 md:mt-16 pt-8 md:pt-16 border-t border-[#1a2b3c]/5">
          
          <div className="flex flex-col md:items-start h-full">
            <div className="flex items-center gap-3 md:gap-0 mb-2 md:mb-5 md:flex-col md:items-start">
              <Shield strokeWidth={1.5} className="h-6 w-6 md:h-10 md:w-10 text-[#d85b1d] flex-shrink-0" />
              <h3 className="text-[1.1rem] md:text-xl font-bold text-[#1a2b3c] mt-0.5 md:mt-0">Transparencia</h3>
            </div>
            <p className="text-[#51677c] leading-relaxed text-[15px] md:text-[1.05rem]">
              Trabajamos con presupuestos claros, comunicación directa y una planificación
              realista desde el principio.
            </p>
          </div>

          <div className="flex flex-col md:items-start h-full">
            <div className="flex items-center gap-3 md:gap-0 mb-2 md:mb-5 md:flex-col md:items-start">
              <Award strokeWidth={1.5} className="h-6 w-6 md:h-10 md:w-10 text-[#d85b1d] flex-shrink-0" />
              <h3 className="text-[1.1rem] md:text-xl font-bold text-[#1a2b3c] mt-0.5 md:mt-0">Calidad</h3>
            </div>
            <p className="text-[#51677c] leading-relaxed text-[15px] md:text-[1.05rem]">
              Cuidamos materiales, ejecución y remates para que la reforma quede bien hecha y
              dure en el tiempo.
            </p>
          </div>

          <div className="flex flex-col md:items-start h-full">
            <div className="flex items-center gap-3 md:gap-0 mb-2 md:mb-5 md:flex-col md:items-start">
              <Users strokeWidth={1.5} className="h-6 w-6 md:h-10 md:w-10 text-[#d85b1d] flex-shrink-0" />
              <h3 className="text-[1.1rem] md:text-xl font-bold text-[#1a2b3c] mt-0.5 md:mt-0">Experiencia</h3>
            </div>
            <p className="text-[#51677c] leading-relaxed text-[15px] md:text-[1.05rem]">
              Más de 25 años reformando viviendas en Madrid y más de 1.500 proyectos realizados.
            </p>
          </div>

          <div className="flex flex-col md:items-start h-full">
            <div className="flex items-center gap-3 md:gap-0 mb-2 md:mb-5 md:flex-col md:items-start">
              <Heart strokeWidth={1.5} className="h-6 w-6 md:h-10 md:w-10 text-[#d85b1d] flex-shrink-0" />
              <h3 className="text-[1.1rem] md:text-xl font-bold text-[#1a2b3c] mt-0.5 md:mt-0">Cuidado</h3>
            </div>
            <p className="text-[#51677c] leading-relaxed text-[15px] md:text-[1.05rem]">
              Entramos en tu casa para trabajar con orden, respeto y atención al detalle en cada
              fase de la obra.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
