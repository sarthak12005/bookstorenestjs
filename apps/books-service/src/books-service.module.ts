import { Module } from '@nestjs/common';
import { BooksServiceController } from './books-service.controller';
import { BooksServiceService } from './books-service.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
       isGlobal:true,
       envFilePath: 'apps/books-service/.env'
    })
  ],
  controllers: [BooksServiceController],
  providers: [BooksServiceService],
})
export class BooksServiceModule {}
