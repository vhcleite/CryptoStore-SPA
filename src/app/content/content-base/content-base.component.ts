import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content.model';

@Component({
  selector: 'app-content-base',
  templateUrl: './content-base.component.html',
  styleUrls: ['./content-base.component.css']
})
export class ContentBaseComponent implements OnInit {

  selectedContent: Content

  constructor() { }

  ngOnInit(): void {
  }

  OnContentSelected(selectedContent: Content) {
    this.selectedContent = selectedContent;
    console.log(selectedContent);
  }

}
