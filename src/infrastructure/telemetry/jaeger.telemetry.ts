import { Inject, Injectable } from "@nestjs/common"
import { ConfigType } from "@nestjs/config"
import { initTracer, JaegerTracer } from "jaeger-client"

import { jaegerConfig } from "@/infrastructure/configs/jaeger.config"

@Injectable()
export class JaegerService {
	private tracer: JaegerTracer

	constructor(
		@Inject(jaegerConfig.KEY)
		private readonly config: ConfigType<typeof jaegerConfig>,
	) { this.tracer = initTracer(this.config, {}) }

	getTracer(): JaegerTracer {
		return this.tracer
	}
}
