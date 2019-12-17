import { Movement } from 'src/app/shared/models';
import * as fromMovements from '../actions/movements.action'

export interface MovementState {
   movemets: Movement[]
   dates: any
   period: String
   error: any
   isLoading: Boolean
   isLoaded: Boolean
}

const initState: MovementState = {
   movemets: null,
   period: null,
   dates: null,
   error: null,
   isLoaded: false,
   isLoading: false
}

export function movementReducer(state = initState, action: fromMovements.movementsAction): MovementState {
   switch(action.type) {
      case fromMovements.LOAD_MOVEMENTS:
         return {
            ... state,
            isLoading: true
         }
      case fromMovements.LOAD_MOVEMENTS_SUCCESS:
         return {
            ... state,
            isLoading: false,
            isLoaded: true,
            movemets: { ... action.movements }
         }
      case fromMovements.SET_PERIOD:
         return { 
            ...state,
            period: action.period
         }
      case fromMovements.SET_INTERVAL_DATE:
         return {
            ... state,
            dates: { ... action.dates }
         }
      default:
         return state
   }
}