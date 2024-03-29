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
  


  /* GOALS */
  getGoals(uid){
    return this.afs.collection('goals', ref=>ref.where('uid', '==',uid)).valueChanges();
  }

  getGoal(goalId){
    return this.afs.doc('goals/'+goalId).valueChanges();
  }

  addGoal(goal){
    return this.afs.collection('goals').add(goal);
  }

  deleteGoal(goalId){
    return this.afs.doc('goals/'+goalId).delete()
  }
  updateGoal(goalId, goal){
    return this.afs.doc('goals/'+goalId).update(goal);
  }



}
