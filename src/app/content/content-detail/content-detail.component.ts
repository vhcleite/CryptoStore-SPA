import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/models/content.model';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  @Input() content: Content;

  constructor(private purchaseService: PurchaseService) { }

  ngOnInit(): void {
  }

  onBuyClick() {
    this.purchaseService.submitPurchase(this.content)
    .subscribe( purchase => {
      console.log(JSON.stringify(purchase));
    })
  }

}
