import type { ReactElement } from "react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { WindowFrame, WindowTitleBar } from "@/components/retro/WindowFrame";
import {
  CodeIcon,
  FolderIcon,
  BriefcaseIcon,
  GraduationIcon,
} from "@/components/retro/RetroIcons";

const slugConfig: Record<
  string,
  { color: string; bgColor: string; icon: (props: { className?: string }) => ReactElement }
> = {
  backend: {
    color: "bg-[#e3fcf7]",
    bgColor: "bg-[#e3fcf7]",
    icon: CodeIcon,
  },
  frontend: {
    color: "bg-[#00ed64]",
    bgColor: "bg-[#00ed64]",
    icon: FolderIcon,
  },
  experiencia: {
    color: "bg-[#c8f6e4]",
    bgColor: "bg-[#c8f6e4]",
    icon: BriefcaseIcon,
  },
  educacion: {
    color: "bg-[#78e8b3]",
    bgColor: "bg-[#78e8b3]",
    icon: GraduationIcon,
  },
};

type PostSection = {
  id: string;
  title: string;
  content: string;
};

type StackItem = {
  tech: string;
  description: string;
  period: string;
};

type StructuredLayout = {
  intro: string;
  introSecondary?: string;
  specializations: string[];
  stack: StackItem[];
};

type Post = {
  title: string;
  content: string;
  sections?: PostSection[];
  noCard?: boolean;
  logos?: { name: string; src: string }[];
  structuredLayout?: StructuredLayout;
};

