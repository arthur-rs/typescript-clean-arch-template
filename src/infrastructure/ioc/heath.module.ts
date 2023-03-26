import { Module } from "@nestjs/common"
import { TerminusModule } from "@nestjs/terminus"

import { PrismaHeathIndiciator } from "@/infrastructure/heath-indicators/prisma.heath-indicator"
import { PrismaModule } from "@/infrastructure/ioc/prisma.module"
import { HealthController } from "@/presentation/controllers/health.controller"

@Module({
	imports: [TerminusModule, PrismaModule],
	controllers: [HealthController],
	providers: [PrismaHeathIndiciator]
})
export class HealthModule {}