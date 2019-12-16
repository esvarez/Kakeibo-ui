import { State } from '@ngrx/store'

import * as fromAccounts from '../actions/accounts.action'
import { Account } from 'src/app/shared/models'

export interface AccountsState {
   accounts: Account[],
   error: any
   isLoading: Boolean
   isLoaded: Boolean
}

const initState: AccountsState = {
   accounts: null,
   error: null,
   isLoading: null,
   isLoaded: null
}

export function accountsReducer(state = initState, action: fromAccounts.actions): AccountsState {
   switch(action.type) {
      case fromAccounts.LOAD_ACCOUNTS:
         return {
            ... state,
            isLoading: true            
         }
      case fromAccounts.LOAD_ACCOUNTS_SUCCESS:
         return {
            ... state,
            isLoading: false,
            isLoaded: true,
            accounts: { ... action.accounts }
         }
      case fromAccounts.LOAD_ACCOUNTS_FAIL:
            return {
               ... state,
               isLoading: false,
               isLoaded: false,
               error: { ... action.payload }
            }
      default:
         return state
   }
}