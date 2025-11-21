import { Controller} from '@nestjs/common';
import { BooksServiceService } from './books-service.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateBookDto } from '@bestbook/shared';

@Controller()
export class BooksServiceController {
  constructor(private readonly booksServiceService: BooksServiceService) {}

  @MessagePattern({cmd:'create_book'})
  createBook(@Payload() dto:CreateBookDto) {
    return this.booksServiceService.create(dto);
  }
}
