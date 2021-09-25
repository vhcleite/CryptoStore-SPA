import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { ContentListComponent } from './content/content-list/content-list.component';
import { ContentDetailComponent } from './content/content-detail/content-detail.component';
import { ContentBaseComponent } from './content/content-base/content-base.component';
import { ContentItemComponent } from './content/content-item/content-item.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contents', component: ContentBaseComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentListComponent,
    ContentDetailComponent,
    ContentBaseComponent,
    ContentItemComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
