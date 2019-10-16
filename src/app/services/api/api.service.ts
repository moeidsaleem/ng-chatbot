import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private afs:AngularFirestore, private afAuth:AngularFireAuth) {}

  async createUser(uid, data){
    return this.afs.doc('users/'+uid).set(data);
  }

  async updateUser(uid, data){
    return this.afs.doc('users/'+uid).update(data);
  }

  async getUser(uid){
    return this.afs.doc('users/'+uid).valueChanges();
  }

  async getUID(){
    return from(localStorage.getItem('uid'));
  }
  

}
