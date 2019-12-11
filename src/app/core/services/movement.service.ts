import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  apiURL: string = 'http://localhost:8080/api'

  constructor(private httpClient: HttpClient) { }

  public getMovementsFromAccountId(accountId: Number) {
    return this.httpClient.get(`${this.apiURL}/accounts/${accountId}/movements`)
  }
}
