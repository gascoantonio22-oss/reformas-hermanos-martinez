import type { FaqItem } from "@/lib/site"

export type SeoLanding = {
  path: string
  serviceSlug: string
  title: string
  heroTitle?: string
  heroEyebrow?: string
  heroParagraphs?: string[]
  metaTitle: string
  metaDescription: string
  heroIntro: string
  directAnswer: string
  faqTitle: string
  faqDescription: string
  faqs: FaqItem[]
  relatedPaths: string[]

  heroSubtitle: string
  heroBadges: string[]
  advantages: { title: string; description: string; iconName: string; statLabel?: string }[]
  editorial: { title: string; badge: string; p1: string; p2: string; p3: string }
  editorialImage?: string
  galleryImages: string[]
  process: { title: string; description: string; timeframe: string }[]
  testimonials: { quote: string; author: string; location: string; initial: string; role?: string; date?: string }[]
  longContent: { subtitle?: string; paragraph: string }[]
}

export const homeFaqs: FaqItem[] = [
  {
    question: "¿Cuánto cuesta una reforma en Madrid?",
    answer:
      "Depende de los metros, del estado previo de la vivienda y del nivel de acabados. En Hermanos Martínez damos una orientación clara desde el principio y preparamos un presupuesto detallado para Madrid capital antes de arrancar la obra.",
  },
  {
    question: "¿Trabajáis con presupuesto cerrado?",
    answer:
      "Sí. Nuestro objetivo es que sepas qué se va a hacer, cuánto cuesta y en qué orden se ejecuta. Si aparece un imprevisto real, lo revisamos contigo antes de actuar para evitar extras inesperados durante la reforma.",
  },
  {
    question: "¿Cuánto tarda una reforma integral?",
    answer:
      "Una reforma integral en Madrid puede tardar desde varias semanas hasta algunos meses, según superficie, instalaciones y acabados. Antes de empezar te damos una estimación realista y un planning de obra para que tengas una referencia clara.",
  },
  {
    question: "¿Reformáis cocinas y baños en Madrid capital?",
    answer:
      "Sí. Trabajamos reformas integrales, cocinas, baños y cambio de bañera por ducha en Madrid capital. También coordinamos instalaciones, alicatados, carpintería interior y acabados para que no tengas que gestionar distintos gremios por separado.",
  },
  {
    question: "¿Os ocupáis de la coordinación de la obra?",
    answer:
      "Sí. Coordinamos gremios, materiales, fases y remates para que la reforma avance con orden. La idea es que tengas un único interlocutor y no vivas la obra como una suma de oficios sin seguimiento ni control.",
  },
  {
    question: "¿Qué incluye la visita inicial?",
    answer:
      "La visita técnica sirve para entender qué necesitas, revisar el estado real del espacio y detectar posibles complicaciones antes de presupuestar. Así el presupuesto sale mejor ajustado y con menos riesgo de sorpresas durante la ejecución.",
  },
]

