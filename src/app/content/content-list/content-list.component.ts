import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/models/content.model';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  contents: Content[] = [
    new Content(1, 'Aula 1', 'fkuinhrgyu bgub rg ergre gerng uun iunnuvnufdnvndfvu nfd unuinfinvfd vnf', 0.01, 'ACTIVE', 'BOUGTH'),
    new Content(2, 'Aula 2', 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati', 200.2, 'ACTIVE', 'BOUGTH')
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
