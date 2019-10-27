import { Injectable } from '@angular/core';
import { Observable, Subject, pipe } from 'rxjs';
import { scan, map, distinctUntilChanged,shareReplay } from 'rxjs/operators'
import {omit, get, isEqual } from 'lodash'




export class Action{
  constructor(public type:string, public payload?:any){}
}



@Injectable({
  providedIn: 'root'
})
export class StoreService {
  state: Observable<any>;

  actions: Subject<Action>  = new Subject();


  constructor() {
    this.state = this.actions.pipe(
    //   reducer(),
      shareReplay(1)

    );
   }

   dispatch(action:Action){
     this.actions.next(action)
   }
   select(path:string){
     return this.state.pipe()
   }
}


//custom rxjs

export const reducer = () =>{
  scan<any>((state, action)=>{ 
    let next;
    switch(action.type){
      case 'SET':
        next = action.payload;
        break;
      case 'UPDATE':
        next= {...state, ...action.payload}
        break;
      case 'DELETE':
        next = omit(state, action.payload);
        break;
        default:
          next = state;
          break;
    }
    return next;
  }, {})
}