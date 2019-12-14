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
  ui: fromUi.State
  user: fromUser.UserState
}

export const reducers: ActionReducerMap<State> = {
  ui: fromUi.uiReducer,
  user: fromUser.userReducer  
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];