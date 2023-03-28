import { object, string } from "yup"

import { DomainError } from "@/entities/@shared/errors/domain.error"
import { Notification } from "@/entities/@shared/notification.validation-handler"
import { appendYupErrorsInValidationHandler } from "@/entities/@shared/utils/append-yup-errors-in-validation-handler.util"

describe("Append yup errors in validation handler util", () => {

	it("should be able to append yup errors in validation handler", () => {
		const schema = object().shape({
			field1: string().required("error1"),
		})

		const notification = Notification.empty()

		appendYupErrorsInValidationHandler(notification, schema, { field1: "" })

		expect(notification.errors).toContainEqual(DomainError.from("field1", "error1"))
	})

})