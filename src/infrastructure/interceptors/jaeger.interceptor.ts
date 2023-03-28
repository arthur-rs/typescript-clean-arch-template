import {
	CallHandler,
	ExecutionContext,
	Injectable,
	NestInterceptor,
} from "@nestjs/common"
import { opentracing } from "jaeger-client"
import { tap } from "rxjs/operators"

import { JaegerService } from "@/infrastructure/telemetry/jaeger.telemetry"

@Injectable()
export class JaegerInterceptor implements NestInterceptor {
	constructor(private readonly jaegerService: JaegerService) {}
  
	intercept(context: ExecutionContext, next: CallHandler) {
		const request = context.switchToHttp().getRequest()
		const spanContext = this.jaegerService
			.getTracer()
			.extract(opentracing.FORMAT_HTTP_HEADERS, request.headers)
  
		const span = this.jaegerService.getTracer().startSpan(request.path, { childOf: spanContext || undefined })
		span.log({ event: "request_received" })
		span.setTag("http.method", request.method)
		span.setTag("http.url", request.path)
  
		return next.handle().pipe(
			tap(() => {
				span.log({ event: "request_finished" })
				span.finish()
			}),
		)
	}
}
  