import { Routes } from '@angular/router'
import { LoginComponent } from 'src/app/modules/home/login/login.component'
import { IndexUserComponent } from './pages/index-user/index-user.component'
import { RegisterMovementsComponent } from './pages/register-movements/register-movements.component'

export const userRoutes: Routes = [
   { path: '', component: IndexUserComponent },
   { path: 'register-movement', component: RegisterMovementsComponent },
   { path: 'ingresos', component: LoginComponent },
   { path: 'datalle', component: LoginComponent }
]