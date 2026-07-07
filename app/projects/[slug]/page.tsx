import { notFound } from "next/navigation";
import ProjectDetail from "@/features/projects/components/project-detail";
import { projects } from "@/features/projects/data/projects";
import type { Project } from "@/features/projects/types/project";

interface ProjectPageProps {
	params: Promise<{
		slug: string;
	}>;
}

const projectsBySlug: Map<string, Project> = new Map(
	projects.map((p) => [p.slug, p]),
);

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { slug } = await params;
	const project = projectsBySlug.get(slug);

	if (!project) {
		notFound();
	}

	return <ProjectDetail project={project} />;
}

export function generateStaticParams() {
	return projects.map((project) => ({
		slug: project.slug,
	}));
}
