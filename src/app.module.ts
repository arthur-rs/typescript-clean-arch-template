import { Module } from "@nestjs/common"

import { HealthModule } from "@/infrastructure/ioc/heath.module"
import { JaegerModule } from "@/infrastructure/ioc/jaeger.module"
import { SentryModule } from "@/infrastructure/ioc/sentry.module"

@Module({
	imports: [HealthModule, JaegerModule, SentryModule]
})
export class AppModule {}
