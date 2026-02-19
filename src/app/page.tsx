import Image from "next/image";
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

// Posts de LinkedIn para embeber. Para obtener el URN: abrí un post en LinkedIn →
// tres puntos (⋯) → "Insertar esta publicación" → copiá el código y extraé el URN
// Ejemplo: urn:li:share:1234567890123456789
const linkedInPosts: { urn: string }[] = [
  { urn: "urn:li:activity:7430326740582866944" },
];

const LINKEDIN_PROFILE = "https://www.linkedin.com/in/facuvara";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#c0c0c0] p-2 sm:p-4">
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
                  Sobre mí
                </Button>
              </Link>
            </nav>
          </WindowTitleBar>

          <main className="border-t-2 border-black bg-[#ff9f7a] p-4 sm:p-6">
            <section className="mb-8 sm:mb-10 text-center">
              <Text as="h1" className="mb-4 text-2xl font-bold text-white drop-shadow-[2px_2px_0_#000] sm:text-3xl">
                Facundo Gabriel Vara
              </Text>
              <div className="mb-4 flex justify-center">
                <div className="inline-block rounded-sm border-4 border-[#00695c] bg-[#00695c] p-1.5 shadow-win95 sm:p-2">
                  <div className="overflow-hidden rounded-sm border-2 border-black bg-white p-1 shadow-win95-inset sm:p-1.5">
                    <Image
                      src="/fotoperfil.png"
                      alt="Facundo Gabriel Vara"
                      width={256}
                      height={256}
                      className="aspect-square size-48 object-cover sm:size-64"
                      priority
                    />
                  </div>
                </div>
              </div>
              <Text className="mb-2 text-base font-bold text-black sm:text-lg">
                Custom Software Engineering Analyst @ Accenture
              </Text>
              <Text className="mb-2 text-sm font-medium text-black sm:text-base">
                Desarrollo y mantenimiento del portal global de carga de horaria
                MyT&E (my time and expenses), trabajando con equipos
                internacionales y stack enterprise.
              </Text>
              <Text className="mb-2 text-sm font-medium text-black/90 sm:text-base">
                AngularJS · C# .NET · SQL Server · Inglés
              </Text>
              <Text className="mb-1 text-sm font-bold text-black sm:text-base">
                Último proyecto freelance
              </Text>
              <Link
                href="https://guish.com.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 inline-block text-sm font-medium text-black underline decoration-black underline-offset-2 hover:opacity-80 sm:text-base"
              >
                Güish
              </Link>
              <div className="flex justify-center">
                <Link href="/sobre">
                  <Button
                    size="lg"
                    className="!bg-white !text-black hover:!bg-gray-100"
                  >
                    Ver perfil completo →
                  </Button>
                </Link>
              </div>
            </section>

            <section className="mb-8 sm:mb-10">
              <Text
                as="h2"
                className="mb-4 font-head text-lg font-bold text-white drop-shadow-[2px_2px_0_#000] sm:text-xl"
              >
                SECCIONES
              </Text>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                          <Icon className="size-12 text-[#ffdb33] drop-shadow-[2px_2px_0_#000] sm:size-14" />
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

            <section className="mb-8 sm:mb-10">
              <Text
                as="h2"
                className="mb-4 font-head text-lg font-bold text-white drop-shadow-[2px_2px_0_#000] sm:text-xl"
              >
                LINKEDIN
              </Text>
              <div className="overflow-hidden rounded-sm border-4 border-[#00695c] bg-[#00695c] p-1.5 shadow-win95 sm:p-2">
                <div className="overflow-hidden rounded-sm border-2 border-black bg-white p-2 shadow-win95-inset sm:p-4">
                  {linkedInPosts.length > 0 ? (
                    <div
                      className={`grid gap-4 ${linkedInPosts.length >= 2 ? "sm:grid-cols-2" : ""}`}
                    >
                      {linkedInPosts.map((post) => (
                        <div
                          key={post.urn}
                          className="flex min-h-[400px] w-full overflow-hidden rounded-sm border-2 border-black bg-[#f3f2ef]"
                        >
                          <iframe
                            src={`https://www.linkedin.com/embed/feed/update/${post.urn}`}
                            height="400"
                            width="100%"
                            frameBorder="0"
                            allowFullScreen
                            title="Post de LinkedIn"
                            className="w-full min-w-full"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 py-8 text-center">
                      <Text className="font-medium text-black">
                        Agregá tus posts de LinkedIn en el array{" "}
                        <code className="rounded border border-black bg-[#e0e0e0] px-1 py-0.5 font-mono text-sm">
                          linkedInPosts
                        </code>{" "}
                        en page.tsx
                      </Text>
                      <Link
                        href={LINKEDIN_PROFILE}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-black underline decoration-black underline-offset-2 hover:opacity-80"
                      >
                        Ver perfil en LinkedIn →
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section>
              <Text
                as="h2"
                className="mb-4 font-head text-xl font-bold text-white drop-shadow-[2px_2px_0_#000]"
              >
                CONTACTO
              </Text>
              <Card className="flex flex-col gap-4 border-2 border-black bg-[#b19cd9] p-4 transition hover:-translate-y-0.5 hover:shadow-win95-lg sm:flex-row sm:items-center">
                <ContactIcon className="size-12 shrink-0 text-[#ffdb33] drop-shadow-[2px_2px_0_#000] sm:size-14" />
                <div className="min-w-0 flex-1">
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
                    <Link
                      href="https://w.app/facuvara"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 block font-bold text-black underline decoration-black underline-offset-2 hover:opacity-80"
                    >
                      Contactame por WhatsApp
                    </Link>
                    <Link
                      href="/sobre"
                      className="mt-2 inline-block font-bold underline decoration-black underline-offset-2 hover:opacity-80"
                    >
                      Ver más →
                    </Link>
                  </Card.Content>
                </div>
              </Card>
            </section>
          </main>

          <footer className="border-t-2 border-black bg-[#c0c0c0] px-4 py-4 shadow-win95-inset sm:px-6">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-center">
              <Text className="text-sm text-black/80">
                © 2026 Facundo Gabriel Vara
              </Text>
              <span className="text-black/50">·</span>
              <Link
                href="/about-this-page"
                className="text-sm font-medium text-black underline decoration-black underline-offset-2 hover:opacity-80"
              >
                About this page
              </Link>
            </div>
          </footer>
        </WindowFrame>
      </div>
    </div>
  );
}
