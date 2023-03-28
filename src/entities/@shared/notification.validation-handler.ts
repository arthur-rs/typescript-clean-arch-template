import { DomainError } from "@/entities/@shared/errors/domain.error"
import { ValidationHandler } from "@/entities/@shared/interfaces/validation-handler.interface"

export class Notification implements ValidationHandler {

	private _errors: DomainError[] = []

	private constructor(initialErrors: DomainError[] | null | undefined = []) {
		this._errors = initialErrors ?? []
	}

	static empty(): Notification {
		return new Notification()
	}

	static fromErrors(errors: DomainError[]): Notification {
		return new Notification(errors)
	}

	get errors(): DomainError[] {
		return this._errors
	}

	hasErrors(): boolean {
		return this._errors.length > 0
	}

	appendError(error: DomainError): void {
		this._errors.push(error)
	}

	appendErrors(errors: DomainError[]): void {
		errors.forEach(error => this.appendError(error))
	}

	clearErrors(): void {
		this._errors = []
	}
}