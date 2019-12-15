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
  authState: fromAuth.State
  //userState: fromUser.UserState
}

export const reducers: ActionReducerMap<State> = {
  uiStete: fromUi.uiReducer,
  authState: fromAuth.authReducer
  //userState: fromUser.userReducer  
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];