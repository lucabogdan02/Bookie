import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Users';

  constructor(private afs: AngularFirestore) { }

  // CRUD (Create, Read, Update, Delete)

  create(user: User) {
    user.uid = this.afs.createId();
    return this.afs.collection<User>(this.collectionName).doc(user.uid).set(user);

  }

  getAll() {
    return this.afs.collection<User>(this.collectionName).valueChanges();
  }

  getById(uid: string) {
    return this.afs.collection<User>(this.collectionName).doc(uid).valueChanges();
  }

  update(user: User) {
    return this.afs.collection<User>(this.collectionName).doc(user.uid).set(user);
  }

  delete(uid: string) {
    return this.afs.collection<User>(this.collectionName).doc(uid).delete();
  }
}
