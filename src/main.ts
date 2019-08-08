import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { getConnection } from 'typeorm';

import { AppModule } from './app.module';
import * as ormConfig from '../ormconfig.json';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });

  app.useGlobalPipes(new ValidationPipe());

  // run migrations
  await getConnection().runMigrations();

  // swagger setup
  const options = new DocumentBuilder()
  	.setTitle('Todos Example')
  	.setDescription('Sample Todo App using Nest.js')
  	.setVersion('1.0')
  	.addTag('todo')
  	.build()
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();