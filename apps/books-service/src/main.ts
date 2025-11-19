import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { BooksServiceModule } from './books-service.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const configService = new ConfigService()
  const host = configService.get<string>('HOST')
  const port = configService.get<number>('PORT')
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(BooksServiceModule, {
    transport: Transport.TCP,
    options: {
      host: host,
      port: port
    }
  });
  await app.listen();
  console.log(`Book-Service is running on ${port}`);
}
bootstrap();
