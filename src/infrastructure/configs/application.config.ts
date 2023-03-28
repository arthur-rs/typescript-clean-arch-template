import { registerAs } from "@nestjs/config"

export const applicationConfig = registerAs("application", () => ({
	name: process.env.APP_NAME || "application",
	version: process.env.APP_VERSION || "0.0.0",
	environment: process.env.APP_ENV as "development" | "production" | "test" || "development",
}))