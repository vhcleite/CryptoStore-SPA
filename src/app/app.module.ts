import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ContentListComponent } from './content/content-list/content-list.component';
import { ContentDetailComponent } from './content/content-detail/content-detail.component';
import { ContentBaseComponent } from './content/content-base/content-base.component';
import { ContentItemComponent } from './content/content-item/content-item.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
