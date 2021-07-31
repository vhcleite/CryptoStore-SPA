import { Content } from '../models/content.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContentPage } from '../models/content.page';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ContentService {

    constructor(private http: HttpClient) {}

    public getContentList(): Observable<ContentPage> {
        return this.http.get<ContentPage>('http://localhost:8081/store/v1/content?userId=vleite')
    }


}