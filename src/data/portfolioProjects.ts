import { type ProjectDetailsTabsProps } from "@/components/portfolio/ProjectDetailsTabs";

export type PortfolioProject = {
  slug: string;
  title: string;
  subtitle: string;
  cardImageSrc: string;
  cardImageAlt: string;
  cardImageClassName?: string;
  preview: {
    url: string;
    displayUrl: string;
    title: string;
    instruction: string;
    openLabel: string;
    backgroundClassName: string;
  };
  details: ProjectDetailsTabsProps;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "gallatrack",
    title: "GallaTrack",
    subtitle:
      "Concesionario oficial FOTON · Presentación · Catálogo · Estadísticas · Panel Admin",
    cardImageSrc: "/projects/gallatrack-whatsapp-business.png",
    cardImageAlt: "Símbolo de GallaTrack",
    preview: {
      url: "https://www.gallatrack.com.ar/",
      displayUrl: "https://www.gallatrack.com.ar",
      title: "Vista interactiva de GallaTrack",
      instruction: "Desplazate dentro del cuadro para recorrer la web",
      openLabel: "Abrir sitio completo",
      backgroundClassName: "bg-[#e3fcf7]",
    },
    details: {
      projectName: "GallaTrack",
      badge: "Branding + producto digital",
      badgeClassName: "bg-[#78e8b3]",
      category: "Identidad visual · Desarrollo web",
      title: "GallaTrack",
      description:
        "El proyecto comenzó con la creación de la identidad visual de GallaTrack y un manual de marca completo. A partir de ese sistema diseñé y desarrollé el sitio del concesionario oficial FOTON, trasladando la marca a una experiencia web con presentación institucional, catálogo de gamas, estadísticas y panel administrativo.",
      details: [
        {
          label: "01 · Identidad y manual de marca",
          text: "Concepto, logotipo, isotipo, paleta, tipografía, lenguaje gráfico, tratamiento fotográfico, convivencia con FOTON y Gallagro, y reglas de aplicación.",
          color: "#e3fcf7",
        },
        {
          label: "02 · Diseño y desarrollo web",
          text: "Sitio institucional y comercial para presentar la concesionaria, recorrer las gamas FOTON, consultar vehículos y administrar el contenido.",
          color: "#c8f6e4",
        },
        {
          label: "03 · Aplicaciones de marca",
          text: "Sistema extendido a papelería comercial, piezas digitales, redes sociales, señalética, vehículos, indumentaria y merchandising.",
          color: "#78e8b3",
        },
      ],
      images: [
        {
          src: "/projects/galla1.png",
          alt: "Galería de GallaTrack, imagen 1",
          caption: "GallaTrack - Home modo claro",
        },
        {
          src: "/projects/galla2.png",
          alt: "Galería de GallaTrack, imagen 2",
          caption: "GallaTrack - Home modo oscuro",
        },
        {
          src: "/projects/galla3.png",
          alt: "Galería de GallaTrack, imagen 3",
          caption: "GallaTrack - Vista general de catálogo",
        },
        {
          src: "/projects/galla4.png",
          alt: "Galería de GallaTrack, imagen 4",
          caption: "GallaTrack - Vista de producto",
        },
        {
          src: "/projects/galla5.png",
          alt: "Galería de GallaTrack, imagen 5",
          caption: "GallaTrack - Panel administrativo detallado",
        },
      ],
      graphicDesign: {
        eyebrow: "Identidad visual · Sistema de aplicaciones",
        title: "De la creación de marca a su implementación",
        description:
          "Antes de desarrollar la web, construí la identidad visual completa de GallaTrack y documenté cómo debía convivir y aplicarse en cada soporte. Después extendí ese sistema a recursos comerciales y piezas listas para producción.",
        items: [
          {
            title: "Manual de marca",
            description:
              "Concepto y familia de marca; logotipo e isotipo; versiones, proporciones y usos; paleta, tipografía, lenguaje gráfico y fotografía; convivencia con FOTON y Gallagro; y lineamientos para redes, papelería, indumentaria, señalética, vehículos y comunicación comercial.",
          },
          {
            title: "Kit de diseño",
            description:
              "Sistema visual y plantillas editables para hoja membretada, sobre, tarjetas, carpeta comercial, ficha de vehículo, presupuesto, publicaciones e historias de Instagram, flyers de WhatsApp y firma de email.",
          },
          {
            title: "Kit de merchandising",
            description:
              "Aplicaciones institucionales preparadas para producción: taza, cuaderno A5, anotador A6, bolsa de tela, remera, gorra, botella y plancha de stickers.",
          },
        ],
      },
      href: "https://www.gallatrack.com.ar/",
      ctaLabel: "Visitar GallaTrack",
    },
  },
  {
    slug: "olen-market",
    title: "Olen Market",
    subtitle: "E-commerce · Panel administrativo",
    cardImageSrc: "/projects/olen-card-logo.png",
    cardImageAlt: "Logo de Olen Market",
    preview: {
      url: "https://www.olenmarket.com/",
      displayUrl: "https://www.olenmarket.com",
      title: "Vista interactiva de Olen Market",
      instruction: "Desplazate dentro del cuadro para recorrer el marketplace",
      openLabel: "Abrir marketplace completo",
      backgroundClassName: "bg-[#e3fcf7]",
    },
    details: {
      projectName: "Olen Market",
      badge: "Proyecto principal",
      badgeClassName: "bg-[#78e8b3]",
      category: "Marketplace · E-commerce + panel administrativo",
      title: "Olen Market",
      description:
        "E-commerce de productos naturales orientados al rendimiento deportivo saludable. Desarrollé tanto la experiencia pública de compra como un panel administrativo para gestionar el negocio completo.",
      details: [
        {
          label: "Mi aporte",
          text: "Arquitectura y desarrollo full stack del marketplace y su backoffice.",
          color: "#e3fcf7",
        },
        {
          label: "Autonomía del cliente",
          text: "Olen puede administrar productos, imágenes, videos y contenidos sin depender de mí para cada modificación.",
          color: "#c8f6e4",
        },
        {
          label: "Resultado",
          text: "Una plataforma comercial configurable y lista para crecer junto con la operación del cliente.",
          color: "#78e8b3",
        },
      ],
      images: [
        {
          src: "/projects/olen-home.png",
          alt: "Portada del marketplace Olen Market",
          caption: "Experiencia de marca",
        },
        {
          src: "/projects/olen-login.png",
          alt: "Pantalla de acceso al panel de Olen Market",
          caption: "Acceso de clientes",
        },
        {
          src: "/projects/olen-admin-dashboard-labeled.png",
          alt: "Dashboard administrativo de Olen Market con datos de ejemplo",
          caption: "Dashboard administrativo",
        },
        {
          src: "/projects/olen-product-editor.png",
          alt: "Editor de productos del panel administrativo de Olen Market",
          caption: "Gestión de productos",
        },
        {
          src: "/projects/olen-personalization.png",
          alt: "Gestión de videos y personalización en Olen Market",
          caption: "Videos y personalización",
        },
      ],
      href: "https://www.olenmarket.com/",
      ctaLabel: "Visitar Olen",
    },
  },
  {
    slug: "ccexpedition",
    title: "ccExpedition",
    subtitle: "Finanzas personales · PWA",
    cardImageSrc: "/projects/ccexpedition-card-logo.png",
    cardImageAlt: "Logo de ccExpedition",
    preview: {
      url: "https://ccexpedition.com/",
      displayUrl: "https://ccexpedition.com",
      title: "Vista interactiva de ccExpedition",
      instruction: "Desplazate dentro del cuadro para explorar la app",
      openLabel: "Abrir aplicación completa",
      backgroundClassName: "bg-[#c8f6e4]",
    },
    details: {
      projectName: "ccExpedition",
      badge: "Finanzas",
      badgeClassName: "bg-[#00ed64]",
      secondaryBadge: "Beta Abierta Gratis",
      secondaryBadgeClassName: "bg-[#78e8b3]",
      category: "Web app · Finanzas personales · PWA",
      title: "ccExpedition",
      tagline: "Controlá tus gastos mensuales y anticipá los gastos futuros.",
      description:
        "Aplicación para controlar gastos mensuales y gastos fijos, como tarjetas, alquileres y préstamos, a futuro. Permite proyectar cuotas, simular compras y recorrer los próximos resúmenes antes de comprometerse para tomar decisiones con más claridad.",
      details: [
        {
          label: "Experiencia de producto",
          text: "Gestión de múltiples gastos en una grilla, dashboard mensual, categorías, personalización, límites con alertas y conversión USD→ARS con cotización en tiempo real.",
          color: "#e3fcf7",
        },
        {
          label: "Mi aporte",
          text: "Diseño UX/UI, frontend, integración con Supabase, identidad visual, dominio, deploy y lógica de comportamiento de gastos en la grilla principal.",
          color: "#c8f6e4",
        },
        {
          label: "Stack",
          text: "React 19 · TypeScript · Vite · Tailwind CSS v4 · Supabase Auth + Postgres · i18next · PWA",
          color: "#78e8b3",
        },
      ],
      images: [
        {
          src: "/projects/ccexpedition-login.png",
          alt: "Pantalla de inicio de sesión de ccExpedition en su tema Expedición",
          caption: "Acceso a la cuenta",
        },
        {
          src: "/projects/ccexpedition-empty-state.png",
          alt: "Estado inicial de ccExpedition antes de agregar la primera tarjeta",
          caption: "Primeros pasos",
        },
        {
          src: "/projects/ccexpedition-add-item.png",
          alt: "Formulario de ccExpedition para agregar una tarjeta, gasto o crédito",
          caption: "Carga de tarjetas y gastos",
        },
        {
          src: "/projects/ccexpedition-monthly-projection.png",
          alt: "Proyección financiera mensual de ccExpedition con el tema Expedición",
          caption: "Proyección financiera mensual - Theme Expedición",
        },
        {
          src: "/projects/ccexpedition-monthly-projection-neobrutalism.png",
          alt: "Proyección financiera mensual de ccExpedition con el tema Neobrutalism",
          caption: "Proyección financiera mensual - Theme Neobrutalism",
        },
        {
          src: "/projects/ccexpedition-theme-expedition.png",
          alt: "Configuración visual de ccExpedition con el tema Expedición",
          caption: "Tema Expedición",
        },
        {
          src: "/projects/ccexpedition-theme-retro.png",
          alt: "Configuración visual de ccExpedition con el tema Retro Windows 95",
          caption: "Tema Retro · Windows 95",
        },
        {
          src: "/projects/ccexpedition-theme-neobrutalism.png",
          alt: "Configuración visual de ccExpedition con el tema Neobrutalism",
          caption: "Tema Neobrutalism",
        },
        {
          src: "/projects/ccexpedition-theme-liquid-glass.png",
          alt: "Configuración visual de ccExpedition con el tema Liquid Glass",
          caption: "Tema Liquid Glass",
        },
      ],
      href: "https://ccexpedition.com/",
      ctaLabel: "Explorar ccExpedition",
    },
  },
  {
    slug: "guish",
    title: "Güish",
    subtitle: "Landing page · CMS administrable",
    cardImageSrc: "/projects/guish-card-logo.png",
    cardImageAlt: "Logo naranja de Güish",
    cardImageClassName: "object-contain p-8 sm:p-10",
    preview: {
      url: "https://www.guish.com.mx/",
      displayUrl: "https://guish.com.mx",
      title: "Vista interactiva del sitio web de Güish",
      instruction: "Desplazate dentro del cuadro para recorrer la web",
      openLabel: "Abrir sitio completo",
      backgroundClassName: "bg-[#00684a]",
    },
    details: {
      projectName: "Güish",
      category: "Sitio institucional · CMS administrable · Desarrollo end-to-end",
      title: "Güish",
      description:
        "Landing page para Güish, empresa mexicana que acompaña a marcas en marketplaces. Está integrada con Prismic para que el cliente pueda reorganizar secciones y actualizar textos e imágenes de forma autónoma, sin depender de desarrollo.",
      referenceLink: {
        brand: "prismic",
        label: "CMS administrable",
        href: "https://prismic.io/",
      },
      details: [
        {
          label: "Mi aporte",
          text: "Diseño visual, arquitectura frontend, modelado de contenidos en Prismic, desarrollo y publicación.",
          color: "#e3fcf7",
        },
        {
          label: "Stack",
          text: "Next.js 16 · React · TypeScript · Prismic · Vercel",
          color: "#c8f6e4",
        },
        {
          label: "Resultado",
          text: "Una presencia digital flexible que el cliente puede mantener y evolucionar por su cuenta.",
          color: "#78e8b3",
        },
      ],
      images: [
        {
          src: "/projects/guish-home.png",
          alt: "Portada del sitio corporativo Güish",
          caption: "Identidad de marca",
        },
        {
          src: "/projects/guish-content.png",
          alt: "Sección Nuestra Historia del sitio Güish",
          caption: "Historia y propuesta",
        },
        {
          src: "/projects/guish-prismic.png",
          alt: "Editor de contenidos de Güish en Prismic",
          caption: "Gestión autónoma con Prismic",
        },
      ],
      href: "https://www.guish.com.mx/",
      ctaLabel: "Visitar proyecto",
    },
  },
];

export function getPortfolioProject(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
