import { registerAs } from "@nestjs/config"

export const redisConfig = registerAs("redis", () => ({
	socket: {
		host: process.env.REDIS_HOST,
		port: Number(process.env.REDIS_PORT)
	},
	password: process.env.REDIS_PASSWORD,
	db: Number(process.env.REDIS_DB),
	ttl: 600
}))