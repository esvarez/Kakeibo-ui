import { Action } from '@ngrx/store'
import { Account } from 'src/app/shared/models'

export const LOAD_ACCOUNTS = '[ACCOUNTS] Load accounts'
export const LOAD_ACCOUNTS_SUCCESS = '[ACCOUNTS] Load accounts success'
export const LOAD_ACCOUNTS_FAIL = '[ACCOUNTS] Load accounts fail'
export const SET_CURRENT_ACCOUNT = '[ACCOUNTS] Set current account'

export class LoadAccounts implements Action {
   readonly type = LOAD_ACCOUNTS   
}

export class LoadAccountsSuccess implements Action {
   readonly type = LOAD_ACCOUNTS_SUCCESS

   constructor(public accounts: Account[]) {}
}

export class LoadAccountsFail implements Action {
   readonly type = LOAD_ACCOUNTS_FAIL 

   constructor(public payload: any) {}
}

export type actions = LoadAccounts
                    | LoadAccountsSuccess
                    | LoadAccountsFail