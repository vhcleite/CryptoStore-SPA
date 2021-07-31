import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { Purchase } from '../models/purchase.model';
import { Content } from '../models/content.model';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PurchaseService {
    
    constructor(private http: HttpClient, private userService: UserService) { }


    purchaseDoneEvent = new EventEmitter<Purchase>()

    public submitPurchase(content: Content): Observable<Purchase>{
        var newPurchase: Purchase = new Purchase(content.id, content.price)
        console.log("new purchase: " + JSON.stringify(newPurchase))
        return this.http.post<Purchase>('http://localhost:8083/store/v1/users/' + this.userService.getUserLoggedIn() + '/purchase', 
        newPurchase)
    }

    public emitPurchaseDoneEvent(purchase: Purchase) {
        console.log('Emitindo evento de compra')
        this.purchaseDoneEvent.emit(purchase)
    }

}