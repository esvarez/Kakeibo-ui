import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from '@ngrx/effects';

import * as authActions from './auth.actions'
import { switchMap, map} from 'rxjs/operators';
import { LoadAccountsAction } from '../user/store/actions';
import { Store } from '@ngrx/store';
import { UserModuleState } from '../user/store/reducers';
import { ActivarLoadingAction } from 'src/app/shared/ui.acctions';
import { of } from 'rxjs';


@Injectable()
export class AuthEffects {

   constructor(private actions$: Actions,
               private store: Store<UserModuleState>) { }

   @Effect()
   SetUser = this.actions$
      .pipe(
         ofType(authActions.SET_USER), 
         map(action => action['user']),         
         switchMap(user => {
            this.store.dispatch(new ActivarLoadingAction())
            setTimeout(() => {
               this.store.dispatch(new LoadAccountsAction(user['id']))               
            }, 1000);
            return of()
         })
      )

}