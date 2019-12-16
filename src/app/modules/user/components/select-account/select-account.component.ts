import { Component, OnInit, OnDestroy } from '@angular/core';
import { Account } from 'src/app/shared/models/account'
import { AccountService } from 'src/app/core/services/account.service';
import { State } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MovementService } from 'src/app/core/services/movement.service';
<<<<<<< HEAD
import { SetCurrentAccountAction, SetAccountsAction } from '../../user.actions';
import { take } from 'rxjs/operators';
import * as fromUser from 'src/app/modules/user/user.reducer'
=======
import { SetCurrentAccountAction, LoadAccountsAction } from '../../store/actions';
import { take } from 'rxjs/operators';
import * as fromUser from 'src/app/modules/user/store/reducers/user.reducer'
import { UserModuleState } from '../../store/reducers';
>>>>>>> master

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

<<<<<<< HEAD
  constructor(private accountService: AccountService,
              private movementService: MovementService,
              private store: Store<fromUser.State>) { }
=======
  constructor(private store: Store<UserModuleState>) { }
>>>>>>> master

  ngOnInit() {        
    this.userSubscription = this.store.select('authState')
      .subscribe(state => this.userId = state.user.id )
<<<<<<< HEAD
    this.accuntSubscription = this.store.select('userState')
=======
    this.accuntSubscription = this.store.select('accountsState')
>>>>>>> master
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

<<<<<<< HEAD
  private setAccounts() {        
    this.accountService.getAccountsFromUserId(this.userId)
      .pipe( take(1) )
      .subscribe(res => {
        res.sort( (a, b) => (a.name > b.name)? 1 : -1 )
        console.log('Consulta Cuentas DB')                
        this.store.dispatch(new SetAccountsAction(res))        
      })
=======
  private setAccounts() {    
    this.store.dispatch(new LoadAccountsAction())   
>>>>>>> master
  }

}
