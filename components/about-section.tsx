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
            
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-[#1a2b3c] text-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl max-w-[14rem] sm:max-w-xs z-10 hidden sm:block">
              <p className="text-4xl md:text-5xl font-bold text-[#d85b1d] mb-1 md:mb-2">25</p>
              <p className="text-sm sm:text-base md:text-lg text-white/90">Años de Experiencia</p>
            </div>
          </div>
          
          <div className="section-fade-up-delayed mt-6 sm:mt-0">
            <span className="text-[#d85b1d] font-bold text-xs sm:text-sm uppercase tracking-wider block mb-2 md:mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a2b3c] mb-6 md:mb-8 text-balance">
              Construyendo Hogares Desde 1999
            </h2>
            <div className="space-y-4 md:space-y-6 text-[#51677c] text-base md:text-lg leading-relaxed">
              <p>
                Hermanos Martínez se fundó con una creencia simple: los propietarios merecen <span className="text-[#1a2b3c] font-semibold">honestidad, calidad y cuidado</span> en cada proyecto.
              </p>
              <p>
                Con más de 25 años de experiencia y más de 1.500 proyectos completados, hemos construido nuestra reputación sobre presupuestos transparentes, ejecución excepcional y tratando cada casa como si fuera la nuestra.
              </p>
              <p>
                Nuestro equipo de profesionales aporta verdadera dedicación a cada reforma integral, cocina o baño que creamos. Tu espacio soñado es nuestra misión.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-slate-100">
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-[#d85b1d]" />
                <span className="font-bold text-[#1a2b3c] text-sm sm:text-base">Profesionales Cualificados</span>
              </div>
              <div className="flex items-center gap-3 bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-slate-100">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-[#d85b1d]" />
                <span className="font-bold text-[#1a2b3c] text-sm sm:text-base">Garantía por Contrato</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 section-fade-up">
          
          <div className="rounded-xl border border-slate-100 bg-white shadow-lg lg:hover:shadow-xl transition-all duration-300 lg:hover:-translate-y-2">
            <div className="p-6 sm:p-8 text-center h-full flex flex-col items-center">
              <div className="bg-[#f2f6ff] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-[#d85b1d]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1a2b3c] mb-3">Transparencia</h3>
              <p className="text-[#51677c] leading-relaxed text-sm">
                Precios honestos, comunicación clara, sin sorpresas. Lo que ves y firmas es lo que verdaderamente se ejecuta.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-100 bg-white shadow-lg lg:hover:shadow-xl transition-all duration-300 lg:hover:-translate-y-2">
            <div className="p-6 sm:p-8 text-center h-full flex flex-col items-center">
              <div className="bg-[#f2f6ff] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                <Award className="h-7 w-7 sm:h-8 sm:w-8 text-[#d85b1d]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1a2b3c] mb-3">Calidad</h3>
              <p className="text-[#51677c] leading-relaxed text-sm">
                Materiales de primera, acabados excelentes y atención a cada remate. Excelencia asegurada en toda la ejecución.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-100 bg-white shadow-lg lg:hover:shadow-xl transition-all duration-300 lg:hover:-translate-y-2">
            <div className="p-6 sm:p-8 text-center h-full flex flex-col items-center">
              <div className="bg-[#f2f6ff] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                <Users className="h-7 w-7 sm:h-8 sm:w-8 text-[#d85b1d]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1a2b3c] mb-3">Experiencia</h3>
              <p className="text-[#51677c] leading-relaxed text-sm">
                Más de 25 años sirviendo en Madrid con más de 1.500 proyectos cerrados de éxito y clientes que nos recomiendan.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-100 bg-white shadow-lg lg:hover:shadow-xl transition-all duration-300 lg:hover:-translate-y-2">
            <div className="p-6 sm:p-8 text-center h-full flex flex-col items-center">
              <div className="bg-[#f2f6ff] w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5 sm:mb-6">
                <Heart className="h-7 w-7 sm:h-8 sm:w-8 text-[#d85b1d]" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#1a2b3c] mb-3">Cuidado</h3>
              <p className="text-[#51677c] leading-relaxed text-sm">
                Tratamos cada vivienda como si fuera la nuestra. Tu tranquilidad es nuestra prioridad durante todos los oficios.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
