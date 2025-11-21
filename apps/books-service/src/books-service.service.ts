import { Injectable } from '@nestjs/common';
import { CreateBookDto } from '@bestbook/shared';
import { Book } from './books-service.model';


@Injectable()
export class BooksServiceService {
   private books:Book[] = [];
   private id:number = 0
  
   create(dto:CreateBookDto) {
      const newbook = {
         id: this.id++,
         title: dto.title,
         author: dto.author,
         price: dto.price
      };

      this.books.push(newbook);

      return {
         messege: "New book added successfully",
         book: newbook,
         totalBooks: this.books.length
      }
   }
}
