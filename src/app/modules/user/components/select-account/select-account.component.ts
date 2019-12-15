import { Component, OnInit, OnDestroy } from '@angular/core';
import { Account } from 'src/app/shared/models/account'
import { AccountService } from 'src/app/core/services/account.service';
import { State } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MovementService } from 'src/app/core/services/movement.service';
import { SetCurrentAccountAction, SetAccountsAction } from '../../user.actions';

@Component({
  selector: 'kui-select-account',
  templateUrl: './select-account.component.html',
  styleUrls: ['./select-account.component.scss']
})
export class SelectAccountComponent implements OnInit, OnDestroy {
  
  private userId: Number
  private accountSelected: Account
  private accounts: Account[] = null
  private userSubscription: Subscription
  private accuntSubscription: Subscription

  constructor(private accountService: AccountService,
              private movementService: MovementService,
              private store: Store<State>) { }

  ngOnInit() {        
    this.userSubscription = this.store.select('userState')
      .subscribe(state => this.userId = state.user.id )
    this.accuntSubscription = this.store.select('userState')
      .subscribe(state => this.accounts = state.accounts )      
    if (this.accounts == null) {
      this.setAccounts()
    }
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
    this.accuntSubscription.unsubscribe()
  }

  onChange() {
    const account = new Account(this.accountSelected)     
    this.store.dispatch(new SetCurrentAccountAction(account))
  }

  private setAccounts() {    
    this.accountService.getAccountsFromUserId(this.userId)
      .subscribe(res => {
        console.log('Consulta Cuentas DB')                
        this.store.dispatch(new SetAccountsAction(res))        
      })      
  }

}
