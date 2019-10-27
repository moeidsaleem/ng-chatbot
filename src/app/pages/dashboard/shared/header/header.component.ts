import { AuthService } from 'src/app/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

user;

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
  }

}
