export class DomainError extends Error {
	
	private readonly _field: string
	
	private constructor(field: string, message: string) {
		super(message)
		this.name = this.constructor.name
		this._field = field
	}

	static from(field: string, message: string): DomainError {
		return new DomainError(field, message)
	}

	public get field(): string {
		return this._field
	}
} 