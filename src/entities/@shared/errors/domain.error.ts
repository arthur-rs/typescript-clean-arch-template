export class DomainError extends Error {
	
	private readonly _field: string
	
	constructor(field: string, message: string) {
		super(message)
		this.name = this.constructor.name
		this._field = field
	}

	public get field(): string {
		return this._field
	}
} 