import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common"
import * as Sentry from "@sentry/node"
import { tap } from "rxjs"

import { DomainError } from "@/entities/@shared/errors/domain.error"
import { NotificationError } from "@/entities/@shared/errors/notification.error"
import { ApplicationError } from "@/usecases/@shared/errors/application.error"

@Injectable()
export class SentryInterceptor implements NestInterceptor {
	intercept(_: ExecutionContext, next: CallHandler) {
		return next
			.handle()
			.pipe(
				tap({
					error: (err) => {
						switch (err) {
						case err instanceof DomainError:
							break
						case err instanceof NotificationError:
							break
						case err instanceof ApplicationError:
							break
						default:
							Sentry.captureException(err)
						}
					},
				}),
			)
	}
}