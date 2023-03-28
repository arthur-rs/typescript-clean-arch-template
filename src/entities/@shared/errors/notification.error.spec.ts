import { NotificationError } from "@/entities/@shared/errors/notification.error"
import { Notification } from "@/entities/@shared/notification.validation-handler"

describe("Notification error", () => {

	it("should be able to create a notification error", () => {
		const notification = Notification.empty()
		const error = NotificationError.from(notification)
		expect(error).toBeInstanceOf(NotificationError)
		expect(error).toBeInstanceOf(Error)
		expect(error.errors).toEqual([])
	})

	it("should be able to create a notification error with message", () => {
		const notification = Notification.empty()
		const error = NotificationError.fromWithMessage("message", notification)
		expect(error).toBeInstanceOf(NotificationError)
		expect(error).toBeInstanceOf(Error)
		expect(error.message).toBe("message")
		expect(error.errors).toEqual([])
	})

})