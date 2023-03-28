import { registerAs } from "@nestjs/config"

export const jaegerConfig = registerAs("jaeger", () => ({
	serviceName: process.env.JAEGER_SERVICE_NAME,
	sampler: {
		type: "const",
		param: 1,
	},
	reporter: {
		logSpans: true,
		agentHost: process.env.JAEGER_AGENT_HOST,
		agentPort: Number(process.env.JAEGER_AGENT_PORT),
	},
}))