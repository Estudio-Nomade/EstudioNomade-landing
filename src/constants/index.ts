export const NAV_LINKS = [
  { label: "Problemas", href: "#problemas" },
  { label: "Qué hacemos", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#cta" },
] as const

/** Síntomas / dolores — una idea por bloque, lenguaje llano. */
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
    title: "La publicidad manda gente… a un lugar que no cierra",
    description:
      "Instagram o una web genérica no alcanzan. El que compara elige a quien le muestra claro el producto y el siguiente paso.",
  },
] as const

/** Qué hacemos — producto + marca + marketing, sin jerga. */
export const SERVICES = [
  {
    title: "Sistemas para el día a día",
    description:
      "Herramientas para turnos, pedidos, catálogo, clientes o el trabajo interno del equipo. Todo ordenado, con tu marca, listo para usar.",
    gradient: "from-violet-500/20 to-purple-600/20",
    icon: "Layers",
  },
  {
    title: "Apps y herramientas a medida",
    description:
      "Cuando lo que necesitás no entra en un molde: app del celular, paneles propios y procesos que se arman alrededor de cómo laburás vos.",
    gradient: "from-indigo-500/20 to-violet-600/20",
    icon: "Code2",
  },
  {
    title: "Webs y presencia digital",
    description:
      "Sitios claros que explican qué hacés y cómo te contactan. Sin ruido, pensados para el celular y para que la charla avance.",
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "Globe",
  },
  {
    title: "Identidad de marca",
    description:
      "Logo, colores, tipografías y lineamientos para que el negocio se vea prolijo y reconocible en todos lados.",
    gradient: "from-fuchsia-500/20 to-violet-600/20",
    icon: "Palette",
  },
  {
    title: "Publicidad en Instagram y Facebook",
    description:
      "Armamos, publicamos y afinamos campañas en Meta Ads para llegar a gente nueva y no tirar plata a ciegas.",
    gradient: "from-pink-500/20 to-rose-600/20",
    icon: "Megaphone",
  },
  {
    title: "Marca + web juntas",
    description:
      "Primero la identidad visual del negocio y después una landing o web institucional alineada a esa marca, de punta a punta.",
    gradient: "from-sky-500/20 to-indigo-600/20",
    icon: "Sparkles",
  },
  {
    title: "Consultoría de marketing",
    description:
      "Ordenamos lo que ya hacés, vemos qué anda y qué no, y definimos cómo captar mejor leads y clientes nuevos.",
    gradient: "from-amber-500/20 to-orange-600/20",
    icon: "Compass",
  },
] as const

/**
 * Proyectos del estudio.
 * Copy en criollo: sin multi-tenant, stack, billing, PWA, etc.
 * (tech queda vacío / no se muestra en UI)
 */
