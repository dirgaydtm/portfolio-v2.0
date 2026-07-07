import Footer from "@/features/layout/components/footer";

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{children}
			<Footer />
		</>
	);
}
