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

const sections = [
  {
    id: "perfil",
    title: "Perfil",
    color: "bg-[#b19cd9]",
    icon: BriefcaseIcon,
    content: `Autodidacta · Compañero · Resiliente · Proactivo · Asertivo · Apasionado

Software Engineer con experiencia en el sector bancario y fintech.
Trabajo en equipo con enfoque en calidad y mejora continua.`,
  },
  {
    id: "contacto",
    title: "Contacto",
    color: "bg-[#ff9f7a]",
    icon: ContactIcon,
    content: `Teléfono: 2076-7212 / 15-3778-2511
Email: facundog.vara@gmail.com
Dirección: Alvear 5180, Adrogué, Bs.As.
D.N.I.: 35.217.257
Fecha de nacimiento: 12/05/1990`,
  },
  {
    id: "ingles",
    title: "Inglés",
    color: "bg-[#ffdb33]",
    icon: GraduationIcon,
    content: `Escrito: Avanzado
Oral: Avanzado
Test Rosetta Stone: C1+`,
  },
  {
    id: "habilidades",
    title: "Habilidades",
    color: "bg-[#84e084]",
    icon: CodeIcon,
    content: `Backend: C#, Java, JavaScript, SQL

Frontend: Angular, Next.js, TypeScript, React, Sass, CSS, HTML

Herramientas: Spring Boot, Node.js, Express, Git Bash, GitLab, GitHub, Kibana, Wyn SCP, Jenkins

Programas: Insomnia, Postman`,
  },
  {
    id: "diseno",
    title: "Diseño Gráfico",
    color: "bg-[#b19cd9]",
    icon: FolderIcon,
    content: `Adobe Photoshop
Adobe Illustrator
Adobe InDesign`,
  },
  {
    id: "office",
    title: "Paquete Office",
    color: "bg-[#ff9f7a]",
    icon: FolderIcon,
    content: `Word · Excel · Outlook · PowerPoint`,
  },
];

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-[#c0c0c0] p-2 sm:p-4">
      <div className="mx-auto max-w-4xl">
        <WindowFrame>
          <WindowTitleBar title="SOBRE MÍ - PERFIL">
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

          <main className="border-t-2 border-black bg-[#b19cd9] p-4 sm:p-6">
            <Link href="/">
              <Button variant="ghost" size="sm" className="mb-6 !bg-white/80">
                ← Volver
              </Button>
            </Link>

            <Text
              as="h1"
              className="mb-6 font-head text-xl font-bold text-white drop-shadow-[2px_2px_0_#000] sm:text-2xl"
            >
              SOBRE MÍ
            </Text>

            <nav className="mb-8 flex flex-wrap gap-2">
              {sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="inline-block">
                  <Button variant="outline" size="sm" className="!bg-white">
                    {section.title}
                  </Button>
                </a>
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
                      <Icon className="size-10 shrink-0 text-[#ffdb33] drop-shadow-[2px_2px_0_#000] sm:size-12" />
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

            <Link href="/" className="mt-8 inline-block">
              <Button className="!bg-white !text-black hover:!bg-gray-100">
                Volver al inicio →
              </Button>
            </Link>
          </main>

          <footer className="border-t-2 border-black bg-[#c0c0c0] px-4 py-4 shadow-win95-inset sm:px-6">
            <div className="text-center">
              <Text className="font-medium text-black">
                © 2025 Facundo Gabriel Vara
              </Text>
            </div>
          </footer>
        </WindowFrame>
      </div>
    </div>
  );
}
