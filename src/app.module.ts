import { Module } from "@nestjs/common"

import { HealthModule } from "@/infrastructure/ioc/heath.module"

@Module({
	imports: [HealthModule]
})
export class AppModule {}
