import * as fromUser from './user.actions'
import { User } from 'src/app/shared/models';

export interface UserState {
   user: User
   account: String
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
      default:
         return state
   }
}