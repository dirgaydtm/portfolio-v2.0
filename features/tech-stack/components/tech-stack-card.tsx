import { Badge } from "@/shared/components/badge";
import { Card, CardContent } from "@/shared/components/card";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/shared/components/hover-card";
import MagicCard from "@/shared/components/magic-card";
import type { TechStackGroup } from "../types/tech-stack";

interface TechStackCardProps {
	groupName: string;
	group: TechStackGroup;
}

export default function TechStackCard({
	groupName,
	group,
}: TechStackCardProps) {
	return (
		<HoverCard openDelay={0} closeDelay={100}>
			<HoverCardTrigger asChild>
				<Card className="p-0 w-32 group cursor-default hover:shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-primary/20">
					<MagicCard className="py-6">
						<CardContent className="flex flex-col items-center text-center">
							<div className="mb-3 rounded-lg bg-accent p-3 transition-colors group-hover:bg-accent/80">
								<group.icon className="h-6 w-6 text-muted-foreground" />
							</div>
							<h3 className="font-medium text-foreground">{groupName}</h3>
							<p className="mt-1 text-xs text-muted-foreground">
								{group.items.length} skills
							</p>
						</CardContent>
					</MagicCard>
				</Card>
			</HoverCardTrigger>
			<HoverCardContent className="p-0 m-4 w-75 cursor-default" side="top">
				<MagicCard className="flex p-3 flex-wrap">
					{group.items.map((skill) => (
						<Badge
							key={skill.name}
							variant="secondary"
							className="text-xs m-0.5"
						>
							{skill.name}
							<span className="ml-1 text-[10px] opacity-60">
								({skill.category})
							</span>
						</Badge>
					))}
				</MagicCard>
			</HoverCardContent>
		</HoverCard>
	);
}
