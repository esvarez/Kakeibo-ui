import { Injectable } from '@angular/core'
import { Actions, Effect, ofType } from '@ngrx/effects'

import * as accountsActions from '../actions'
import { map, switchMap, catchError, tap } from 'rxjs/operators'
import { AccountService } from 'src/app/core/services/account.service'
import { of } from 'rxjs'
import { LoadMovementsAction, movementsAction } from '../actions'
import { Store } from '@ngrx/store'

@Injectable()
export class AccountsEffects {

   constructor(private actions$: Actions,
               private accountService: AccountService,
               private store: Store<movementsAction>) { }   

   @Effect()
   LoadAccounts$ = this.actions$
      .pipe(
         ofType(accountsActions.LOAD_ACCOUNTS),
         switchMap(id => {               
            return this.accountService.getAccountsFromUserId(id['userId'])
            .pipe(
               map( accounts => new accountsActions.LoadAccountsSuccessAction(accounts)),
               catchError( error => of(new accountsActions.LoadAccountsFailAction(error)))
            )
         })
      )

   @Effect()
   SetCurrentAccount$ = this.actions$
         .pipe(
            ofType(accountsActions.SET_CURRENT_ACCOUNT),
            map(action => action['account']),
            switchMap(account =>{               
               this.store.dispatch(new LoadMovementsAction(account['id']))
               return of ()
            })
         )
}