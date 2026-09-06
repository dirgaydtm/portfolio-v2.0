import ContactSection from "@/features/contact/components/contact-section";
import ExperienceSection from "@/features/experience/components/experience-section";
import Hero from "@/features/hero/containers/hero";
import ProjectsSection from "@/features/projects/components/projects-section";
import TechStackSection from "@/features/tech-stack/components/tech-stack-section";
import HeroSkillsLayout from "@/shared/layouts/hero-skills-layout";

export default function Home() {
	return (
		<main>
			<HeroSkillsLayout>
				<Hero />
				<TechStackSection />
			</HeroSkillsLayout>
			<ExperienceSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
