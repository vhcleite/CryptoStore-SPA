import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Content } from 'src/app/models/content.model';
import { ContentService } from 'src/app/services/content.service';
import { PurchaseService } from 'src/app/services/purchase.service';
import { Purchase } from 'src/app/models/purchase.model';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contents: Content[] = []

  @Output('contentSelected') contentSelected = new EventEmitter<Content>();
  
  constructor(private contentService: ContentService, private purchaseService: PurchaseService) { }

  ngOnInit(): void {
    this.contentService.getContentList().subscribe(contentsPage => this.loadContents(contentsPage))
    this.purchaseService.purchaseDoneEvent.subscribe(purchase =>  this.onPurchaseDone(purchase))
  }

  private onPurchaseDone(purchase: Purchase) {
    this.contentService.getContentList()
    .subscribe(contentsPage => {
      
      this.loadContents(contentsPage)

      var filteredcontents = this.contents.filter(content => content.id == purchase.content_id)
      this.onSelected(filteredcontents[0])
    });    
  }

  private loadContents(contentsPage) {
    console.log('loadContents: ' + JSON.stringify(contentsPage.content));
    this.contents = [];
    contentsPage.content.forEach(c => this.contents.push(c));
  }

  onSelected(content: Content) {
    this.contentSelected.emit(content);
  }

}
