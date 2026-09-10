import Link from "next/link";
import { ProjectDetailsTabs } from "@/components/portfolio/ProjectDetailsTabs";
import { WindowFrame, WindowTitleBar } from "@/components/retro/WindowFrame";
import { Button } from "@/components/retroui/Button";
import { type PortfolioProject } from "@/data/portfolioProjects";

export function ProjectDetailView({ project }: { project: PortfolioProject }) {
  return (
    <main className="retro-desktop min-h-dvh p-2 sm:p-4">
      <WindowFrame>
        <WindowTitleBar title={`${project.title} · sib.dev`}>
          <Button asChild size="sm" variant="secondary">
            <Link href="/#trabajo">← Volver a Trabajos</Link>
          </Button>
          <Button asChild size="sm">
            <Link
              href={project.preview.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir sitio ↗
            </Link>
          </Button>
        </WindowTitleBar>

        <div className="grid min-h-[calc(100dvh-6.5rem)] min-w-0 bg-white lg:h-[calc(100dvh-6.5rem)] lg:grid-cols-[minmax(0,1.12fr)_minmax(400px,0.88fr)] lg:overflow-hidden">
          <section
            aria-label={project.preview.title}
            className={`${project.preview.backgroundClassName} border-b-2 border-black p-3 sm:p-5 lg:flex lg:min-h-0 lg:flex-col lg:border-r-2 lg:border-b-0`}
          >
            <div className="flex min-h-[60dvh] flex-1 flex-col border-2 border-black bg-white shadow-win95-lg lg:min-h-0">
              <div className="flex items-center gap-2 border-b-2 border-black bg-[#d8eee5] px-3 py-2">
                <div className="flex shrink-0 gap-1" aria-hidden="true">
                  <span className="size-3 border border-black bg-[#00ed64]" />
                  <span className="size-3 border border-black bg-[#c8f6e4]" />
                  <span className="size-3 border border-black bg-[#e3fcf7]" />
                </div>
                <span className="min-w-0 flex-1 truncate border-2 border-black bg-white px-2 py-1 font-mono text-[10px] sm:text-xs">
                  {project.preview.displayUrl}
                </span>
              </div>

              <iframe
                src={project.preview.url}
                title={project.preview.title}
                loading="eager"
                className="min-h-[52dvh] w-full flex-1 bg-white lg:min-h-0"
              />

              <div className="flex flex-col gap-2 border-t-2 border-black bg-[#d8eee5] px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
                <span className="font-mono text-[10px] font-bold uppercase text-black/65 sm:text-xs">
                  {project.preview.instruction}
                </span>
                <Link
                  href={project.preview.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 font-mono text-[10px] font-bold underline underline-offset-2 sm:text-xs"
                >
                  {project.preview.openLabel} ↗
                </Link>
              </div>
            </div>
          </section>

          <section
            aria-label={`Información de ${project.title}`}
            className="min-h-[680px] min-w-0 lg:min-h-0"
          >
            <ProjectDetailsTabs {...project.details} />
          </section>
        </div>
      </WindowFrame>
    </main>
  );
}
