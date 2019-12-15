import { Action } from '@ngrx/store'
import { User, Account, Category } from 'src/app/shared/models'
import { MovementType } from 'src/app/shared/enums/movement-type'

export const SET_USER = '[User] Set User'
export const SET_ACCOUNTS = '[User] Set Accounts'
export const CLOSE_SESION = '[User] Closer Sesion'
export const SET_CATEGORIES = '[User] Set Categories'
export const SET_CURRENT_ACCOUNT = '[USER] Set Account'
export const SET_MOVEMENT_TYPE = '[USER] Ser Movemement Type'

export class SetUserAction implements Action {
   readonly type = SET_USER

   constructor(public user: User) {}
}

export class SetCurrentAccountAction implements Action {
   readonly type = SET_CURRENT_ACCOUNT
   
   constructor(public account: Account) {}
}

export class CloseSesionAction implements Action {
   readonly type = CLOSE_SESION
}

export class SetAccountsAction implements Action {
   readonly type = SET_ACCOUNTS

   constructor(public accounts: Account[]) {}
}

export class SetCategoriesAction implements Action {
   readonly type = SET_CATEGORIES

   constructor(public categories: Category[]) {}
}

export class SetMovementTypeAction implements Action {
   readonly type = SET_MOVEMENT_TYPE

   constructor(public movementType: MovementType) {}
}

export type actions = SetUserAction                    
                    | SetCurrentAccountAction
                    | CloseSesionAction
                    | SetAccountsAction
                    | SetCategoriesAction
                    | SetMovementTypeAction
