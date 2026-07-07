import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/features/layout/components/theme-toggle";
import CustomCursor from "@/shared/components/custom-cursor";
import { Toaster } from "@/shared/components/sonner";

export default function Provider({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="dark"
			enableSystem
			disableTransitionOnChange
		>
			<Toaster position="top-center" richColors />
			<CustomCursor />
			<ThemeToggle className="fixed top-4 right-4 z-50" />
			<main>{children}</main>
		</ThemeProvider>
	);
}
