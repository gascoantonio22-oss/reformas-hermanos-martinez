export type Service = {
  slug: string
  cardTitle: string
  pageTitle: string
  image: string
  price: string
  shortDescription: string
  intro: string
  highlights: string[]
  included: string[]
}

export const services: Service[] = [
  {
    slug: "reformas-cocinas",
    cardTitle: "Reformas de cocinas",
    pageTitle: "Reformas de cocinas",
    image: "/images/services/cocina.jpg",
    price: "Desde 6.900 €",
    shortDescription:
      "Diseñamos tu cocina completa con fontanería, electricidad, muebles y encimera, para que no tengas que coordinar distintos profesionales.",
    intro:
      "Reformamos cocinas para que resulten más cómodas, prácticas y agradables de usar cada día, adaptando la distribución y los materiales a cómo se vive la casa de verdad.",
    highlights: [
      "Mejor aprovechamiento del espacio para cocinar y guardar.",
      "Renovación de muebles, encimera, iluminación y puntos de agua.",
      "Materiales pensados para aguantar bien el uso diario.",
    ],
    included: [
      "Retirada de acabados y elementos anteriores.",
      "Actualización básica de fontanería y electricidad de la zona.",
      "Montaje de mobiliario, encimera y remates finales.",
      "Coordinación completa hasta dejar la cocina lista.",
    ],
  },
  {
    slug: "reformas-banos",
    cardTitle: "Reformas de baños",
    pageTitle: "Reformas de baños",
    image: "/images/services/bano.jpg",
    price: "Desde 4.900 €",
    shortDescription:
      "Especialistas en cambio de bañera por plato de ducha o reformas completas con nuevos azulejos, sanitarios y mobiliario.",
    intro:
      "Reformamos baños completos para que ganen comodidad, limpieza y funcionalidad, con soluciones duraderas y fáciles de mantener.",
    highlights: [
      "Cambio de sanitarios, mobiliario y griferías.",
      "Nuevos revestimientos con un acabado limpio y actual.",
      "Mejor aprovechamiento del espacio disponible.",
    ],
    included: [
      "Desmontaje y retirada de elementos existentes.",
      "Alicatado, pavimento y colocación de sanitarios.",
      "Ajustes de fontanería y electricidad del baño.",
      "Repaso final contigo antes de darlo por terminado.",
    ],
  },
  {
    slug: "reformas-integrales",
    cardTitle: "Reformas integrales",
    pageTitle: "Reformas integrales",
    image: "/images/services/reforma-integral.jpg",
    price: "Desde 650 €/m2",
    shortDescription:
      "Renovamos tu vivienda completa coordinando todos los trabajos para que el resultado quede bien ejecutado y a tu gusto.",
    intro:
      "Nos encargamos de la reforma completa de la vivienda para que todo tenga orden, coherencia y un único equipo coordinando el proceso.",
    highlights: [
      "Coordinación de gremios y fases de obra.",
      "Actualización de distribución, instalaciones y acabados.",
      "Una visión conjunta para que toda la vivienda encaje.",
    ],
    included: [
      "Planificación de la obra y tiempos orientativos.",
      "Demoliciones, albañilería, instalaciones y terminaciones.",
      "Seguimiento de acabados y revisión final por estancias.",
      "Un solo interlocutor para llevar todo con claridad.",
    ],
  },
  {
    slug: "cambio-banera-ducha",
    cardTitle: "Cambio de bañera por ducha",
    pageTitle: "Cambio de bañera por ducha",
    image: "/images/services/bano-plato-ucha.jpg",
    price: "Desde 1.950 €",
    shortDescription:
      "Sustituimos tu bañera por un plato de ducha moderno, cómodo y fácil de limpiar en muy poco tiempo.",
    intro:
      "Cambiamos la bañera por una ducha más cómoda y accesible, con una obra contenida y un resultado que se nota desde el primer día.",
    highlights: [
      "Entrada más cómoda y segura.",
      "Menos mantenimiento y limpieza más fácil.",
      "Cambio muy visible sin meterse en una gran obra.",
    ],
    included: [
      "Retirada de bañera y preparación de la base.",
      "Colocación de plato de ducha y revestimiento necesario.",
      "Instalación de mampara y grifería si hace falta.",
      "Remates bien sellados y listos para usar.",
    ],
  },
  {
    slug: "alicatados",
    cardTitle: "Alicatados y solados",
    pageTitle: "Alicatados y solados",
    image: "/images/services/alicatados.jpg",
    price: "Desde 35 €/m2",
    shortDescription:
      "Colocación profesional de azulejos y suelos porcelánicos resistentes para cocina, baño o cualquier estancia.",
    intro:
      "Hacemos trabajos de alicatado y solado buscando un acabado limpio, bien nivelado y preparado para durar en zonas de mucho uso.",
    highlights: [
      "Colocación recta, juntas cuidadas y remates bien resueltos.",
      "Materiales aptos para cocina, baño y zonas de paso.",
      "Resultado limpio para que el revestimiento luzca bien.",
    ],
    included: [
      "Preparación de superficies y replanteo previo.",
      "Colocación de azulejo, suelo o porcelánico.",
      "Juntas, perfiles y remates finales.",
      "Limpieza de la zona al terminar.",
    ],
  },
  {
    slug: "carpinteria-interior",
    cardTitle: "Carpintería interior",
    pageTitle: "Carpintería interior",
    image: "/images/services/carpinteria-interior.jpg",
    price: "Desde 320 €/unidad",
    shortDescription:
      "Instalación de puertas, armarios empotrados, suelos laminados y soluciones de almacenamiento a medida.",
    intro:
      "Instalamos carpintería interior para mejorar el orden, el almacenamiento y la continuidad estética de la vivienda.",
    highlights: [
      "Puertas, armarios y soluciones de almacenaje.",
      "Acabados que encajan con el estilo de la casa.",
      "Ajustes limpios para que todo funcione bien.",
    ],
    included: [
      "Toma de medidas y propuesta de solución.",
      "Montaje de puertas, armarios o panelados.",
      "Herrajes, ajustes y remates finales.",
      "Revisión de cierres y funcionamiento.",
    ],
  },
  {
    slug: "pinturas-y-acabados",
    cardTitle: "Pintura y acabados",
    pageTitle: "Pintura y acabados",
    image: "/images/services/pinturas-y-acabados.jpg",
    price: "Desde 9 €/m2",
    shortDescription:
      "Pintura interior, alisado de paredes, reparación de grietas y acabados que dejan tu vivienda lista para disfrutar.",
    intro:
      "Nos ocupamos de la parte que más se nota al final: pintura, alisado y remates que hacen que la reforma se vea bien terminada.",
    highlights: [
      "Alisado, reparación de grietas y pintura interior.",
      "Acabados uniformes y mejor presencia en toda la estancia.",
      "Remates finos para cerrar bien la obra.",
    ],
    included: [
      "Protección de superficies y preparación previa.",
      "Masillado, lijado y puesta a punto de paredes.",
      "Aplicación de pintura en techos y paredes.",
      "Revisión final de esquinas, juntas y encuentros.",
    ],
  },
  {
    slug: "instalaciones",
    cardTitle: "Instalaciones",
    pageTitle: "Instalaciones",
    image: "/images/services/instalaciones.jpg",
    price: "Desde 1.800 €",
    shortDescription:
      "Actualizamos instalaciones eléctricas y de fontanería antiguas para mejorar la seguridad y cumplir la normativa actual.",
    intro:
      "Renovamos instalaciones antiguas para que la vivienda funcione mejor, con más seguridad y preparada para el uso de hoy.",
    highlights: [
      "Electricidad y fontanería adaptadas a necesidades actuales.",
      "Mejora de seguridad, caudales y puntos de uso.",
      "Base técnica bien resuelta para el resto de la reforma.",
    ],
    included: [
      "Revisión del estado actual y propuesta de mejora.",
      "Sustitución de líneas, tomas o circuitos necesarios.",
      "Adecuación de puntos de agua, desagüe e iluminación.",
      "Comprobación funcional al finalizar.",
    ],
  },
]

export const servicePriceNote =
  "Orientación habitual en España peninsular. El precio final puede variar según metros, materiales, accesos y el estado previo de la vivienda."

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}
