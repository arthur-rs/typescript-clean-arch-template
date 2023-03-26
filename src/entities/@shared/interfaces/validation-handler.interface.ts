import { DomainError } from "@/entities/@shared/errors/domain.error"

export interface ValidationHandler {
	get errors(): DomainError[]
	hasErrors(): boolean
	appendError(error: DomainError): void
	appendErrors(errors: DomainError[]): void
	clearErrors(): void
}