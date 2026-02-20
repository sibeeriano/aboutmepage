import type { ReactElement } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  "bienvenido-al-blog-retro": {
    color: "bg-[#ff9f7a]",
    bgColor: "bg-[#ff9f7a]",
    icon: CodeIcon,
  },
  "diseno-neobrutalism": {
    color: "bg-[#ffdb33]",
    bgColor: "bg-[#ffdb33]",
    icon: FolderIcon,
  },
  "retroui-nextjs": {
    color: "bg-[#b19cd9]",
    bgColor: "bg-[#b19cd9]",
    icon: BriefcaseIcon,
  },
  educacion: {
    color: "bg-[#84e084]",
    bgColor: "bg-[#84e084]",
    icon: GraduationIcon,
  },
};

type PostSection = {
  id: string;
  title: string;
  content: string;
};

type Post = {
  title: string;
  content: string;
  sections?: PostSection[];
  noCard?: boolean;
  logos?: { name: string; src: string }[];
};

const posts: Record<string, Post> = {
  "bienvenido-al-blog-retro": {
    title: "Backend",
    content: `
      Experiencia en desarrollo backend para el sector bancario y fintech,
      trabajando con equipos internacionales en Accenture.
      
      Stack principal:
      - Java y SpringBoot para microservicios (ICBC, BBVA)
      - C# .NET y SQL Server en portales globales (MyT&E)
      - Node.js y Express para APIs REST (proyectos freelance y Digital House)
      - SQL y bases de datos relacionales
      
      Desarrollo de servicios de consulta vía APIs, migración a Cloud,
      procesamiento de transacciones y sistemas de HomeBanking empresarial.
    `,
    noCard: true,
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
  "diseno-neobrutalism": {
    title: "Frontend",
    content: `
      Desarrollo de interfaces para portales corporativos, HomeBanking
      empresarial y proyectos web propios.
      
      Stack principal:
      - AngularJS y Angular en proyectos bancarios (MyT&E, ICBC)
      - Next.js 16, React y TypeScript en proyectos freelance (Guish.com)
      - HTML, CSS y Bootstrap para e-commerce y aplicaciones web
      - JavaScript para desarrollo fullstack
      
      Experiencia en portales globales con equipos internacionales,
      interfaces de transacciones y diseño responsive.
    `,
    noCard: true,
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
  "retroui-nextjs": {
    title: "Experiencia",
    content: "",
    sections: [
      {
        id: "accenture-myte",
        title: "Accenture MyT&E",
        content: `Software Engineer · Agosto 2024 - Actualidad

Desarrollo y mantenimiento del portal global de carga de tiempos 
(time-loading) de Accenture. Trabajo con equipos internacionales.
Stack: AngularJS, C# .NET, SQL Server. Idioma: Inglés.`,
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

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) {
    notFound();
  }

  const config = slugConfig[slug] || slugConfig["bienvenido-al-blog-retro"];
  const Icon = config.icon;

  return (
    <div id="top" className="min-h-screen bg-[#c0c0c0] p-2 sm:p-4">
      <div className="mx-auto max-w-4xl">
        <WindowFrame>
          <WindowTitleBar title={post.title.toUpperCase()}>
            <nav className="flex gap-2">
              <Link href="/">
                <Button
                  variant="default"
                  size="sm"
                  className="!bg-[#ffdb33] !text-black hover:!bg-[#ffcc00]"
                >
                  HOME
                </Button>
              </Link>
            </nav>
          </WindowTitleBar>

          <main className={`border-t-2 border-black p-4 sm:p-6 ${config.bgColor}`}>
            <Link href="/">
              <Button variant="ghost" size="sm" className="mb-4 !bg-white/80 sm:mb-6">
                ← Volver
              </Button>
            </Link>

            <article>
              <div className="mb-4 flex items-center gap-3 sm:mb-6 sm:gap-4">
                <Icon className="size-12 text-[#ffdb33] drop-shadow-[2px_2px_0_#000] sm:size-16" />
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
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className="inline-block"
                      >
                        <Button variant="outline" size="sm" className="!bg-white">
                          {section.title}
                        </Button>
                      </a>
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
              ) : post.noCard ? (
                <div>
                  {post.logos && post.logos.length > 0 && (
                    <div className="mb-6 flex flex-wrap gap-4 sm:mb-8 sm:gap-6">
                      {post.logos.map((logo) => (
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

          <footer className="border-t-2 border-black bg-[#c0c0c0] px-4 py-4 shadow-win95-inset sm:px-6">
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
