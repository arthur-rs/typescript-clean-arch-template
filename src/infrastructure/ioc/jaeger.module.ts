import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { APP_INTERCEPTOR } from "@nestjs/core"

import { applicationConfig } from "@/infrastructure/configs/application.config"
import { jaegerConfig } from "@/infrastructure/configs/jaeger.config"
import { JaegerInterceptor } from "@/infrastructure/interceptors/jaeger.interceptor"
import { JaegerService } from "@/infrastructure/telemetry/jaeger.telemetry"

@Module({
	imports: [ConfigModule.forFeature(jaegerConfig), ConfigModule.forFeature(applicationConfig)],
	providers: [JaegerService, {
		provide: APP_INTERCEPTOR,
		useClass: JaegerInterceptor,
	}],
	exports: [JaegerService],
})
export class JaegerModule {}