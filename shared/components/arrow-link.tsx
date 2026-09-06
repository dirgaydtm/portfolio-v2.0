import Link from "next/link";
import { PiArrowUpRight } from "react-icons/pi";
import { cn } from "@/shared/lib/utils";

interface ArrowLinkProps {
	href: string;
	children?: React.ReactNode;
	label?: string;
	download?: boolean;
	external?: boolean;
	className?: string;
}

export default function ArrowLink({
	href,
	children,
	label,
	download,
	external,
	className,
}: ArrowLinkProps) {
	const content = children ?? label;

	const baseClassName = cn(
		"group inline-flex items-center gap-1 text-sm sm:text-lg md:text-xl lg:text-sm font-mono uppercase tracking-wider transition-colors text-muted-foreground hover:text-foreground",
		className,
	);

	const inner = (
		<>
			<span className="relative">
				{content}
				<span className="absolute left-0 -bottom-0.5 h-px w-full scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100 bg-foreground" />
			</span>
			<PiArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
		</>
	);

	if (download) {
		return (
			<a href={href} download className={baseClassName}>
				{inner}
			</a>
		);
	}

	if (external) {
		return (
			<a
				href={href}
				target="_blank"
				rel="noopener noreferrer"
				className={baseClassName}
			>
				{inner}
			</a>
		);
	}

	return (
		<Link href={href} className={baseClassName}>
			{inner}
		</Link>
	);
}
