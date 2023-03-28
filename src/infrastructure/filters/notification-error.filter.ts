import { ExceptionFilter, Catch, ArgumentsHost } from "@nestjs/common"
import { Response } from "express"

import { NotificationError } from "@/entities/@shared/errors/notification.error"
import { DomainErrorViewModel } from "@/presentation/view-models/errors/domain-error.view-model"
import { NotificationErrorViewModel } from "@/presentation/view-models/errors/notification-error.view-model"

@Catch(NotificationError)
export class NotificationErrorFilter implements ExceptionFilter {
	catch(exception: NotificationError, host: ArgumentsHost) {
		const ctx = host.switchToHttp()
		const response = ctx.getResponse<Response>()

		const errorsViewModel = exception.errors.map((error) => {
			return new DomainErrorViewModel(error.field, error.message)
		})

		const viewModel = new NotificationErrorViewModel(
			errorsViewModel,
			exception.message,
		)

		response
			.status(433)
			.json(viewModel)
	}
}