import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/card";
import { LayeredButton } from "@/shared/components/layered-button";
import MagicCard from "@/shared/components/magic-card";
import type { Project } from "../types/project";

interface ProjectAboutProps {
    project: Project;
    className?: string;
}

export default function ProjectAbout({ project, className }: ProjectAboutProps) {
    return (
        <Card className={`p-0 ${className}`}>
            <MagicCard className="">
                <CardHeader className="flex py-4 flex-row items-center gap-2 font-semibold md:text-lg justify-between">
                    <CardTitle>About the Project</CardTitle>
                    <div className="flex gap-3">
                        {project.liveUrl && (
                            <LayeredButton
                                as="a"
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${project.title} live site`}
                                variant="outline"
                                size="icon-lg"
                            >
                                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            </LayeredButton>
                        )}
                        {project.githubUrl && (
                            <LayeredButton
                                as="a"
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} source code on GitHub`}
                                variant="outline"
                                size="icon-lg"
                            >
                                <FaGithub className="h-4 w-4" aria-hidden="true" />
                            </LayeredButton>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="pb-4">
                    <p className="text-muted-foreground text-base md:text-base leading-relaxed">{project.fullDescription}</p>
                </CardContent>
            </MagicCard>
        </Card>
    );
}

