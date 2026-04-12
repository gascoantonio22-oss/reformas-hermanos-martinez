import type { FaqItem } from "@/lib/site"

export type BlogCardLink = {
  href: string
  eyebrow: string
  title: string
  subtitle: string
}

export type BlogTable = {
  headers: string[]
  rows: string[][]
  caption?: string
}

export type BlogSection = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  orderedItems?: string[]
  table?: BlogTable
}

export type BlogPost = {
  slug: string
  eyebrow: string
  title: string
  subtitle: string
  metaTitle: string
  metaDescription: string
  publishDate: string
  modifiedDate: string
  sections: BlogSection[]
  faq?: FaqItem[]
  relatedSlugs: string[]
  serviceLinks: BlogCardLink[]
}

export const blogIndexTitle = "Blog SEO de reformas en Madrid | Hermanos Martínez"
export const blogIndexDescription =
  "Guías prácticas, precios orientativos, permisos y consejos para planificar mejor una reforma en Madrid."

const publishDate = "2026-04-12T08:00:00+02:00"

const serviceLinks = {
  integral: {
    href: "/reformas-integrales-madrid",
    eyebrow: "SERVICIO",
    title: "Reformas integrales en Madrid",
    subtitle: "Coordinamos toda la obra con un único equipo, presupuesto claro y plazos por escrito.",
  },
  kitchen: {
    href: "/reformas-cocinas-madrid",
    eyebrow: "SERVICIO",
    title: "Reformas de cocinas en Madrid",
    subtitle: "Diseño, obra y montaje coordinados para una cocina práctica y duradera.",
  },
  bathroom: {
    href: "/reformas-banos-madrid",
    eyebrow: "SERVICIO",
    title: "Reformas de baños en Madrid",
    subtitle: "Baños limpios, cómodos y bien resueltos por dentro y por fuera.",
  },
  shower: {
    href: "/cambiar-banera-por-ducha-madrid",
    eyebrow: "SERVICIO",
    title: "Cambiar bañera por ducha en Madrid",
    subtitle: "Una obra contenida para ganar comodidad, accesibilidad y seguridad.",
  },
} satisfies Record<string, BlogCardLink>

