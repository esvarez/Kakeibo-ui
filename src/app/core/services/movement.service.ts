import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movement } from 'src/app/shared/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovementService {

  apiURL: string = 'http://localhost:8080/api'

  constructor(private httpClient: HttpClient) { }

  public getMovementsFromAccountId(accountId: Number): Observable<Movement[]> {
    return this.httpClient.get<Movement[]>(`${this.apiURL}/accounts/${accountId}/movements`)    
  }


}
