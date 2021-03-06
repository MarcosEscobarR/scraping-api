import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Test Edge')
    .setDescription('API de Todo-list para el test de Edge')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      stopAtFirstError: true,
      transformOptions: {
        enableImplicitConversion: true,
        exposeDefaultValues: true,
      },
    }),
  );
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(3000);
}
bootstrap();
