export const NAV_LINKS = [
  { label: "Procesos que resolvemos", href: "#servicios" },
  { label: "Productos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#cta" },
] as const

export const SERVICES = [
  {
    title: "Gestión de Turnos",
    description:
      "Sistema de reservas y agenda que ya probamos con otros clientes. Tus clientes agendan solos desde una interfaz pulida y probada.",
    gradient: "from-violet-500/20 to-purple-600/20",
    icon: "Calendar",
  },
  {
    title: "Catálogo Digital",
    description:
      "Plataforma de productos sincronizada. Cada negocio la personaliza a su marca, pero el motor ya está construido y testeado.",
    gradient: "from-purple-500/20 to-pink-600/20",
    icon: "ShoppingBag",
  },
  {
    title: "Gestión de Clientes",
    description:
      "CRM con historial, preferencias y comunicación. Reutilizamos la arquitectura para que cada cliente nuevo no empiece de cero.",
    gradient: "from-indigo-500/20 to-violet-600/20",
    icon: "Users",
  },
  {
    title: "Gestión de Pedidos",
    description:
      "Panel para recibir, gestionar y despachar. Construido sobre nuestra base de procesos, no desde un proyecto aislado.",
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "Package",
  },
  {
    title: "Aplicaciones Mobile",
    description:
      "Apps nativas que heredan componentes de proyectos anteriores. React Native + Expo sobre arquitectura que ya funciona.",
    gradient: "from-emerald-500/20 to-teal-600/20",
    icon: "Smartphone",
  },
  {
    title: "Automatización",
    description:
      "Flujos inteligentes que conectan tus sistemas. Integraciones pre-armadas que adaptamos, no reinventamos.",
    gradient: "from-amber-500/20 to-orange-600/20",
    icon: "Zap",
  },
] as const

export const PROJECTS = [
  {
    id: "lifty",
    name: "Lifty",
    category: "Aplicación de Movilidad",
    description:
      "Plataforma completa de transporte con app para pasajeros, conductor y panel de administración. Matching en tiempo real, pagos integrados y tracking GPS.",
    tech: ["Expo", "React Native", "Supabase", "Mercado Pago", "Google Maps"],
    features: ["Mapa en vivo", "Viajes programados", "Panel Admin", "Pagos integrados"],
  },
  {
    id: "saas-fidelizacion",
    name: "Sistema de Fidelización",
    category: "SaaS B2B",
    description:
      "Plataforma SaaS para programas de fidelización. Gestión de clientes, puntos, beneficios, campañas y analíticas avanzadas con segmentación inteligente.",
    tech: ["Next.js", "Supabase", "TypeScript", "Charts", "PostgreSQL"],
    features: ["Dashboard Analytics", "Segmentación", "Campañas", "Beneficios"],
  },
  {
    id: "anastasia",
    name: "Anastasia Shop",
    category: "E-commerce Mobile",
    description:
      "Rediseño completo de experiencia de compra mobile. Checkout optimizado, navegación fluida y performance superior para conversión.",
    tech: ["Next.js", "React", "TailwindCSS", "Stripe", "Vercel"],
    features: ["Checkout optimizado", "PWA", "Responsive", "SEO"],
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

export const PROCESS = [
  { step: "01", title: "Descubrimiento", description: "Entendemos tu negocio, objetivos y usuarios.", duration: "Semana 1" },
  { step: "02", title: "UX/UI Design", description: "Diseñamos la experiencia y la interfaz completa.", duration: "Semana 2-3" },
  { step: "03", title: "Arquitectura", description: "Definimos la infraestructura y stack técnico.", duration: "Semana 3" },
  { step: "04", title: "Desarrollo", description: "Construimos el producto con iteraciones semanales.", duration: "Semana 4-12" },
  { step: "05", title: "Testing", description: "QA integral: funcional, performance y seguridad.", duration: "Semana 12-13" },
  { step: "06", title: "Deploy", description: "Lanzamiento a producción con monitoreo activo.", duration: "Semana 13" },
  { step: "07", title: "Soporte", description: "Mantenimiento, mejoras y evolución continua.", duration: "Continuo" },
] as const

export const CONTACT = {
  whatsapp: "+5492266515776",
  email: "estudionomade2025@gmail.com",
  github: "https://github.com/martiyaquinta",
  linkedin: "#",
} as const

export const SITE = {
  name: "Estudio Nómade",
  tagline: "Diseño y código en movimiento",
  description:
    "Plataforma de soluciones digitales para PyMEs. Ayudamos a vender más, ahorrar tiempo y fidelizar clientes con software reutilizable y sólido.",
  url: "https://estudionomade.com",
}
