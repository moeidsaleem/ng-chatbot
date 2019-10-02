import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private afs:AngularFirestore, private afAuth:AngularFireAuth) { }


  /* User  */
  async login(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async register(email, password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  async createUser(uid, data){
    return this.afs.doc('users/'+uid).set(data);
  }

  async updateUser(uid, data){
    return this.afs.doc('users/'+uid).update(data);
  }

  

}
