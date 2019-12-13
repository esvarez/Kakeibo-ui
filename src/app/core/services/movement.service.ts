import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movement } from 'src/app/shared/models';
import { Observable } from 'rxjs';
import { UrlConfig } from 'src/app/configs/UrlConfing';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  constructor(private httpClient: HttpClient,
              private url: UrlConfig) {
    url = new UrlConfig()
  }

  public getMovementsFromAccountId(accountId: Number): Observable<Movement[]> {
    return this.httpClient.get<Movement[]>(`${this.url.host}${this.url.accounts}/${accountId}${this.url.movements}`)
  }

  public postMovement(accountId: Number, movement: any) {
    const body = JSON.stringify(movement)
    return this.httpClient.post(`${this.url.host}${this.url.accounts}/${accountId}${this.url.movements}`, body)
  }

}
