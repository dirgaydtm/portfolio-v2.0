import { MetadataRoute } from "next";
import { projects } from "@/features/projects/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://dirga.dev";

    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];

    const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${baseUrl}/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...staticPages, ...projectPages];
}
