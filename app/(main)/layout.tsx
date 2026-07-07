import Footer from "@/features/layout/components/footer";
import Navbar from "@/features/layout/components/navbar";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{children}
			<Navbar />
			<Footer />
		</>
	);
}
