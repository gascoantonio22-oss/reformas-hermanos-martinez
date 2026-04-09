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
      "Depende de los metros, del estado previo de la vivienda y del nivel de acabados. En Hermanos Martínez damos precios orientativos claros desde el principio y preparamos un presupuesto detallado para Madrid capital antes de empezar la obra.",
  },
  {
    question: "¿Trabajáis con presupuesto cerrado?",
    answer:
      "Sí. Nuestro objetivo es que sepas qué se va a hacer, cuánto cuesta y en qué orden se ejecuta. Si aparece un imprevisto real, se revisa contigo antes de actuar para evitar extras inesperados durante la reforma.",
  },
  {
    question: "¿Cuánto tarda una reforma integral?",
    answer:
      "Una reforma integral en Madrid puede tardar desde varias semanas hasta algunos meses según superficie, instalaciones y acabados. Antes de empezar te damos una estimación realista y un planning de obra para que tengas una referencia clara.",
  },
  {
    question: "¿Reformáis cocinas y baños en Madrid capital?",
    answer:
      "Sí. Trabajamos reformas integrales, cocinas, baños y cambio de bañera por ducha en Madrid capital. También coordinamos instalaciones, alicatados, carpintería interior y acabados para que el cliente no tenga que gestionar distintos gremios por separado.",
  },
  {
    question: "¿Os ocupáis de la coordinación de la obra?",
    answer:
      "Sí. Coordinamos gremios, materiales, fases y remates para que la reforma avance con orden. La idea es que el cliente tenga un único interlocutor y no viva la obra como una suma de oficios sin seguimiento ni control.",
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
    metaTitle: "Reformas integrales en Madrid | Presupuesto claro y plazos definidos | Hermanos Martínez",
    metaDescription:
      "Empresa familiar de reformas integrales en Madrid capital. Coordinamos gremios, acabados e instalaciones con presupuesto detallado, seguimiento de obra y atención cercana.",
    heroIntro: "Renovamos viviendas completas coordinando todos los trabajos desde el primer día hasta la entrega, con un proceso ordenado y un único equipo al frente de la obra.",
    heroSubtitle: "Reforma total bajo control • Coordinación de gremios y presupuesto transparente",
    heroBadges: ["Presupuestos sin sorpresas", "Empresa local de Madrid", "Plazos por escrito"],
    advantages: [
      { title: "Un Único Interlocutor", description: "Coordinamos todos los oficios de la obra para evitar retrasos, confusiones y pérdida de tiempo.", iconName: "sparkles" },
      { title: "Presupuesto Cerrado", description: "Valoración detallada partida por partida para minimizar imprevistos económicos.", iconName: "trending-up" },
      { title: "Cumplimiento de Plazos", description: "Planificación realista de todas las fases de la reforma y entrega en la fecha acordada.", iconName: "clock" },
      { title: "Control de Calidad", description: "Supervisamos la ejecución de la albañilería, fontanería e instalaciones desde el inicio.", iconName: "wrench" }
    ],
    editorial: {
      badge: "Empresa de Reformas en Madrid",
      title: "Asumimos la gestión integral de tu obra.",
      p1: "Sabemos que llevar a cabo una reforma integral puede ser un proceso estresante para el propietario. Implica tomar muchas decisiones y coordinar a múltiples profesionales.",
      p2: "Nuestro enfoque se basa en liberar al cliente de esa carga técnica y organizativa. Trabajamos gestionando de primera mano la demolición, la renovación de instalaciones y los acabados finales.",
      p3: "Desde la planificación en plano hasta la limpieza final de obra, garantizamos que cada paso se ejecuta con orden y respetando al máximo tu vivienda y a la comunidad de vecinos."
    },
    galleryImages: [
      "/images/reformas-integrales-madrid/galeria-1.jpg",
      "/images/reformas-integrales-madrid/galeria-2.jpg",
      "/images/reformas-integrales-madrid/galeria-3.jpg"
    ],
    process: [
      { title: "Visita y Toma de Datos", timeframe: "Fase Previa", description: "Acudimos a la vivienda, revisamos el estado de las instalaciones y entendemos las necesidades del proyecto." },
      { title: "Presupuesto Detallado", timeframe: "Evaluación", description: "Entrega de un documento desglosado con mediciones y partidas claras, revisado de forma conjunta." },
      { title: "Demoliciones e Instalaciones", timeframe: "Inicio de Obra", description: "Desescombro sistemático y ejecución de nuevas rozas para fontanería y electricidad." },
      { title: "Revestimientos y Acabados", timeframe: "Desarrollo", description: "Trabajos de albañilería, alisado de paredes, solados y alicatados con materiales seleccionados." },
      { title: "Revisión Final y Entrega", timeframe: "Cierre", description: "Comprobación de todas las instalaciones, pintura, remates y limpieza general antes de la entrega de llaves." }
    ],
    testimonials: [
      { quote: "Cumplieron escrupulosamente con los plazos. Valoro mucho la seriedad del presupuesto, no nos encontramos con partidas ocultas al final de la obra.", author: "Alberto C.", location: "Retiro", initial: "A" },
      { quote: "Coordinación perfecta de gremios. Nosotros trabajamos todo el día y nos dio mucha tranquilidad saber que había alguien responsabilizándose de la obra.", author: "Lucía M.", location: "Barrio de Salamanca", initial: "L" },
      { quote: "Los acabados de pintura y el alicatado de los baños quedaron perfectos. Además, muy cuidadosos con el portal y los ascensores del edificio.", author: "Carlos S.", location: "Chamberí", initial: "C" }
    ],
    longContent: [
      { subtitle: "Coordinación completa de tu reforma en Madrid", paragraph: "Intervenir una vivienda completa requiere planificar con precisión la entrada de cada oficio. Una mala coordinación entre fontaneros, electricistas y albañiles genera retrasos que acaban sufriendo los propietarios. Trabajamos ordenando estas secuencias lógicas para que la obra no se detenga." },
      { subtitle: "Claridad y rigor técnico", paragraph: "Actualizar toda la red eléctrica o los bajantes y tuberías antiguas de una casa es una necesidad básica en viviendas con muchos años. No escatimamos en materiales internos, priorizando la seguridad estructural y la durabilidad de tu reforma mucho más allá de la estética visual exterior." }
    ],
    directAnswer:
      "Una reforma integral en Madrid exige coordinar demoliciones, albañilería, instalaciones y acabados. Llevamos el proceso completo con un presupuesto serio y realista.",
    faqTitle: "Preguntas frecuentes sobre reformas integrales en Madrid",
    faqDescription: "Respuestas claras para las dudas más habituales antes de reformar tu piso o vivienda completa en Madrid.",
    faqs: [
      { question: "¿Cuánto cuesta una reforma integral en Madrid?", answer: "El precio final se calcula en base a los metros cuadrados, la distribución, el trabajo de reestructuración de instalaciones y el nivel de los acabados elegidos. Preparamos siempre un presupuesto a medida tras la visita." },
      { question: "¿Cuánto tarda una reforma integral?", answer: "Suele requerir de varias semanas a pocos meses, dependiendo de los metros y complejidad estructural. Establecemos una previsión de tiempos clara al firmar el acuerdo." }
    ],
    relatedPaths: ["/reformas-cocinas-madrid", "/reformas-banos-madrid", "/cambiar-banera-por-ducha-madrid"],
  },
  {
    path: "/reformas-banos-madrid",
    serviceSlug: "reformas-banos",
    title: "Reformas de baños en Madrid",
    metaTitle: "Reformas de baños en Madrid | Instalaciones sólidas y acabados de calidad",
    metaDescription: "Especialistas en reformas completas de baños en Madrid. Redistribución, fontanería renovada, platos de ducha y alicatados profesionales.",
    heroIntro: "Reformamos baños asumiendo toda la coordinación: desde las nuevas tomas de agua y alicatados hasta el montaje del mobiliario final.",
    heroSubtitle: "Fontanería renovada • Alicatados de precisión • Coordinación completa",
    heroBadges: ["Fontanería de confianza", "Ejecución profesional", "Sanitarios y grifería"],
    advantages: [
      { title: "Distribución Funcional", description: "Buscamos la distribución más cómoda para tu baño maximizando el espacio disponible.", iconName: "sparkles" },
      { title: "Asesoramiento de Materiales", description: "Te ayudamos a elegir los revestimientos cerámicos que mejor se adaptan por estética y mantenimiento.", iconName: "trending-up" },
      { title: "Rapidez y Orden", description: "Minimizamos el impacto de la obra de baño en la convivencia del hogar de la forma más rápida y limpia posible.", iconName: "clock" },
      { title: "Instalaciones Seguras", description: "Renovamos tuberías de agua y bajantes para proteger el cuarto de baño ante futuras humedades o averías.", iconName: "wrench" }
    ],
    editorial: {
      badge: "Baños Renovados",
      title: "Calidad tanto en lo que se ve como en lo que no.",
      p1: "El baño es una zona sometida a un estrés constante de humedad, condensación y uso de grifería. Por muy bonito que sea un azulejo, no sirve de nada si la impermeabilización interior es deficiente.",
      p2: "Cuando ejecutamos la reforma de un baño, nuestra prioridad absoluta es sustituir y sanear toda la red de tuberías de fontanería antigua, garantizando soldaduras o prensados de calidad actual.",
      p3: "De este modo, nos aseguramos de que el resultado final, el de los sanitarios de diseño y la iluminación, se sostenga sobre una instalación libre de incidencias y filtraciones."
    },
    galleryImages: [
      "/images/reformas-banos-madrid/baño-1.jpg",
      "/images/reformas-banos-madrid/baño-2.jpg",
      "/images/reformas-banos-madrid/baño-3.jpg"
    ],
    process: [
      { title: "Toma de Medidas", timeframe: "Visita Técnica", description: "Revisión de bajantes, disposición de desagües actuales y cotas generales del espacio." },
      { title: "Retirada de Escombros", timeframe: "Demolición", description: "Picado del antiguo azulejo y levantamiento de la base previa con cuidado extremo." },
      { title: "Paredes y Fontanería", timeframe: "Instalaciones", description: "Regatas nuevas para la pared, maestreo y nuevas conducciones de agua fría y caliente." },
      { title: "Colocación de Azulejo y Solado", timeframe: "Revestimientos", description: "Aplicación de cementos cola específicos para agarre de plaquetas cerámicas." },
      { title: "Montaje Final", timeframe: "Remate", description: "Instalación de mampara, plato, sanitarios seleccionados y focos empotrables." }
    ],
    testimonials: [
      { quote: "Hicieron una reforma de aseo y baño principal. Excelentes cortes en los azulejos biselados y ninguna pega para revisar un enchufe que agregamos después.", author: "Javier M.", location: "Chamartín", initial: "J" },
      { quote: "Había mucha humedad de la antigua bañera; levantaron todo el suelo y sellaron perfectamente antes de poner la ducha. Profesionales estrictos.", author: "Sofía R.", location: "Arganzuela", initial: "S" },
      { quote: "Terminaron en el tiempo que habían dicho y nos orientaron genial para elegir la iluminación.", author: "Daniel T.", location: "Moncloa", initial: "D" }
    ],
    longContent: [
      { subtitle: "Revestimientos duraderos e higiénicos", paragraph: "Elegir un buen material es vital para el uso diario. Te prevenimos contra materiales frágiles o modas que puedan dar problemas de limpieza. Buscamos siempre una combinación de gres o material cerámico que ofrezca textura segura pero que resulte sumamente fácil de asear." },
      { subtitle: "Platos a ras de suelo y platos planos", paragraph: "Un alto porcentaje de nuestras reformas de baño pasa por la supresión de elementos elevados para lograr áreas de ducha continuas, lo que maximiza la amplitud visual y ayuda a personas de toda condición." }
    ],
    directAnswer: "Una reforma de baño puede incluir revestimientos, sanitarios, saneado de fontanería, iluminación y mobiliario adaptado.",
    faqTitle: "Preguntas frecuentes sobre reformas de baños en Madrid",
    faqDescription: "Tiempos medios de ejecución e información base antes de iniciar tu obra.",
    faqs: [
      { question: "¿Cuánto cuesta reformar un baño en Madrid?", answer: "El alcance real del coste se rige por dimensiones y el coste del material (azulejada, tamaño de mampara, y si cambiamos la red de agua). Entregamos presupuestos nítidos de manera previa." },
      { question: "¿Cuánto se tarda?", answer: "A menudo se resuelve en una sola semana de trabajo ininterrumpido una vez acotado el replanteo y recibidos los materiales." }
    ],
    relatedPaths: ["/reformas-cocinas-madrid", "/reformas-integrales-madrid", "/cambiar-banera-por-ducha-madrid"],
  },
  {
    path: "/reformas-cocinas-madrid",
    serviceSlug: "reformas-cocinas",
    title: "Reformas de cocinas en Madrid",
    heroTitle: "Especialistas en reformas de cocinas en Madrid",
    metaTitle: "Reformas de cocinas en Madrid con diseño, ejecución y montaje bien coordinados | Hermanos Martínez",
    metaDescription:
      "Realizamos reformas de cocinas en Madrid cuidando la distribución, el mobiliario, la instalación eléctrica y los acabados para que la cocina quede práctica, bien aprovechada y lista para el día a día.",
    heroIntro:
      "Realizamos reformas de cocinas en Madrid cuidando la distribución, el mobiliario, la instalación eléctrica y los acabados para que la cocina quede práctica, bien aprovechada y lista para el día a día.",
    heroSubtitle: "Diseño, obra y montaje coordinados con presupuesto cerrado",
    heroBadges: [],
    advantages: [
      { title: "Diseño a medida", description: "Cada cocina se diseña según tu forma de vivir, tus gustos y las características del espacio.", iconName: "sparkles", statLabel: "100%" },
      { title: "Pensado para revalorizar", description: "Mejoras bien planteadas para ganar funcionalidad hoy y aportar valor a largo plazo.", iconName: "trending-up", statLabel: "75%" },
      { title: "Entrega en plazo", description: "Organizamos cada fase para terminar la obra en el tiempo previsto y con las menores molestias.", iconName: "clock", statLabel: "5–10 semanas" },
      { title: "Acabados de calidad", description: "Un equipo con experiencia que ejecuta cada reforma con detalle, orden y buenos remates.", iconName: "wrench", statLabel: "500+" }
    ],
    editorial: {
      badge: "ESPECIALISTAS EN REFORMAS DE COCINAS EN MADRID",
      title: "Una cocina bien pensada cambia la forma de vivir la casa",
      p1: "La cocina es una de las estancias que más se usan a diario. Por eso, una reforma de cocina bien planteada no consiste solo en cambiar muebles o revestimientos, sino en ordenar mejor el espacio y hacer que todo funcione como debe.",
      p2: "En Hermanos Martínez realizamos reformas de cocinas en Madrid teniendo en cuenta distribución, almacenaje, instalaciones, iluminación y acabados para que el resultado sea práctico, duradero y cómodo en el día a día.",
      p3: "Desde la primera visita hasta los remates finales, coordinamos cada fase de la obra para que fontanería, electricidad, albañilería, mobiliario y encimera encajen sin improvisaciones."
    },
    editorialImage: "/images/cocinas-madrid/8.jpg",
    galleryImages: [
      "/images/cocinas-madrid/6.jpg",
      "/images/cocinas-madrid/2.jpg",
      "/images/cocinas-madrid/4.jpg",
      "/images/cocinas-madrid/5.jpg",
      "/images/cocinas-madrid/3.jpg",
      "/images/cocinas-madrid/7.jpg",
      "/images/cocinas-madrid/1.jpg"
    ],
    process: [
      { title: "Visita y replanteo", timeframe: "Paso 1", description: "Visitamos la vivienda, tomamos medidas y revisamos instalaciones, condicionantes y posibilidades reales antes de presupuestar." },
      { title: "Diseño y materiales", timeframe: "Paso 2", description: "Definimos la propuesta de distribución y te ayudamos a elegir mobiliario, encimera, revestimientos, iluminación y soluciones de almacenaje." },
      { title: "Planificación de obra", timeframe: "Paso 3", description: "Organizamos fases, pedidos y tiempos para que fontanería, electricidad, albañilería y carpintería entren cuando corresponde." },
      { title: "Ejecución y montaje", timeframe: "Paso 4", description: "Coordinamos la obra y el montaje de muebles, encimera y equipamiento con seguimiento continuo durante todo el proceso." },
      { title: "Remates y entrega", timeframe: "Paso 5", description: "Revisamos ajustes, sellados, remates y acabados finales para entregarte una cocina bien terminada y lista para usar." }
    ],
    testimonials: [
      { quote: "Abrimos la cocina al salón y el cambio se notó desde el primer día. Todo quedó bien coordinado, con una distribución mucho más cómoda y unos acabados muy cuidados.", author: "Esther R.", location: "Retiro, Madrid", initial: "ER", role: "Reforma integral de cocina", date: "Marzo 2024" },
      { quote: "Desde el presupuesto hasta los últimos remates fueron claros y ordenados. La encimera, el mobiliario y la instalación quedaron muy bien resueltos.", author: "Borja F.", location: "Tetuán, Madrid", initial: "BF", role: "Cocina a medida", date: "Enero 2024" },
      { quote: "Trabajaron con seriedad, cuidaron los tiempos y dejaron todo bien rematado. Se nota cuando una obra está bien planificada y cada oficio entra cuando toca.", author: "Mónica A.", location: "Centro, Madrid", initial: "MA", role: "Reforma completa de cocina", date: "Febrero 2024" }
    ],
    longContent: [
      { subtitle: "Distribución pensada para el uso diario", paragraph: "Una buena reforma de cocina no consiste solo en renovar acabados. También implica estudiar paso, luz, apoyo de trabajo y almacenaje para que la estancia se adapte mejor al día a día de la vivienda." },
      { subtitle: "Instalaciones y montaje bien coordinados", paragraph: "Cuando fontanería, electricidad, albañilería, mobiliario y encimera se planifican bien desde el principio, la obra avanza con menos interrupciones y el resultado final queda más limpio, más práctico y mejor resuelto." }
    ],
    directAnswer: "Una reforma de cocina en Madrid debe coordinar distribución, instalaciones, mobiliario y acabados para que el espacio resulte práctico, duradero y cómodo en el día a día.",
    faqTitle: "Preguntas frecuentes sobre reformas de cocinas en Madrid",
    faqDescription: "Dudas habituales sobre tiempos, instalaciones y cómo se organiza una reforma de cocina.",
    faqs: [
      { question: "¿La reforma incluye fontanería y electricidad?", answer: "Sí, cuando hace falta revisamos y renovamos las instalaciones para que la cocina funcione bien con el nuevo mobiliario, electrodomésticos y puntos de agua." },
      { question: "¿Cuánto tarda una reforma de cocina típica?", answer: "Depende del alcance, pero solemos trabajar con tiempos realistas y una planificación clara para que la obra avance con orden y sin improvisaciones." }
    ],
    relatedPaths: ["/reformas-banos-madrid", "/reformas-integrales-madrid", "/cambiar-banera-por-ducha-madrid"],
  },
  {
    path: "/cambiar-banera-por-ducha-madrid",
    serviceSlug: "cambio-banera-ducha",
    title: "Cambiar bañera por ducha en Madrid",
    metaTitle: "Cambiar bañera por plato de ducha en Madrid | Rapidez y comodidad",
    metaDescription: "Cambio de bañera por ducha en Madrid mediante un proceso rápido, limpio y con una ejecución enfocada en evitar molestas fugas.",
    heroIntro: "Sustituimos tu bañera por un plato de ducha para que ganes en seguridad, comodidad diaria y limpieza, asumiendo lo mínimo de obra.",
    heroSubtitle: "Mayor accesibilidad • Obra limpia y controlada • Adiós bañeras",
    heroBadges: ["Especialistas en ducha", "Instalación rápida", "Mamparas a medida"],
    advantages: [
      { title: "Seguridad Reforzada", description: "Di adiós a resbalones al entrar gracias a platos de superficie antideslizante sin barreras.", iconName: "sparkles" },
      { title: "Obra Acotada", description: "Intervenimos únicamente la zona necesaria para agilizar plazos sin derribar todo el cuarto.", iconName: "trending-up" },
      { title: "Ejecución Ágil", description: "En ocasiones, demolición, sellado y montaje toman poco más de unos días.", iconName: "clock" },
      { title: "Evitamos Fugas", description: "Instalamos la válvula extraplana y aplicamos sistemas de impermeabilización con garantías sólidas.", iconName: "wrench" }
    ],
    editorial: {
      badge: "Sustitución de Bañera",
      title: "Soluciones seguras que te cambian la vida diaria.",
      p1: "El acceso diario a la antigua bañera puede convertirse en una acción incómoda e incluso de riesgo con el paso del tiempo. Quitar un escalón pronunciado dota de total autonomía y paz mental.",
      p2: "Nuestro proceso para retirar esta bañera vieja está depurado: derribo conciso, saneamiento puntual de la válvula y adaptación del azulejo para que el enlace entre la pared existente y el nuevo hueco luzca intencionado y profesional.",
      p3: "Las perfilerías y mamparas actuales garantizan cierres estancos y repelen la acumulación de suciedad. Te aconsejaremos la distribución (apertura libre, corredera...) que resulte más ergonómica."
    },
    galleryImages: [
      "/images/cambio-banera-ducha-madrid/ducha-1.jpg",
      "/images/cambio-banera-ducha-madrid/ducha-2.jpg",
      "/images/cambio-banera-ducha-madrid/ducha-3.jpg"
    ],
    process: [
      { title: "Asesoramiento Inicial", timeframe: "Fase Previa", description: "Sopesamos juntos azulejos complementarios y modelos de mamparas idóneos para el hueco libre." },
      { title: "Retirada de Bañera", timeframe: "Comienzo", description: "Extracción muy cuidada del volumen y cimentación base sin deteriorar otras paredes." },
      { title: "Adaptación del Suelo", timeframe: "Instalación", description: "Centrado de la evacuación mediante bajantes adaptadas y asentamiento de resinas macizas." },
      { title: "Alicatado del Muro", timeframe: "Revestimiento", description: "Enlazar elegantemente la zona que dejó libre el hueco de la tina usando revestimientos de calidad." },
      { title: "Mampara Final", timeframe: "Entrega", description: "Montaje preciso de los cristales asegurando estanqueidad mediante sellados perimetrales." }
    ],
    testimonials: [
      { quote: "Increíble la rapidez de los chicos al cambiarme el plato de ducha. Apenas notamos escombros. La calidad de la mampara es sobresaliente.", author: "Beatriz L.", location: "Barrio de las Letras", initial: "B" },
      { quote: "Pensamos que sería un caos de polvo, pero cubrieron todo el mobiliario. Mi suegro ahora se baña con mucha más facilidad. Es una obra muy recomendable.", author: "Héctor G.", location: "Moncloa", initial: "H" },
      { quote: "Trato correcto en todo momento, desde el presupuesto inicial que respetaron íntegramente hasta el último remate de silicona del plato blanco resinoso.", author: "Carmen V.", location: "Prosperidad", initial: "C" }
    ],
    longContent: [
      { subtitle: "Remates elegantes al azulejar la carencia", paragraph: "La zona donde se hallaba la bañera quedará sin azulejo por lo general. Las cerámicas antiguas rara vez tienen repuestos tras tantos años. Por ello, aprovechamos para generar un falso contraste visual con diseños de relieve o gres imitación pétrea en formato mosaico, volviendo este problema una solución netamente de diseño." },
      { subtitle: "Desagües duraderos que no tragan mal", paragraph: "Seleccionar sumideros o válvulas modernas de calidad asegura que no ocurran obstrucciones de pelusa o atascos comunes en duchas deficientes, evitando costosos daños estructurales con los años." }
    ],
    directAnswer: "Sustituir bañera por ducha suele ser una actuación menor comparada a la reforma completa, pero exige rigor en la estanqueidad y remate de pared.",
    faqTitle: "Dudas relacionadas al Plato de Ducha",
    faqDescription: "Detalles del servicio exprés al sustituir este elemento en Madrid.",
    faqs: [
      { question: "¿Cuánto cuesta el cambio de bañera a ducha?", answer: "Gira según las dimensiones finales del plato resinoso, tipo de cristal perimetral y baldosas elegidas." },
      { question: "¿Cuánto tiempo tendré el baño inoperativo?", answer: "Al tratarse de una sección de la estancia, puede rondar una obra menor en días laborables controlada." }
    ],
    relatedPaths: ["/reformas-banos-madrid", "/reformas-cocinas-madrid", "/reformas-integrales-madrid"],
  }
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
  { question: "¿Cómo calculáis el precio de una reforma en Madrid?", answer: "Partimos del tipo de reforma, metros, estado previo y nivel de acabados." },
  { question: "¿El presupuesto es cerrado?", answer: "Sí, trabajamos con presupuestos claros para evitar sorpresas." },
  { question: "¿Cuánto tarda una reforma?", answer: "Depende del alcance." },
  { question: "¿Solo trabajáis en Madrid capital?", answer: "Nuestro foco principal es Madrid capital." },
  { question: "¿Quién coordina los gremios?", answer: "Nosotros coordinamos albañilería, fontanería, electricidad." },
  { question: "¿Puedo reformar por fases?", answer: "Sí, podemos plantear una hoja de ruta por fases." }
]

export const pricingPageHighlights = [
  { title: "Reformas integrales en Madrid", price: "Desde 650 €/m2", details: "Incluye coordinación de gremios.", href: "/reformas-integrales-madrid" },
  { title: "Reformas de baños en Madrid", price: "Desde 4.900 €", details: "Rango orientativo para reforma completa.", href: "/reformas-banos-madrid" },
  { title: "Reformas de cocinas en Madrid", price: "Desde 6.900 €", details: "Orientación para cocina completa.", href: "/reformas-cocinas-madrid" },
  { title: "Cambio de bañera por ducha", price: "Desde 1.950 €", details: "Obra contenida para ganar comodidad.", href: "/cambiar-banera-por-ducha-madrid" }
]
