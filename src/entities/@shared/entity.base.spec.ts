/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Entity } from "@/entities/@shared/entity.base"
import { DomainError } from "@/entities/@shared/errors/domain.error"
import { NotificationError } from "@/entities/@shared/errors/notification.error"
import { Identifier } from "@/entities/@shared/identifier.base"

class EntityId extends Identifier<string> {
	private readonly _value: string

	constructor(value: string) {
		super()
		this._value = value
	}

	get value(): string {
		return this._value
	}
}

describe("Entity", () => {

	it("should be able create a new entity", () => {
		const idExpected = new EntityId("id")
		const createdAtExpected = new Date()
		const updatedAtExpected = new Date()

		const entity = new Entity(idExpected, createdAtExpected, updatedAtExpected)

		expect(entity.id).toBe(idExpected)
		expect(entity.createdAt).toBe(createdAtExpected)
		expect(entity.updatedAt).toBe(updatedAtExpected)
	})

	it("should be able create a new entity with default values", () => {
		const idExpected = new EntityId("id")

		const entity = new Entity(idExpected)

		expect(entity.id).toBe(idExpected)
		expect(entity.createdAt).toBeInstanceOf(Date)
		expect(entity.updatedAt).toBeInstanceOf(Date)
	})

	it("should be able compare two entities equals", () => {
		const entity1 = new Entity("id")
		const entity2 = entity1

		expect(entity1.equals(entity2)).toBeTruthy()
	})

	it("should be able compare two entities with same id", () => {
		const entity1 = new Entity("id")
		const entity2 = new Entity("id")

		expect(entity1.equals(entity2)).toBeTruthy()
	})

	it("should not be able compare two entities with different id", () => {
		const entity1 = new Entity("id")
		const entity2 = new Entity("id2")

		expect(entity1.equals(entity2)).toBeFalsy()
	})

	it("should not be able compare two entities with null or undefined value", () => {
		const entity = new Entity("Id")
		
		// @ts-ignore
		expect(entity.equals(null)).toBeFalsy()
		
		// @ts-ignore
		expect(entity.equals(undefined)).toBeFalsy()
	})
	
})