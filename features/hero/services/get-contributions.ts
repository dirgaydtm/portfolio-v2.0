import type { ContributionsData } from "../types/contribution";

const GITHUB_CONTRIBUTIONS_URL =
	"https://raw.githubusercontent.com/dirgaydtm/dirgaydtm/output-2/data/contributions.json";

export async function getContributions(): Promise<ContributionsData> {
	const res = await fetch(GITHUB_CONTRIBUTIONS_URL, {
		next: { revalidate: 86400 },
	});

	const data: ContributionsData = await res.json();

	return {
		...data,
		days: data.days.slice(-245),
	};
}
