import { State } from 'src/app/reducers'
import { UserState } from './user.reducer';
import { AccountsState } from './accounts.reducer';
import { MovementState } from './movements.reducer'

export interface UserModuleState extends State{
   userState: UserState,
   accountsState: AccountsState,
   movementState: MovementState
}

export { userReducer } from './user.reducer';
export { accountsReducer } from './accounts.reducer';
export { movementReducer } from './movements.reducer'