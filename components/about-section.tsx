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
              Profesionales de verdad, trato cercano
            </h2>

            <div className="flex items-center gap-4 md:gap-5 mb-6 md:mb-10 pt-1 md:pt-2">
              <div className="text-[#d85b1d] font-black text-5xl md:text-7xl leading-none tracking-tighter">25</div>
              <div className="text-[#1a2b3c] font-bold text-[17px] md:text-xl leading-tight text-balance border-l-2 border-[#d85b1d]/20 pl-4 md:pl-5 py-0.5 md:py-1">
                Más de 25 años de experiencia{" "}
                <span className="block text-[#51677c] font-medium text-[15px] md:text-base mt-0 md:mt-0.5">
                  reformando viviendas en Madrid
                </span>
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 text-[#51677c] text-[15px] md:text-[1.05rem] leading-relaxed">
              <p>
                Somos una empresa familiar, no una cadena. Desde 1999 trabajamos en reformas en
                Madrid con responsabilidad y atención al detalle.
              </p>
              <p>
                Nuestro equipo propio coordina cada fase, manteniendo una comunicación cercana y un
                trato personal en todo momento.
              </p>
              <p>
                Llevamos más de 25 años reformando cocinas, baños y viviendas completas en Madrid
                con más de 1.500 proyectos realizados. Nuestro objetivo es que tengas una reforma
                bien planificada, con un presupuesto claro y un resultado duradero a la altura de lo
                acordado.
              </p>
            </div>
            
            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-10 border-t border-[#1a2b3c]/5 pt-6 md:pt-8">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-[#d85b1d] flex-shrink-0" />
                <span className="font-bold text-[#1a2b3c] text-[15px] md:text-[1.05rem]">Presupuesto claro</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-[#d85b1d] flex-shrink-0" />
                <span className="font-bold text-[#1a2b3c] text-[15px] md:text-[1.05rem]">Garantía mínima de 2 años</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:gap-12 lg:gap-14 section-fade-up mt-8 md:mt-16 pt-8 md:pt-16 border-t border-[#1a2b3c]/5">
          
          <div className="flex flex-col md:items-start h-full border-b border-[#1a2b3c]/5 pb-5 mb-5 md:border-0 md:pb-0 md:mb-0">
              <div className="flex items-center md:gap-0 mb-1 md:mb-5 md:flex-col md:items-start">
                <Shield strokeWidth={1.5} className="hidden md:block md:h-10 md:w-10 text-[#d85b1d] flex-shrink-0" />
                <h3 className="text-base md:text-xl font-bold text-[#1a2b3c] md:mt-0">Transparencia</h3>
              </div>
              <p className="text-[#51677c] leading-relaxed text-[14px] md:text-[1.05rem]">
              Partidas detalladas para saber qué incluye cada parte de la reforma antes de empezar.
              </p>
            </div>

          <div className="flex flex-col md:items-start h-full border-b border-[#1a2b3c]/5 pb-5 mb-5 md:border-0 md:pb-0 md:mb-0">
              <div className="flex items-center md:gap-0 mb-1 md:mb-5 md:flex-col md:items-start">
                <Award strokeWidth={1.5} className="hidden md:block md:h-10 md:w-10 text-[#d85b1d] flex-shrink-0" />
                <h3 className="text-base md:text-xl font-bold text-[#1a2b3c] md:mt-0">Calidad</h3>
              </div>
              <p className="text-[#51677c] leading-relaxed text-[14px] md:text-[1.05rem]">
              Seleccionamos los mejores materiales y supervisamos cada detalle para un acabado
              duradero.
              </p>
            </div>

          <div className="hidden md:flex flex-col md:items-start h-full">
              <div className="flex items-center md:gap-0 mb-1 md:mb-5 md:flex-col md:items-start">
                <Users strokeWidth={1.5} className="hidden md:block md:h-10 md:w-10 text-[#d85b1d] flex-shrink-0" />
                <h3 className="text-base md:text-xl font-bold text-[#1a2b3c] md:mt-0">Experiencia</h3>
              </div>
              <p className="text-[#51677c] leading-relaxed text-[14px] md:text-[1.05rem]">
              25 años reformando viviendas en Madrid nos avalan. Más de 1.500 proyectos completados
              demuestran nuestra solvencia.
              </p>
            </div>

          <div className="flex flex-col md:items-start h-full pb-2 md:pb-0">
              <div className="flex items-center md:gap-0 mb-1 md:mb-5 md:flex-col md:items-start">
                <Heart strokeWidth={1.5} className="hidden md:block md:h-10 md:w-10 text-[#d85b1d] flex-shrink-0" />
                <h3 className="text-base md:text-xl font-bold text-[#1a2b3c] md:mt-0">Cercanía</h3>
              </div>
              <p className="text-[#51677c] leading-relaxed text-[14px] md:text-[1.05rem]">
              Entramos en tu casa con respeto, orden y atención al detalle, como si fuera nuestra.
              Mantenemos la comunicación abierta para que estés tranquilo en cada fase.
              </p>
            </div>

        </div>
      </div>
    </section>
  )
}
