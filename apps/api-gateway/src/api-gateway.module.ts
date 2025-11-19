import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersController } from './users/users.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: 'apps/api-gateway/.env',
    }),

    ClientsModule.registerAsync([
      {
        name: "BOOK_SERVICE",
        useFactory: (config: ConfigService) => ({
          transport: Transport.TCP,
          options: {
            host: config.get<string>('BOOK_SERVICE_HOST'),
            port: config.get<number>('BOOK_SERVICE_PORT')
          }
        }),
        inject: [ConfigService],
      },
    ]),


  ],
  controllers: [ApiGatewayController, UsersController],
  providers: [ApiGatewayService],
})
export class ApiGatewayModule { }
