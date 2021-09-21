import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(model: any) {
    this.setUserLoggedIn(model.username)
  }

  loggedIn() {
    return this.getUserLoggedIn() != undefined;
  }

  logout() {
    localStorage.removeItem('user');
  }

  public getUserLoggedIn(): string {
    return localStorage.getItem('user')
  }

  public setUserLoggedIn(user: string) {
    localStorage.setItem('user', user);
  }
}