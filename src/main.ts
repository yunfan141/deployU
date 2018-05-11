import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
require("reflect-metadata")


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200'
  });
  const options = new DocumentBuilder()
    .setTitle('HealthU Backend')
    .setDescription('The HealthU API description')
    .setVersion('1.0')
    .addTag('HealthU')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api', app, document);

  await app.listen(3000);
}

bootstrap();
