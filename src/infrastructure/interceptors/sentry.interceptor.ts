import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from "@nestjs/common"
import * as Sentry from "@sentry/node"
import { tap } from "rxjs"

@Injectable()
export class SentryInterceptor implements NestInterceptor {
	intercept(_: ExecutionContext, next: CallHandler) {
		return next
			.handle()
			.pipe(
				tap({
					error: (err) => {
						Sentry.captureException(err)
					},
				}),
			)
	}
}