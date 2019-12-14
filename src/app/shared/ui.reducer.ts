import * as fromUi from './ui.acctions'

export interface State {
   isLoading: boolean
}

const initState: State = {
   isLoading: false
}

export function uiReducer(state = initState, action: fromUi.actions) {

   switch(action.type) {
      case fromUi.ACTIVAR_LOADING:
         return {
            isLoading: true
         }
      case fromUi.DESACTIVAR_LOADING: 
         return {
            isLoading: false
         }
      default:
         return state
   }
   
}