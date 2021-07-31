import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Content } from 'src/app/models/content.model';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contents: Content[] = []

  @Output('contentSelected') contentSelected = new EventEmitter<Content>();
  
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getContentList()
      .subscribe(contentsPage => {
        console.log(contentsPage.content);

        this.contents = []
        contentsPage.content.forEach(c => this.contents.push(c))
      })
  }

  onSelected(content: Content) {
    this.contentSelected.emit(content);
    console.log('selected content: ' + content.name);
  }

}
