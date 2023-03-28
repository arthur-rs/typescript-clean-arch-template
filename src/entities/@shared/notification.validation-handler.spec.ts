import { DomainError } from "@/entities/@shared/errors/domain.error"
import { Notification } from "@/entities/@shared/notification.validation-handler"

describe("notification validation handler", () => {

	it("should be able create a new notification", () => {
		const notification = Notification.empty()

		expect(notification.errors).toEqual([])
		expect(notification.hasErrors()).toBeFalsy()
	})

	it("should be able create a new notification with initial errors", () => {
		const expectedErrors = [DomainError.from("field1", "error1"), DomainError.from("field2", "error2")]
		const notification = Notification.fromErrors(expectedErrors)

		expect(notification.errors).toEqual(expectedErrors)
		expect(notification.hasErrors()).toBeTruthy()
	})

	it("should be able append a new error", () => {
		const expectedError = DomainError.from("field1", "error1")
		const notification = Notification.empty()

		notification.appendError(expectedError)

		expect(notification.errors).toEqual([expectedError])
		expect(notification.hasErrors()).toBeTruthy()
	})

	it("should be able append a new errors", () => {
		const expectedErrors = [DomainError.from("field1", "error1"), DomainError.from("field2", "error2")]
		const notification = Notification.empty()

		notification.appendErrors(expectedErrors)

		expect(notification.errors).toEqual(expectedErrors)
		expect(notification.hasErrors()).toBeTruthy()
	})

	it("should be able clear errors", () => {
		const notification = Notification.empty()

		notification.appendErrors([DomainError.from("field1", "error1"), DomainError.from("field2", "error2")])
		notification.clearErrors()

		expect(notification.errors).toEqual([])
		expect(notification.hasErrors()).toBeFalsy()
	})

})