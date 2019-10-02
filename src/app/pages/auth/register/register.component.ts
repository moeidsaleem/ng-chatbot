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

  registerForm:FormGroup;
  constructor(private api:ApiService, private fb:FormBuilder,private router:Router) {
    this.createForm();

   }



   createForm() {
    this.registerForm = this.fb.group({
      firstName:['Moeid', Validators.required],
      lastName:['Saleem', Validators.required],
      email: ['moeidsaleem@gmail.com', Validators.email],
      password: ['moeid123', Validators.required],
      againPassword:['moeid123', Validators.required],
      agreed:[true]
    });
  }

 

  ngOnInit() {
    
  }

async register(){
if(this.registerForm.valid){
  if(this.registerForm.value.password !== this.registerForm.value.againPassword){
    console.log('passwor dodnot match');
    this.registerForm.get('password').reset();
    this.registerForm.get('againPassword').reset()
    return
  }
  console.log('d',this.registerForm.value);
  this.api.register(this.registerForm.value.email, this.registerForm.value.password)
  .then(data=>{
localStorage.setItem('uid', data.user.uid)
this.api.createUser(data.user.uid ,{
  uid:data.user.uid,
  name:this.registerForm.value.firstName + ' ' + this.registerForm.value.lastName,
  email: this.registerForm.value.email,
  password: this.registerForm.value.password
}).then(()=>{
  this.router.navigate(['/dashboard'])
}, err=>{console.log('err', err.message)})
  },err=>console.error('err', err.message))
}else{
  console.log('not-a-valid-form')
}
}


}
