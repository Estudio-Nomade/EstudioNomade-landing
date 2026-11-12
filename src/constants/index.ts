export const NAV_LINKS = [
  { label: "Problemas", href: "#problemas" },
  { label: "Qué hacemos", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Contacto", href: "#cta" },
] as const

/** Dolores del negocio — cortos, reconocibles, directos. */
export const PROBLEMS = [
  {
    id: "01",
    tag: "MARCA",
    title: "No se te ve profesional online",
    description:
      "Logo viejo, colores que no cierran, cada red con un estilo distinto. Quien te busca no te reconoce.",
  },
  {
    id: "02",
    tag: "WEB",
    title: "Entran y se van sin contactarte",
    description:
      "La web o el perfil no explican qué hacés ni el siguiente paso. Falta claridad y un camino fácil para escribirte.",
  },
  {
    id: "03",
    tag: "OPERAR",
    title: "Todo lo digital lo resolvés a mano",
    description:
      "Consultas, pedidos, planillas y posts te comen el día. El negocio crece y el caos también.",
  },
  {
    id: "04",
    tag: "CAPTAR",
    title: "Invertís en publicidad y no cierra",
    description:
      "Llega gente, pero la marca o la web no acompañan. El que compara elige a quien se ve claro y prolijo.",
  },
] as const

/**
 * Tres pilares claros (marca / web-dev / marketing).
 * Copy orientado a valor para el cliente, no a la lista de entregables.
 */
export const SERVICES = [
  {
    id: "marca",
    title: "Marca e identidad",
    description:
      "Que tu negocio se vea tan profesional como realmente es — logo, colores y una imagen que se reconoce en todos lados.",
    gradient: "from-fuchsia-500/20 to-violet-600/20",
    icon: "Palette",
    href: "/servicios/marca",
  },
  {
    id: "web",
    title: "Web y desarrollo",
    description:
      "Que tus clientes te encuentren, conozcan tu trabajo y puedan contactarte fácilmente — webs, landings y sistemas a medida.",
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "Globe",
    href: "/servicios/web",
  },
  {
    id: "marketing",
    title: "Marketing y publicidad",
    description:
      "Llegá a más personas y generá nuevas oportunidades para tu negocio — campañas claras, sin tirar plata a ciegas.",
    gradient: "from-pink-500/20 to-rose-600/20",
    icon: "Megaphone",
    href: "/servicios/marketing",
  },
] as const

/**
 * Proyectos del estudio.
 * situation / work / outcome — historia corta (labels en UI: Situación · Qué hicimos · Cómo quedó).
 * accent: color de la card.
 */
export const PROJECTS = [
  {
    id: "sistemas-locales",
    name: "Sistemas para locales",
    category: "A medida · Locales / comercios",
    featured: true,
    accent: "violet",
    logo: "/projects/sistemas-locales.png",
    situation:
      "El local operaba con planillas, WhatsApp suelto y poca visión del día a día.",
    work: "Armamos un sistema con turnos, pedidos, catálogo, clientes y panel del dueño, con la marca del negocio.",
    outcome:
      "Operación ordenada: cada local con su identidad y el dueño viendo todo desde un solo lugar.",
    description:
      "Sistema a medida para comercios: turnos, pedidos, catálogo y panel del dueño.",
    tech: [] as string[],
    features: ["Turnos y pedidos", "Catálogo y clientes", "Panel del dueño", "Marca propia"],
  },
  {
    id: "tubi",
    name: "Tubi",
    category: "Producto · Viajes",
    featured: false,
    accent: "cyan",
    logo: "/projects/tubi.png",
    situation: "Coordinar viajes compartidos Tandil ↔ CABA entre mensajes y listas sueltas.",
    work: "Producto digital para reservar lugar y organizar las salidas del equipo.",
    outcome: "Reservas claras y salidas ordenadas en rutas cercanas.",
    description:
      "Viajes compartidos Tandil ↔ CABA y rutas cercanas.",
    tech: [] as string[],
    features: ["Rutas", "Reservas", "Organización de salidas"],
  },
  {
    id: "lifty",
    name: "Lifty",
    category: "Producto · Movilidad",
    featured: false,
    accent: "indigo",
    logo: "/projects/lifty.png",
    url: "https://web.liftyviajes.com/",
    situation:
      "Hacía falta una app real de movilidad y también una web que explique y acompañe el producto.",
    work: "App para conductores y pasajeros (iOS/Android), web pública y panel de la empresa para flota, docs y pagos.",
    outcome: "Operación de movilidad centralizada: app + web + panel trabajando juntos.",
    description:
      "App de movilidad, web pública y panel de la empresa.",
    tech: [] as string[],
    features: ["App celular", "Web", "Panel de la empresa", "Flota"],
  },
  {
    id: "soleph",
    name: "Soleph",
    category: "A medida · Fotografía",
    featured: false,
    accent: "fuchsia",
    logo: "/projects/soleph.png",
    url: "https://soleyaquintafotografia.com",
    situation:
      "Mostrar el trabajo fotográfico y vender packs sin perder control de las fotos.",
    work: "Portfolio + tienda con marca de agua, packs y compra online a medida del estudio.",
    outcome: "Clientes ven, eligen y compran; el estudio cobra y protege su trabajo.",
    description:
      "Portfolio y tienda de fotos de evento.",
    tech: [] as string[],
    features: ["Álbumes", "Marca de agua", "Carrito", "Subida de fotos"],
  },
  {
    id: "anastasia",
    name: "Anastasia",
    category: "A medida · Tienda online",
    featured: false,
    accent: "rose",
    logo: "/projects/anastasia.webp",
    url: "https://www.anastasiatiendaerotica.com",
    situation:
      "Vender online con catálogo, envíos y pagos sin depender solo del local físico.",
    work: "E-commerce completo: catálogo, carrito, envíos, pagos y panel de productos/pedidos.",
    outcome: "Tienda online lista para vender y administrar el día a día del local.",
    description:
      "E-commerce de un local de Tandil.",
    tech: [] as string[],
    features: ["Catálogo", "Carrito", "Envíos", "Panel"],
  },
  {
    id: "la-percha",
    name: "La Percha Showroom",
    category: "A medida · Indumentaria",
    featured: false,
    accent: "pink",
    logo: "/projects/la-percha.svg",
    url: "https://www.laperchashowroom.com.ar",
    situation:
      "Llevar el showroom de ropa a la web con clientas, stock y ferias bajo control.",
    work: "Showroom online con catálogo, registro, compras y panel del local.",
    outcome: "La marca vende y gestiona online con su propia identidad.",
    description:
      "Showroom online de ropa.",
    tech: [] as string[],
    features: ["Catálogo", "Registro", "Compras", "Panel"],
  },
  {
    id: "activate",
    name: "Activate Moda Deportiva",
    category: "A medida · Indumentaria",
    featured: false,
    accent: "emerald",
    logo: "/projects/activate.png",
    url: "https://www.activatemodadeportiva.com",
    situation:
      "Tienda de ropa deportiva con talles, envíos y pedidos administrables.",
    work: "E-commerce a medida: catálogo, carrito, pagos y panel de productos/pedidos.",
    outcome: "La marca vende online con la operación del local ordenada.",
    description:
      "Tienda online de ropa deportiva.",
    tech: [] as string[],
    features: ["Catálogo", "Carrito", "Pagos", "Panel"],
  },
  {
    id: "makeka",
    name: "La Makeka",
    category: "A medida · Campo",
    featured: false,
    accent: "amber",
    logo: "/projects/makeka.png",
    situation: "El día a día del campo dependía de planillas sueltas.",
    work: "Gestión web del campo con datos operativos accesibles desde cualquier lado.",
    outcome: "Información ordenada y disponible cuando hace falta.",
    description:
      "Gestión del campo en la web.",
    tech: [] as string[],
    features: ["Inventario", "Día a día", "Desde cualquier lado"],
  },
  {
    id: "sierras",
    name: "Depto. de las Sierras",
    category: "A medida · Turismo",
    featured: false,
    accent: "sky",
    logo: "/projects/sierras.png",
    url: "https://departamentodelassierras.vercel.app",
    situation:
      "Reservas de alojamiento perdidas entre mensajes y calendarios.",
    work: "Web de reservas con calendario, disponibilidad y consultas claras.",
    outcome: "Dueño y huésped ven disponibilidad y avanzan con menos fricción.",
    description:
      "Reservas de un alojamiento.",
    tech: [] as string[],
    features: ["Reservas", "Calendario", "Celular"],
  },
  {
    id: "carri",
    name: "Carri",
    category: "A medida · Gastronomía",
    featured: false,
    accent: "lime",
    situation: "Carta y pedidos sin un flujo alineado a cómo opera el local.",
    work: "Carta digital, pedidos y panel del local a medida de la operación.",
    outcome: "Pedidos más claros y un panel que sigue el ritmo del comercio.",
    description:
      "Carta, pedidos y panel del local.",
    tech: [] as string[],
    features: ["Carta", "Pedidos", "Panel del local"],
  },
] as const

/** Testimonios cortos — confianza con clientes reales. */
export const TESTIMONIALS = [
  {
    id: "soleph",
    quote:
      "Pasamos de mandar fotos por WhatsApp a una tienda ordenada, con packs y la marca del estudio. Los clientes entienden y compran sin dar vueltas.",
    name: "Sole Yaquinta",
    business: "Soleph · Fotografía",
    work: "Portfolio + tienda online",
  },
  {
    id: "anastasia",
    quote:
      "Necesitábamos vender online sin perder el control del local. Hoy el catálogo, los pedidos y los pagos están en un solo lugar.",
    name: "Equipo Anastasia",
    business: "Anastasia · Tienda",
    work: "E-commerce a medida",
  },
  {
    id: "sierras",
    quote:
      "Las reservas dejaron de ser un lío de mensajes. El calendario y la web nos simplificaron el día a día con los huéspedes.",
    name: "Depto. de las Sierras",
    business: "Alojamiento · Turismo",
    work: "Web de reservas",
  },
] as const

/** Stack interno (sección Tech no está en home; se deja por si se reusa). */
export const TECH_STACK = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Expo", category: "Mobile" },
  { name: "TypeScript", category: "Lenguaje" },
  { name: "Node.js", category: "Backend" },
  { name: "Supabase", category: "Backend" },
  { name: "PostgreSQL", category: "Base de datos" },
  { name: "Docker", category: "Infraestructura" },
  { name: "GitHub", category: "Herramientas" },
  { name: "OpenAI", category: "IA" },
  { name: "Claude", category: "IA" },
  { name: "Vercel", category: "Deploy" },
] as const

