import { ExceptionFilter, Catch, ArgumentsHost } from "@nestjs/common"
import { Response } from "express"

import { ApplicationErrorViewModel } from "@/presentation/view-models/errors/application-error.view-model"
import { ApplicationError } from "@/usecases/@shared/errors/application.error"

@Catch(ApplicationError)
export class ApplicationErrorFilter implements ExceptionFilter {
	catch(exception: ApplicationError, host: ArgumentsHost) {
		const ctx = host.switchToHttp()
		const response = ctx.getResponse<Response>()

		const viewModel = new ApplicationErrorViewModel(
			exception.code,
			exception.message,
			exception.details,
		)

		response
			.status(400)
			.json(viewModel)
	}
}