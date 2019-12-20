import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'

import * as accountsActions from '../actions'
import { map, switchMap, catchError } from 'rxjs/operators'
import { AccountService } from 'src/app/core/services/account.service'
import { of } from 'rxjs'

@Injectable()
export class AccountsEffects {

   constructor(private actions$: Actions,
               private accountService: AccountService) { }   

   @Effect()
   LoadAccounts$ = this.actions$
      .pipe(
         ofType(accountsActions.LOAD_ACCOUNTS),
         switchMap(id => {   
            console.log('Dispachhh')         
            return this.accountService.getAccountsFromUserId(id['userId'])
            .pipe(
               map( accounts => new accountsActions.LoadAccountsSuccessAction(accounts)),
               catchError( error => of(new accountsActions.LoadAccountsFailAction(error)))
            )
         })
      )
}