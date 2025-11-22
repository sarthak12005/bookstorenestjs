import { CreateBookDto } from '@bestbook/shared';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('books')
export class BooksController {
    constructor(
        @Inject('BOOK_SERVICE') private readonly bookService:ClientProxy
    ) {}

    @Post()
    createBook(@Body() data: CreateBookDto) {
        return this.bookService.send({cmd: 'create_book'}, data);
    }
}
