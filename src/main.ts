import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { corsConfig } from './config/cors.config';
import { defaultPort } from './common/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');

  const port = Number(process.env.APP_PORT) ?? defaultPort;

  app.enableCors(corsConfig());

  app.setGlobalPrefix("api/v1.0");

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades no definidas en los DTOs
      forbidNonWhitelisted: true, // Lanza un error si se envían propiedades no permitidas
    })
  );

  await app.listen(port);
  logger.log(`Aplicación ejecutándose en el puerto: ${port}`);
}

bootstrap();
