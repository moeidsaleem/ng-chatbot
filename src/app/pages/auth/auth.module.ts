import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    LoginModule,
    RegisterModule
  ]
})
export class AuthModule { }
