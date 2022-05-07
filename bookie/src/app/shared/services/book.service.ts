import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Book} from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  collectionName = 'Books';

  constructor(private afs: AngularFirestore) { }

  // CRUD (Create, Read, Update, Delete)

  create(book: Book) {
    book.id = this.afs.createId();
    return this.afs.collection<Book>(this.collectionName).doc(book.id).set(book);

  }

  getAll() {
    return this.afs.collection<Book>(this.collectionName).valueChanges();
  }
  getById(id: string) {
    return this.afs.collection<Book>(this.collectionName).doc(id).valueChanges();
  }

  update(book: Book) {
    return this.afs.collection<Book>(this.collectionName).doc(book.id).set(book);
  }

  delete(id: string) {
    return this.afs.collection<Book>(this.collectionName).doc(id).delete();
  }
}
