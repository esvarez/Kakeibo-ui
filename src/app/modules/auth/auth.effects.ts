import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from '@ngrx/effects';

import * as authActions from './auth.actions'
import { switchMap, map, catchError } from 'rxjs/operators';
import { LoadAccountsAction, LOAD_ACCOUNTS, LoadAccountsSuccessAction, LoadAccountsFailAction } from '../user/store/actions';
import { of } from 'rxjs';


@Injectable()
export class AuthEffects {

   constructor(private actions$: Actions) { }

   @Effect()
   SetUser = this.actions$
      .pipe(
         ofType(authActions.SET_USER),         
         switchMap(() => {
            return of (new LoadAccountsAction(1))               
         })
      )

}