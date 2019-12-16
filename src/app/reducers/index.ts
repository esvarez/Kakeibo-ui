import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromUi from '../shared/ui.reducer'
import * as fromAuth from '../modules/auth/auth.reducer'
import { environment } from '../../environments/environment';

export interface State {
  uiStete: fromUi.State
  authState: fromAuth.AuthState
  //userState: fromUser.UserState
}

export const reducers: ActionReducerMap<State> = {
  uiStete: fromUi.uiReducer,
  authState: fromAuth.authReducer
  //userState: fromUser.userReducer  
}

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function (state: State, action: any): State {
    console.log('state', state)
    console.log('action', action)
    return reducer(state, action)
  }
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];