import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Account } from 'src/app/shared/models';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers/index'
import { ActivarLoadingAction } from 'src/app/shared/ui.acctions';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  apiURL: string = 'http://localhost:8080/api'

  constructor(private httpClient: HttpClient,
    private store: Store<State>) { }    
  public getAccountsFromUserId(userId: Number){  
    this.store.dispatch(new ActivarLoadingAction())  
    return this.httpClient.get<Account[]>(`${this.apiURL}/users/${userId}/accounts`);
  }
}
