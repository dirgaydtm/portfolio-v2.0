"use client";

import { ArrowRight, ExternalLink, FolderKanban } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { memo } from "react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "@/shared/components/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/shared/components/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/shared/components/hover-card";
import { LayeredButton } from "@/shared/components/layered-button";
import MagicCard from "@/shared/components/magic-card";
import type { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

function ProjectCard({ project, className }: ProjectCardProps) {
  const router = useRouter();
  return (
    <HoverCard openDelay={10} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Card className={`p-0 group ${className}`} onClick={() => router.push(`/projects/${project.slug}`)} >
          <MagicCard className="pt-4">
            <CardHeader className="flex flex-row items-center gap-3 font-semibold md:text-lg">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={`${project.title} logo`}
                  width={32}
                  height={32}
                  className="object-contain size-8 flex items-center justify-center bg-transparent text-primary-foreground rounded-full overflow-hidden"
                />
              ) : (
                <span className="size-8 flex items-center justify-center text-primary">
                  <FolderKanban className="h-5 w-5" />
                </span>
              )}
              <span className="line-clamp-1 min-w-0 flex-1">{project.title}</span>
              {project.githubUrl && (
                <LayeredButton
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`View ${project.title} source code on GitHub`}
                  variant="outline"
                  size="icon"
                  className="ml-auto"
                >
                  <FaGithub className="h-4 w-4" aria-hidden="true" />
                </LayeredButton>
              )}
              {project.liveUrl && (
                <LayeredButton
                  as="a"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`Visit ${project.title} live site`}
                  variant="outline"
                  size="icon"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </LayeredButton>
              )}
            </CardHeader>
            <CardContent className="flex flex-col text-sm md:text-base text-muted-foreground md:h-48 py-4">
              <p className="line-clamp-2">{project.shortDescription}</p>

              <div className="pt-6 flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="not-md:hidden justify-end">
              <p className="justify-end text-muted group-hover:text-muted-foreground mb-6 mr-2 inline-block">
                View Details
                <ArrowRight className="inline-block ml-1 size-5 group-hover:translate-x-2 transition-transform duration-200" />
              </p>
            </CardFooter>
          </MagicCard>
        </Card>
      </HoverCardTrigger>
      {project.images.length > 0 && (
        <HoverCardContent side="top" className="w-100 my-4 p-0 overflow-hidden">
          <div className="relative aspect-video">
            <Image
              src={project.images[0]}
              alt={`${project.title} preview`}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-contain"
              loading="lazy"
            />
          </div>
        </HoverCardContent>
      )}
    </HoverCard>
  );
}

export default memo(ProjectCard);
