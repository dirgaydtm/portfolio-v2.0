"use client";

import { AlertCircle, RefreshCw } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/shared/components/button";

export default function AppError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		if (process.env.NODE_ENV === "development") {
			console.error(error);
		}
	}, [error]);

	return (
		<div className="flex min-h-[80vh] flex-col items-center justify-center px-4">
			<div className="flex flex-col items-center gap-6 text-center">
				<div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
					<AlertCircle className="h-10 w-10 text-destructive" />
				</div>

				<div className="space-y-2">
					<h1 className="text-2xl font-bold tracking-tight">
						Oops! Something went wrong
					</h1>
					<p className="text-muted-foreground max-w-md">
						An unexpected error occurred. Don&apos;t worry, it&apos;s not your
						fault. Please try again or refresh the page.
					</p>
				</div>

				<div className="flex gap-4">
					<Button onClick={reset} variant="default">
						<RefreshCw className="mr-2 h-4 w-4" />
						Try Again
					</Button>
					<Button
						variant="outline"
						onClick={() => (window.location.href = "/")}
					>
						Go Home
					</Button>
				</div>

				{process.env.NODE_ENV === "development" && (
					<details className="mt-8 max-w-lg text-left">
						<summary className="cursor-pointer text-sm text-muted-foreground">
							Error Details (Development Only)
						</summary>
						<pre className="mt-2 overflow-auto rounded-md bg-muted p-4 text-xs">
							{error.message}
							{error.stack && `\n\n${error.stack}`}
						</pre>
					</details>
				)}
			</div>
		</div>
	);
}
