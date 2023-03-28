import { Module } from "@nestjs/common"
import { APP_FILTER } from "@nestjs/core"

import { ApplicationErrorFilter } from "@/infrastructure/filters/application-error.filter"
import { ErrorFilter } from "@/infrastructure/filters/error.filter"
import { HttpExceptionFilter } from "@/infrastructure/filters/http-exception.filter"
import { NotificationErrorFilter } from "@/infrastructure/filters/notification-error.filter"
import { ErrorsController } from "@/presentation/controllers/errors.controller"

@Module({
	controllers: [ErrorsController],
	providers: [
		{ provide: APP_FILTER, useClass: ErrorFilter },
		{ provide: APP_FILTER, useClass: NotificationErrorFilter },
		{ provide: APP_FILTER, useClass: ApplicationErrorFilter },
		{ provide: APP_FILTER, useClass: HttpExceptionFilter }
	],
})
export class FiltersModule {}