import { BaseErrorViewModel } from "@/presentation/view-models/errors/base-error.view-model"

export class InternalServerError extends BaseErrorViewModel {
	constructor(message = "An unexpected error occurred") {
		super("internal_server_error", message, "high")
	}
}