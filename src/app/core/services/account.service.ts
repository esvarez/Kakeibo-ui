import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Account } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiURL: string = 'http://localhost:8080/api'

  constructor(private httpClient: HttpClient) { }    
  public getAccountsFromUserId(userId: Number){    
    return this.httpClient.get<Account[]>(`${this.apiURL}/users/${userId}/accounts`);
  }
}
