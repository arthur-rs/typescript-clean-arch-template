import * as yup from "yup"

import { DomainError } from "@/entities/@shared/errors/domain.error"
import { ValidationHandler } from "@/entities/@shared/interfaces/validation-handler.interface"

export function appendYupErrorsInValidationHandler<T>(
	handler: ValidationHandler, 
	schema: yup.ObjectSchema<yup.AnyObject>, 
	data: T
) {
	try {
		schema.validateSync(data, { abortEarly: false,  })
	} catch (error) {
		const yupValidationErrors = error as yup.ValidationError
		yupValidationErrors.inner.forEach((yupValidationError) => {
			handler.appendError(DomainError.from(yupValidationError.path ?? "", yupValidationError.message))
		})
	}
}