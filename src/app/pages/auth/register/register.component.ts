import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  loginForm:FormGroup;
  constructor(private api:ApiService, private fb:FormBuilder,private router:Router) {
    this.createForm();

   }



   createForm() {
    this.loginForm = this.fb.group({
      email: ['moeidsaleem@gmail.com', Validators.email],
      password: ['moeid123']
    });
  }

 

  ngOnInit() {
    
  }

async login(){
if(this.loginForm.valid){
  console.log('d',this.loginForm.value);
  this.api.login(this.loginForm.value.email, this.loginForm.value.password)
  .then(data=>{
localStorage.setItem('uid', data.user.uid)
this.router.navigate(['/dashboard'])
  },err=>console.error('err', err.message))
}else{
  console.log('not-a-valid-form')
}
}


}
