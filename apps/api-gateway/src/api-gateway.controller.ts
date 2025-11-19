import { Controller, Get, Inject } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class ApiGatewayController {
  constructor(@Inject('BOOK_SERVICE') private readonly bookService: ClientProxy) { }

  @Get()
  getBooks() {
      return this.bookService.send({cmd: 'Get-books'}, {})  
  }
}
