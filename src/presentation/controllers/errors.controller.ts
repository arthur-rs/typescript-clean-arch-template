import { Controller, Get } from "@nestjs/common"

import { DomainError } from "@/entities/@shared/errors/domain.error"
import { NotificationError } from "@/entities/@shared/errors/notification.error"
import { Notification } from "@/entities/@shared/notification.validation-handler"
import { ApplicationError } from "@/usecases/@shared/errors/application.error"

@Controller("errors")
export class ErrorsController {

	@Get("internal-server-error")
	internalServerError() {
		throw new Error("internal server error")
	}

	@Get("validation-error")
	validationError() {
		throw NotificationError.fromWithMessage(
			"validation error", 
			Notification.fromErrors([DomainError.from("name", "name is required")]),
		)
	}

	@Get("application-error")
	applicationError() {
		throw ApplicationError.from("application_error", "application error", "Error")
	}

}