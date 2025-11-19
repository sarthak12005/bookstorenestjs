import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import {ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  const config = app.get(ConfigService)

  const port = config.get('PORT')

  await app.listen(port);

  console.log(`API Gateway running on port ${port}`);
}
bootstrap();
