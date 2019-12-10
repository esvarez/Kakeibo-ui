import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/shared/models/Account'
import { AccountService } from 'src/app/core/services/account.service';
import { State } from 'src/app/reducers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'kui-select-account',
  templateUrl: './select-account.component.html',
  styleUrls: ['./select-account.component.scss']
})
export class SelectAccountComponent implements OnInit {

  private userId: Number = 1;
  accounts: Account[]

  constructor(private accountService: AccountService,
              private store: Store<State>) { }

  ngOnInit() {    
    this.store.select('user')
      .subscribe(user => {
        console.log(user)
      })
    this.accountService.getAccountsFromUserId(this.userId)
      .subscribe(res => this.accounts = res)
  }
/*
  accounts: Account[] = [
    { id: 1, name: "Cuenta de debito", amount: 2500, description: "Descripcion" },    
    { id: 2, name: 'Cuenta credito', amount: 3000 },
    { id: 3, name: 'Efectivo', amount: 2000 },
  ]
*/
}
