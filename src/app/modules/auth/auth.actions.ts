import { Action } from '@ngrx/store'
import { User } from 'src/app/shared/models'

export const SET_USER = '[User] Set User'

export class SetUserAction implements Action {
   readonly type = SET_USER

   constructor(public user: User) {}
}

export type actions = SetUserAction