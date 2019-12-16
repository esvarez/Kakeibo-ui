import { Injectable } from '@angular/core';
import { Category } from 'src/app/shared/models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UrlConfig } from 'src/app/configs/UrlConfing';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpclient: HttpClient,
             private url: UrlConfig ) { 
    url = new UrlConfig()
  }

  public getCategoriesFromUserId(userId: Number): Observable<Category[]> {    
    return this.httpclient.get<Category[]>(`${this.url.host}${this.url.users}/${userId}${this.url.categories}`)
  }
}
