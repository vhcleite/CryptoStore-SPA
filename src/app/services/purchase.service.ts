import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Purchase } from '../models/purchase.model';
import { Content } from '../models/content.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PurchaseService {
    
    constructor(private http: HttpClient, private userService: UserService) { }

    public submitPurchase(content: Content): Observable<Object>{
        var newPurchase: Purchase = new Purchase(content.id, content.price)
        console.log(newPurchase.content_id)
        console.log(newPurchase.value)
        console.log("new purchase: " + JSON.stringify(newPurchase))
        return this.http.post('http://localhost:8083/store/v1/users/' + this.userService.getUserLoggedIn() + '/purchase', 
        newPurchase)
    }

}