export const blogPosts: BlogPost[] = [
  {
    slug: "guia-reformas-integrales-2026-precios-plazos-consejos",
    eyebrow: "GUÍA PRINCIPAL",
    title: "Reformas integrales en 2026",
    subtitle: "Coste real, plazos y decisiones clave.",
    metaTitle: "Reformas integrales en 2026 | Hermanos Martínez",
    metaDescription:
      "Reformas integrales en 2026 con precios orientativos, plazos reales y criterios para comparar presupuestos.",
    publishDate,
    modifiedDate: publishDate,
    sections: [
      {
        heading: "Cuánto cuesta una reforma integral en 2026",
        paragraphs: [
          "El coste de una reforma integral varía según el tamaño de la vivienda, la calidad de los materiales y la complejidad de los trabajos.",
          "Como referencia, los precios medios del mercado suelen moverse entre 700 y 900 €/m². En calidades altas, el rango puede subir hasta 800-1.000 €/m².",
          "Un piso de 50 m² podría situarse en torno a 35.000-45.000 €, mientras que uno de 100 m² estaría más cerca de 70.000-90.000 €.",
        ],
      },
      {
        heading: "Qué hace subir el presupuesto",
        bullets: [
          "Metros cuadrados: cuanta más superficie hay que reformar, más materiales y mano de obra se necesitan.",
          "Calidad de materiales: cerámica, sanitarios y pavimentos de gama alta elevan el precio final.",
          "Obras de estructura: tirar muros o cambiar la distribución exige licencias y un proyecto técnico.",
          "Ubicación: en ciudades grandes como Madrid los costes de materiales y mano de obra suelen ser más altos.",
        ],
      },
      {
        heading: "Cómo comparar presupuestos con criterio",
        paragraphs: [
          "Lo importante no es solo el precio final, sino que cada presupuesto incluya las mismas partidas, calidades y alcance de obra.",
          "Pide siempre un desglose claro, revisa los materiales propuestos y compara lo que realmente entra y lo que queda fuera.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Cuánto cuesta de media una reforma integral en Madrid?",
        answer:
          "Depende de los metros, los materiales y el alcance. Como orientación, muchos proyectos se mueven entre 700 y 900 €/m², con variaciones según calidades y complejidad.",
      },
      {
        question: "¿Qué suele encarecer más una reforma integral?",
        answer:
          "Normalmente encarecen la obra los cambios de distribución, los materiales de gama alta, las instalaciones nuevas y los imprevistos técnicos detectados durante la demolición.",
      },
      {
        question: "¿Conviene pedir varios presupuestos?",
        answer:
          "Sí. Lo ideal es comparar presupuestos con el mismo alcance y las mismas calidades para saber de verdad qué te ofrece cada empresa.",
      },
    ],
    relatedSlugs: [
      "cuanto-cuesta-reformar-piso-madrid-2026",
      "que-incluye-reforma-integral-que-no",
      "cuanto-tarda-reforma-integral-vivienda",
    ],
    serviceLinks: [serviceLinks.integral, serviceLinks.kitchen, serviceLinks.bathroom],
  },
  {
    slug: "cuanto-cuesta-reformar-piso-madrid-2026",
    eyebrow: "PRECIO DE PISO",
    title: "Reformar un piso en Madrid",
    subtitle: "Rangos, variables y lectura del presupuesto.",
    metaTitle: "Reformar un piso en Madrid | Hermanos Martínez",
    metaDescription:
      "Precio orientativo para reformar un piso en Madrid en 2026, con ejemplos por metros cuadrados, materiales y complejidad de la obra.",
    publishDate,
    modifiedDate: publishDate,
    sections: [
      {
        heading: "Rangos de referencia por metro cuadrado",
        paragraphs: [
          "El coste de una reforma integral de piso varía por tamaño, calidades y complejidad, pero como referencia los rangos habituales del mercado suelen estar entre 700 y 900 €/m².",
          "Un piso de 50 m² puede rondar los 35.000-45.000 €, mientras que uno de 100 m² puede acercarse a 70.000-90.000 €.",
          "Si eliges materiales y acabados de gama alta, el coste puede subir todavía más.",
        ],
      },
      {
        heading: "Factores que más influyen",
        bullets: [
          "Metros cuadrados y distribución actual de la vivienda.",
          "Nivel de calidades que quieras en suelos, revestimientos y carpinterías.",
          "Si hay que modificar muros, instalaciones o carpintería interior.",
          "La ciudad y el acceso a la vivienda, que pueden elevar el coste de mano de obra y logística.",
        ],
      },
      {
        heading: "Ejemplo práctico",
        paragraphs: [
          "Una reforma integral de 80 m² en una gran ciudad, con acabados de calidad media, puede situarse aproximadamente entre 45.000 y 70.000 €.",
          "En localizaciones más económicas o en viviendas con una intervención más contenida, el precio puede bajar de forma notable.",
        ],
      },
    ],
    relatedSlugs: [
      "guia-reformas-integrales-2026-precios-plazos-consejos",
      "que-incluye-reforma-integral-que-no",
      "pedir-presupuestos-reforma-que-comparar",
    ],
    serviceLinks: [serviceLinks.integral, serviceLinks.bathroom, serviceLinks.kitchen],
  },
  {
    slug: "cuanto-cuesta-reformar-cocina-madrid",
    eyebrow: "PRECIO DE COCINA",
    title: "Reformar una cocina en Madrid",
    subtitle: "Qué pesa de verdad en el presupuesto.",
    metaTitle: "Reformar una cocina en Madrid | Hermanos Martínez",
    metaDescription:
      "Guía de precios para reformar una cocina en Madrid con ejemplos de presupuesto, factores que encarecen la obra y consejos para ahorrar.",
    publishDate,
    modifiedDate: publishDate,
    sections: [
      {
        heading: "Rango de precios habitual",
        paragraphs: [
          "Una reforma de cocina suele moverse entre 4.000 y 10.000 € en proyectos básicos o de nivel medio.",
          "En cocinas grandes, con materiales de gama alta o con cambios importantes de distribución, el presupuesto puede subir a 15.000 € o más.",
        ],
      },
      {
        heading: "Qué pesa más en el presupuesto",
        bullets: [
          "Materiales y mobiliario: alrededor del 40% del presupuesto puede ir a muebles y electrodomésticos.",
          "Fontanería y electricidad: si hay que cambiar tuberías o reubicar puntos de agua, el coste sube.",
          "Revestimientos y suelos: alicatados y pavimentos representan una parte importante del total.",
        ],
      },
      {
        heading: "Ejemplo orientativo",
        paragraphs: [
          "En una cocina de 8-9 m², un presupuesto orientativo puede incluir 500 € de demoliciones, 3.000 € de mobiliario y encimera, 2.000 € de electrodomésticos, 1.500 € de pavimentos y alicatados, 700 € de fontanería, 750 € de electricidad, 900 € de encimera adicional y 270 € de falso techo.",
          "Con ese reparto, el total puede acercarse a 9.620 € antes de sumar trabajos especiales o mejoras de diseño.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Qué puede encarecer más una cocina?",
        answer:
          "Suelen encarecerla los muebles a medida, las encimeras más técnicas, los cambios de instalaciones y las obras para abrir la cocina al salón.",
      },
      {
        question: "¿Cómo puedo reducir el coste?",
        answer:
          "Comparando varios presupuestos, ajustando calidades y priorizando materiales resistentes pero no necesariamente de gama alta.",
      },
      {
        question: "¿Incluís instalación y montaje?",
        answer:
          "Sí. La cocina funciona mejor cuando fontanería, electricidad, mobiliario y encimera se coordinan desde el principio.",
      },
    ],
    relatedSlugs: [
      "errores-comunes-reformar-cocina",
      "material-encimeras-suelos-revestimientos",
      "cuanto-cuesta-reformar-bano-madrid",
    ],
    serviceLinks: [serviceLinks.kitchen, serviceLinks.integral, serviceLinks.shower],
  },
  {
    slug: "cuanto-cuesta-reformar-bano-madrid",
    eyebrow: "PRECIO DE BAÑO",
    title: "Reformar un baño en Madrid",
    subtitle: "Partidas, calidades y presupuesto transparente.",
    metaTitle: "Reformar un baño en Madrid | Hermanos Martínez",
    metaDescription:
      "Precio orientativo de reforma de baño en Madrid, con factores que influyen, ejemplos de coste y consejos para comparar presupuestos.",
    publishDate,
    modifiedDate: publishDate,
    sections: [
      {
        heading: "Coste medio de una reforma de baño",
        paragraphs: [
          "Una reforma integral de baño estándar suele situarse entre 2.500 y 4.000 € de media.",
          "En baños muy pequeños puede haber presupuestos más bajos, mientras que baños amplios, con más calidades o con soluciones premium pueden acercarse a 6.000 € o más.",
        ],
      },
      {
        heading: "Qué hace variar el precio",
        bullets: [
          "Tamaño del baño y número de elementos a renovar.",
          "Calidad de sanitarios, griferías y platos de ducha.",
          "Necesidad de cambiar tuberías, desagües o calefacción auxiliar.",
          "Cantidad de alicatado, ajustes y trabajos de remate.",
        ],
      },
      {
        heading: "Qué debe incluir un presupuesto claro",
        paragraphs: [
          "Un precio transparente debe detallar sanitarios, alicatado, fontanería, mano de obra y cualquier partida extra por separado.",
          "Así es más fácil detectar diferencias entre empresas y entender si cambian por calidades o por servicios adicionales.",
        ],
      },
    ],
    relatedSlugs: [
      "errores-comunes-reformar-bano-pequeno",
      "que-incluye-reforma-integral-que-no",
      "pedir-presupuestos-reforma-que-comparar",
    ],
    serviceLinks: [serviceLinks.bathroom, serviceLinks.shower, serviceLinks.integral],
  },
  {
    slug: "que-incluye-reforma-integral-que-no",
    eyebrow: "ALCANCE",
    title: "Qué incluye una reforma integral",
    subtitle: "Qué entra, qué no y por qué dejarlo escrito.",
    metaTitle: "Qué incluye una reforma integral | Hermanos Martínez",
    metaDescription:
      "Descubre qué suele incluir una reforma integral, qué no, y por qué es importante dejarlo definido antes de firmar el presupuesto.",
    publishDate,
    modifiedDate: publishDate,
    sections: [
      {
        heading: "Qué suele incluir una reforma integral",
        bullets: [
          "Demoliciones y albañilería: tabiques, soleras, nuevos huecos o falsos techos.",
          "Revestimientos y acabados: azulejos, suelos y pintura.",
          "Instalaciones completas: fontanería, electricidad, climatización y gas si aplica.",
          "Carpintería: puertas, armarios o mobiliario fijo de cocina y baño.",
          "Finales: rodapiés, zócalos, limpieza final y repasos.",
        ],
      },
      {
        heading: "Qué normalmente no entra",
        paragraphs: [
          "No suelen entrar muebles y enseres personales, decoración, electrodomésticos libres o servicios que no se hayan contratado de forma expresa.",
          "Tampoco suelen incluirse licencias o tasas municipales salvo que la oferta lo especifique de forma clara.",
        ],
      },
      {
        heading: "Por qué hay que dejarlo por escrito",
        paragraphs: [
          "El contrato debe especificar qué partidas entran en el precio, qué materiales se incluyen y qué partidas quedan fuera.",
          "Cuanto más claro esté el alcance desde el principio, menos riesgo hay de malentendidos o sobrecostes durante la obra.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Las licencias suelen entrar en el presupuesto?",
        answer:
          "No siempre. Conviene comprobarlo antes de firmar para saber si el trámite administrativo va aparte o queda incluido.",
      },
      {
        question: "¿Los electrodomésticos están incluidos?",
        answer:
          "Normalmente no, salvo que se indique expresamente en la oferta o en el contrato.",
      },
    ],
    relatedSlugs: [
      "guia-reformas-integrales-2026-precios-plazos-consejos",
      "cuanto-tarda-reforma-integral-vivienda",
      "permisos-reforma-madrid",
    ],
    serviceLinks: [serviceLinks.integral, serviceLinks.kitchen, serviceLinks.bathroom],
  },
  {
    slug: "cuanto-tarda-reforma-integral-vivienda",
    eyebrow: "PLAZOS",
    title: "Cuánto tarda una reforma integral",
    subtitle: "Fases de obra y factores que alargan el plazo.",
    metaTitle: "Cuánto tarda una reforma integral | Hermanos Martínez",
    metaDescription:
      "Plazo orientativo de una reforma integral de vivienda, con fases de obra y factores que pueden alargar o acortar el calendario.",
    publishDate,
    modifiedDate: publishDate,
    sections: [
      {
        heading: "Plazo típico de una reforma integral",
        paragraphs: [
          "Una reforma integral suele rondar los 4 o 5 meses para una vivienda de tamaño medio, entre 60 y 120 m².",
          "El tiempo final depende de la superficie, del alcance de la obra, del número de operarios y de la época del año.",
        ],
      },
      {
        heading: "Fases habituales de la obra",
        orderedItems: [
          "Derribos y retirada de escombros, normalmente en torno a dos semanas.",
          "Tabiques, nivelaciones y replanteos, que pueden ocupar dos o tres semanas.",
          "Instalaciones eléctricas, de fontanería y calefacción, con una duración aproximada de cuatro semanas.",
          "Revestimientos y solados, con una media de dos o tres semanas.",
          "Carpintería, pintura y acabados finales, a lo que suele sumarse una semana de limpieza y entrega.",
        ],
      },
      {
        heading: "Qué puede alargar el plazo",
        bullets: [
          "Cambios de última hora en distribución o materiales.",
          "Hallazgos de humedades o problemas técnicos no previstos.",
          "Retrasos en permisos, suministros o decisiones de cliente.",
        ],
      },
    ],
    relatedSlugs: [
      "que-incluye-reforma-integral-que-no",
      "guia-reformas-integrales-2026-precios-plazos-consejos",
      "antes-despues-reforma-real-proceso-plazo-presupuesto",
    ],
    serviceLinks: [serviceLinks.integral, serviceLinks.bathroom, serviceLinks.kitchen],
  },
  {
    slug: "permisos-reforma-madrid",
    eyebrow: "PERMISOS",
    title: "Permisos para reformar en Madrid",
    subtitle: "Qué trámite suele pedir cada tipo de obra.",
    metaTitle: "Permisos para reformar en Madrid | Hermanos Martínez",
    metaDescription:
      "Qué permisos hacen falta para una reforma en Madrid según el alcance de la obra: licencia mayor, licencia menor o comunicación previa.",
    publishDate,
    modifiedDate: publishDate,
    sections: [
      {
        heading: "Obra mayor",
        paragraphs: [
          "La licencia de obra mayor suele ser necesaria cuando la reforma modifica la estructura o la distribución de la vivienda, o afecta a elementos comunes.",
          "En estos casos suele requerirse un proyecto técnico y el trámite puede tardar más en concederse.",
        ],
      },
      {
        heading: "Obra menor o comunicación previa",
        paragraphs: [
          "La licencia de obra menor aplica a reformas de alcance reducido que no alteran la estructura, como cambiar suelos, azulejos, pintar interiores o renovar baño y cocina sin tocar muros.",
          "En algunos municipios basta con una comunicación previa o declaración responsable para actuaciones todavía más sencillas.",
        ],
      },
      {
        heading: "Qué revisar antes de empezar",
        bullets: [
          "Consulta el ayuntamiento donde esté la vivienda y revisa qué trámite exige tu obra.",
          "Comprueba si hay limitaciones por horarios, residuos o actuaciones en elementos comunes.",
          "Deja claro con la empresa de reformas quién gestiona cada trámite para no empezar con dudas.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Puedo pintar una vivienda sin permiso en Madrid?",
        answer:
          "En Madrid, pintar interiores no suele requerir permiso, pero siempre conviene revisar la normativa concreta del municipio si la obra cambia de alcance.",
      },
      {
        question: "¿Qué pasa si reformo sin licencia?",
        answer:
          "Te expones a sanciones o a la paralización de la obra. Por eso merece la pena verificar el trámite antes de arrancar.",
      },
    ],
    relatedSlugs: [
      "que-incluye-reforma-integral-que-no",
      "cuanto-tarda-reforma-integral-vivienda",
      "reforma-integral-vs-reforma-parcial",
    ],
    serviceLinks: [serviceLinks.integral, serviceLinks.kitchen, serviceLinks.bathroom],
  },
  {
    slug: "reforma-integral-vs-reforma-parcial",
    eyebrow: "COMPARATIVA",
    title: "Integral o parcial",
    subtitle: "Cuándo conviene renovar toda la vivienda.",
    metaTitle: "Integral o parcial | Hermanos Martínez",
    metaDescription:
      "Comparativa entre reforma integral y reforma parcial para elegir la opción que mejor encaje con tu presupuesto, plazos y objetivos.",
    publishDate,
    modifiedDate: publishDate,
    sections: [
      {
        heading: "Cuándo compensa una reforma integral",
        paragraphs: [
          "La reforma integral es la mejor opción cuando la vivienda es antigua, quieres cambiar la distribución o necesitas renovar instalaciones, acabados y carpinterías de forma coordinada.",
          "Su ventaja es que todo queda actualizado y la casa gana coherencia, eficiencia y valor a largo plazo.",
        ],
      },
      {
        heading: "Cuándo conviene una reforma parcial",
        paragraphs: [
          "La reforma parcial suele encajar mejor si solo quieres mejorar una cocina, un baño o una estancia concreta, o si el presupuesto es más contenido.",
          "Es una buena solución cuando quieres avanzar por fases sin acometer toda la vivienda a la vez.",
        ],
      },
      {
        heading: "Resumen rápido",
        table: {
          headers: ["Aspecto", "Integral", "Parcial"],
          rows: [
            ["Alcance", "Toda la vivienda", "Solo una o varias estancias"],
            ["Plazo", "Más largo", "Más corto"],
            ["Coste", "Mayor inversión", "Más contenido"],
            ["Resultado", "Casa renovada de forma global", "Mejora puntual y localizada"],
          ],
        },
      },
    ],
    faq: [
      {
        question: "¿Qué opción da más valor a la vivienda?",
        answer:
          "La reforma integral suele aportar un cambio más notable porque actualiza todo el conjunto y evita parches sueltos.",
      },
      {
        question: "¿Puedo hacer una reforma parcial ahora y otra más adelante?",
        answer:
          "Sí. A veces es la mejor manera de repartir el gasto en el tiempo, siempre que el plan general esté bien pensado.",
      },
    ],
    relatedSlugs: [
      "guia-reformas-integrales-2026-precios-plazos-consejos",
      "que-incluye-reforma-integral-que-no",
      "permisos-reforma-madrid",
    ],
    serviceLinks: [serviceLinks.integral, serviceLinks.kitchen, serviceLinks.bathroom],
  },
  {
    slug: "errores-comunes-reformar-cocina",
    eyebrow: "COCINAS",
    title: "Errores al reformar una cocina",
    subtitle: "Los fallos que más encarecen y complican la obra.",
    metaTitle: "Errores al reformar una cocina | Hermanos Martínez",
    metaDescription:
      "Errores comunes al reformar una cocina y cómo evitarlos para no disparar el presupuesto ni sacrificar funcionalidad.",
    publishDate,
    modifiedDate: publishDate,
    sections: [
      {
        heading: "Errores que conviene evitar",
        bullets: [
          "Empezar sin un diseño claro y cambiar decisiones durante la obra.",
          "Apretar demasiado el presupuesto y no dejar margen para imprevistos.",
          "No pensar la iluminación general y de trabajo desde el principio.",
          "Priorizar la estética y olvidar el almacenamiento o la circulación.",
          "No contratar profesionales especializados para cada oficio.",
        ],
      },
      {
        heading: "Cómo evitarlos",
        paragraphs: [
          "La mejor defensa es llegar a la obra con un proyecto cerrado, un presupuesto desglosado y una idea clara de lo que quieres cambiar.",
          "Si todo se decide antes de empezar, la cocina sale más coherente y el coste final se controla mucho mejor.",
        ],
      },
    ],
    relatedSlugs: [
      "cuanto-cuesta-reformar-cocina-madrid",
      "material-encimeras-suelos-revestimientos",
      "pedir-presupuestos-reforma-que-comparar",
    ],
    serviceLinks: [serviceLinks.kitchen, serviceLinks.integral, serviceLinks.bathroom],
  },
  {
    slug: "errores-comunes-reformar-bano-pequeno",
    eyebrow: "BAÑOS",
    title: "Errores en baños pequeños",
    subtitle: "Cómo ganar orden, luz y ventilación.",
    metaTitle: "Errores en baños pequeños | Hermanos Martínez",
    metaDescription:
      "Errores comunes al reformar un baño pequeño y consejos para ganar espacio, comodidad y una mejor distribución.",
    publishDate,
    modifiedDate: publishDate,
    sections: [
      {
        heading: "Fallos habituales en baños pequeños",
        bullets: [
          "No medir bien el espacio ni definir antes si quieres ducha o bañera.",
          "Elegir materiales poco resistentes a la humedad o de mantenimiento complicado.",
          "Olvidar la ventilación y favorecer la condensación o el moho.",
          "Colocar piezas demasiado grandes que dificultan la circulación.",
          "Dejar la iluminación como un detalle de última hora.",
        ],
      },
      {
        heading: "Qué ayuda a aprovecharlo mejor",
        paragraphs: [
          "Los muebles suspendidos, las mamparas correderas y los sanitarios compactos suelen funcionar muy bien en espacios reducidos.",
          "Cuando la distribución está bien resuelta y la obra se planifica con tiempo, el baño pequeño gana en uso real y en sensación de amplitud.",
        ],
      },
    ],
    relatedSlugs: [
      "cuanto-cuesta-reformar-bano-madrid",
      "reforma-integral-vs-reforma-parcial",
      "cuanto-tarda-reforma-integral-vivienda",
    ],
    serviceLinks: [serviceLinks.bathroom, serviceLinks.shower, serviceLinks.integral],
  },
  {
    slug: "material-encimeras-suelos-revestimientos",
    eyebrow: "MATERIALES",
    title: "Materiales para cocina y baño",
    subtitle: "Qué elegir según uso, mantenimiento y presupuesto.",
    metaTitle: "Materiales para cocina y baño | Hermanos Martínez",
    metaDescription:
      "Guía de materiales para encimeras, suelos y revestimientos según uso, presupuesto y nivel de mantenimiento que quieras asumir.",
    publishDate,
    modifiedDate: publishDate,
    sections: [
      {
        heading: "Encimeras",
        bullets: [
          "Laminadas o madera tratada: opción económica para presupuestos más ajustados.",
          "Cuarzo aglomerado y porcelánico: equilibrio muy sólido entre resistencia, estética y precio.",
          "Granito y mármol: alta gama para quien prioriza imagen y durabilidad con más inversión.",
        ],
      },
      {
        heading: "Suelos",
        bullets: [
          "Porcelánico: ideal para uso intensivo, fácil de limpiar y muy resistente a humedad y golpes.",
          "Vinílico resistente al agua: cómodo, versátil y útil cuando se busca una reforma más cálida o rápida.",
          "Piedra natural o microcemento: buenas opciones para looks más decorativos, siempre valorando el mantenimiento.",
        ],
      },
      {
        heading: "Revestimientos",
        table: {
          headers: ["Zona", "Material recomendado", "Motivo"],
          rows: [
            ["Cocina", "Cerámica esmaltada o panel impermeable", "Limpieza fácil y buena resistencia al agua"],
            ["Baño", "Porcelánico o cerámica técnica", "Resistencia a humedad y uso diario"],
            ["Zonas secas", "Pintura lavable o papel especial", "Acabado económico y más decorativo"],
          ],
        },
      },
    ],
    relatedSlugs: [
      "cuanto-cuesta-reformar-cocina-madrid",
      "cuanto-cuesta-reformar-bano-madrid",
      "errores-comunes-reformar-cocina",
    ],
    serviceLinks: [serviceLinks.kitchen, serviceLinks.bathroom, serviceLinks.integral],
  },
  {
    slug: "antes-despues-reforma-real-proceso-plazo-presupuesto",
    eyebrow: "CASO REAL",
    title: "Antes y después de una reforma",
    subtitle: "Cómo se ordena una obra bien resuelta.",
    metaTitle: "Antes y después de una reforma | Hermanos Martínez",
    metaDescription:
      "Proceso real de reforma, plazo orientativo y presupuesto desglosado para entender cómo se organiza una obra bien llevada.",
    publishDate,
    modifiedDate: publishDate,
    sections: [
      {
        heading: "Visita y proyecto",
        paragraphs: [
          "La reforma empieza con una visita técnica para tomar medidas, entender el estado real de la vivienda y detectar condicionantes antes de presupuestar.",
          "Después se define el alcance, se ajustan calidades y se cierra un presupuesto detallado para evitar dudas antes de arrancar.",
        ],
      },
      {
        heading: "Ejecución por fases",
        orderedItems: [
          "Demoliciones y retirada de escombros.",
          "Nuevas instalaciones y albañilería.",
          "Revestimientos, carpintería y pintura.",
          "Remates, limpieza y comprobación final.",
        ],
      },
      {
        heading: "Qué debe reflejar el presupuesto",
        paragraphs: [
          "Un presupuesto transparente muestra materiales, mano de obra, partidas separadas y qué entra exactamente en cada fase.",
          "Eso permite comparar ofertas de forma más justa y tener una referencia clara de lo que se está contratando.",
        ],
      },
    ],
    relatedSlugs: [
      "cuanto-tarda-reforma-integral-vivienda",
      "pedir-presupuestos-reforma-que-comparar",
      "guia-reformas-integrales-2026-precios-plazos-consejos",
    ],
    serviceLinks: [serviceLinks.integral, serviceLinks.kitchen, serviceLinks.bathroom],
  },
  {
    slug: "pedir-presupuestos-reforma-que-comparar",
    eyebrow: "PRESUPUESTOS",
    title: "Pedir presupuestos de reforma",
    subtitle: "Qué comparar para elegir con criterio.",
    metaTitle: "Pedir presupuestos de reforma | Hermanos Martínez",
    metaDescription:
      "Consejos para pedir presupuestos de reforma, comparar partidas y entender cuándo una oferta es realmente comparable.",
    publishDate,
    modifiedDate: publishDate,
    sections: [
      {
        heading: "Mismo alcance para todos",
        bullets: [
          "Pide que cada empresa presupueste exactamente los mismos trabajos.",
          "Define la misma gama de materiales, acabados y unidades para que la comparación sea justa.",
          "Aclara qué entra y qué queda fuera antes de revisar el precio final.",
        ],
      },
      {
        heading: "Qué más conviene mirar",
        bullets: [
          "La reputación y experiencia de la empresa.",
          "El plazo de ejecución y si está bien definido por escrito.",
          "El nivel de detalle del presupuesto y si las partidas están desglosadas.",
          "Si los materiales están incluidos o si se cobran aparte.",
        ],
      },
      {
        heading: "Checklist rápida",
        table: {
          headers: ["Punto", "Qué revisar"],
          rows: [
            ["Alcance", "Que todos los presupuestos incluyan los mismos trabajos"],
            ["Calidades", "Que los materiales sean comparables"],
            ["Plazo", "Que esté definido por escrito"],
            ["Partidas", "Que el presupuesto esté desglosado"],
            ["Materiales", "Que quede claro qué está incluido"],
          ],
        },
      },
    ],
    relatedSlugs: [
      "guia-reformas-integrales-2026-precios-plazos-consejos",
      "que-incluye-reforma-integral-que-no",
      "antes-despues-reforma-real-proceso-plazo-presupuesto",
    ],
    serviceLinks: [serviceLinks.integral, serviceLinks.kitchen, serviceLinks.bathroom],
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPathBySlug(slug: string) {
  return `/blog/${slug}`
}
