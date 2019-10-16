import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private api:ApiService,private auth:AuthService) { }

  user:any;

  ngOnInit() {
    this.api.getUID();
    this.getUser()
  }


  async getUser(){
    let uid = await this.api.getUID();
    this.user = this.auth.getUser()

  }

}
