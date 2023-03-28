import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from "@nestjs/common"
import { Response } from "express"

import { BaseErrorViewModel } from "@/presentation/view-models/errors/base-error.view-model"

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
	catch(exception: HttpException, host: ArgumentsHost) {
		const ctx = host.switchToHttp()
		const response = ctx.getResponse<Response>()

		const viewModel = new BaseErrorViewModel(
			"generic_error",
			exception.message,
			exception.getStatus() >= 500 ? "high" : "medium",
		)

		response
			.status(exception.getStatus())
			.json(viewModel)
	}
}