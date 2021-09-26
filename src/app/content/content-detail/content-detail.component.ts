import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/models/content.model';
import { PurchaseService } from 'src/app/services/purchase.service';
import { AuthService } from 'src/app/services/auth.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  @Input() content: Content;

  constructor(
    private purchaseService: PurchaseService,
    private authService: AuthService,
    private alertService: AlertifyService
  ) { }

  ngOnInit(): void {
  }

  onBuyClick() {
    this.alertService.confirm(
      'Confirmação de compra',
      'Deseja realizar essa compra?',
      () => this.submitPurchase())
  }

  submitPurchase() {
    this.purchaseService.submitPurchase(this.content)
      .subscribe(purchase => {
        this.purchaseService.emitPurchaseDoneEvent(purchase)
        this.alertService.success('Compra submetida com sucesso')
      })
  }

  onDownloadClick() {
    window.open('http://localhost:8081/store/v1/content/' + String(this.content.id) + '/download?userId=' + this.authService.getUserLoggedIn(), "_blank");
  }

  getPaymentStatusString(paymentStatus: String) {
    switch (paymentStatus) {
      case "PAYMENT_MADE": {
        return "Pagamento efetuado";
      }
      case "PAYMENT_NOT_MADE": {
        return "Pagamento não efetuado";
      }
      case "PENDING_PAYMENT": {
        return "Pagamento pendente";
      }
      case "NOT_BOUGHT": {
        return "Não comprado";
      }
      default: {
        return paymentStatus;
      }
    }
  }
}
