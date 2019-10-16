import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private api:ApiService, private auth:AuthService) { }

  user={
    name:'',
    email:'',
    phone:'**********',
    dob:'',
    bio:`lorem ipsum stuyislorem ipsum stuyis lorem ipsum stuyis lorem ipsum stuyis lorem ipsum stuyis lorem ipsum stuyis lorem ipsum stuyis  `,
    location:{}
  }
  ngOnInit() {
    this.auth.user.subscribe(data=>{
      console.log('data', data)
      this.user = data;
    })

  }

}
