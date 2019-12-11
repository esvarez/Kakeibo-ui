import * as fromUser from './user.actions'
import { User, Account } from 'src/app/shared/models';

export interface UserState {
   user: User
   account: Account
}

const initState: UserState = {
   user: null,
   account: null
}

export function userReducer(state = initState, action: fromUser.actions): UserState {
   switch(action.type) {
      
      case fromUser.SET_USER:                
         return {
            user: { ... action.user },
            account: state.account
         }
      case fromUser.SET_ACCOUNT:
         return {
            user: state.user,
            account: { ... action.account } 
         }
      default:
         return state
   }
}