import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.model)
    var credentials = new User(this.model.username, this.model.password)

    this.authService.login(credentials);
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    console.log('logout')
    this.authService.logout();
  }

}
