import { Skeleton } from "@/shared/components/skeleton";

const SKELETON_12 = Array.from({ length: 12 }, (_, i) => `skeleton-12-${i}`);
const SKELETON_8 = Array.from({ length: 8 }, (_, i) => `skeleton-8-${i}`);
const SKELETON_7 = Array.from({ length: 7 }, (_, i) => `skeleton-7-${i}`);
const SKELETON_6 = Array.from({ length: 6 }, (_, i) => `skeleton-6-${i}`);
const SKELETON_3 = Array.from({ length: 3 }, (_, i) => `skeleton-3-${i}`);

export default function Loading() {
	return (
		<div className="min-h-screen">
			{/* Hero Section Skeleton */}
			<section className="relative flex h-screen flex-col items-center justify-center px-4 sm:px-6">
				<div className="mx-auto flex gap-6 max-w-3xl flex-col items-center">
					{/* Profile Picture */}
					<Skeleton className="h-60 w-46 md:h-96 md:w-80 rounded-2xl" />

					{/* Bio */}
					<Skeleton className="h-4 w-80 max-w-xl" />

					{/* Separator */}
					<Skeleton className="h-px w-full" />

					{/* CTA Buttons */}
					<div className="flex flex-wrap items-center justify-center gap-4 gap-y-2">
						<Skeleton className="h-10 w-32 rounded-md" />
						<Skeleton className="h-10 w-32 rounded-md" />
						<div className="flex basis-full md:hidden" />
						<Skeleton className="h-10 w-10 rounded-md" />
						<Skeleton className="h-10 w-10 rounded-md" />
						<Skeleton className="h-10 w-10 rounded-md" />
					</div>
				</div>
			</section>

			{/* Tech Stack Section Skeleton */}
			<section className="px-4 py-20 sm:px-6 overflow-hidden">
				<div className="mx-auto max-w-7xl flex flex-col items-center">
					{/* Section Header */}
					<div className="text-center">
						<Skeleton className="h-6 w-24 mx-auto mb-4" />
						<Skeleton className="h-10 w-64 mx-auto mb-4" />
						<Skeleton className="h-4 w-96 mx-auto max-w-2xl" />
					</div>

					{/* Tech Stack Carousel */}
					<div className="mt-10 w-full">
						<div className="flex justify-center gap-8 overflow-hidden">
							{SKELETON_12.map((id) => (
								<Skeleton key={id} className="h-10 w-10 rounded-lg shrink-0" />
							))}
						</div>
					</div>

					{/* Separator */}
					<Skeleton className="h-px w-24 mx-auto my-10" />

					{/* Tech Stack Overview (Desktop) */}
					<div className="hidden md:grid grid-cols-7 gap-4 max-w-5xl w-full">
						{SKELETON_7.map((id) => (
							<div key={id} className="rounded-lg border p-4">
								<Skeleton className="h-12 w-12 rounded-lg mx-auto mb-3" />
								<Skeleton className="h-4 w-16 mx-auto mb-1" />
								<Skeleton className="h-3 w-12 mx-auto" />
							</div>
						))}
					</div>

					{/* Tech Stack Badges (Mobile) */}
					<div className="flex flex-wrap justify-center md:hidden gap-2">
						{SKELETON_8.map((id) => (
							<Skeleton key={id} className="h-5 w-20 rounded-full" />
						))}
					</div>
				</div>
			</section>

			{/* Experience Section Skeleton */}
			<section className="relative bg-background py-20 px-4 overflow-hidden">
				<div className="mx-auto max-w-5xl text-center">
					{/* Section Header */}
					<Skeleton className="h-6 w-20 mx-auto mb-4" />
					<Skeleton className="h-10 w-64 mx-auto mb-4" />
					<Skeleton className="h-4 w-96 mx-auto max-w-2xl mb-10" />

					{/* Timeline Items */}
					<div className="pt-10 space-y-12">
						{SKELETON_3.map((id) => (
							<div key={id} className="relative flex items-start">
								{/* Timeline Icon */}
								<Skeleton className="absolute left-5 md:left-1/2 -translate-x-1/2 h-10 w-10 rounded-full" />

								{/* Content */}
								<div className="ml-16 md:ml-0 md:w-[calc(50%-2rem)] space-y-3">
									<div className="flex items-center gap-2.5">
										<Skeleton className="h-9 w-9 rounded-full" />
										<Skeleton className="h-4 w-32" />
									</div>
									<Skeleton className="h-6 w-48" />
									<Skeleton className="h-4 w-32" />
									<Skeleton className="h-16 w-full" />
									<div className="flex flex-wrap gap-2">
										<Skeleton className="h-5 w-20 rounded-full" />
										<Skeleton className="h-5 w-24 rounded-full" />
										<Skeleton className="h-5 w-16 rounded-full" />
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Projects Section Skeleton */}
			<section className="relative px-4 py-20 sm:px-6">
				<div className="mx-auto max-w-5xl">
					{/* Section Header */}
					<div className="text-center">
						<Skeleton className="h-6 w-20 mx-auto mb-4" />
						<Skeleton className="h-10 w-48 mx-auto mb-4" />
						<Skeleton className="h-4 w-96 mx-auto max-w-2xl" />
					</div>

					{/* Separator */}
					<Skeleton className="h-px w-24 mx-auto my-10" />

					{/* Projects Grid */}
					<div className="flex flex-wrap gap-4 justify-center">
						{SKELETON_6.map((id) => (
							<div
								key={id}
								className="max-w-xs rounded-lg border p-6 space-y-4"
							>
								{/* Header */}
								<div className="flex items-center gap-3">
									<Skeleton className="h-8 w-8 rounded-full" />
									<Skeleton className="h-5 w-32" />
								</div>

								{/* Description */}
								<Skeleton className="h-12 w-full" />

								{/* Tech Badges */}
								<div className="flex flex-wrap gap-1">
									<Skeleton className="h-5 w-16 rounded-full" />
									<Skeleton className="h-5 w-20 rounded-full" />
									<Skeleton className="h-5 w-12 rounded-full" />
								</div>

								{/* Buttons */}
								<div className="flex gap-2">
									<Skeleton className="h-9 flex-1 rounded-md" />
									<Skeleton className="h-9 w-9 rounded-md" />
									<Skeleton className="h-9 w-9 rounded-md" />
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section Skeleton */}
			<section className="relative bg-background px-4 py-20 sm:px-6">
				{/* Section Header */}
				<div className="text-center">
					<Skeleton className="h-6 w-32 mx-auto mb-4" />
					<Skeleton className="h-10 w-48 mx-auto mb-4" />
					<Skeleton className="h-4 w-96 mx-auto max-w-2xl" />
				</div>

				{/* Separator */}
				<Skeleton className="h-px w-24 mx-auto my-10 max-w-5xl" />

				{/* Map + Accordion Layout */}
				<div className="flex flex-col mx-auto max-w-5xl md:flex-row gap-5">
					{/* Map (Desktop) */}
					<Skeleton className="hidden md:flex flex-3 aspect-square rounded-2xl" />

					{/* Accordion */}
					<div className="w-full flex-4 space-y-4">
						<div className="rounded-lg border p-4">
							<Skeleton className="h-6 w-32 mb-4" />
							<div className="space-y-2">
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-3/4" />
								<Skeleton className="h-4 w-2/3" />
							</div>
						</div>
						<div className="rounded-lg border p-4">
							<Skeleton className="h-6 w-32 mb-4" />
							<div className="space-y-4">
								<Skeleton className="h-10 w-full" />
								<Skeleton className="h-10 w-full" />
								<Skeleton className="h-10 w-full" />
								<Skeleton className="h-24 w-full" />
								<Skeleton className="h-10 w-full" />
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
