import { DomainError } from "@/entities/@shared/errors/domain.error"
import { Notification } from "@/entities/@shared/notification.validation-handler"

describe("(Unit) notification validation handler", () => {

	it("should be able create a new notification", () => {
		const notification = new Notification()

		expect(notification.errors).toEqual([])
		expect(notification.hasErrors()).toBeFalsy()
	})

	it("should be able create a new notification with initial errors", () => {
		const expectedErrors = [new DomainError("field1", "error1"), new DomainError("field2", "error2")]
		const notification = new Notification(expectedErrors)

		expect(notification.errors).toEqual(expectedErrors)
		expect(notification.hasErrors()).toBeTruthy()
	})

	it("should be able append a new error", () => {
		const expectedError = new DomainError("field1", "error1")
		const notification = new Notification()

		notification.appendError(expectedError)

		expect(notification.errors).toEqual([expectedError])
		expect(notification.hasErrors()).toBeTruthy()
	})

	it("should be able append a new errors", () => {
		const expectedErrors = [new DomainError("field1", "error1"), new DomainError("field2", "error2")]
		const notification = new Notification()

		notification.appendErrors(expectedErrors)

		expect(notification.errors).toEqual(expectedErrors)
		expect(notification.hasErrors()).toBeTruthy()
	})

	it("should be able clear errors", () => {
		const notification = new Notification()

		notification.appendErrors([new DomainError("field1", "error1"), new DomainError("field2", "error2")])
		notification.clearErrors()

		expect(notification.errors).toEqual([])
		expect(notification.hasErrors()).toBeFalsy()
	})
})