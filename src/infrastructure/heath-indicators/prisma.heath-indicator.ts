import { Injectable } from "@nestjs/common"
import { HealthCheckError, HealthIndicator, HealthIndicatorResult } from "@nestjs/terminus"

import { PrismaService } from "@/infrastructure/services/prisma.service"

@Injectable()
export class PrismaHeathIndiciator extends HealthIndicator {

	constructor(
		private readonly prisma: PrismaService
	) { super() }

	async isHealthy(key: string): Promise<HealthIndicatorResult> {
		try {
			await this.prisma.$queryRaw`SELECT 1`
			return this.getStatus(key, true)
		} catch (error) {
			throw new HealthCheckError("Prisma is not healthy", this.getStatus(key, false, { error }))
		}
	}
}