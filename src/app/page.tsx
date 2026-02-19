import Link from "next/link";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { WindowFrame, WindowTitleBar } from "@/components/retro/WindowFrame";
import {
  CodeIcon,
  FolderIcon,
  BriefcaseIcon,
  GraduationIcon,
  ContactIcon,
} from "@/components/retro/RetroIcons";

const posts = [
  {
    slug: "bienvenido-al-blog-retro",
    title: "Backend",
    excerpt:
      "Java, Spring Boot, C# .NET, Node.js y SQL Server. Experiencia en sector bancario y APIs.",
    date: "19 Feb 2025",
    color: "bg-[#ff9f7a]",
    icon: CodeIcon,
  },
  {
    slug: "diseno-neobrutalism",
    title: "Frontend",
    excerpt:
      "Angular, React, Next.js y TypeScript. Portales corporativos y proyectos freelance.",
    date: "18 Feb 2025",
    color: "bg-[#ffdb33]",
    icon: FolderIcon,
  },
  {
    slug: "retroui-nextjs",
    title: "Experiencia",
    excerpt:
      "Accenture (MyT&E, BBVA, ICBC), Sib-l freelance, Academy y Digital House.",
    date: "17 Feb 2025",
    color: "bg-[#b19cd9]",
    icon: BriefcaseIcon,
  },
  {
    slug: "educacion",
    title: "Educación",
    excerpt:
      "Formación académica y cursos realizados.",
    date: "16 Feb 2025",
    color: "bg-[#84e084]",
    icon: GraduationIcon,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#c0c0c0] p-4">
      <div className="mx-auto max-w-4xl">
        <WindowFrame>
          <WindowTitleBar title="INICIO - CV INTERACTIVO">
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
                  SOBRE
                </Button>
              </Link>
            </nav>
          </WindowTitleBar>

          <main className="border-t-2 border-black bg-[#ff9f7a] p-6">
            <section className="mb-10">
              <Text as="h1" className="mb-2 text-3xl font-bold text-white drop-shadow-[2px_2px_0_#000]">
                Facundo Gabriel Vara
              </Text>
              <Text className="mb-4 text-lg font-medium text-black">
                Software Engineer · Autodidacta · Resiliente · Proactivo
              </Text>
              <Link href="/sobre">
                <Button
                  size="lg"
                  className="!bg-white !text-black hover:!bg-gray-100"
                >
                  Ver perfil completo →
                </Button>
              </Link>
            </section>

            <section className="mb-10">
              <Text
                as="h2"
                className="mb-4 font-head text-xl font-bold text-white drop-shadow-[2px_2px_0_#000]"
              >
                SECCIONES
              </Text>
              <div className="grid gap-4 md:grid-cols-2">
                {posts.map((post) => {
                  const Icon = post.icon;
                  return (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="block h-full"
                    >
                      <Card
                        className={`flex h-full flex-col border-2 border-black p-4 transition hover:-translate-y-0.5 hover:shadow-win95-lg ${post.color}`}
                      >
                        <div className="mb-3 flex items-start justify-between">
                          <Icon className="size-14 text-[#ffdb33] drop-shadow-[2px_2px_0_#000]" />
                          <span className="text-xs font-medium opacity-80">
                            {post.date}
                          </span>
                        </div>
                        <Card.Header>
                          <Card.Title className="!font-bold !text-black">
                            {post.title}
                          </Card.Title>
                        </Card.Header>
                        <Card.Content className="flex-1">
                          <Text className="text-sm font-medium text-black">
                            {post.excerpt}
                          </Text>
                          <span className="mt-2 inline-block font-bold underline decoration-black underline-offset-2">
                            Leer más →
                          </span>
                        </Card.Content>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </section>

            <section>
              <Text
                as="h2"
                className="mb-4 font-head text-xl font-bold text-white drop-shadow-[2px_2px_0_#000]"
              >
                CONTACTO
              </Text>
              <Link href="/sobre">
                <Card className="flex items-center gap-4 border-2 border-black bg-[#b19cd9] p-4 transition hover:-translate-y-0.5 hover:shadow-win95-lg">
                  <ContactIcon className="size-14 shrink-0 text-[#ffdb33] drop-shadow-[2px_2px_0_#000]" />
                  <div className="flex-1">
                    <Card.Header>
                      <Card.Title className="!font-bold !text-black">
                        Perfil y contacto
                      </Card.Title>
                      <Card.Description className="!text-black">
                        Datos de contacto, habilidades e idiomas
                      </Card.Description>
                    </Card.Header>
                    <Card.Content>
                      <Text className="font-medium text-black">
                        facundog.vara@gmail.com · Alvear 5180, Adrogué
                      </Text>
                      <span className="mt-2 inline-block font-bold underline decoration-black underline-offset-2">
                        Ver más →
                      </span>
                    </Card.Content>
                  </div>
                </Card>
              </Link>
            </section>
          </main>

          <footer className="border-t-2 border-black bg-[#c0c0c0] px-6 py-4 shadow-win95-inset">
            <div className="flex flex-col items-center gap-1 text-center">
              <Text className="font-medium text-black">
                facundog.vara@gmail.com · 15-3778-2511
              </Text>
              <Text className="text-sm text-black/80">
                © 2025 Facundo Gabriel Vara
              </Text>
            </div>
          </footer>
        </WindowFrame>
      </div>
    </div>
  );
}