export const seoLandings: SeoLanding[] = [
  {
    path: "/reformas-integrales-madrid",
    serviceSlug: "reformas-integrales",
    title: "Reformas integrales en Madrid",
    heroTitle: "Reformas integrales en Madrid desde 1999",
    heroEyebrow: "Construyendo Hogares Desde 1999",
    metaTitle: "Reformas integrales en Madrid | Empresa familiar con presupuesto claro | Hermanos Martínez",
    metaDescription:
      "Empresa familiar de reformas integrales en Madrid y alrededores desde 1999. Reformamos cocinas, baños y viviendas completas con un presupuesto claro y trato directo.",
    heroIntro:
      "Coordinamos tu reforma completa con un único equipo al frente de la obra, un presupuesto claro y un calendario realista.",
    heroSubtitle:
      "Elaboramos un presupuesto desglosado, trabajamos en Madrid capital con equipo propio, fijamos plazos por escrito y ofrecemos un único interlocutor durante todo el proceso.",
    heroParagraphs: [
      "Coordinamos tu reforma completa con un único equipo al frente de la obra, un presupuesto claro y un calendario realista.",
      "Elaboramos un presupuesto desglosado, trabajamos en Madrid capital con equipo propio, fijamos plazos por escrito y ofrecemos un único interlocutor durante todo el proceso.",
    ],
    heroBadges: ["Presupuesto desglosado", "Madrid capital", "Equipo propio", "Plazos por escrito"],
    advantages: [
      {
        title: "Un único interlocutor",
        description: "Coordinamos todos los gremios, materiales y fases de obra de tu vivienda para una reforma completa sin sorpresas.",
        iconName: "sparkles",
      },
      {
        title: "Presupuesto detallado",
        description: "Trabajamos con partidas claras para que sepas qué incluye cada parte de la reforma antes de empezar.",
        iconName: "trending-up",
      },
      {
        title: "Plazos realistas",
        description: "Planificamos el proyecto con criterio, evitando tiempos muertos y garantizando fechas realistas.",
        iconName: "clock",
      },
      {
        title: "Seguimiento de obra",
        description: "Nuestro equipo revisa la ejecución y los remates en cada paso para entregarte una vivienda coherente y perfectamente terminada.",
        iconName: "wrench",
      },
    ],
    editorial: {
      badge: "Reformas integrales en Madrid",
      title: "Renovamos tu vivienda completa con orden y sin improvisaciones",
      p1: "En Hermanos Martínez entendemos que una reforma integral implica más que derribar paredes: estudiamos cómo vives tu casa, qué instalaciones hay que renovar y qué decisiones es mejor tomar antes de empezar.",
      p2: "Planificamos la entrada de cada oficio para evitar tiempos muertos, imprevistos de última hora y acabados que no encajan entre sí.",
      p3: "Desde la visita inicial hasta la limpieza final, te acompañamos con un proceso claro para que siempre sepas en qué punto está la obra y qué queda por hacer.",
    },
    galleryImages: [
      "/images/projects-custom/project-01-before.png",
      "/images/projects-custom/project-01-after.png",
      "/images/projects-custom/project-02-before.png",
    ],
    process: [
      {
        title: "Visita técnica y toma de medidas",
        timeframe: "Fase previa",
        description: "Analizamos el estado actual de la vivienda, escuchamos tus ideas y detectamos condicionantes antes de presupuestar.",
      },
      {
        title: "Presupuesto y planificación",
        timeframe: "Preparación",
        description: "Te entregamos una propuesta detallada con partidas y plazos orientativos para que tomes decisiones con calma.",
      },
      {
        title: "Demoliciones e instalaciones",
        timeframe: "Inicio de obra",
        description: "Retiramos lo existente y ejecutamos fontanería, electricidad y albañilería siguiendo el orden de obra.",
      },
      {
        title: "Alicatados, solados y acabados",
        timeframe: "Desarrollo",
        description: "Rematamos paredes, suelos, pintura y carpinterías para que la vivienda gane forma y coherencia.",
      },
      {
        title: "Revisión final y entrega",
        timeframe: "Cierre",
        description: "Comprobamos instalaciones, repasos y limpieza final antes de darte la obra por terminada.",
      },
    ],
    testimonials: [
      {
        quote: "Nos dieron un presupuesto claro y cumplieron lo pactado. La reforma se llevó con orden y nos informaron de cada avance.",
        author: "Alberto C.",
        location: "Retiro, Madrid",
        initial: "A",
      },
      {
        quote: "Tener un solo equipo coordinando la obra fue una tranquilidad enorme. Los acabados fueron excelentes y no hubo sorpresas.",
        author: "Lucía M.",
        location: "Barrio de Salamanca, Madrid",
        initial: "L",
      },
      {
        quote: "Cumplieron los plazos y el resultado final es justo lo que acordamos. Se nota que saben gestionar una reforma de principio a fin.",
        author: "Carlos S.",
        location: "Chamberí, Madrid",
        initial: "C",
      },
    ],
    longContent: [
      {
        subtitle: "Coordinación completa de principio a fin",
        paragraph: "Una reforma integral funciona mejor cuando cada fase está pensada con antelación. Demoliciones, nuevas instalaciones, cerramientos y acabados no pueden improvisarse si quieres un resultado limpio y sin retrasos.",
      },
      {
        subtitle: "Materiales y ejecución para durar",
        paragraph: "No solo importa que la obra se vea bien al terminar. También importa que la instalación eléctrica, la fontanería y los revestimientos estén resueltos con criterio para que la vivienda aguante bien el uso diario.",
      },
    ],
    directAnswer:
      "Una reforma integral en Madrid necesita planificación, coordinación de gremios y un presupuesto claro para que la obra avance con orden y sin sobresaltos.",
    faqTitle: "Preguntas frecuentes sobre reformas integrales en Madrid",
    faqDescription: "Resolvemos dudas habituales sobre precio, plazos, licencias y coordinación de obra antes de reformar una vivienda completa.",
    faqs: [
      {
        question: "¿Cuánto cuesta una reforma integral en Madrid?",
        answer: "El precio depende de los metros, del estado de la vivienda y de los materiales elegidos. Tras la visita, preparamos un presupuesto detallado adaptado a tu proyecto.",
      },
      {
        question: "¿Cuánto tarda una reforma integral?",
        answer: "Suele variar entre varias semanas y algunos meses, según el alcance. Antes de empezar te damos una estimación realista para que puedas organizarte.",
      },
      {
        question: "¿Os encargáis de la coordinación de gremios?",
        answer: "Sí. Organizamos los oficios, materiales y fases de trabajo para que la obra siga un orden lógico y no tengas que coordinar a varios equipos por tu cuenta.",
      },
      {
        question: "¿Se puede reformar por fases?",
        answer: "Sí, en algunos casos puede plantearse una hoja de ruta por etapas. Lo valoramos contigo en función del estado de la vivienda y de tus prioridades.",
      },
    ],
    relatedPaths: ["/reformas-cocinas-madrid", "/reformas-banos-madrid", "/cambiar-banera-por-ducha-madrid"],
  },
  {
    path: "/reformas-banos-madrid",
    serviceSlug: "reformas-banos",
    title: "Reformas de baños en Madrid",
    heroTitle: "Reformas de baños en Madrid con acabados limpios y duraderos",
    metaTitle: "Reformas de baños en Madrid | Fontanería, alicatado y ducha | Hermanos Martínez",
    metaDescription:
      "Reformas de baños en Madrid con acabados limpios y duraderos. Reformamos baños para ganar comodidad, limpieza y funcionalidad, con una ejecución cuidada y materiales fáciles de mantener.",
    heroIntro:
      "Reformamos baños en Madrid para ganar comodidad, limpieza y funcionalidad con una ejecución cuidada y materiales fáciles de mantener.",
    heroSubtitle:
      "Actualizamos la fontanería y las instalaciones para que tu baño funcione perfectamente por dentro. Alicatamos con precisión usando materiales resistentes y reducimos al mínimo las molestias en casa con una obra limpia y protegida.",
    heroParagraphs: [
      "Reformamos tu baño renovando las instalaciones y alicatados con materiales resistentes.",
      "Diseñamos espacios cómodos y fáciles de limpiar, con una obra limpia y sin complicaciones.",
    ],
    heroBadges: ["Fontanería actualizada", "Obra limpia y ordenada", "Alicatados resistentes", "Madrid capital"],
    advantages: [
      {
        title: "Distribución funcional",
        description: "Planificamos cada detalle: la distribución más cómoda según el espacio disponible, revestimientos y sanitarios de calidad que soportan el uso diario, y mamparas a medida que encajan con tu estilo.",
        iconName: "sparkles",
      },
      {
        title: "Materiales resistentes",
        description: "Te ayudamos a elegir revestimientos y sanitarios de calidad que soportan el uso diario.",
        iconName: "trending-up",
      },
      {
        title: "Obra limpia y ordenada",
        description: "Reducimos al mínimo las molestias en casa con una obra limpia y protegida.",
        iconName: "clock",
      },
      {
        title: "Instalaciones seguras",
        description: "Actualizamos la fontanería y las instalaciones para que tu baño funcione perfectamente por dentro.",
        iconName: "wrench",
      },
    ],
    editorial: {
      badge: "Reformas de baños en Madrid",
      title: "Un baño bien reformado se nota cada día",
      p1: "Actualizamos la fontanería y las instalaciones para que tu baño funcione perfectamente por dentro.",
      p2: "Alicatamos con precisión usando materiales resistentes y reducimos al mínimo las molestias en casa con una obra limpia y protegida.",
      p3: "El resultado es un baño cómodo, fácil de limpiar y con una estética actual que encaja con el resto de la casa. No basta con cambiar el azulejo: en Hermanos Martínez cuidamos tanto lo visible como lo técnico. Impermeabilizamos correctamente y nos aseguramos de que toda la fontanería y electricidad queden bien hechas para que no tengas problemas a largo plazo.",
    },
    galleryImages: [
      "/images/bathroom-before.jpg",
      "/images/bathroom-after.jpg",
      "/images/reformas-gallery/10.jpg",
    ],
    process: [
      {
        title: "Visita técnica y medición",
        timeframe: "Fase previa",
        description: "Revisamos bajantes, desagües, cotas y estado general del baño para preparar una propuesta realista.",
      },
      {
        title: "Demolición y retirada",
        timeframe: "Inicio de obra",
        description: "Retiramos revestimientos y elementos antiguos con cuidado para dejar la base lista para trabajar.",
      },
      {
        title: "Fontanería e impermeabilización",
        timeframe: "Instalaciones",
        description: "Renovamos conducciones, puntos de agua y protección de zonas húmedas antes de cerrar paredes y suelos.",
      },
      {
        title: "Alicatado y solado",
        timeframe: "Revestimientos",
        description: "Colocamos azulejos y pavimentos con un acabado limpio, nivelado y pensado para durar.",
      },
      {
        title: "Montaje y remates",
        timeframe: "Cierre",
        description: "Instalamos mampara, plato, sanitarios y mobiliario, repasando todo antes de la entrega final.",
      },
    ],
    testimonials: [
      {
        quote: "Reformaron nuestro baño con mucha seriedad. El presupuesto era claro y los acabados quedaron muy limpios.",
        author: "Javier M.",
        location: "Chamartín, Madrid",
        initial: "J",
      },
      {
        quote: "Había humedad con la bañera antigua y lo resolvieron perfectamente. Se nota que controlan la parte técnica.",
        author: "Sofía R.",
        location: "Arganzuela, Madrid",
        initial: "S",
      },
      {
        quote: "Terminaron en el tiempo previsto y nos ayudaron a elegir materiales duraderos que quedan muy bien.",
        author: "Daniel T.",
        location: "Moncloa, Madrid",
        initial: "D",
      },
    ],
    longContent: [
      {
        subtitle: "Revestimientos duraderos e higiénicos",
        paragraph: "Elegir bien los materiales es clave en un baño. Buscamos soluciones resistentes, fáciles de limpiar y adecuadas para una zona con humedad y uso diario.",
      },
      {
        subtitle: "Platos de ducha a ras de suelo",
        paragraph: "Muchos proyectos pasan por eliminar barreras y crear duchas más cómodas. Eso mejora la accesibilidad, da sensación de amplitud y simplifica el mantenimiento.",
      },
    ],
    directAnswer:
      "Una reforma de baño en Madrid puede incluir fontanería, impermeabilización, alicatado, sanitarios, mampara y mobiliario, según el alcance del proyecto.",
    faqTitle: "Preguntas frecuentes sobre reformas de baños en Madrid",
    faqDescription: "Tiempos medios de ejecución y dudas básicas antes de empezar una reforma de baño.",
    faqs: [
      {
        question: "¿Cuánto cuesta reformar un baño en Madrid?",
        answer: "El coste depende de las dimensiones, de los materiales y de si hay que renovar fontanería o distribución. Tras la visita, te damos un presupuesto claro y desglosado.",
      },
      {
        question: "¿Cuánto se tarda en reformar un baño?",
        answer: "Depende del alcance, pero muchas reformas de baño se resuelven en pocos días de trabajo efectivo una vez definidos materiales y replanteo.",
      },
      {
        question: "¿Se puede cambiar la bañera por ducha dentro de una reforma de baño?",
        answer: "Sí. Es una de las actuaciones más habituales y solemos integrarla dentro del proyecto para ganar comodidad, seguridad y facilidad de limpieza.",
      },
      {
        question: "¿Renováis también la fontanería?",
        answer: "Sí, cuando hace falta revisamos y renovamos la instalación para que el baño quede bien resuelto por dentro y no te dé problemas más adelante.",
      },
    ],
    relatedPaths: ["/reformas-cocinas-madrid", "/reformas-integrales-madrid", "/cambiar-banera-por-ducha-madrid"],
  },
  {
    path: "/reformas-cocinas-madrid",
    serviceSlug: "reformas-cocinas",
    title: "Reformas de cocinas en Madrid",
    heroTitle: "Reformas de cocinas en Madrid con diseño, obra y montaje coordinados",
    heroEyebrow: "Construyendo Hogares Desde 1999",
    metaTitle: "Reformas de cocinas en Madrid | Diseño, obra y montaje | Hermanos Martínez",
    metaDescription:
      "Reformas de cocinas en Madrid con diseño, obra y montaje coordinados. Diseñamos y ejecutamos reformas de cocinas cuidando la distribución, el almacenaje y la iluminación para que tu cocina funcione mejor cada día.",
    heroIntro:
      "Diseñamos y ejecutamos reformas de cocinas en Madrid cuidando la distribución, el almacenaje y la iluminación para que tu cocina funcione mejor cada día.",
    heroSubtitle: "Diseño, obra y montaje coordinados con presupuesto cerrado",
    heroBadges: [],
    heroParagraphs: [
      "Diseñamos y ejecutamos reformas de cocinas en Madrid cuidando la distribución, el almacenaje y la iluminación para que tu cocina funcione mejor cada día.",
      "Coordinamos fontanería, electricidad, muebles y encimera con un presupuesto cerrado desde el inicio, garantizando acabados de calidad y entrega en plazo.",
    ],
    advantages: [
      {
        title: "Diseño a medida",
        description: "Cada cocina se plantea según tu forma de vivir, tus gustos y el espacio real disponible.",
        iconName: "sparkles",
        statLabel: "100%",
      },
      {
        title: "Instalaciones coordinadas",
        description: "Fontanería, electricidad, muebles y encimera se organizan para que todo encaje en el orden correcto.",
        iconName: "trending-up",
        statLabel: "75%",
      },
      {
        title: "Entrega en plazo",
        description: "Planificamos cada fase para terminar la obra en el tiempo previsto y con las menores molestias.",
        iconName: "clock",
        statLabel: "5–10 semanas",
      },
      {
        title: "Acabados de calidad",
        description: "Cuidamos cada detalle para que la cocina quede bien rematada, cómoda y preparada para durar.",
        iconName: "wrench",
        statLabel: "500+",
      },
    ],
    editorial: {
      badge: "Reformas de cocinas en Madrid",
      title: "Una cocina bien pensada cambia la forma de vivir la casa",
      p1: "Cada cocina es única: definimos un diseño a medida según tu forma de vivir y las dimensiones reales. Nuestro equipo organiza todas las instalaciones necesarias para que cada elemento encaje en su lugar. Planificamos cada fase para terminar la obra en la fecha prevista, minimizando las molestias en tu hogar.",
      p2: "Cuidamos cada detalle de tu proyecto de cocina. Una buena reforma no consiste solo en cambiar muebles o azulejos, sino en optimizar el espacio y hacer que todo funcione sin problemas. En Hermanos Martínez integramos el diseño, el almacenaje, la iluminación y los acabados desde el primer momento. Coordinamos fontanería, electricidad, albañilería, mobiliario y encimera para lograr un resultado práctico, estético y duradero.",
      p3: "",
    },
    editorialImage: "/images/cocinas-madrid/8.jpg",
    galleryImages: [
      "/images/cocinas-madrid/6.jpg",
      "/images/cocinas-madrid/2.jpg",
      "/images/cocinas-madrid/4.jpg",
      "/images/cocinas-madrid/5.jpg",
      "/images/cocinas-madrid/3.jpg",
      "/images/cocinas-madrid/7.jpg",
      "/images/cocinas-madrid/1.jpg",
    ],
    process: [
      {
        title: "Visita y replanteo",
        timeframe: "Paso 1",
        description: "Visitamos la vivienda, tomamos medidas y revisamos instalaciones, condicionantes y posibilidades reales antes de presupuestar.",
      },
      {
        title: "Diseño y materiales",
        timeframe: "Paso 2",
        description: "Definimos la distribución y te ayudamos a elegir mobiliario, encimera, revestimientos, iluminación y almacenaje.",
      },
      {
        title: "Planificación de obra",
        timeframe: "Paso 3",
        description: "Organizamos fases, pedidos y tiempos para que fontanería, electricidad, albañilería y carpintería entren cuando corresponde.",
      },
      {
        title: "Ejecución y montaje",
        timeframe: "Paso 4",
        description: "Coordinamos la obra y el montaje de muebles, encimera y equipamiento con seguimiento continuo durante todo el proceso.",
      },
      {
        title: "Remates y entrega",
        timeframe: "Paso 5",
        description: "Revisamos ajustes, sellados, remates y acabados finales para entregarte una cocina bien terminada y lista para usar.",
      },
    ],
    testimonials: [
      {
        quote: "Abrimos la cocina al salón y el cambio se notó desde el primer día. Todo quedó bien coordinado y con acabados muy cuidados.",
        author: "Esther R.",
        location: "Retiro, Madrid",
        initial: "ER",
        role: "Reforma integral de cocina",
        date: "Marzo 2024",
      },
      {
        quote: "Desde el presupuesto hasta los últimos remates fueron claros y ordenados. La encimera, el mobiliario y la instalación quedaron muy bien resueltos.",
        author: "Borja F.",
        location: "Tetuán, Madrid",
        initial: "BF",
        role: "Cocina a medida",
        date: "Enero 2024",
      },
      {
        quote: "Trabajaron con seriedad, cuidaron los tiempos y dejaron todo bien rematado. Se nota cuando una obra está bien planificada.",
        author: "Mónica A.",
        location: "Centro, Madrid",
        initial: "MA",
        role: "Reforma completa de cocina",
        date: "Febrero 2024",
      },
    ],
    longContent: [
      {
        subtitle: "Distribución pensada para el uso diario",
        paragraph: "Una buena reforma de cocina no consiste solo en renovar acabados. También implica estudiar paso, luz, apoyo de trabajo y almacenaje para que la estancia se adapte mejor al día a día de la vivienda.",
      },
      {
        subtitle: "Instalaciones y montaje bien coordinados",
        paragraph: "Cuando fontanería, electricidad, albañilería, mobiliario y encimera se planifican bien desde el principio, la obra avanza con menos interrupciones y el resultado final queda más limpio, práctico y mejor resuelto.",
      },
    ],
    directAnswer:
      "Una reforma de cocina en Madrid debe coordinar distribución, instalaciones, mobiliario y acabados para que el espacio resulte práctico, duradero y cómodo en el día a día.",
    faqTitle: "Preguntas frecuentes sobre reformas de cocinas en Madrid",
    faqDescription: "Dudas habituales sobre tiempos, instalaciones y organización de una reforma de cocina.",
    faqs: [
      {
        question: "¿La reforma incluye fontanería y electricidad?",
        answer: "Sí. Cuando hace falta revisamos y renovamos las instalaciones para que la cocina funcione bien con el nuevo mobiliario y los electrodomésticos.",
      },
      {
        question: "¿Cuánto tarda una reforma de cocina?",
        answer: "Depende del alcance, pero solemos trabajar con tiempos realistas y una planificación clara para que la obra avance con orden y sin improvisaciones.",
      },
      {
        question: "¿Ayudáis con la distribución?",
        answer: "Sí. Revisamos contigo la distribución, el almacenaje y los puntos de uso para que la cocina quede más cómoda y mejor aprovechada.",
      },
      {
        question: "¿Podéis coordinar también el montaje?",
        answer: "Sí. Organizamos la obra para que muebles, encimera e instalaciones se monten en el momento adecuado y el conjunto quede bien rematado.",
      },
    ],
    relatedPaths: ["/reformas-banos-madrid", "/reformas-integrales-madrid", "/cambiar-banera-por-ducha-madrid"],
  },
  {
    path: "/cambiar-banera-por-ducha-madrid",
    serviceSlug: "cambio-banera-ducha",
    title: "Cambiar bañera por ducha en Madrid",
    metaTitle: "Cambiar bañera por ducha en Madrid | Precio y obra rápida | Hermanos Martínez",
    metaDescription:
      "Cambiar bañera por ducha en Madrid. Sustituimos tu bañera por un plato de ducha cómodo y accesible, con una obra rápida, limpia y bien sellada.",
    heroIntro: "Sustituimos tu bañera por un plato de ducha cómodo y accesible, con una obra rápida, limpia y bien sellada.",
    heroSubtitle:
      "Eliminando el escalón de la bañera ganarás comodidad y seguridad en tu baño.",
    heroParagraphs: [
      "Sustituimos tu bañera por un plato de ducha cómodo y accesible, con una obra rápida, limpia y bien sellada.",
      "Eliminando el escalón de la bañera ganarás comodidad y seguridad en tu baño.",
    ],
    heroBadges: ["Obra rápida", "Plato antideslizante", "Mampara a medida"],
    advantages: [
      {
        title: "Acceso más seguro",
        description: "Di adiós al escalón de la bañera y gana comodidad con un plato de ducha antideslizante.",
        iconName: "sparkles",
      },
      {
        title: "Obra acotada",
        description: "Intervenimos solo la zona necesaria para agilizar plazos sin levantar todo el baño.",
        iconName: "trending-up",
      },
      {
        title: "Ejecución ágil",
        description: "En muchos casos, retirada, adaptación y montaje se resuelven en pocos días de trabajo.",
        iconName: "clock",
      },
      {
        title: "Impermeabilización cuidada",
        description: "Sellamos todos los remates del plato y las paredes para asegurar la estanqueidad y evitar filtraciones.",
        iconName: "wrench",
      },
    ],
    editorial: {
      badge: "Cambio de bañera por ducha",
      title: "Un cambio pequeño que mejora mucho el día a día",
      p1: "Cambiar la bañera por ducha es un pequeño cambio con un gran impacto en el día a día.",
      p2: "Nuestro proceso interviene solo donde hace falta: retiramos la bañera, adaptamos la base y dejamos todo preparado para instalar el nuevo plato y mampara.",
      p3: "También te asesoramos en la elección de acabados que encajen con tu baño. Con pocos días de obra, mejorarás la seguridad, la higiene y la accesibilidad de tu baño sin complicaciones.",
    },
    galleryImages: [
      "/images/bathroom-before.jpg",
      "/images/bathroom-after.jpg",
      "/images/reformas-gallery/11.jpg",
    ],
    process: [
      {
        title: "Asesoramiento inicial",
        timeframe: "Fase previa",
        description: "Revisamos el hueco, los materiales existentes y la solución más adecuada para tu baño.",
      },
      {
        title: "Retirada de bañera",
        timeframe: "Comienzo",
        description: "Extraemos la bañera con cuidado y dejamos preparada la base para trabajar sobre una superficie limpia.",
      },
      {
        title: "Adaptación del suelo y desagüe",
        timeframe: "Instalación",
        description: "Ajustamos la evacuación y la base para que el nuevo plato de ducha quede bien asentado y funcione correctamente.",
      },
      {
        title: "Alicatado y remate de pared",
        timeframe: "Revestimiento",
        description: "Terminamos la zona afectada con un acabado limpio y bien integrado con el resto del baño.",
      },
      {
        title: "Mampara y entrega",
        timeframe: "Cierre",
        description: "Montamos la mampara, sellamos perimetralmente y revisamos todo antes de dar la obra por acabada.",
      },
    ],
    testimonials: [
      {
        quote: "Nos cambiaron la bañera por ducha con mucha rapidez y prácticamente sin ensuciar. La mampara y el plato quedaron muy bien.",
        author: "Beatriz L.",
        location: "Barrio de las Letras, Madrid",
        initial: "B",
      },
      {
        quote: "Cubrieron todo el baño y dejaron el nuevo plato muy bien rematado. Ahora se usa mucho mejor y es más cómodo para el día a día.",
        author: "Héctor G.",
        location: "Moncloa, Madrid",
        initial: "H",
      },
      {
        quote: "Cumplieron el presupuesto inicial y dejaron la zona perfectamente sellada. Se nota que dominan este tipo de reforma.",
        author: "Carmen V.",
        location: "Prosperidad, Madrid",
        initial: "C",
      },
    ],
    longContent: [
      {
        subtitle: "Remates limpios en la zona de la bañera",
        paragraph: "Al retirar la bañera, normalmente hay que resolver la pared y la zona afectada con materiales que encajen bien. Lo importante es que el cambio se vea limpio y bien integrado.",
      },
      {
        subtitle: "Desagües y sellados bien resueltos",
        paragraph: "Una buena instalación evita atascos, filtraciones y problemas de estanqueidad. Por eso cuidamos tanto el plato, la válvula, el sellado y la mampara.",
      },
    ],
    directAnswer:
      "Cambiar bañera por ducha en Madrid suele requerir pocos días de obra y mejora la seguridad, la limpieza y la accesibilidad del baño.",
    faqTitle: "Dudas habituales sobre cambiar bañera por ducha en Madrid",
    faqDescription: "Detalles del servicio y respuestas claras antes de sustituir la bañera por un plato de ducha.",
    faqs: [
      {
        question: "¿Cuánto cuesta cambiar bañera por ducha?",
        answer: "El precio depende del plato, la mampara, el revestimiento necesario y el estado de la instalación existente. Te damos una valoración clara antes de empezar.",
      },
      {
        question: "¿Cuánto tiempo tendré el baño inoperativo?",
        answer: "Depende del baño y del alcance, pero se trata de una obra contenida que normalmente se resuelve en pocos días de trabajo efectivo.",
      },
      {
        question: "¿Hace falta cambiar también el alicatado?",
        answer: "No siempre. Lo valoramos al revisar la obra y te explicamos la mejor solución para que el cambio quede limpio y bien rematado.",
      },
      {
        question: "¿Instaláis mampara y plato de ducha?",
        answer: "Sí. Podemos encargarnos de la colocación del plato, la mampara y los remates para que el conjunto quede listo para usar.",
      },
    ],
    relatedPaths: ["/reformas-banos-madrid", "/reformas-cocinas-madrid", "/reformas-integrales-madrid"],
  },
]

