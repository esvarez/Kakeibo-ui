import { Action } from '@ngrx/store'
import { Account } from 'src/app/shared/models'

export const LOAD_ACCOUNTS = '[ACCOUNTS] Load accounts'
export const LOAD_ACCOUNTS_FAIL = '[ACCOUNTS] Load accounts fail'
export const SET_CURRENT_ACCOUNT = '[ACCOUNTS] Set current account'
export const LOAD_ACCOUNTS_SUCCESS = '[ACCOUNTS] Load accounts success'

export class LoadAccountsAction implements Action {
   readonly type = LOAD_ACCOUNTS   

   constructor(public userId: Number) { }
}

export class LoadAccountsSuccessAction implements Action {
   readonly type = LOAD_ACCOUNTS_SUCCESS

   constructor(public accounts: Account[]) {}
}

export class SetCurrentAccountAction implements Action {
   readonly type = SET_CURRENT_ACCOUNT
   
   constructor(public account: Account) {}
}

export class LoadAccountsFailAction implements Action {
   readonly type = LOAD_ACCOUNTS_FAIL 

   constructor(public payload: any) {}
}

export type accountActions = LoadAccountsAction
                           | LoadAccountsSuccessAction
                           | LoadAccountsFailAction
                           | SetCurrentAccountAction