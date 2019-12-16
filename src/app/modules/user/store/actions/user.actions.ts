import { Action } from '@ngrx/store'
import { User, Account, Category } from 'src/app/shared/models'
import { MovementType } from 'src/app/shared/enums/movement-type'

export const CLOSE_SESION = '[User] Closer Sesion'
export const SET_CATEGORIES = '[User] Set Categories'
export const SET_MOVEMENT_TYPE = '[USER] Ser Movemement Type'

export class CloseSesionAction implements Action {
   readonly type = CLOSE_SESION
}

export class SetCategoriesAction implements Action {
   readonly type = SET_CATEGORIES

   constructor(public categories: Category[]) {}
}

export class SetMovementTypeAction implements Action {
   readonly type = SET_MOVEMENT_TYPE

   constructor(public movementType: MovementType) {}
}

export type userActions = CloseSesionAction
                        | SetCategoriesAction
                        | SetMovementTypeAction
