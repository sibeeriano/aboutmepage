import Link from "next/link";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { WindowFrame, WindowTitleBar } from "@/components/retro/WindowFrame";
import { ProjectDetailsTabs } from "@/components/portfolio/ProjectDetailsTabs";
import { ProfileImageStack } from "@/components/portfolio/ProfileImageStack";
import {
  BriefcaseIcon,
  ContactIcon,
  FolderIcon,
  GraduationIcon,
} from "@/components/retro/RetroIcons";

const EMAIL = "facundog.vara@gmail.com";
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
    color: "bg-[#ffdb33]",
  },
  {
    company: "Institución financiera internacional",
    period: "2023 — 2024",
    title: "APIs bancarias y migración cloud",
    description:
      "Análisis y desarrollo de APIs de consulta y pagos dentro de un proceso de modernización tecnológica.",
    stack: "Java · SQL · APIs · Cloud",
    color: "bg-[#b19cd9]",
  },
  {
    company: "Banca empresas",
    period: "2022 — 2023",
    title: "Canales digitales y servicios transaccionales",
    description:
      "Participación en Home Banking Empresas, eCheq, leasing, transacciones y servicios de datos.",
    stack: "Angular · Java · Spring Boot · Microservicios",
    color: "bg-[#84e084]",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Nos ponemos en contacto",
    description:
      "Me contás tu idea, tus objetivos y qué necesitás resolver. En una primera reunión entendemos el contexto y ordenamos prioridades.",
    icon: ContactIcon,
    color: "bg-[#ff9f7a]",
  },
  {
    step: "02",
    title: "Definimos un plan de acción",
    description:
      "Transformo lo conversado en una propuesta clara, con alcance, etapas, entregables y próximos pasos.",
    icon: FolderIcon,
    color: "bg-[#ffdb33]",
  },
  {
    step: "03",
    title: "Revisamos y mejoramos juntos",
    description:
      "Compartimos avances en reuniones de seguimiento, validamos decisiones y hacemos los ajustes necesarios hasta llegar al resultado esperado.",
    icon: BriefcaseIcon,
    color: "bg-[#b19cd9]",
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
                className="!bg-[#ffdb33] !text-black hover:!bg-[#ffcc00]"
              >
                <a href="#top">Inicio</a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href="#trabajo">Trabajos</a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href="#experiencia">Experiencia</a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a href="#contacto">Contacto</a>
              </Button>
            </nav>
          </WindowTitleBar>

          <main id="top" className="border-t-2 border-black bg-[#ff9f7a]">
            <section className="grid items-center gap-8 p-5 sm:p-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12 lg:p-12">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 border-2 border-black bg-[#84e084] px-3 py-1 shadow-win95">
                  <span
                    className="size-2.5 animate-pulse rounded-full border border-black bg-[#00695c]"
                    aria-hidden="true"
                  />
                  <span className="font-head text-xs font-bold uppercase tracking-wide">
                    Portfolio 2026
                  </span>
                </div>

                <Text
                  as="h1"
                  className="max-w-3xl text-3xl leading-[1.05] font-bold text-white drop-shadow-[3px_3px_0_#000] sm:text-5xl lg:text-6xl"
                >
                  Construyo software confiable para operaciones reales.
                </Text>

                <Text className="mt-6 max-w-2xl text-base leading-relaxed font-semibold text-black sm:text-xl">
                  Soy Facundo Vara, Software Engineer. Transformo necesidades de
                  negocio en productos web, integraciones y herramientas que los
                  equipos pueden usar y mantener.
                </Text>

                <div className="mt-5 flex flex-wrap gap-2" aria-label="Tecnologías principales">
                  {["Angular", "C# .NET", "Java", "Next.js", "SQL"].map((item) => (
                    <span
                      key={item}
                      className="border-2 border-black bg-white px-2.5 py-1 font-mono text-xs font-bold shadow-win95-inset sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button asChild size="lg" className="justify-center !bg-[#ffdb33] !text-black">
                    <a href="#trabajo">Proyectos destacados ↓</a>
                  </Button>
                </div>
              </div>

              <div className="mx-auto w-full max-w-sm lg:max-w-none">
                <ProfileImageStack />
              </div>
            </section>

            <section
              aria-label="Resumen profesional"
              className="grid border-y-2 border-black bg-[#c0c0c0] md:grid-cols-3"
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

            <section id="trabajo" className="scroll-mt-24 bg-[#ffdb33] p-5 sm:p-8 lg:p-12">
              <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                <div>
                  <Text className="font-mono text-xs font-bold uppercase tracking-widest text-black/70">
                    01 / Trabajo destacado
                  </Text>
                  <Text
                    as="h2"
                    className="mt-1 text-2xl font-bold text-white drop-shadow-[3px_3px_0_#000] sm:text-4xl"
                  >
                    La visión del cliente hecha realidad
                  </Text>
                </div>
                <span className="w-fit border-2 border-black bg-white px-3 py-1 font-mono text-xs font-bold shadow-win95">
                  3 PROYECTOS ONLINE
                </span>
              </div>

              <div className="space-y-8">
                <Card className="grid overflow-hidden !p-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                  <div className="border-b-2 border-black bg-[#ff9f7a] p-4 sm:p-6 lg:border-r-2 lg:border-b-0">
                    <div className="border-2 border-black bg-white shadow-win95-lg">
                      <div className="flex items-center gap-2 border-b-2 border-black bg-[#c0c0c0] px-3 py-2">
                        <div className="flex gap-1" aria-hidden="true">
                          <span className="size-3 border border-black bg-[#ff8080]" />
                          <span className="size-3 border border-black bg-[#ffff80]" />
                          <span className="size-3 border border-black bg-[#80ff80]" />
                        </div>
                        <div className="min-w-0 flex-1 border-2 border-black bg-white px-2 py-1 font-mono text-[10px] sm:text-xs">
                          https://www.olenmarket.com
                        </div>
                      </div>
                      <div className="h-[460px] overflow-hidden bg-white sm:h-[540px]">
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
                      <div className="flex flex-col gap-2 border-t-2 border-black bg-[#c0c0c0] px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
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
                    badgeClassName="bg-[#84e084]"
                    category="Marketplace · E-commerce + panel administrativo"
                    title="Olen Market"
                    description="Marketplace de productos naturales orientados al rendimiento humano. Desarrollé tanto la experiencia pública de compra como un panel administrativo para gestionar el negocio completo."
                    details={[
                      {
                        label: "Mi aporte",
                        text: "Arquitectura y desarrollo full stack del marketplace y su backoffice.",
                        color: "#ff9f7a",
                      },
                      {
                        label: "Autonomía del cliente",
                        text: "Olen puede administrar productos, imágenes, videos y contenidos sin depender de mí para cada modificación.",
                        color: "#b19cd9",
                      },
                      {
                        label: "Resultado",
                        text: "Una plataforma comercial configurable y lista para crecer junto con la operación del cliente.",
                        color: "#84e084",
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
                    ctaLabel="Visitar marketplace"
                  />
                </Card>

                <Card className="grid overflow-hidden !p-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                  <div className="border-b-2 border-black bg-[#b19cd9] p-4 sm:p-6 lg:border-r-2 lg:border-b-0">
                    <div className="border-2 border-black bg-white shadow-win95-lg">
                      <div className="flex items-center gap-2 border-b-2 border-black bg-[#c0c0c0] px-3 py-2">
                        <div className="flex gap-1" aria-hidden="true">
                          <span className="size-3 border border-black bg-[#ff8080]" />
                          <span className="size-3 border border-black bg-[#ffff80]" />
                          <span className="size-3 border border-black bg-[#80ff80]" />
                        </div>
                        <div className="min-w-0 flex-1 border-2 border-black bg-white px-2 py-1 font-mono text-[10px] sm:text-xs">
                          https://ccexpedition.com
                        </div>
                      </div>
                      <div className="h-[460px] overflow-hidden bg-white sm:h-[540px]">
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
                      <div className="flex flex-col gap-2 border-t-2 border-black bg-[#c0c0c0] px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
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
                    badge="Producto propio · Beta privada"
                    badgeClassName="bg-[#ffdb33]"
                    category="Web app · Finanzas personales · PWA"
                    title="ccExpedition"
                    tagline="Proyectá tus tarjetas antes de sacarlas."
                    description="Aplicación para controlar gastos con tarjeta, proyectar cuotas y simular compras futuras. Permite recorrer los próximos resúmenes antes de comprometerse y tomar decisiones con más claridad."
                    details={[
                      {
                        label: "Experiencia de producto",
                        text: "Gestión multi-tarjeta, dashboard mensual, límites con alertas y conversión USD→ARS con cotización en tiempo real.",
                        color: "#ff9f7a",
                      },
                      {
                        label: "Mi aporte",
                        text: "Diseño UX/UI, frontend, integración con Supabase, copy e identidad visual.",
                        color: "#b19cd9",
                      },
                      {
                        label: "Stack",
                        text: "React 19 · TypeScript · Vite · Tailwind CSS v4 · Supabase Auth + Postgres · i18next · PWA",
                        color: "#84e084",
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
                </Card>

              <Card className="grid overflow-hidden !p-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                <div className="border-b-2 border-black bg-[#00695c] p-4 sm:p-6 lg:border-r-2 lg:border-b-0">
                  <div className="border-2 border-black bg-[#f7f0df] shadow-win95-lg">
                    <div className="flex items-center gap-2 border-b-2 border-black bg-[#c0c0c0] px-3 py-2">
                      <div className="flex gap-1" aria-hidden="true">
                        <span className="size-3 border border-black bg-[#ff8080]" />
                        <span className="size-3 border border-black bg-[#ffff80]" />
                        <span className="size-3 border border-black bg-[#80ff80]" />
                      </div>
                      <div className="min-w-0 flex-1 border-2 border-black bg-white px-2 py-1 font-mono text-[10px] sm:text-xs">
                        https://guish.com.mx
                      </div>
                    </div>
                    <div className="h-[460px] overflow-hidden bg-white sm:h-[540px]">
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
                    <div className="flex flex-col gap-2 border-t-2 border-black bg-[#c0c0c0] px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
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
                  description="Sitio corporativo para una empresa mexicana que acompaña a marcas en marketplaces. Está integrado con Prismic para que el cliente pueda reorganizar secciones y actualizar textos e imágenes de forma autónoma, sin depender de desarrollo."
                  referenceLink={{
                    brand: "prismic",
                    label: "CMS administrable",
                    href: "https://prismic.io/",
                  }}
                  details={[
                    {
                      label: "Mi aporte",
                      text: "Diseño visual, arquitectura frontend, modelado de contenidos en Prismic, desarrollo y publicación.",
                      color: "#ff9f7a",
                    },
                    {
                      label: "Stack",
                      text: "Next.js 16 · React · TypeScript · Prismic · Vercel",
                      color: "#b19cd9",
                    },
                    {
                      label: "Resultado",
                      text: "Una presencia digital flexible que el cliente puede mantener y evolucionar por su cuenta.",
                      color: "#84e084",
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
              </Card>
              </div>
            </section>

            <section
              id="experiencia"
              className="scroll-mt-24 border-t-2 border-black bg-[#b19cd9] p-5 sm:p-8 lg:p-12"
            >
              <Text className="font-mono text-xs font-bold uppercase tracking-widest text-black/70">
                02 / Experiencia enterprise
              </Text>
              <Text
                as="h2"
                className="mt-1 text-2xl font-bold text-white drop-shadow-[3px_3px_0_#000] sm:text-4xl"
              >
                Experiencia en banca, fintech y productos enterprise
              </Text>
              <Text className="mt-4 max-w-3xl leading-relaxed font-medium text-black">
                Mi trabajo profesional incluye sistemas internos y bancarios
                privados. Estos son los contextos, el alcance y las tecnologías
                con las que tengo experiencia.
              </Text>

              <div className="mt-7 grid gap-4 lg:grid-cols-3">
                {experience.map((item) => (
                  <Card key={item.company} className={`flex h-full flex-col ${item.color}`}>
                    <div className="flex items-start justify-between gap-3">
                      <BriefcaseIcon className="size-10 shrink-0 text-[#ffdb33] drop-shadow-[2px_2px_0_#000]" />
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
            </section>

            <section className="border-t-2 border-black bg-[#84e084] p-5 sm:p-8 lg:p-12">
              <Text className="font-mono text-xs font-bold uppercase tracking-widest text-black/70">
                03 / Cómo trabajo
              </Text>
              <Text
                as="h2"
                className="mt-1 text-2xl font-bold text-white drop-shadow-[3px_3px_0_#000] sm:text-4xl"
              >
                Tu visión hecha realidad
              </Text>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {workflowSteps.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card key={item.title} className={item.color}>
                      <div className="flex items-start justify-between gap-4">
                        <Icon className="size-12 text-[#ffdb33] drop-shadow-[2px_2px_0_#000]" />
                        <span className="border-2 border-black bg-white px-2 py-1 font-mono text-xs font-bold shadow-win95">
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
                  <GraduationIcon className="size-8 text-[#ffdb33]" />
                  <Text className="font-head text-sm font-bold uppercase">Stack habitual</Text>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.map((item) => (
                    <span
                      key={item}
                      className="border-2 border-black bg-[#c0c0c0] px-2.5 py-1 font-mono text-xs font-bold shadow-win95"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="contacto"
              className="scroll-mt-24 border-t-2 border-black bg-[#00695c] p-5 text-white sm:p-8 lg:p-12"
            >
              <div className="grid items-center gap-7 lg:grid-cols-[1fr_auto]">
                <div>
                  <Text className="font-mono text-xs font-bold uppercase tracking-widest text-[#84e084]">
                    04 / Contacto
                  </Text>
                  <Text
                    as="h2"
                    className="mt-2 max-w-3xl text-3xl font-bold text-white drop-shadow-[3px_3px_0_#000] sm:text-5xl"
                  >
                    ¿Buscás alguien que entienda tanto el código como el contexto?
                  </Text>
                  <Text className="mt-4 max-w-2xl leading-relaxed font-medium text-white/90">
                    Podemos hablar sobre una oportunidad, un producto o un desafío
                    técnico. Contame qué necesitás construir.
                  </Text>
                </div>

                <div className="flex min-w-64 flex-col gap-3">
                  <Button asChild size="lg" className="justify-center !bg-[#ffdb33] !text-black">
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
            </section>
          </main>

          <footer className="border-t-2 border-black bg-[#c0c0c0] px-4 py-4 shadow-win95-inset sm:px-6">
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
