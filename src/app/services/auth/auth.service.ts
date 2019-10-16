import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from, of } from 'rxjs';
import {User} from '../../interfaces/user/user';
import { switchMap, first, map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth:AngularFireAuth, private afs:AngularFirestore) { 
    this.user = this.afAuth.authState.pipe(
      switchMap(u=>{
        if(u){
          return this.afs.doc<any>('users/'+u.uid).valueChanges()
        }else{
          return of(null)
        }
      })
    )
  }
  user:Observable<any>;

  getUser(){
    return this.user.pipe(first()).toPromise();
  }

  /* User  */
  async login(email, password){
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  async register(email, password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  }

  async signOut(){
    return this.afAuth.auth.signOut();
  }

}
