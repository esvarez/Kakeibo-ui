import { State } from '@ngrx/store'

import * as fromAccounts from '../actions/accounts.action'
import { Account } from 'src/app/shared/models'

export interface AccountsState {
   accounts: Account[]
   accountSelected: Account
   error: any
   isLoading: Boolean
   isLoaded: Boolean
}

const initState: AccountsState = {
   accounts: null,
   accountSelected: null,
   error: null,
   isLoading: null,
   isLoaded: null
}

export function accountsReducer(state = initState, action: fromAccounts.accountActions): AccountsState {
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
            accounts: [
               ... action.accounts.map(account => {
                  return { ... account }
               })
            ]  
         }
      case fromAccounts.LOAD_ACCOUNTS_FAIL:
            return {
               ... state,
               isLoading: false,
               isLoaded: false,
               error: { ... action.payload }
            }
      case fromAccounts.SET_CURRENT_ACCOUNT:
         return {
            ... state,
            accountSelected: { ... action.account }
         }
      default:
         return state
   }
}