import { randomUUID } from "crypto"

import {
	CallHandler,
	ExecutionContext,
	Inject,
	Injectable,
	NestInterceptor,
} from "@nestjs/common"
import { ConfigType } from "@nestjs/config"
import { Request, Response } from "express"
import { opentracing } from "jaeger-client"
import { tap } from "rxjs/operators"

import { applicationConfig } from "@/infrastructure/configs/application.config"
import { JaegerService } from "@/infrastructure/telemetry/jaeger.telemetry"

@Injectable()
export class JaegerInterceptor implements NestInterceptor {
	constructor(
		private readonly jaegerService: JaegerService,
		@Inject(applicationConfig.KEY)
		private readonly appConfig: ConfigType<typeof applicationConfig>,
	) {}
  
	intercept(context: ExecutionContext, next: CallHandler) {
		const requestId = randomUUID()

		const request = context.switchToHttp().getRequest<Request>()
		const response = context.switchToHttp().getResponse<Response>()

		const spanContext = this.jaegerService
			.getTracer()
			.extract(opentracing.FORMAT_HTTP_HEADERS, request.headers)
  
		const span = this.jaegerService.getTracer().startSpan(request.path, { childOf: spanContext || undefined })
		span.log({ event: "request_received" })
		span.setTag("http.method", request.method)
		span.setTag("http.url", request.path)
		span.setTag("http.content_type", request.headers["content-type"])
		span.setTag("http.params", request.params)
		span.setTag("http.query", request.query)
		span.setTag("http.user_agent", request.headers["user-agent"])
		span.setTag("http.hostname", request.hostname)
		span.setTag("http.ip", request.ip)
		span.setTag("http.http_version", request.httpVersion)
		span.setTag("http.original_url", request.originalUrl)
		span.setTag("http.protocol", request.protocol)
		span.setTag("http.secure", request.secure)
		span.setTag("http.subdomains", request.subdomains)
		span.setTag("http.request_id", requestId)

		if(this.appConfig.environment === "development") {
			span.setTag("http.body", request.body)
			span.setTag("http.cookies", request.cookies)
			span.setTag("http.headers", request.headers)
		}
		
		return next.handle().pipe(
			tap(() => {
				span.log({ event: "request_finished" })
				span.setTag("http.response.content_type", response.get("content-type"))
				span.setTag("http.response.status_code", response.statusCode)
				span.setTag("http.response.headers", response.getHeaders())
				
				response.setHeader("X-Request-Id", requestId)

				span.finish()
			}),
		)
	}
}
  