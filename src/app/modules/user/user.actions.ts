import { Action } from '@ngrx/store'
import { User } from 'src/app/shared/models'

export const SET_USER = '[User] Set User'
export const SET_ACCOUNT = '[USER] Set Account'

export class SetUserAction implements Action {
   readonly type = SET_USER

   constructor(public user: User) {}
}

export class SetAccountAction implements Action {
   readonly type = SET_ACCOUNT
}

export type actions = SetUserAction
                    | SetAccountAction