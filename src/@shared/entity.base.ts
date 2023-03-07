import { EntityValidator } from "@/@shared/entity.validator"
import { Notification } from "@/@shared/notification.validation-handler"
import { NotificationError } from "@/@shared/errors/notification.error"

export class Entity<Identifier> {

	private readonly _id: Identifier
    
	private readonly _createdAt: Date = new Date()

	private readonly _updatedAt: Date = new Date()

	constructor(id: Identifier, createdAt?: Date, updatedAt?: Date) {
		this._id = id
		this._createdAt = createdAt || new Date()
		this._updatedAt = updatedAt || new Date()

		const notification = new Notification()

		new EntityValidator(notification, this).validate()

		if(notification.hasErrors()) {
			throw new NotificationError("Entity is invalid", notification.errors)
		}
	}

	public get id(): Identifier {
		return this._id
	}

	public get createdAt(): Date {
		return this._createdAt
	}

	public get updatedAt(): Date {
		return this._updatedAt
	}

	public equals(entity: Entity<Identifier>): boolean {
		if (entity === null || entity === undefined) {
			return false
		}

		if (this === entity) {
			return true
		}

		if (this.id !== entity.id) {
			return false
		}

		return true
	}
}