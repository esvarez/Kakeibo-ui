import { Action } from '@ngrx/store'
import { Movement } from 'src/app/shared/models'

export const LOAD_MOVEMENTS = '[MOVEMENTS] Load movements'
export const LOAD_MOVEMENTS_SUCCESS = '[MOVEMENTS] Load movements success'
export const LOAD_MOVEMENTS_FAIL = '[MOVEMENTS] Load movements fail'
export const SET_INTERVAL_DATE = '[MOVEMENTS] Set interval date'
export const SET_PERIOD = '[MOVEMENTS] Set period'

export class LoadMovementsAction implements Action {
   readonly type = LOAD_MOVEMENTS
}

export class LoadMovementsSuccessAction implements Action {
   readonly type = LOAD_MOVEMENTS_SUCCESS

   constructor(public movements: Movement[]) { }
}

export class LoadMovementsFailAction implements Action {
   readonly type = LOAD_MOVEMENTS_FAIL

   constructor(public payload: any) { }
}

export class SetIntervalDateAction implements Action {
   readonly type = SET_INTERVAL_DATE

   constructor(public dates: any) { }
}

export class SetPeriodAction implements Action {
   readonly type = SET_PERIOD

   constructor(public period: any) { }
}

export type movementsAction = LoadMovementsAction                            
                            | LoadMovementsFailAction
                            | LoadMovementsSuccessAction
                            | SetIntervalDateAction
                            | SetPeriodAction