export const PROJECTS = [
  {
    id: "tumo",
    name: "Tumo",
    category: "Producto propio · Negocios",
    featured: true,
    url: "https://www.tumo.com.ar",
    description:
      "Sistema del estudio para que un local arme turnos, pedidos, catálogo y clientes con su propia marca. Varios comercios pueden usarlo sin mezclarse entre sí.",
    tech: [] as string[],
    features: [
      "Turnos y pedidos",
      "Catálogo y clientes",
      "Panel del dueño",
      "Cada local con su marca",
    ],
  },
  {
    id: "tubi",
    name: "Tubi",
    category: "Producto · Viajes",
    featured: false,
    description:
      "Viajes compartidos Tandil ↔ CABA y rutas cercanas. La gente reserva lugar y el equipo organiza las salidas.",
    tech: [] as string[],
    features: ["Rutas", "Reservas", "Organización de salidas"],
  },
  {
    id: "lifty",
    name: "Lifty",
    category: "Producto · Movilidad",
    featured: false,
    description:
      "App para conductores y pasajeros, más el panel de la empresa y herramientas de tránsito municipal. Docs, pagos y el día a día de la flota.",
    tech: [] as string[],
    features: ["App celular", "Panel de la empresa", "Tránsito", "Avisos"],
  },
  {
    id: "soleph",
    name: "Soleph",
    category: "A medida · Fotografía",
    featured: false,
    description:
      "Portfolio y tienda de fotos de evento: se ven con marca de agua, se arman packs y se compra online. Hecho a la medida del estudio fotográfico.",
    tech: [] as string[],
    features: ["Álbumes", "Marca de agua", "Carrito", "Subida de fotos"],
  },
  {
    id: "juanitacocina",
    name: "Juanitacocina",
    category: "A medida · Pastelería",
    featured: false,
    description:
      "Web de marca, tienda de encargos y panel para productos, horarios y cursos. El pedido llega por WhatsApp con todo el detalle.",
    tech: [] as string[],
    features: ["Tienda", "Panel", "Cursos", "WhatsApp"],
  },
  {
    id: "makeka",
    name: "La Makeka",
    category: "A medida · Campo",
    featured: false,
    description:
      "Gestión del campo en la web: datos del día a día sin depender solo de planillas sueltas.",
    tech: [] as string[],
    features: ["Inventario", "Día a día", "Desde cualquier lado"],
  },
  {
    id: "sierras",
    name: "Depto. de las Sierras",
    category: "A medida · Turismo",
    featured: false,
    description:
      "Reservas de un alojamiento: calendario, disponibilidad y consultas pensadas para el dueño y el huésped.",
    tech: [] as string[],
    features: ["Reservas", "Calendario", "Celular"],
  },
  {
    id: "sol-labaroni",
    name: "Sol Labaroni",
    category: "A medida · Salud / bienestar",
    featured: false,
    description:
      "Presencia online y turnos para masoterapia: la persona reserva o escribe fácil, con la marca del profesional.",
    tech: [] as string[],
    features: ["Turnos", "WhatsApp", "Marca"],
  },
  {
    id: "zerrant",
    name: "Zerrant / Nodo Serrano",
    category: "Producto · Inventario",
    featured: false,
    description:
      "Inventario del equipo: se anotan cosas, se las asignan y siguen el trabajo interno. No es una vitrina de venta.",
    tech: [] as string[],
    features: ["Inventario", "Asignación", "Equipo"],
  },
  {
    id: "carri",
    name: "Carri",
    category: "A medida · Gastronomía",
    featured: false,
    description:
      "Carta, pedidos y panel del local, alineados a cómo trabaja el food truck o el comercio.",
    tech: [] as string[],
    features: ["Carta", "Pedidos", "Panel del local"],
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

/** Proceso corto — sin “build”, “módulo”, “producción”. */
export const PROCESS = [
  {
    step: "01",
    title: "Hablamos",
    description:
      "Entendemos el negocio, el dolor y qué conviene: sistema, app, web, marca, ads o un combo a medida.",
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
    title: "Diseño y armado",
    description:
      "Armamos la experiencia y la herramienta. Preferimos algo usable pronto a un montón de charlas sin entrega.",
    duration: "Nosotros",
  },
  {
    step: "04",
    title: "Online",
    description:
      "Queda publicado, con tu dominio cuando corresponda. Si mañana querés seguir con otra persona, el producto es tuyo.",
    duration: "Entrega",
  },
] as const

export const CONTACT = {
  /** E.164 sin +. Completar número real EN si difiere. */
  whatsapp: "5492266515776",
  email: "estudionomade2025@gmail.com",
  github: "https://github.com/Estudio-Nomade",
  linkedin: "#",
} as const

export const SITE = {
  name: "Estudio Nómade",
  tagline: "Diseño y código en movimiento",
  description:
    "Estudio en Tandil. Armamos apps, webs y sistemas a medida, más identidad de marca, publicidad en Instagram y Facebook, y orden de marketing — claros, útiles y pensados para usarse de verdad.",
  url: "https://estudionomade.com",
}
