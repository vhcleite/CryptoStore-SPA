import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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
    this.authService.login(this.model);
    this.router.navigate(["/contents"])
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    console.log('logout')
    this.authService.logout();
  }

}
