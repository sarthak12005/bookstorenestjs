import { CreateBookDto, UpdateBookDto } from '@bestbook/shared';
import { Body, Controller, Get, Inject, Param, Patch, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('book')
export class BooksController {
    constructor(
        @Inject('BOOK_SERVICE') private readonly bookService:ClientProxy
    ) {}

    @Post()
    createBook(@Body() data: CreateBookDto) {
        return this.bookService.send({cmd: 'create_book'}, data);
    }

    @Get()
    getBooks() {
        return this.bookService.send({cmd: 'get_books'},{});
    }

    @Patch(':id')
    updateBook(
        @Param('id') id:string,
        @Body() data:UpdateBookDto
    ) {
        return this.bookService.send({cmd: 'update_book'}, data);
    }
}
