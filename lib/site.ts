export type FaqItem = {
  question: string
  answer: string
}

// TODO: Completar dirección pública exacta, coordenadas y perfiles sociales
// cuando la empresa quiera mostrarlos en abierto.
export const siteConfig = {
  name: "Reformas Hermanos Martínez",
  legalName: "Reformas Hermanos Martínez",
  url: "https://reformas-hermanos-martinez-five.vercel.app",
  email: "info@hermanosmartinez.es",
  phoneDisplay: "912 345 678",
  phoneHref: "+34912345678",
  whatsappHref: "https://wa.me/34612345678?text=Hola,%20me%20gustar%C3%ADa%20solicitar%20un%20presupuesto",
  locationLabel: "Madrid capital y alrededores",
  locality: "Madrid",
  region: "Comunidad de Madrid",
  country: "ES",
  areaServed: "Madrid capital y alrededores",
  hoursLabel: "Lun-Vie 8:00-19:00",
  openingHours: [
    {
      dayOfWeek: ["https://schema.org/Monday", "https://schema.org/Tuesday", "https://schema.org/Wednesday", "https://schema.org/Thursday", "https://schema.org/Friday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  defaultTitle: "Reformas en Madrid desde 1999 | Cocinas, baños e integrales | Hermanos Martínez",
  defaultDescription:
    "Empresa familiar de reformas integrales en Madrid y alrededores desde 1999. Reformamos cocinas, baños y viviendas completas con un presupuesto claro y trato directo.",
  defaultOgImage: "/images/hero-renovation.jpg",
  sameAs: [] as string[],
}
