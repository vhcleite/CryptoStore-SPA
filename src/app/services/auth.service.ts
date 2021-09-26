import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private alertService: AlertifyService) { }


  login(credentials: User) {

    console.log('usuário logado: ' + JSON.stringify(credentials))

    this.http.post<User>('http://localhost:8082/store/v1/users/login',
      credentials)
      .subscribe(() => {
        
        this.setUserLoggedIn(credentials.id)
      
      }, error => {
        
        this.alertService.error(error.error.message ? error.error.message : error.message)
      
      })

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

  private setUserLoggedIn(user: string) {
    console.log('putting ' + user + ' in local storage')
    localStorage.setItem('user', user);
  }
}