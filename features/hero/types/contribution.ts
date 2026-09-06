export interface ContributionDay {
	date: string;
	count: number;
}

export interface ContributionsData {
	username: string;
	total_contributions: number;
	active_days: number;
	days: ContributionDay[];
}
