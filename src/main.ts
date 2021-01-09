import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import {ValidationPipe} from "@nestjs/common";
import {setupSwagger} from "./util/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true});

  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalPipes(new ValidationPipe({
  //   whitelist: true
  // }));
  // app.enableCors();

  // swagger setting
  setupSwagger(app);

  await app.listen(8282);
}
bootstrap();
