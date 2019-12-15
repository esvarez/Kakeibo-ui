import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromUi from '../shared/ui.reducer'
import * as fromUser from '../modules/user/user.reducer'
import { environment } from '../../environments/environment';

export interface State {
  uiStete: fromUi.State
  userState: fromUser.UserState
}

export const reducers: ActionReducerMap<State> = {
  uiStete: fromUi.uiReducer,
  userState: fromUser.userReducer  
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];