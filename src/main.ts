import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { OpenTelemetryConfig as instrumentation } from 'instrumentation';

async function bootstrap() {
  instrumentation.start();
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