/** Proceso corto — 3 pasos, sin reloj ni jerga. */
export const PROCESS = [
  {
    step: "01",
    title: "Nos contás qué necesitás",
    description:
      "Una charla simple: tu negocio, el objetivo y lo que hoy no está funcionando. No hace falta que sepas si es web, marca o las dos.",
  },
  {
    step: "02",
    title: "Pensamos una solución para tu negocio",
    description:
      "Proponemos el camino más claro: una pieza o un combo. Priorizamos lo que mueve el negocio, no un laberinto de fases.",
  },
  {
    step: "03",
    title: "La desarrollamos y tu negocio da el siguiente paso",
    description:
      "Diseñamos, armamos y dejamos todo usable. El trabajo queda a tu nombre: listo para usar y para seguir creciendo.",
  },
] as const

/**
 * Páginas listas para ads (Meta/Google) — misma oferta, foco por servicio.
 * No hace falta 10 landings: 3 pilares reutilizables.
 */
export const SERVICE_LANDINGS = {
  marca: {
    slug: "marca",
    title: "Identidad de marca",
    eyebrow: "Marca",
    headline: "Que tu negocio se vea tan profesional como realmente es.",
    description:
      "Logo, colores, tipografías y lineamientos claros para que te reconozcan en la web, redes y el local.",
    bullets: [
      "Identidad visual coherente en todos los puntos de contacto",
      "Base lista para web, packaging y redes",
      "Lineamientos simples para que el equipo no improvise",
    ],
    relatedProjectIds: ["soleph", "anastasia", "la-percha"] as const,
  },
  web: {
    slug: "web",
    title: "Web y desarrollo",
    eyebrow: "Web · Sistemas",
    headline: "Que te encuentren, entiendan qué hacés y te escriban fácil.",
    description:
      "Landings, webs institucionales y sistemas a medida: claros en el celular y pensados para que la conversación avance.",
    bullets: [
      "Sitios y landings que explican la oferta sin ruido",
      "Sistemas a medida (turnos, pedidos, catálogo, paneles)",
      "Contacto directo por WhatsApp o el canal que uses",
    ],
    relatedProjectIds: [
      "anastasia",
      "soleph",
      "activate",
      "sierras",
      "sistemas-locales",
    ] as const,
  },
  marketing: {
    slug: "marketing",
    title: "Marketing y publicidad",
    eyebrow: "Marketing",
    headline: "Llegá a más personas y generá oportunidades reales.",
    description:
      "Campañas en Instagram y Facebook, y orden de marketing para no tirar plata cuando la marca o la web todavía no acompañan.",
    bullets: [
      "Campañas en Meta Ads con mensaje claro",
      "Alineación entre anuncio, marca y destino (web o WhatsApp)",
      "Consultoría para ordenar lo que ya hacés y potenciarlo",
    ],
    relatedProjectIds: ["anastasia", "la-percha", "activate"] as const,
  },
} as const

export type ServiceLandingSlug = keyof typeof SERVICE_LANDINGS

export const CONTACT = {
  /** E.164 sin +. WA consultas Estudio Nómade. */
  whatsapp: "5492261400084",
  email: "estudionomade2025@gmail.com",
  github: "https://github.com/Estudio-Nomade",
  linkedin: "#",
  /** Texto corto para reuniones online (Calendly u otro) — opcional. */
  meetingUrl: "" as string,
} as const

/** Mensaje WA por defecto (conversación, no selector de servicios). */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hola, estuve viendo su web y me gustaría consultarles por un proyecto."

export const SITE = {
  name: "Estudio Nómade",
  tagline: "Diseño y código en movimiento",
  valueLine:
    "Creamos marcas, páginas web y soluciones digitales para hacer crecer tu negocio.",
  description:
    "Estudio Nómade: marcas, páginas web y soluciones digitales para hacer crecer tu negocio. Diseño, desarrollo y marketing con atención humana — trabajamos de forma remota desde Tandil, Buenos Aires.",
  url: "https://estudionomade.com.ar",
  originLabel: "Desde Tandil, Buenos Aires · trabajamos en todo el país",
} as const
