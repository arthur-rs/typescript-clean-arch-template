import { BaseErrorViewModel } from "@/presentation/view-models/errors/base-error.view-model"
import { DomainErrorViewModel } from "@/presentation/view-models/errors/domain-error.view-model"

export class NotificationErrorViewModel extends BaseErrorViewModel {
	constructor(
		readonly errors: DomainErrorViewModel[],
		message = "An error occurred while validating the submitted data",
		code = "validation_error",
	) { super(code, message, "low") }
}

