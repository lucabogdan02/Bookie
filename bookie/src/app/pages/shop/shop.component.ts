import { Component, OnInit } from '@angular/core';
import {Book} from "../../shared/models/book";
import {BookService} from "../../shared/services/book.service";

const defaultBooks: Book[] =[{
  id: "",
  title: "Cím",
  author: "Író",
  price: 6942,
  imageUrl: "book1.png"
}, {
  id: "",
  title: "Címecske",
  author: "Íróka",
  price: 6942,
  imageUrl: "book2.png"
}]

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})


export class ShopComponent implements OnInit {

  books: Book[] = [];

  constructor(private bookService: BookService) {
    bookService.getAll().subscribe((books) => {
      this.books = books;

      if (this.books.length === 0) {
        for (const book of defaultBooks) {
          bookService.create(book);
        }
      }
    });

  }

  ngOnInit(): void {
  }

  deleteBook(id:string){
    this.bookService.delete(id);
  }

}
