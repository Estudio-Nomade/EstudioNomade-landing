export const NAV_LINKS = [
  { label: "Problemas", href: "#problemas" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Mantenimiento", href: "#mantenimiento" },
  { label: "Contacto", href: "#cta" },
] as const

/** Síntomas / dolores — una idea por bloque (estilo Maguiceri: claro, poco de golpe). */
export const PROBLEMS = [
  {
    id: "01",
    tag: "SE PIERDE",
    title: "Te escriben “hola, info” y desaparecen",
    description:
      "Llegan sin entender qué ofrecés, cuánto sale ni cómo es el proceso. Preguntan lo básico y no vuelven.",
  },
  {
    id: "02",
    tag: "TU TIEMPO",
    title: "Contestás las mismas preguntas todos los días",
    description:
      "Precio, horarios, turnos, pedidos, “¿cómo se empieza?”. Ese tiempo debería estar en el negocio, no en el chat.",
  },
  {
    id: "03",
    tag: "OPERACIÓN",
    title: "Todo vive en planillas, WhatsApp y la cabeza de alguien",
    description:
      "Cuando crece la demanda, se rompe el orden: turnos dobles, pedidos perdidos, clientes que no vuelven.",
  },
  {
    id: "04",
    tag: "SE PIERDE",
    title: "La publicidad manda tráfico… a un lugar que no convierte",
    description:
      "Instagram o una web genérica no cierran. El que compara elige a quien le muestra claro el producto y el siguiente paso.",
  },
] as const

/** Qué hacemos — 3 vías, no 6 cards densas. */
export const SERVICES = [
  {
    title: "Tumo — sistema de módulos",
    description:
      "Producto principal a la venta: turnos, pedidos, catálogo, clientes y más. Activás lo que necesitás; no armamos todo de cero cada vez.",
    gradient: "from-violet-500/20 to-purple-600/20",
    icon: "Layers",
  },
  {
    title: "Software a medida",
    description:
      "Cuando el negocio no entra en un módulo: apps, paneles, automatizaciones y flujos propios. Lo armamos para tu operación.",
    gradient: "from-indigo-500/20 to-violet-600/20",
    icon: "Code2",
  },
  {
    title: "Webs y presencia digital",
    description:
      "Sitios claros que explican qué hacés y cómo te contactan. Sin ruido, pensados para celular y para cerrar la conversación.",
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "Globe",
  },
] as const

/**
 * Proyectos EN.
 * Tumo primero (producto vendible). Resto = productos propios + trabajos a medida.
 */
export const PROJECTS = [
  {
    id: "tumo",
    name: "Tumo",
    category: "Producto · Sistema de módulos",
    featured: true,
    description:
      "Nuestra plataforma multi-tenant: el negocio elige módulos (turnos, pedidos, catálogo, fidelización…) y opera con su marca. Es lo que vendemos como sistema reutilizable — no una app suelta por cliente.",
    tech: ["Next.js", "PostgreSQL", "Supabase", "TypeScript"],
    features: ["Módulos activables", "Multi-negocio", "Admin + público", "Billing por módulo"],
  },
  {
    id: "tubi",
    name: "Tubi",
    category: "Producto · Movilidad",
    featured: false,
    description:
      "Viajes compartidos Tandil ↔ CABA y corredores cercanos. Producto propio del estudio: matching, reservas y ops de ruta.",
    tech: ["Next.js", "Supabase", "TypeScript"],
    features: ["Rutas", "Reservas", "Ops internas"],
  },
  {
    id: "lifty",
    name: "Lifty",
    category: "Producto · Movilidad urbana",
    featured: false,
    description:
      "Suite de movilidad: app conductor/pasajero, admin y módulos de tránsito municipal. Matching, docs, pagos y paneles de operación.",
    tech: ["Expo", "React Native", "Railway", "Supabase"],
    features: ["App mobile", "Admin PWA", "Tránsito", "Push"],
  },
  {
    id: "soleph",
    name: "Soleph",
    category: "A medida · Fotografía",
    featured: false,
    description:
      "Portfolio + tienda de fotos de evento: vitrina con marca de agua, packs, carrito y admin de subida. Hecho a la medida del estudio fotográfico.",
    tech: ["Astro", "Supabase", "Vercel"],
    features: ["Álbumes", "Vitrina WM", "Carrito", "Admin"],
  },
  {
    id: "juanitacocina",
    name: "Juanitacocina",
    category: "A medida · Pastelería",
    featured: false,
    description:
      "Web de marca + tienda de encargos + admin de productos, horarios y cursos. El pedido llega por WhatsApp con el detalle completo.",
    tech: ["Next.js", "Postgres", "Supabase Storage"],
    features: ["Tienda", "Admin", "Cursos", "WhatsApp"],
  },
  {
    id: "makeka",
    name: "La Makeka",
    category: "A medida · Agro",
    featured: false,
    description:
      "Gestión ganadera / operación de campo en web app. Datos del día a día sin depender solo de planillas sueltas.",
    tech: ["Next.js", "Supabase"],
    features: ["Inventario", "Ops", "Cloud"],
  },
  {
    id: "sierras",
    name: "Depto. de las Sierras",
    category: "A medida · Turismo",
    featured: false,
    description:
      "Reservas y ops de un alojamiento: calendario, disponibilidad y flujo de consulta pensado para el dueño y el huésped.",
    tech: ["Next.js", "Supabase", "PWA"],
    features: ["Reservas", "Calendario", "Mobile"],
  },
  {
    id: "sol-labaroni",
    name: "Sol Labaroni",
    category: "A medida · Salud / bienestar",
    featured: false,
    description:
      "Presencia + turnos para masoterapia: la persona reserva o escribe sin fricción, con la marca del profesional.",
    tech: ["Web", "Turnos"],
    features: ["Turnos", "WhatsApp", "Marca"],
  },
  {
    id: "zerrant",
    name: "Zerrant / Nodo Serrano",
    category: "Producto · Inventario",
    featured: false,
    description:
      "Inventario con claim y flujo de trabajo para el equipo. Operación interna, no vitrina de marketing.",
    tech: ["Next.js", "Linear"],
    features: ["Inventario", "Claim", "Ops"],
  },
  {
    id: "carri",
    name: "Carri",
    category: "A medida · Gastronomía",
    featured: false,
    description:
      "Operación gastronómica digital: carta, pedidos y panel alineados al local (familia de productos tipo Tumo / food).",
    tech: ["Next.js", "Postgres"],
    features: ["Carta", "Pedidos", "Admin"],
  },
] as const

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

/** Proceso corto: el reloj arranca cuando pasa el contenido (como Maguiceri). */
export const PROCESS = [
  {
    step: "01",
    title: "Hablamos",
    description:
      "Entendemos el negocio, el dolor y si alcanza un módulo de Tumo, un a medida o una web clara.",
    duration: "1 charla",
  },
  {
    step: "02",
    title: "Pasás el contenido",
    description:
      "Textos, fotos, precios, horarios, logo. Ahí arranca el reloj de verdad: con eso ya nos ponemos a trabajar.",
    duration: "Vos",
  },
  {
    step: "03",
    title: "Diseño + build",
    description:
      "Armamos la experiencia y el sistema. Iteramos poco y claro: preferimos algo usable pronto a un deck eterno.",
    duration: "Nosotros",
  },
  {
    step: "04",
    title: "Online",
    description:
      "Queda en producción, con tu dominio cuando corresponda. Si mañana querés seguir con otra persona, el producto es tuyo.",
    duration: "Entrega",
  },
] as const

/** Valores de referencia (Propuesta mantenimiento web — Agosto 2026). Modalidad a demanda, sin abono mensual. */
export const MAINTENANCE = {
  currency: "USD",
  rangeLabel: "USD 30 – 70",
  modeNote:
    "Mantenimiento a demanda: solo se cobra cuando pedís un trabajo. Sin abono mensual obligatorio. Cada pedido se cotiza antes de arrancar.",
  excludes: "No incluye SEO avanzado ni desarrollo técnico personalizado a gran escala.",
  plans: [
    {
      id: "simple",
      name: "Cambios simples",
      price: 30,
      priceLabel: "USD 30",
      tagline: "Ajustes puntuales",
      description:
        "Modificación de textos, reemplazo de imágenes, actualización de datos (horarios, precios, etc.) y corrección de enlaces.",
      icon: "FileText",
      highlighted: false,
    },
    {
      id: "medio",
      name: "Cambios medios",
      price: 45,
      priceLabel: "USD 45",
      tagline: "El más pedido",
      description:
        "Carga de nuevas secciones, ajustes de diseño, configuración básica de plugins (formularios, seguridad o backups) y optimización básica de contenido.",
      icon: "Layers",
      highlighted: true,
    },
    {
      id: "complejo",
      name: "Cambios complejos",
      price: 70,
      priceLabel: "USD 70",
      tagline: "Funcionalidad nueva",
      description:
        "Desarrollo de nuevas funcionalidades, integraciones externas, rediseño de secciones completas y problemas técnicos avanzados.",
      icon: "Wrench",
      highlighted: false,
    },
  ],
} as const

export const CONTACT = {
  /** E.164 sin +. Completar número real EN si difiere. */
  whatsapp: "5492266515776",
  email: "estudionomade2025@gmail.com",
  github: "https://github.com/Estudio-Nomade",
  linkedin: "#",
} as const

export const SITE = {
  name: "Estudio Nómade",
  tagline: "Software claro para negocios que ya operan",
  description:
    "Estudio de software en Tandil. Vendemos Tumo (sistema de módulos) y hacemos a medida: apps, webs y automatización. Menos ruido, más operación.",
  url: "https://estudionomade.com",
}
