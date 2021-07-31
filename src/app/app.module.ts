import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ContentListComponent } from './content/content-list/content-list.component';
import { ContentDetailComponent } from './content/content-detail/content-detail.component';
import { ContentBaseComponent } from './content/content-base/content-base.component';
import { ContentItemComponent } from './content/content-item/content-item.component';
import { ContentService } from './services/content.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentListComponent,
    ContentDetailComponent,
    ContentBaseComponent,
    ContentItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
