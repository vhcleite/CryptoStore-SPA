import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/models/content.model';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
  
  @Input() content: Content;
  
  constructor() { }

  ngOnInit(): void {
  }

}
