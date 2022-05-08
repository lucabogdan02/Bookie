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
},  {
  id: "",
  title: "Ez is cím",
  author: "Ezt is írta valaki",
  price: 1111,
  imageUrl: "book3.png"
}, {
  id: "",
  title: "Szivárvány könyv",
  author: "Dúró Dóra",
  price: 666,
  imageUrl: "book4.png"
}, {
  id: "",
  title: "Prog 1 kettes",
  author: "nem Alexin",
  price: 3333,
  imageUrl: "book5.png"
}, {
  id: "",
  title: "Élet a diploma után",
  author: "Még van pár éved nyugi",
  price: 1234,
  imageUrl: "book6.png"
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