const posts: Record<string, Post> = {
  backend: {
    title: "Backend",
    content: "",
    noCard: true,
    structuredLayout: {
      intro:
        "Experiencia en desarrollo backend para banca, fintech y productos enterprise, trabajando con equipos internacionales y sistemas de uso crítico.",
      specializations: [
        "Desarrollo de APIs REST seguras y escalables",
        "Integración con sistemas legacy y core bancarios",
        "Procesamiento de transacciones y lógica de negocio crítica",
        "Migración y despliegue en entornos cloud",
      ],
      stack: [
        {
          tech: "C# .NET & SQL Server",
          description: "Plataforma global de operaciones internas",
          period: "2024 - Actualidad",
        },
        {
          tech: "Java & Spring Boot",
          description: "Microservicios para instituciones financieras internacionales",
          period: "2022 - 2024",
        },
        {
          tech: "Node.js & Express",
          description: "APIs REST para proyectos freelance y Digital House",
          period: "2020 - Actualidad",
        },
        {
          tech: "SQL y bases de datos relacionales",
          description: "Diseño y mantenimiento",
          period: "2020 - Actualidad",
        },
      ],
    },
    logos: [
      {
        name: "Java",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "Spring Boot",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
      },
      {
        name: "C# .NET",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
      },
      {
        name: "Node.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "SQL Server",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      },
    ],
  },
  frontend: {
    title: "Frontend",
    content: "",
    noCard: true,
    structuredLayout: {
      intro:
        "Desarrollo de interfaces para portales corporativos y aplicaciones empresariales de uso global.",
      introSecondary:
        "Actualmente desarrollo una plataforma interna de alcance global para una empresa de tecnología y consultoría, utilizada por equipos de distintas sedes para gestionar horas y gastos.",
      specializations: [
        "Desarrollo de aplicaciones SPA en Angular",
        "Arquitectura frontend modular y mantenible",
        "Integración con APIs REST y servicios backend",
        "Optimización de rendimiento en aplicaciones de alto uso",
        "Diseño responsive para entornos corporativos",
      ],
      stack: [
        {
          tech: "Angular",
          description: "Plataforma global de operaciones internas",
          period: "2024 - Actualidad",
        },
        {
          tech: "Angular",
          description: "Canales digitales para banca empresas",
          period: "2022 - 2023",
        },
        {
          tech: "Next.js, React & TypeScript",
          description: "Proyectos freelance y desarrollos propios (Guish)",
          period: "Actualidad",
        },
        {
          tech: "HTML, CSS & Bootstrap",
          description: "E-commerce y aplicaciones web",
          period: "Actualidad",
        },
      ],
    },
    logos: [
      {
        name: "Angular",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      },
      {
        name: "React",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Bootstrap",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      },
    ],
  },
  experiencia: {
    title: "Experiencia",
    content: "",
    sections: [
      {
        id: "accenture-myte",
        title: "Accenture MyT&E",
        content: `Software Engineer · Agosto 2024 - Actualidad

Desarrollo y mantenimiento del portal global de carga de tiempos 
(time-loading) de Accenture. Trabajo con equipos internacionales.
Stack: Angular, C# .NET, SQL Server. Idioma: Inglés.`,
      },
      {
        id: "bbva-banco-frances",
        title: "BBVA - Banco Francés",
        content: `Cliente Accenture · Julio 2023 - Agosto 2024

Análisis y desarrollo de servicios de consulta vía APIs y de pagos 
para la migración en curso a servidores Cloud.
Stack: Java, SQL + tecnologías propias de BBVA.`,
      },
      {
        id: "icbc",
        title: "ICBC",
        content: `Cliente Accenture · Marzo 2022 - Junio 2023

Proyectos: HomeBanking Empresas, Echeq, Leasing, Regímenes, 
Teradata (Data Warehouse), Transacciones.
Stack: Javascript/Angular, Java, SpringBoot (Microservicios/Hibernate).`,
      },
      {
        id: "sibl-freelance",
        title: "Sib-l · Proyectos Freelance",
        content: `Proyecto propio · En curso

Diseño gráfico, reparación y armado de PC, programación web.
Último sitio: Guish.com · Último proyecto: Guish.com.mx
Stack: Next.js 16, React, TypeScript. Deploy en Vercel.`,
      },
      {
        id: "academy-accenture",
        title: "Academy Accenture",
        content: `Bootcamp · Junio - Julio 2021

Proyecto: Battleship Online.
Stack: Java, HTML, CSS.`,
      },
      {
        id: "digital-house",
        title: "Proyecto Digital House",
        content: `Evaluación final de cursada · Agosto - Noviembre 2020

E-commerce completo, frontend y backend desarrollado en equipo.
Stack: Javascript, Node, Express, SQL, HTML, CSS, Bootstrap.`,
      },
    ],
  },
  educacion: {
    title: "Educación",
    content: "",
    sections: [
      {
        id: "educacion-1",
        title: "Certificaciones",
        content: `Cloud Native College Accenture · 2025

Angular Associate Developer.`,
      },
      {
        id: "educacion-2",
        title: "Licenciatura en Sistemas",
        content: `Universidad de Lanús · Marzo 2024 - En curso

Carrera en progreso.`,
      },
      {
        id: "educacion-3",
        title: "Accenture Academy",
        content: `BootCamp Java · Junio - Julio 2021

Formación intensiva en Java.`,
      },
      {
        id: "educacion-4",
        title: "Programador Web FULL STACK",
        content: `Digital House · Mayo - Noviembre 2020

Curso finalizado. Desarrollo web full stack.`,
      },
      {
        id: "educacion-5",
        title: "Licenciatura en Diseño y Comunicación Visual",
        content: `Universidad de Lanús · Marzo 2014 - 2017

Incompleto.`,
      },
      {
        id: "educacion-6",
        title: "Bachillerato en Economía",
        content: `Nuestra Señora del Carmen · Lomas de Zamora · 2007

Completo.`,
      },
    ],
  },
};

const hasSections = (post: Post) =>
  post.sections && post.sections.length > 0;

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

const legacyRoutes: Record<string, string> = {
  "bienvenido-al-blog-retro": "backend",
  "diseno-neobrutalism": "frontend",
  "retroui-nextjs": "experiencia",
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (legacyRoutes[slug]) {
    redirect(`/blog/${legacyRoutes[slug]}`);
  }

  const post = posts[slug];

  if (!post) {
    notFound();
  }

  const config = slugConfig[slug] || slugConfig.backend;
  const Icon = config.icon;

  return (
    <div id="top" className="min-h-screen bg-[#d8eee5] p-2 sm:p-4">
      <div className="mx-auto max-w-4xl">
        <WindowFrame>
          <WindowTitleBar title={post.title.toUpperCase()}>
            <nav className="flex gap-2">
              <Button
                asChild
                variant="default"
                size="sm"
                className="!bg-[#00ed64] !text-black hover:!bg-[#00cf58]"
              >
                <Link href="/">
                  HOME
                </Link>
              </Button>
            </nav>
          </WindowTitleBar>

          <main className={`border-t-2 border-black p-4 sm:p-6 ${config.bgColor}`}>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="mb-4 !bg-white/80 sm:mb-6"
            >
              <Link href="/">
                ← Volver
              </Link>
            </Button>

            <article>
              <div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
                <Icon className="size-12 text-[#00ed64] drop-shadow-[2px_2px_0_#000] sm:size-16" />
                <Text
                  as="h1"
                  className="font-head text-xl font-bold text-white drop-shadow-[2px_2px_0_#000] sm:text-2xl"
                >
                  {post.title}
                </Text>
              </div>

              {hasSections(post) ? (
                <>
                  <nav className="mb-6 flex flex-wrap gap-2 sm:mb-8">
                    {post.sections!.map((section) => (
                      <Button
                        key={section.id}
                        asChild
                        variant="outline"
                        size="sm"
                        className="!bg-white"
                      >
                        <a href={`#${section.id}`}>
                          {section.title}
                        </a>
                      </Button>
                    ))}
                  </nav>

                  <div className="space-y-4">
                    {post.sections!.map((section) => (
                      <Card
                        key={section.id}
                        id={section.id}
                        className={`scroll-mt-24 ${config.color}`}
                      >
                        <Card.Header>
                          <Card.Title className="!font-bold !text-black">
                            {section.title}
                          </Card.Title>
                        </Card.Header>
                        <Card.Content>
                          <div className="whitespace-pre-line font-sans text-base leading-relaxed font-medium text-black">
                            {section.content.trim()}
                          </div>
                        </Card.Content>
                      </Card>
                    ))}
                  </div>
                </>
              ) : post.structuredLayout ? (
                <div className="space-y-6">
                  {post.logos && post.logos.length > 0 && (
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                      {post.logos.map((logo) => (
                        // Los SVG son badges externos pequeños; no necesitan el optimizador.
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={logo.name}
                          src={logo.src}
                          alt={logo.name}
                          title={logo.name}
                          className="size-10 rounded border-2 border-black bg-white p-1.5 shadow-win95 sm:size-12"
                        />
                      ))}
                    </div>
                  )}
                  <div className="rounded-sm border-2 border-black bg-white/90 p-4 shadow-win95-inset">
                    <p className="font-sans text-base leading-relaxed font-medium text-black">
                      {post.structuredLayout.intro}
                    </p>
                    {post.structuredLayout.introSecondary && (
                      <p className="mt-3 font-sans text-base leading-relaxed font-medium text-black">
                        {post.structuredLayout.introSecondary}
                      </p>
                    )}
                  </div>
                  <div>
                    <h3 className="mb-3 font-head text-sm font-bold uppercase tracking-wide text-black sm:text-base">
                      En qué me especializo
                    </h3>
                    <ul className="space-y-2">
                      {post.structuredLayout.specializations.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 font-sans text-sm font-medium text-black sm:text-base"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-black" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-4 font-head text-sm font-bold uppercase tracking-wide text-black sm:text-base">
                      Stack principal
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {post.structuredLayout.stack.map((item) => (
                        <Card
                          key={item.tech}
                          className={`${config.color} border-2 border-black p-3 shadow-win95 sm:p-4`}
                        >
                          <div className="font-head text-sm font-bold text-black sm:text-base">
                            {item.tech}
                          </div>
                          <div className="mt-1 font-sans text-xs font-medium text-black/90 sm:text-sm">
                            {item.description}
                          </div>
                          <div className="mt-2 font-sans text-xs font-bold text-black/80">
                            {item.period}
                          </div>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              ) : post.noCard ? (
                <div>
                  {post.logos && post.logos.length > 0 && (
                    <div className="mb-6 flex flex-wrap gap-4 sm:mb-8 sm:gap-6">
                      {post.logos.map((logo) => (
                        // Los SVG son badges externos pequeños; no necesitan el optimizador.
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={logo.name}
                          src={logo.src}
                          alt={logo.name}
                          title={logo.name}
                          className="size-12 rounded border-2 border-black bg-white p-1.5 shadow-win95 sm:size-16 md:size-20"
                        />
                      ))}
                    </div>
                  )}
                  <Card className={config.color}>
                    <div className="whitespace-pre-line font-sans text-base leading-relaxed font-medium text-black">
                      {post.content.trim()}
                    </div>
                  </Card>
                </div>
              ) : (
                <Card className={config.color}>
                  <div className="whitespace-pre-line font-sans text-base leading-relaxed font-medium text-black">
                    {post.content.trim()}
                  </div>
                </Card>
              )}
            </article>
          </main>

          <footer className="border-t-2 border-black bg-[#d8eee5] px-4 py-4 shadow-win95-inset sm:px-6">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-center">
              <Text className="text-sm font-medium text-black sm:text-base">
                © 2026 Facundo Gabriel Vara
              </Text>
              <span className="text-black/50">·</span>
              <a
                href="#top"
                className="text-sm font-medium text-black underline decoration-black underline-offset-2 hover:opacity-80"
              >
                Top ↑
              </a>
            </div>
          </footer>
        </WindowFrame>
      </div>
    </div>
  );
}
