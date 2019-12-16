import { User } from 'src/app/shared/models';
import * as fromAuth from './auth.actions'


export interface AuthState {   
   user: User
}

const initState: AuthState = {
   user: null
}

export function authReducer (state = initState, action: fromAuth.actions): AuthState { 
   switch(action.type) {
      case fromAuth.SET_USER:                
         return {
            ... state, 
            user: { ... action.user }            
         }
      default:
         return state
   }
}