export const NAV_LINKS = [
  { label: "Lo que construimos", href: "#servicios" },
  { label: "Productos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#cta" },
] as const

export const SERVICES = [
  {
    title: "Gestión de Turnos",
    description:
      "Sistemas de reservas y agenda online. Tus clientes agendan solos, vos ganás tiempo y evitás confusiones.",
    gradient: "from-violet-500/20 to-purple-600/20",
    icon: "Calendar",
  },
  {
    title: "Catálogo Digital",
    description:
      "Mostrá todos tus productos en una plataforma moderna. Sincronizado, actualizado y optimizado para vender.",
    gradient: "from-purple-500/20 to-pink-600/20",
    icon: "ShoppingBag",
  },
  {
    title: "Gestión de Clientes",
    description:
      "Centralizá la información de tus clientes: historial, preferencias y comunicaciones en un solo lugar.",
    gradient: "from-indigo-500/20 to-violet-600/20",
    icon: "Users",
  },
  {
    title: "Gestión de Pedidos",
    description:
      "Recibí, gestioná y despachá pedidos desde un panel simple. Sin planillas, sin errores.",
    gradient: "from-cyan-500/20 to-blue-600/20",
    icon: "Package",
  },
  {
    title: "Aplicaciones Mobile",
    description:
      "Apps nativas con React Native y Expo. Llevá la solución al bolsillo de tus clientes y empleados.",
    gradient: "from-emerald-500/20 to-teal-600/20",
    icon: "Smartphone",
  },
  {
    title: "Automatización",
    description:
      "Eliminá tareas repetitivas. Integraciones inteligentes para que tu negocio opere solo mientras vos crecés.",
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
    "Ayudamos a emprendedores y PyMEs a vender más, ahorrar tiempo y fidelizar clientes mediante soluciones digitales a medida.",
  url: "https://estudionomade.com",
}
