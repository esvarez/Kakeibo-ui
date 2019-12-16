import * as fromUser from '../actions/user.actions'
import { User, Account, Category } from 'src/app/shared/models';
import { MovementType } from 'src/app/shared/enums/movement-type';
import { State } from 'src/app/reducers'

export interface UserState {
   accountSelected: Account,
   accounts: Account[],
   categories: Category[],
   movementType: MovementType
}

export interface State extends State {
   userState: UserState
}

const initState: UserState = {   
   //user: { id: 1, user:'init'},
   accountSelected: null,
   accounts: null,
   categories: null,
   movementType: null
}

export function userReducer(state = initState, action: fromUser.userActions): UserState {
   switch(action.type) {                 
      case fromUser.SET_CATEGORIES:
         return {
            ... state,
            categories: [
               ... action.categories.map( category => {
                  return { ... category }
               })
            ]
         }
      case fromUser.SET_MOVEMENT_TYPE:
         return {
            ... state,
            movementType: action.movementType
         }
      case fromUser.CLOSE_SESION:
         return {
            accountSelected: null,
            accounts: null,
            categories: null,
            movementType: null
         }      
      default:
         return state
   }
}