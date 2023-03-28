export type Details = Record<string, unknown> | string | string[]

export class ApplicationError extends Error {
	private constructor(
		private readonly _code: string,
		message: string,
		private readonly _details?: Details,
	) { super(message) }

	static from(code: string, message: string, details?: Details): ApplicationError {
		return new ApplicationError(code, message, details)
	}

	get code(): string {
		return this._code
	}

	get details(): Details | undefined {
		return this._details
	}
}