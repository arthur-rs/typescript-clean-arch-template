import { Controller, Get } from "@nestjs/common"
import { HealthCheckService, HealthCheck } from "@nestjs/terminus"

import { PrismaHeathIndiciator } from "@/infrastructure/heath-indicators/prisma.heath-indicator"

@Controller("health")
export class HealthController {
	constructor(
		private readonly health: HealthCheckService,
		private readonly prismaIndicator: PrismaHeathIndiciator
	) {}

	@Get()
	@HealthCheck()
	check() {
		return this.health.check([
			() => this.prismaIndicator.isHealthy("prisma")
		])
	}
}