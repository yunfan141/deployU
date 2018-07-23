import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as path from "path";
require("reflect-metadata");

const express = require("express")

const port = process.env.PORT || 3000;


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('/api')
    // app.useGlobalPipes(new ValidationPipe()th;
    app.use(express.static(path.join(__dirname,"..","static")));

  // app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200'
  });
  const options = new DocumentBuilder()
    .setTitle('HealthU')
    .setDescription('The HealthU API description')
    .setVersion('1.0')
    .addTag('HealthU')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/swagger', app, document);

    await app.listen(port);
    app.use((req,res,next)=>{
        return res.sendFile(path.join(__dirname,"..","static","index.html"))

    });
  // await app.listen(3000);
}

bootstrap();
