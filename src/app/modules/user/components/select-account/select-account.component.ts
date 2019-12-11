import { Component, OnInit, OnDestroy } from '@angular/core';
import { Account } from 'src/app/shared/models/Account'
import { AccountService } from 'src/app/core/services/account.service';
import { State } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { MovementService } from 'src/app/core/services/movement.service';
import { SetAccountAction } from '../../user.actions';

@Component({
  selector: 'kui-select-account',
  templateUrl: './select-account.component.html',
  styleUrls: ['./select-account.component.scss']
})
export class SelectAccountComponent implements OnInit, OnDestroy {
  
  private userId: Number
  private accountSelected: Account
  private accounts: Account[]
  private userSubscription: Subscription
  private accuntSubscription: Subscription

  constructor(private accountService: AccountService,
              private movementService: MovementService,
              private store: Store<State>) { }

  ngOnInit() {    
    this.userSubscription = this.store.select('user')
      .subscribe(user => this.userId = user.user.id )
    this.accuntSubscription = this.accountService.getAccountsFromUserId(this.userId)
      .subscribe(res => this.accounts = res)
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe()
    this.accuntSubscription.unsubscribe()
  }

  onChange() {
    const account = new Account(this.accountSelected)    
    this.store.dispatch(new SetAccountAction(account))
  }

}
