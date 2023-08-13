import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, 
  // { //^ This is for to show which type of logger you want to show in terminal
  //   logger: ['error', 'warn', 'debug', 'log'],
  // }
  );
  app.useGlobalPipes(new ValidationPipe()); //^ this for make validation pipe apply globally
  await app.listen(3000);
}
bootstrap();
