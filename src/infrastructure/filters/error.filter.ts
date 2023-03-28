import { ExceptionFilter, Catch, ArgumentsHost } from "@nestjs/common"
import { Response } from "express"

import { InternalServerError } from "@/presentation/view-models/errors/internal-server-error.view-model"

@Catch(Error)
export class ErrorFilter implements ExceptionFilter {
	catch(exception: Error, host: ArgumentsHost) {
		const ctx = host.switchToHttp()
		const response = ctx.getResponse<Response>()

		const viewModel = new InternalServerError(exception.message)

		response
			.status(500)
			.json(viewModel)
	}
}