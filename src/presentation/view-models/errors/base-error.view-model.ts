export class BaseErrorViewModel {
	constructor(
		readonly _code: string,
		readonly _message: string,
		readonly _severity: "low" | "medium" | "high",
		readonly _timestamp: string = new Date().toISOString()
	) {}
}