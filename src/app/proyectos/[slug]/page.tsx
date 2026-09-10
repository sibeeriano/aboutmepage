import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/portfolio/ProjectDetailView";
import {
  getPortfolioProject,
  portfolioProjects,
} from "@/data/portfolioProjects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} | sib.dev`,
    description: project.details.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
