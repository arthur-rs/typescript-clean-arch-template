import { BaseErrorViewModel } from "@/presentation/view-models/errors/base-error.view-model"
import { Details } from "@/usecases/@shared/errors/application.error"

export class ApplicationErrorViewModel extends BaseErrorViewModel {
	constructor(
		code = "application_error",
		message: string,
		readonly details?: Details,
	) { super(code, message, "medium") }
}