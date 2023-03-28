import { DomainError } from "@/entities/@shared/errors/domain.error"
import { Notification } from "@/entities/@shared/notification.validation-handler"

export class NotificationError extends Error {

	private readonly _errors: DomainError[]

	private constructor(message: string, errors: DomainError[]) {
		super(message)
		this._errors = errors
	}

	static from(notification: Notification): NotificationError {
		return new NotificationError("domain errors", notification.errors)
	}

	static fromWithMessage(message: string, notification: Notification): NotificationError {
		return new NotificationError(message, notification.errors)
	}

	public get errors(): DomainError[] {
		return this._errors
	}
}