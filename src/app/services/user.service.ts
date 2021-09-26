import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient, private authService: AuthService) { }


    public createUser(newUser: User): Observable<User> {
        return this.http.post<User>('http://localhost:8082/store/v1/users',
            newUser)
    }

}