import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

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