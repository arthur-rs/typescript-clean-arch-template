export class Entity<Identifier> {

	protected readonly _id: Identifier
    
	protected readonly _createdAt: Date = new Date()

	protected _updatedAt: Date = new Date()

	constructor(id: Identifier, createdAt?: Date, updatedAt?: Date) {
		this._id = id
		this._createdAt = createdAt || new Date()
		this._updatedAt = updatedAt || new Date()
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