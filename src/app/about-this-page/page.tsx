import Link from "next/link";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { WindowFrame, WindowTitleBar } from "@/components/retro/WindowFrame";
import { CodeIcon, FolderIcon, ContactIcon } from "@/components/retro/RetroIcons";

const sections = [
  {
    id: "autor",
    title: "Autor",
    color: "bg-[#c8f6e4]",
    icon: ContactIcon,
    content: `Facundo Gabriel Vara
Software Engineer · Desarrollador de esta página`,
  },
  {
    id: "stack",
    title: "Stack tecnológico",
    color: "bg-[#e3fcf7]",
    icon: CodeIcon,
    content: `Next.js 16 con App Router
React 19 · TypeScript
Tailwind CSS v4
RetroUI (NeoBrutalism) con shadcn/ui`,
  },
  {
    id: "diseno",
    title: "Diseño y estética",
    color: "bg-[#00ed64]",
    icon: FolderIcon,
    content: `Estilo Windows 95 / Neo Brutalist
Fuentes: Archivo Black (títulos), Space Grotesk (texto)
Paleta: coral, amarillo, violeta, verde lima, verde petróleo
Sombras 3D tipo Win95 (shadow-win95, shadow-win95-inset)`,
  },
  {
    id: "estructura",
    title: "Estructura",
    color: "bg-[#c8f6e4]",
    icon: FolderIcon,
    content: `Portada con propuesta de valor, tecnologías principales y accesos directos
Sección Trabajos con Olen Market, ccExpedition y Güish en ventanas navegables
Cards 50/50 con pestañas de descripción e imágenes
Galerías compactas con carrusel, miniaturas y visualización ampliada
Casos que muestran el backoffice de Olen y la gestión de Güish mediante Prismic
Experiencia enterprise, forma de trabajo, contacto y páginas de detalle
Diseño responsive para móvil y desktop`,
  },
  {
    id: "desarrollo",
    title: "Desarrollo",
    color: "bg-[#78e8b3]",
    icon: CodeIcon,
    content: `Arquitectura con Next.js App Router y componentes reutilizables
Sistema visual compartido: WindowFrame, RetroIcons, Button y Card
Componente ProjectDetailsTabs para pestañas, carruseles y lightbox
Sitios reales embebidos en iframes con permisos limitados mediante sandbox
Navegación accesible por teclado, roles semánticos, estados ARIA y cierre con Escape
Imágenes optimizadas con Next.js Image y galerías sin deformar las cards
Enlaces externos a proyectos, Prismic, email, GitHub y repositorio`,
  },
];

export default function AboutThisPage() {
  return (
    <div id="top" className="min-h-screen bg-[#d8eee5] p-2 sm:p-4">
      <div className="mx-auto max-w-4xl">
        <WindowFrame>
          <WindowTitleBar title="ABOUT THIS PAGE - DESARROLLO">
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
              <Button asChild variant="outline" size="sm">
                <Link href="/sobre">
                  Sobre mí
                </Link>
              </Button>
            </nav>
          </WindowTitleBar>

          <main className="border-t-2 border-black bg-[#78e8b3] p-4 sm:p-6">
            <Button asChild variant="ghost" size="sm" className="mb-6 !bg-white/80">
              <Link href="/">
                ← Volver
              </Link>
            </Button>

            <Text
              as="h1"
              className="mb-4 font-head text-xl font-bold text-white drop-shadow-[2px_2px_0_#000] sm:text-2xl"
            >
              ABOUT THIS PAGE
            </Text>

            <Link
              href="https://github.com/sibeeriano/aboutmepage"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-6 inline-block font-bold text-black underline decoration-black underline-offset-2 hover:opacity-80"
            >
              Repositorio del código →
            </Link>

            <Text className="mb-8 font-medium text-black">
              Un portfolio que combina estética retro, contenido profesional y
              decisiones técnicas modernas.
            </Text>

            <div className="space-y-4">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <Card
                    key={section.id}
                    id={section.id}
                    className={`${section.color} scroll-mt-24`}
                  >
                    <Card.Header>
                      <div className="flex items-center gap-3">
                        <Icon className="size-10 shrink-0 text-[#00ed64] drop-shadow-[2px_2px_0_#000] sm:size-12" />
                        <Card.Title className="!font-bold !text-black">
                          {section.title}
                        </Card.Title>
                      </div>
                    </Card.Header>
                    <Card.Content>
                      <div className="whitespace-pre-line font-sans text-base leading-relaxed font-medium text-black">
                        {section.content.trim()}
                      </div>
                    </Card.Content>
                  </Card>
                );
              })}
            </div>
          </main>

          <footer className="border-t-2 border-black bg-[#d8eee5] px-4 py-4 shadow-win95-inset sm:px-6">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-center">
              <Text className="text-sm font-medium text-black">
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
