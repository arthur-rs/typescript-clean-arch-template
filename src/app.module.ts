import { Module } from "@nestjs/common"

import { CacheModule } from "@/infrastructure/ioc/cache.module"
import { FiltersModule } from "@/infrastructure/ioc/filters.module"
import { HealthModule } from "@/infrastructure/ioc/heath.module"
import { JaegerModule } from "@/infrastructure/ioc/jaeger.module"
import { SentryModule } from "@/infrastructure/ioc/sentry.module"

@Module({
	imports: [HealthModule, FiltersModule, JaegerModule, SentryModule, CacheModule]
})
export class AppModule {}
