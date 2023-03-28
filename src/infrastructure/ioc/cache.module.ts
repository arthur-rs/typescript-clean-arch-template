import { CacheInterceptor, CacheModule as NestjsCacheModule, Module } from "@nestjs/common"
import { ConfigModule, ConfigType } from "@nestjs/config"
import { APP_INTERCEPTOR } from "@nestjs/core"
import { redisStore } from "cache-manager-redis-yet"
import { RedisClientOptions } from "redis"

import { redisConfig } from "@/infrastructure/configs/redis.config"

@Module({
	imports: [
		NestjsCacheModule.registerAsync<RedisClientOptions>({
			imports: [ConfigModule.forFeature(redisConfig)],
			inject: [redisConfig.KEY],
			useFactory: async (config: ConfigType<typeof redisConfig>) => ({
				store: redisStore,
				...config
			})
		})
	],
	providers: [{
		provide: APP_INTERCEPTOR,
		useClass: CacheInterceptor
	}]
})
export class CacheModule {}