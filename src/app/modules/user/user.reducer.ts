import * as fromUser from './user.actions'
import { User } from 'src/app/shared/models';

export interface UserState {
   user: User
}

const initState: UserState = {
   user: null
}

export function userReducer(state = initState, action: fromUser.actions): UserState {
   switch(action.type) {
      case fromUser.SET_USER:         
         return {
            user: { ... action.user }
         }
      default:
         return state
   }
}