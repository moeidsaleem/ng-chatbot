import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api:ApiService) { }

  user:any;

  ngOnInit() {
    this.getUser()
  }


  async getUser(){
    let user= await this.api.getUser(localStorage.getItem('uid'));
    user.subscribe(resp=>{
      console.log('response', resp);
      this.user = resp;
    });

  }

}
