import Link from "next/link";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { WindowFrame, WindowTitleBar } from "@/components/retro/WindowFrame";
import {
  ContactIcon,
  GraduationIcon,
  FolderIcon,
  CodeIcon,
  BriefcaseIcon,
} from "@/components/retro/RetroIcons";

const GMAIL_COMPOSE_URL =
  "https://mail.google.com/mail/?view=cm&fs=1&to=facundog.vara%40gmail.com&su=Consulta%20desde%20sib.dev&body=Hola%20Facundo%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto.";

const sections = [
  {
    id: "perfil",
    title: "Perfil",
    color: "bg-[#c8f6e4]",
    icon: BriefcaseIcon,
    content: `Software Engineer con experiencia en productos bancarios, fintech y herramientas internas.

Combino desarrollo full stack, mirada de producto y formación en diseño para convertir necesidades complejas en experiencias claras y mantenibles.

Trabajo en equipo con foco en calidad, comunicación y mejora continua.`,
  },
  {
    id: "contacto",
    title: "Contacto",
    color: "bg-[#e3fcf7]",
    icon: ContactIcon,
    content: `Email: facundog.vara@gmail.com
Ubicación: Buenos Aires, Argentina`,
  },
  {
    id: "ingles",
    title: "Inglés",
    color: "bg-[#00ed64]",
    icon: GraduationIcon,
    content: `Escrito: Avanzado
Oral: Avanzado
Test Rosetta Stone: C1+`,
  },
  {
    id: "habilidades",
    title: "Habilidades",
    color: "bg-[#78e8b3]",
    icon: CodeIcon,
    content: `Backend: C#, Java, JavaScript, SQL

Frontend: Angular, Next.js, TypeScript, React, Sass, CSS, HTML

Herramientas: Spring Boot, Node.js, Express, Git, GitLab, GitHub, Kibana, WinSCP, Jenkins

Programas: Insomnia, Postman`,
  },
  {
    id: "diseno",
    title: "Diseño UX/UI y visual",
    color: "bg-[#c8f6e4]",
    icon: FolderIcon,
    content: `UX: flujos claros, jerarquía de información y usabilidad

UI: interfaces consistentes, diseño responsive y sistemas visuales

Accesibilidad: semántica, contraste, navegación por teclado y contenido comprensible

Diseño gráfico: Adobe Photoshop, Illustrator e InDesign`,
  },
  {
    id: "office",
    title: "Forma de trabajo",
    color: "bg-[#e3fcf7]",
    icon: FolderIcon,
    content: `Colaboración con equipos internacionales
Comunicación con perfiles técnicos y de negocio
Análisis, desarrollo, mantenimiento y mejora continua`,
  },
];

export default function SobrePage() {
  return (
    <div id="top" className="min-h-screen bg-[#d8eee5] p-2 sm:p-4">
      <div className="mx-auto max-w-4xl">
        <WindowFrame>
          <WindowTitleBar title="SOBRE MÍ - PERFIL">
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

          <main className="border-t-2 border-black bg-[#c8f6e4] p-4 sm:p-6">
            <Button asChild variant="ghost" size="sm" className="mb-6 !bg-white/80">
              <Link href="/">
                ← Volver
              </Link>
            </Button>

            <Text
              as="h1"
              className="mb-6 font-head text-xl font-bold text-white drop-shadow-[2px_2px_0_#000] sm:text-2xl"
            >
              SOBRE MÍ
            </Text>

            <nav className="mb-8 flex flex-wrap gap-2">
              {sections.map((section) => (
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
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <Card
                    key={section.id}
                    id={section.id}
                    className={`scroll-mt-24 ${section.color}`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <Icon className="size-10 shrink-0 text-[#00ed64] drop-shadow-[2px_2px_0_#000] sm:size-12" />
                      <div className="flex-1">
                        <Card.Header>
                          <Card.Title className="!font-bold !text-black">
                            {section.title}
                          </Card.Title>
                        </Card.Header>
                        <Card.Content>
                          <div className="whitespace-pre-line font-sans text-base leading-relaxed font-medium text-black">
                            {section.content}
                          </div>
                        </Card.Content>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="!bg-white !text-black hover:!bg-gray-100">
                <Link href="/">
                Volver al inicio →
                </Link>
              </Button>
              <Button asChild variant="outline" className="!bg-[#00ed64]">
                <Link
                  href={GMAIL_COMPOSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Escribime por email ↗
                </Link>
              </Button>
            </div>
          </main>

          <footer className="border-t-2 border-black bg-[#d8eee5] px-4 py-4 shadow-win95-inset sm:px-6">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-center">
              <Text className="font-medium text-black">
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
