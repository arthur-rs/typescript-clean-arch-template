import { ValidationPipe, VersioningType } from "@nestjs/common"
import { NestFactory } from "@nestjs/core"
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"

import { AppModule } from "./app.module"

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.useGlobalPipes(new ValidationPipe({
		transform: true,
		whitelist: true
	}))
	app.enableVersioning({
		defaultVersion: "1",
		type: VersioningType.URI,
		prefix: "v"
	})
	const config = new DocumentBuilder()
		.setTitle("Cats API")
		.setDescription("The cats API description")
		.setVersion("1.0")
		.addTag("cats")
		.build()
	const document = SwaggerModule.createDocument(app, config)
	SwaggerModule.setup("api", app, document)
	await app.listen(3000)
}

bootstrap()