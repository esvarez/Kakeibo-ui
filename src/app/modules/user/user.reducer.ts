import * as fromUser from './user.actions'
import { User, Account, Category } from 'src/app/shared/models';
import { MovementType } from 'src/app/shared/enums/movement-type';

export interface UserState {
   user: User
   accountSelected: Account,
   accounts: Account[],
   categories: Category[],
   movementType: MovementType
}

const initState: UserState = {
   user: null,
   //user: { id: 1, user:'init'},
   accountSelected: null,
   accounts: null,
   categories: null,
   movementType: null
}

export function userReducer(state = initState, action: fromUser.actions): UserState {
   switch(action.type) {
      
      case fromUser.SET_USER:                
         return {
            ... state, 
            user: { ... action.user }            
         }
      case fromUser.SET_CURRENT_ACCOUNT:
         return {
            ... state, 
            accountSelected: { ... action.account }            
         }
      case fromUser.SET_ACCOUNTS:
         return {            
            ... state , 
            accounts: [
               ... action.accounts.map( account => {
                  return { ... account }
               })
            ] 
         }
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
            user: null,
            accountSelected: null,
            accounts: null,
            categories: null,
            movementType: null
         }
      
      default:
         return state
   }
}