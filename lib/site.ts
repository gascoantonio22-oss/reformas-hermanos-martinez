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
  locationLabel: "Madrid capital",
  locality: "Madrid",
  region: "Comunidad de Madrid",
  country: "ES",
  areaServed: "Madrid capital",
  hoursLabel: "Lun-Vie 8:00 a 19:00",
  openingHours: [
    {
      dayOfWeek: ["https://schema.org/Monday", "https://schema.org/Tuesday", "https://schema.org/Wednesday", "https://schema.org/Thursday", "https://schema.org/Friday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  defaultTitle: "Reformas en Madrid con presupuesto claro | Hermanos Martínez",
  defaultDescription:
    "Empresa familiar de reformas en Madrid capital. Reformas integrales, cocinas, baños y cambio de bañera por ducha con presupuesto claro, coordinación de obra y atención cercana.",
  defaultOgImage: "/images/hero-renovation.jpg",
  sameAs: [] as string[],
}
