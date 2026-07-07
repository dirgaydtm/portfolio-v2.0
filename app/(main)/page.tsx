import ContactSection from "@/features/contact/components/contact-section";
import ExperienceSection from "@/features/experience/components/experience-section";
import HeroSection from "@/features/hero/components/hero-section";
import ProjectsSection from "@/features/projects/components/projects-section";
import TechStackSection from "@/features/tech-stack/components/tech-stack-section";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<TechStackSection />
			<ExperienceSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
