import { Routes } from '@angular/router'
import { LoginComponent } from 'src/app/modules/home/login/login.component'
import { IndexUserComponent } from './pages/index-user/index-user.component'

export const userRoutes: Routes = [
   { path: '', component: IndexUserComponent },
   { path: 'ingresos', component: LoginComponent },
   { path: 'datalle', component: LoginComponent }
]