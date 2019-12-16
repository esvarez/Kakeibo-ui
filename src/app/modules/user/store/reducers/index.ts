import { State } from 'src/app/reducers'
import { UserState } from './user.reducer';
import { AccountsState } from './accounts.reducer';

export interface UserModuleState extends State{
   userState: UserState,
   accountsState: AccountsState
}