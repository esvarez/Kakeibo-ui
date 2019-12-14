import { Action } from '@ngrx/store'
import { User, Account } from 'src/app/shared/models'

export const SET_USER = '[User] Set User'
export const SET_ACCOUNT = '[USER] Set Account'
export const CLOSE_SESION = '[User] Closer Sesion'

export class SetUserAction implements Action {
   readonly type = SET_USER

   constructor(public user: User) {}
}

export class SetAccountAction implements Action {
   readonly type = SET_ACCOUNT
   
   constructor(public account: Account){}
}

export class CloseSesionAction implements Action {
   readonly type = CLOSE_SESION
}

export type actions = SetUserAction                    
                    | SetAccountAction
                    | CloseSesionAction