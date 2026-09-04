import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { WindowFrame, WindowTitleBar } from "@/components/retro/WindowFrame";
import { ProjectDetailsTabs } from "@/components/portfolio/ProjectDetailsTabs";
import { CollapsibleProject } from "@/components/portfolio/CollapsibleProject";
import { CollapsibleSection } from "@/components/portfolio/CollapsibleSection";
import { ProfileImageStack } from "@/components/portfolio/ProfileImageStack";
import {
  BriefcaseIcon,
  ContactIcon,
  FolderIcon,
  GraduationIcon,
} from "@/components/retro/RetroIcons";

const EMAIL = "facundog.vara@gmail.com";
const SHOW_ENTERPRISE_EXPERIENCE = false;
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
  EMAIL,
)}&su=${encodeURIComponent("Consulta desde sib.dev")}&body=${encodeURIComponent(
  "Hola Facundo, vi tu portfolio y me gustaría conversar sobre un proyecto.",
)}`;
const WHATSAPP_URL =
  "https://wa.me/5491170666438?text=Hola%20Facundo%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20hablar%20sobre%20un%20proyecto.";

const experience = [
  {
    company: "Empresa global de tecnología y consultoría",
    period: "2024 — Actualidad",
    title: "Plataforma de operaciones internas",
    description:
      "Desarrollo y mantenimiento de un portal utilizado por equipos internacionales para gestionar carga de horas y gastos.",
    stack: "Angular · C# .NET · SQL Server · Inglés",
    color: "bg-[#00ed64]",
  },
  {
    company: "Institución financiera internacional",
    period: "2023 — 2024",
    title: "APIs bancarias y migración cloud",
    description:
      "Análisis y desarrollo de APIs de consulta y pagos dentro de un proceso de modernización tecnológica.",
    stack: "Java · SQL · APIs · Cloud",
    color: "bg-[#c8f6e4]",
  },
  {
    company: "Banca empresas",
    period: "2022 — 2023",
    title: "Canales digitales y servicios transaccionales",
    description:
      "Participación en Home Banking Empresas, eCheq, leasing, transacciones y servicios de datos.",
    stack: "Angular · Java · Spring Boot · Microservicios",
    color: "bg-[#78e8b3]",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Nos ponemos en contacto",
    description:
      "Me contás tu idea, tus objetivos y qué necesitás resolver. En una primera reunión entendemos el contexto y ordenamos prioridades.",
    icon: ContactIcon,
    color: "bg-[#e3fcf7]",
  },
  {
    step: "02",
    title: "Definimos un plan de acción",
    description:
      "Transformo lo conversado en una propuesta clara, con alcance, etapas, entregables y próximos pasos.",
    icon: FolderIcon,
    color: "bg-[#00ed64]",
  },
  {
    step: "03",
    title: "Revisamos y mejoramos juntos",
    description:
      "Compartimos avances en reuniones de seguimiento, validamos decisiones y hacemos los ajustes necesarios hasta llegar al resultado esperado.",
    icon: BriefcaseIcon,
    color: "bg-[#c8f6e4]",
  },
];

const stack = [
  "Angular",
  "React",
  "Next.js",
  "TypeScript",
  "C# .NET",
  "Java",
  "Spring Boot",
  "Node.js",
  "SQL Server",
  "Supabase",
  "PWA",
];

export default function Home() {
  return (
    <div className="retro-desktop min-h-screen p-2 sm:p-4">
      <div className="mx-auto max-w-6xl">
        <WindowFrame>
          <WindowTitleBar title="sib.dev - facu.vara - software.engineer">
            <nav aria-label="Navegación principal" className="flex flex-wrap gap-2">
              <Button
                asChild
                variant="default"
                size="sm"
                className="!bg-[#00ed64] !text-black hover:!bg-[#00cf58]"
              >
                <a href="#top">Inicio</a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href="#trabajo">Trabajos</a>
              </Button>
              {SHOW_ENTERPRISE_EXPERIENCE && (
                <Button asChild variant="outline" size="sm">
                  <a href="#experiencia">Experiencia</a>
                </Button>
              )}
              <Button asChild variant="outline" size="sm">
                <a href="#contacto">Contacto</a>
              </Button>
            </nav>
          </WindowTitleBar>

          <main id="top" className="border-t-2 border-black bg-white">
            <section className="grid items-center gap-8 p-5 sm:p-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12 lg:p-12">
              <div>
                <Text
                  as="h1"
                  className="max-w-3xl text-3xl leading-[1.05] font-bold text-[#001e2b] sm:text-5xl lg:text-6xl"
                >
                  Tus ideas hechas realidad, personalizables sin que toques código.
                </Text>

                <Text className="mt-6 max-w-2xl text-base leading-relaxed font-semibold text-black sm:text-xl">
                  Soy facu, Software engineer de sib.<span className="text-[#0066ff]">dev</span>.{" "}
                  Escucho tus ideas y las hago realidad en una web o aplicación.
                </Text>

                <div className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías principales">
                  {[
                    "Landing pages",
                    "Tiendas online",
                    "Catálogos digitales",
                    "AI agents",
                    "Sistemas a medida",
                  ].map((item) => (
                    <span
                      key={item}
                      className="border-2 border-black bg-white px-2.5 py-1 font-mono text-xs font-bold shadow-win95-inset sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>

              <div className="mx-auto w-full max-w-sm lg:max-w-none">
                <ProfileImageStack />
              </div>
            </section>

            <section
              aria-label="Resumen profesional"
              className="grid border-y-2 border-black bg-white md:grid-cols-3"
            >
              {[
                ["ACTUALMENTE", "Software Engineer"],
                ["EXPERIENCIA", "Banca · Fintech"],
                ["ENFOQUE", "Full stack · Calidad · Colaboración"],
              ].map(([label, value], index) => (
                <div
                  key={label}
                  className={`p-4 ${index > 0 ? "border-t-2 border-black md:border-t-0 md:border-l-2" : ""}`}
                >
                  <div className="font-mono text-xs font-bold text-black/70">{label}</div>
                  <div className="mt-1 font-head text-sm font-bold text-black sm:text-base">
                    {value}
                  </div>
                </div>
              ))}
            </section>

            <section
              aria-label="Acceso a proyectos destacados"
              className="border-b-2 border-black bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-12"
            >
              <Button asChild size="lg" className="justify-center !bg-[#00ed64] !text-black">
                <a href="#trabajo">Proyectos destacados ↓</a>
              </Button>
            </section>

            <CollapsibleSection
              id="trabajo"
              indexLabel="01 / Trabajo destacado"
              title="La visión del cliente hecha realidad"
              backgroundClassName="bg-[#00ed64]"
              badge="4 PROYECTOS"
              withTopBorder={false}
            >
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <CollapsibleProject
                title="GallaTrack"
                    subtitle="Concesionario oficial FOTON - Presentación - Catálogo - estadísticas - Panel Admin"
                imageSrc="/projects/gallatrack-whatsapp-business.png"
                imageAlt="Símbolo de GallaTrack"
              >
                <div className="border-b-2 border-black bg-[#e3fcf7] p-4 sm:p-6 lg:flex lg:h-full lg:min-h-0 lg:flex-col lg:border-r-2 lg:border-b-0">
                  <div className="flex flex-col border-2 border-black bg-white shadow-win95-lg lg:min-h-0 lg:flex-1">
                    <div className="flex items-center gap-2 border-b-2 border-black bg-[#d8eee5] px-3 py-2">
                      <div className="flex gap-1" aria-hidden="true">
                        <span className="size-3 border border-black bg-[#00ed64]" />
                        <span className="size-3 border border-black bg-[#c8f6e4]" />
                        <span className="size-3 border border-black bg-[#e3fcf7]" />
                      </div>
                      <div className="min-w-0 flex-1 border-2 border-black bg-white px-2 py-1 font-mono text-[10px] sm:text-xs">
                        https://www.gallatrack.com.ar
                      </div>
                    </div>
                    <div className="h-[460px] overflow-hidden bg-white sm:h-[540px] lg:h-auto lg:min-h-0 lg:flex-1">
                      <iframe
                        src="https://www.gallatrack.com.ar/"
                        title="Vista interactiva de GallaTrack"
                        loading="lazy"
                        scrolling="yes"
                        sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="h-full w-full border-0 bg-white"
                      />
                    </div>
                    <div className="flex flex-col gap-2 border-t-2 border-black bg-[#d8eee5] px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
                      <span className="font-mono text-[10px] font-bold uppercase sm:text-xs">
                        Desplazate dentro del cuadro para recorrer la web
                      </span>
                      <Link
                        href="https://www.gallatrack.com.ar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 font-mono text-[10px] font-bold underline underline-offset-2 sm:text-xs"
                      >
                        Abrir completa ↗
                      </Link>
                    </div>
                  </div>
                </div>

                <ProjectDetailsTabs
                  projectName="GallaTrack"
                  badge="Branding + producto digital"
                  badgeClassName="bg-[#78e8b3]"
                  category="Identidad visual · Desarrollo web"
                  title="GallaTrack"
                  description="El proyecto comenzó con la creación de la identidad visual de GallaTrack y un manual de marca completo. A partir de ese sistema diseñé y desarrollé el sitio del concesionario oficial FOTON, trasladando la marca a una experiencia web con presentación institucional, catálogo de gamas, estadísticas y panel administrativo."
                  details={[
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
                  ]}
                  images={[
                    {
                      src: "/projects/gallatrack-profile.png",
                      alt: "Presentación visual de GallaTrack con un camión en ruta",
                      caption: "Identidad principal",
                    },
                    {
                      src: "/projects/gallatrack-whatsapp-business.png",
                      alt: "Símbolo de GallaTrack para perfiles digitales",
                      caption: "Ícono de marca",
                    },
                  ]}
                  graphicDesign={{
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
                  }}
                  href="https://www.gallatrack.com.ar/"
                  ctaLabel={
                    <>
                      Visita<span className="ml-1 text-[#7a7a7a]">Galla</span>
                      <span className="text-[#002448]">Track</span>
                    </>
                  }
                />
              </CollapsibleProject>
                <CollapsibleProject
                  title="Olen Market"
                  subtitle="E-commerce · Panel administrativo"
                  imageSrc="/projects/olen-card-logo.png"
                  imageAlt="Logo de Olen Market"
                >
                  <div className="border-b-2 border-black bg-[#e3fcf7] p-4 sm:p-6 lg:flex lg:h-full lg:min-h-0 lg:flex-col lg:border-r-2 lg:border-b-0">
                    <div className="flex flex-col border-2 border-black bg-white shadow-win95-lg lg:min-h-0 lg:flex-1">
                      <div className="flex items-center gap-2 border-b-2 border-black bg-[#d8eee5] px-3 py-2">
                        <div className="flex gap-1" aria-hidden="true">
                          <span className="size-3 border border-black bg-[#00ed64]" />
                          <span className="size-3 border border-black bg-[#c8f6e4]" />
                          <span className="size-3 border border-black bg-[#e3fcf7]" />
                        </div>
                        <div className="min-w-0 flex-1 border-2 border-black bg-white px-2 py-1 font-mono text-[10px] sm:text-xs">
                          https://www.olenmarket.com
                        </div>
                      </div>
                      <div className="h-[460px] overflow-hidden bg-white sm:h-[540px] lg:h-auto lg:min-h-0 lg:flex-1">
                        <iframe
                          src="https://www.olenmarket.com/"
                          title="Vista interactiva de Olen Market"
                          loading="lazy"
                          scrolling="yes"
                          sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                          referrerPolicy="strict-origin-when-cross-origin"
                          className="h-full w-full border-0 bg-white"
                        />
                      </div>
                      <div className="flex flex-col gap-2 border-t-2 border-black bg-[#d8eee5] px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
                        <span className="font-mono text-[10px] font-bold uppercase sm:text-xs">
                          Desplazate dentro del cuadro para recorrer el marketplace
                        </span>
                        <Link
                          href="https://www.olenmarket.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 font-mono text-[10px] font-bold underline underline-offset-2 sm:text-xs"
                        >
                          Abrir completo ↗
                        </Link>
                      </div>
                    </div>
                  </div>

                  <ProjectDetailsTabs
                    projectName="Olen Market"
                    badge="Proyecto principal"
                    badgeClassName="bg-[#78e8b3]"
                    category="Marketplace · E-commerce + panel administrativo"
                    title="Olen Market"
                    description="E-commerce de productos naturales orientados al rendimiento deportivo saludable. Desarrollé tanto la experiencia pública de compra como un panel administrativo para gestionar el negocio completo."
                    details={[
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
                    ]}
                    images={[
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
                    ]}
                    href="https://www.olenmarket.com/"
                    ctaLabel="Visitar Olen"
                  />
                </CollapsibleProject>

                <CollapsibleProject
                  title="ccExpedition"
                  subtitle="Finanzas personales · PWA"
                  imageSrc="/projects/ccexpedition-card-logo.png"
                  imageAlt="Logo de ccExpedition"
                >
                  <div className="border-b-2 border-black bg-[#c8f6e4] p-4 sm:p-6 lg:flex lg:h-full lg:min-h-0 lg:flex-col lg:border-r-2 lg:border-b-0">
                    <div className="flex flex-col border-2 border-black bg-white shadow-win95-lg lg:min-h-0 lg:flex-1">
                      <div className="flex items-center gap-2 border-b-2 border-black bg-[#d8eee5] px-3 py-2">
                        <div className="flex gap-1" aria-hidden="true">
                          <span className="size-3 border border-black bg-[#00ed64]" />
                          <span className="size-3 border border-black bg-[#c8f6e4]" />
                          <span className="size-3 border border-black bg-[#e3fcf7]" />
                        </div>
                        <div className="min-w-0 flex-1 border-2 border-black bg-white px-2 py-1 font-mono text-[10px] sm:text-xs">
                          https://ccexpedition.com
                        </div>
                      </div>
                      <div className="h-[460px] overflow-hidden bg-white sm:h-[540px] lg:h-auto lg:min-h-0 lg:flex-1">
                        <iframe
                          src="https://ccexpedition.com/"
                          title="Vista interactiva de ccExpedition"
                          loading="lazy"
                          scrolling="yes"
                          sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                          referrerPolicy="strict-origin-when-cross-origin"
                          className="h-full w-full border-0 bg-white"
                        />
                      </div>
                      <div className="flex flex-col gap-2 border-t-2 border-black bg-[#d8eee5] px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
                        <span className="font-mono text-[10px] font-bold uppercase sm:text-xs">
                          Desplazate dentro del cuadro para explorar la app
                        </span>
                        <Link
                          href="https://ccexpedition.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="shrink-0 font-mono text-[10px] font-bold underline underline-offset-2 sm:text-xs"
                        >
                          Abrir completa ↗
                        </Link>
                      </div>
                    </div>
                  </div>

                  <ProjectDetailsTabs
                    projectName="ccExpedition"
                    badge="Finanzas"
                    badgeClassName="bg-[#00ed64]"
                    secondaryBadge="Beta Abierta Gratis"
                    secondaryBadgeClassName="bg-[#78e8b3]"
                    category="Web app · Finanzas personales · PWA"
                    title="ccExpedition"
                    tagline="Controla tus gastos mensuales y especula con los gastos futuros."
                    description="Aplicación para controlar gastos mensuales y gastos fijos, como tarjetas, alquileres, préstamos, etc., a futuro. Permite proyectar cuotas y simular compras futuras, recorrer los próximos resúmenes antes de comprometerse y tomar decisiones con más claridad."
                    details={[
                      {
                        label: "Experiencia de producto",
                        text: "Gestión multi gastos del tipo grilla, dashboard mensual, categorías, personalización, límites con alertas y conversión USD→ARS con cotización en tiempo real.",
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
                    ]}
                    images={[
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
                    ]}
                    href="https://ccexpedition.com/"
                    ctaLabel="Explorar ccExpedition"
                  />
                </CollapsibleProject>

              <CollapsibleProject
                title="Güish"
                subtitle="Landing page · CMS administrable"
                imageSrc="/projects/guish-home.png"
                imageAlt="Logo de Güish sobre la portada de su sitio"
                imageClassName="object-cover object-top p-0"
              >
                <div className="border-b-2 border-black bg-[#00684a] p-4 sm:p-6 lg:flex lg:h-full lg:min-h-0 lg:flex-col lg:border-r-2 lg:border-b-0">
                  <div className="flex flex-col border-2 border-black bg-[#f7fffb] shadow-win95-lg lg:min-h-0 lg:flex-1">
                    <div className="flex items-center gap-2 border-b-2 border-black bg-[#d8eee5] px-3 py-2">
                      <div className="flex gap-1" aria-hidden="true">
                        <span className="size-3 border border-black bg-[#00ed64]" />
                        <span className="size-3 border border-black bg-[#c8f6e4]" />
                        <span className="size-3 border border-black bg-[#e3fcf7]" />
                      </div>
                      <div className="min-w-0 flex-1 border-2 border-black bg-white px-2 py-1 font-mono text-[10px] sm:text-xs">
                        https://guish.com.mx
                      </div>
                    </div>
                    <div className="h-[460px] overflow-hidden bg-white sm:h-[540px] lg:h-auto lg:min-h-0 lg:flex-1">
                      <iframe
                        src="https://www.guish.com.mx/"
                        title="Vista interactiva del sitio web de Güish"
                        loading="lazy"
                        scrolling="yes"
                        sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="h-full w-full border-0 bg-white"
                      />
                    </div>
                    <div className="flex flex-col gap-2 border-t-2 border-black bg-[#d8eee5] px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
                      <span className="font-mono text-[10px] font-bold uppercase sm:text-xs">
                        Desplazate dentro del cuadro para recorrer la web
                      </span>
                      <Link
                        href="https://www.guish.com.mx/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 font-mono text-[10px] font-bold underline underline-offset-2 sm:text-xs"
                      >
                        Abrir completa ↗
                      </Link>
                    </div>
                  </div>
                </div>

                <ProjectDetailsTabs
                  projectName="Güish"
                  category="Sitio institucional · CMS administrable · Desarrollo end-to-end"
                  title="Güish"
                  description="Sitio del tipo LandingPage para Güish, empresa mexicana que acompaña a marcas en marketplaces. Está integrado con Prismic para que el cliente pueda reorganizar secciones y actualizar textos e imágenes de forma autónoma, sin depender de desarrollo."
                  referenceLink={{
                    brand: "prismic",
                    label: "CMS administrable",
                    href: "https://prismic.io/",
                  }}
                  details={[
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
                  ]}
                  images={[
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
                  ]}
                  href="https://www.guish.com.mx/"
                  ctaLabel="Visitar proyecto"
                />
              </CollapsibleProject>

              </div>
            </CollapsibleSection>

            {SHOW_ENTERPRISE_EXPERIENCE && (
              <CollapsibleSection
                id="experiencia"
                indexLabel="02 / Experiencia enterprise"
                title="Experiencia en banca, fintech y productos enterprise"
                backgroundClassName="bg-[#c8f6e4]"
              >
              <Text className="max-w-3xl leading-relaxed font-medium text-black">
                Mi trabajo profesional incluye sistemas internos y bancarios
                privados. Estos son los contextos, el alcance y las tecnologías
                con las que tengo experiencia.
              </Text>

              <div className="mt-7 grid gap-4 lg:grid-cols-3">
                {experience.map((item) => (
                  <Card key={item.company} className={`flex h-full flex-col ${item.color}`}>
                    <div className="flex items-start justify-between gap-3">
                      <BriefcaseIcon className="size-10 shrink-0 text-[#00ed64] drop-shadow-[2px_2px_0_#000]" />
                      <span className="text-right font-mono text-[11px] font-bold">
                        {item.period}
                      </span>
                    </div>
                    <Text className="mt-4 font-mono text-xs font-bold uppercase">
                      {item.company}
                    </Text>
                    <Text as="h3" className="mt-1 text-xl font-bold">
                      {item.title}
                    </Text>
                    <Text className="mt-3 flex-1 text-sm leading-relaxed font-medium">
                      {item.description}
                    </Text>
                    <div className="mt-5 border-t-2 border-black pt-3 font-mono text-xs font-bold">
                      {item.stack}
                    </div>
                  </Card>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="!bg-white">
                  <Link href="/blog/backend">Ver experiencia backend →</Link>
                </Button>
                <Button asChild variant="outline" className="!bg-white">
                  <Link href="/blog/frontend">Ver experiencia frontend →</Link>
                </Button>
              </div>
              </CollapsibleSection>
            )}

            <CollapsibleSection
              id="como-trabajo"
              indexLabel="03 / Cómo trabajo"
              title="Tu visión hecha realidad"
              backgroundClassName="bg-[#78e8b3]"
            >
              <div className="grid gap-4 md:grid-cols-3">
                {workflowSteps.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.title} className={item.color}>
                      <div className="flex items-start justify-between gap-4">
                        <Icon className="size-12 text-[#00ed64] drop-shadow-[2px_2px_0_#000]" />
                        <span className="border-2 border-black bg-white px-2 py-1 font-mono text-xs font-bold text-black shadow-win95">
                          {item.step}
                        </span>
                      </div>
                      <Text as="h3" className="mt-4 text-xl font-bold">
                        {item.title}
                      </Text>
                      <Text className="mt-2 text-sm leading-relaxed font-medium">
                        {item.description}
                      </Text>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-6 border-2 border-black bg-white p-4 shadow-win95-inset sm:p-5">
                <div className="mb-3 flex items-center gap-2">
                  <GraduationIcon className="size-8 text-[#00ed64]" />
                  <Text className="font-head text-sm font-bold uppercase">Stack habitual</Text>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="border-2 border-black bg-[#d8eee5] px-2.5 py-1 font-mono text-xs font-bold shadow-win95"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </CollapsibleSection>

            <CollapsibleSection
              id="contacto"
              indexLabel="04 / Contacto"
              title="¿Buscás alguien que entienda tanto el código como el contexto?"
              backgroundClassName="bg-[#00684a] text-white"
              accentClassName="text-[#78e8b3]"
              titleClassName="max-w-3xl text-3xl text-white sm:text-5xl"
            >
              <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
                <div>
                  <Text className="max-w-2xl text-base font-semibold leading-relaxed text-white sm:text-lg">
                    Podemos hablar sobre una oportunidad, un producto o un desafío
                    técnico. Contame qué necesitás construir.
                  </Text>
                </div>

                <div className="flex min-w-64 flex-col gap-3">
                  <Button asChild size="lg" className="justify-center !bg-[#00ed64] !text-black">
                    <Link
                      href={GMAIL_COMPOSE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Escribime por email ↗
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="justify-center !border-black !bg-[#25d366] !text-black"
                  >
                    <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      Contactame por WhatsApp ↗
                    </Link>
                  </Button>
                </div>
              </div>
            </CollapsibleSection>
          </main>

          <footer className="border-t-2 border-black bg-[#d8eee5] px-4 py-4 shadow-win95-inset sm:px-6">
            <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
              <div>
                <Text className="text-sm font-bold text-black">
                  Facundo Gabriel Vara · Software Engineer
                </Text>
                <Text className="text-xs text-black/70">
                  Diseñado y desarrollado en Buenos Aires.
                </Text>
              </div>
              <div className="flex flex-wrap justify-center gap-4 font-mono text-xs font-bold">
                <Link href="/sobre" className="underline underline-offset-2">
                  Sobre mí
                </Link>
                <Link href="/blog/educacion" className="underline underline-offset-2">
                  Educación
                </Link>
                <Link href="/about-this-page" className="underline underline-offset-2">
                  Este sitio
                </Link>
              </div>
            </div>
          </footer>
        </WindowFrame>
      </div>
    </div>
  );
}
