const MONTHS = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
] as const;

export function formatDate(dateStr: string): string {
	const [year, month, day] = dateStr.split("-");
	const monthName = MONTHS[Number.parseInt(month, 10) - 1] ?? month;
	return `${monthName} ${Number.parseInt(day, 10)}, ${year}`;
}
