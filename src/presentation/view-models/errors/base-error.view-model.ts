export class BaseErrorViewModel {
	constructor(
		readonly code: string,
		readonly message: string,
		readonly severity: "low" | "medium" | "high",
		readonly timestamp: string = new Date().toISOString()
	) {}
}