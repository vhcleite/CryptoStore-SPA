import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/models/content.model';
import { PurchaseService } from 'src/app/services/purchase.service';
import { strict } from 'assert';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  @Input() content: Content;

  constructor(private purchaseService: PurchaseService, private userService: UserService) { }

  ngOnInit(): void {
  }

  onBuyClick() {
    this.purchaseService.submitPurchase(this.content)
    .subscribe( purchase => {
      console.log(JSON.stringify(purchase))
      alert('Informe o seguinte no pagamento: ' + purchase.id_compra)
      this.purchaseService.emitPurchaseDoneEvent(purchase)
    })
  }

  onDownloadClick() {
    window.open('http://localhost:8081/store/v1/content/' + String( this.content.id) + '/download?userId=' + this.userService.getUserLoggedIn(), "_blank");
  }
}
