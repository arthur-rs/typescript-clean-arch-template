import * as yup from "yup"

import { isBefore, isEqual } from "date-fns"
import { Entity } from "@/entities/@shared/entity.base"
import { ValidationHandler } from "@/entities/@shared/interfaces/validation-handler.interface"
import { Validator } from "@/entities/@shared/validator.base"
import { appendYupErrorsInValidationHandler } from "@/entities/@shared/utils/append-yup-errors-in-validation-handler.util"

export class EntityValidator<Identifier> extends Validator {

	private readonly _entity: Entity<Identifier>

	constructor(handler: ValidationHandler, entity: Entity<Identifier>) {
		super(handler)
		this._entity = entity
	}
	
	public validate(): void {
		const schema = yup.object().shape({
			id: yup.mixed().required("the id is required"),
			createdAt: yup.date().required("the created date is required")
				.max(new Date(), "the created date must be before the current date"),
			updatedAt: yup.date().required("the updated date is required")
				.max(new Date(), "the updated date must be before the current date")
				.test("isBefore", "the updated date must be after the created date", (value: Date) => {
					if(isEqual(value, this._entity.createdAt)) {
						return true
					}
					return isBefore(value, this._entity.createdAt)
				})
		})

		appendYupErrorsInValidationHandler(this.handler, schema, {
			id: this._entity.id,
			createdAt: this._entity.createdAt,
			updatedAt: this._entity.updatedAt
		})
	}
}