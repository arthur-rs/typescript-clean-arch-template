import { Module } from "@nestjs/common"
import { APP_INTERCEPTOR } from "@nestjs/core"

import { SentryInterceptor } from "@/infrastructure/interceptors/sentry.interceptor"

@Module({
	imports: [],
	providers: [{
		provide: APP_INTERCEPTOR,
		useClass: SentryInterceptor,
	}],
})
export class SentryModule {}