import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/models/content.model';
import { PurchaseService } from 'src/app/services/purchase.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  @Input() content: Content;

  constructor(private purchaseService: PurchaseService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onBuyClick() {
    this.purchaseService.submitPurchase(this.content)
    .subscribe( purchase => {
      console.log(JSON.stringify(purchase))
      alert('Informe o seguinte identificado no pagamento: ' + purchase.id_compra + ' para a conta: 0x9c6960cc8c2034c7295ee0407352366df45cbffa')
      this.purchaseService.emitPurchaseDoneEvent(purchase)
    })
  }

  onDownloadClick() {
    window.open('http://localhost:8081/store/v1/content/' + String( this.content.id) + '/download?userId=' + this.authService.getUserLoggedIn(), "_blank");
  }
}