const seoHrefByServiceSlug = new Map(
  seoLandings.map((landing) => [landing.serviceSlug, landing.path] as const),
)

export function getSeoHrefForService(serviceSlug: string) {
  return seoHrefByServiceSlug.get(serviceSlug) ?? "/#contacto"
}

export function getLandingByPath(path: string) {
  return seoLandings.find((landing) => landing.path === path)
}

export function getLandingByServiceSlug(serviceSlug: string) {
  return seoLandings.find((landing) => landing.serviceSlug === serviceSlug)
}

export const supportFaqs: FaqItem[] = [
  {
    question: "¿Cómo calculáis el precio de una reforma en Madrid?",
    answer: "Partimos del tipo de reforma, los metros, el estado previo y el nivel de acabados para darte una referencia ajustada.",
  },
  {
    question: "¿El presupuesto es cerrado?",
    answer: "Sí. Trabajamos con presupuestos claros y desglosados para evitar sorpresas durante la obra.",
  },
  {
    question: "¿Cuánto tarda una reforma?",
    answer: "Depende del alcance, pero antes de empezar te damos una estimación realista para que puedas organizarte.",
  },
  {
    question: "¿Solo trabajáis en Madrid capital?",
    answer: "Nuestro foco principal es Madrid capital, aunque también atendemos proyectos en zonas cercanas según el tipo de obra.",
  },
  {
    question: "¿Quién coordina los gremios?",
    answer: "Nosotros coordinamos albañilería, fontanería, electricidad y remates para que la obra siga un orden lógico.",
  },
  {
    question: "¿Puedo reformar por fases?",
    answer: "Sí, en algunos casos podemos plantear una hoja de ruta por etapas según tus prioridades y el estado de la vivienda.",
  },
]

export const pricingPageHighlights = [
  {
    title: "Reformas integrales en Madrid",
    price: "Desde 650 €/m2",
    details: "Coordinación de gremios, planificación y acabados para una vivienda completa.",
    href: "/reformas-integrales-madrid",
  },
  {
    title: "Reformas de baños en Madrid",
    price: "Desde 4.900 €",
    details: "Rango orientativo para una reforma completa de baño.",
    href: "/reformas-banos-madrid",
  },
  {
    title: "Reformas de cocinas en Madrid",
    price: "Desde 6.900 €",
    details: "Orientación para una cocina completa con obra y montaje.",
    href: "/reformas-cocinas-madrid",
  },
  {
    title: "Cambio de bañera por ducha",
    price: "Desde 1.950 €",
    details: "Obra contenida para ganar comodidad, seguridad y accesibilidad.",
    href: "/cambiar-banera-por-ducha-madrid",
  },
]
