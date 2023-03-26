import { DomainError } from "@/entities/@shared/errors/domain.error"

export class NotificationError extends Error {

	private readonly _errors: DomainError[]

	constructor(message: string, errors: DomainError[]) {
		super(message)
		this._errors = errors
	}

	public get errors(): DomainError[] {
		return this._errors
	}
}