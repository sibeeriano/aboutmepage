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
    color: "bg-[#b19cd9]",
    icon: ContactIcon,
    content: `Facundo Gabriel Vara
Software Engineer · Desarrollador de esta página`,
  },
  {
    id: "stack",
    title: "Stack tecnológico",
    color: "bg-[#ff9f7a]",
    icon: CodeIcon,
    content: `Next.js 16 con App Router
React 19 · TypeScript
Tailwind CSS v4
RetroUI (NeoBrutalism) con shadcn/ui`,
  },
  {
    id: "diseno",
    title: "Diseño y estética",
    color: "bg-[#ffdb33]",
    icon: FolderIcon,
    content: `Estilo Windows 95 / Neo Brutalist
Fuentes: Archivo Black (títulos), Space Grotesk (texto)
Paleta: coral, amarillo, violeta, verde lima, verde petróleo
Sombras 3D tipo Win95 (shadow-win95, shadow-win95-inset)`,
  },
  {
    id: "estructura",
    title: "Estructura",
    color: "bg-[#b19cd9]",
    icon: FolderIcon,
    content: `Página principal con secciones: perfil, backend, frontend, experiencia, educación
Página Sobre mí con perfil, contacto, habilidades e idiomas
Blog con rutas dinámicas por sección
Embed de posts de LinkedIn
Diseño responsive para móvil y desktop`,
  },
  {
    id: "desarrollo",
    title: "Desarrollo",
    color: "bg-[#84e084]",
    icon: CodeIcon,
    content: `CV interactivo desarrollado como landing personal
Componentes reutilizables: WindowFrame, RetroIcons, Button, Card
Integración con WhatsApp (w.app) y LinkedIn embeds
Optimización de imágenes con Next.js Image`,
  },
];

export default function AboutThisPage() {
  return (
    <div id="top" className="min-h-screen bg-[#c0c0c0] p-2 sm:p-4">
      <div className="mx-auto max-w-4xl">
        <WindowFrame>
          <WindowTitleBar title="ABOUT THIS PAGE - DESARROLLO">
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
              <Link href="/sobre">
                <Button variant="outline" size="sm">
                  Sobre mí
                </Button>
              </Link>
            </nav>
          </WindowTitleBar>

          <main className="border-t-2 border-black bg-[#84e084] p-4 sm:p-6">
            <Link href="/">
              <Button variant="ghost" size="sm" className="mb-6 !bg-white/80">
                ← Volver
              </Button>
            </Link>

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
              Resumen del desarrollo de esta página web. Stack, diseño y decisiones
              técnicas.
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
                        <Icon className="size-10 shrink-0 text-[#ffdb33] drop-shadow-[2px_2px_0_#000] sm:size-12" />
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

          <footer className="border-t-2 border-black bg-[#c0c0c0] px-4 py-4 shadow-win95-inset sm:px-6">
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
