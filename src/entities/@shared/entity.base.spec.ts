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

describe("(Unit) Entity", () => {

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

	it("should be able throw exception when id is null", () => {
		const idExpected = null
		const createdAtExpected = new Date()
		const updatedAtExpected = new Date()
		const expectedError = new NotificationError("Entity is invalid", [
			new DomainError("id", "the id is required")
		])

		expect(() => new Entity(idExpected, createdAtExpected, updatedAtExpected))
			.toThrow(expectedError)
	})

	it("should be able throw exception when id is undefined", () => {
		const idExpected = undefined
		const createdAtExpected = new Date()
		const updatedAtExpected = new Date()
		const expectedError = new NotificationError("Entity is invalid", [
			new DomainError("id", "the id is required")
		])

		expect(() => new Entity(idExpected, createdAtExpected, updatedAtExpected))
			.toThrow(expectedError)
	})

	it("should be able throw exception when created is in the future", () => {
		const idExpected = new EntityId("id")
		const createdAtExpected = new Date("2100-01-01")
		const updatedAtExpected = new Date()
		const expectedError = new NotificationError("Entity is invalid", [
			new DomainError("createdAt", "the created date must be before the current date")
		])

		expect(() => new Entity(idExpected, createdAtExpected, updatedAtExpected))
			.toThrow(expectedError)
	})

	it("should be able throw exception when updated is in the future", () => {
		const idExpected = new EntityId("id")
		const createdAtExpected = new Date()
		const updatedAtExpected = new Date("2100-01-01")
		const expectedError = new NotificationError("Entity is invalid", [
			new DomainError("updatedAt", "the updated date must be before the current date")
		])

		expect(() => new Entity(idExpected, createdAtExpected, updatedAtExpected))
			.toThrow(expectedError)
	})

	it("should be able throw exception when created is after updated", () => {
		const idExpected = new EntityId("id")
		const createdAtExpected = new Date("2100-01-01")
		const updatedAtExpected = new Date()
		const expectedError = new NotificationError("Entity is invalid", [
			new DomainError("createdAt", "the created date must be before the updated date"),
			new DomainError("updatedAt", "the updated date must be after the created date")
		])

		expect(() => new Entity(idExpected, createdAtExpected, updatedAtExpected))
			.toThrow(expectedError)
	})
})