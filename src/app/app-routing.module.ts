import { NgModule } from "@angular/core"
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './modules/home/login/login.component'
import { RegisterComponent } from './modules/home/register/register.component'
import { DashboardComponent } from './modules/user/components/dashboard/dashboard.component'
import { userRoutes } from './modules/user/user.routes'

const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },
   { 
      path: '', 
      component: DashboardComponent,
      children: userRoutes      
   },
   { path: '**', redirectTo: '' }
]

@NgModule({
   imports: [
      RouterModule.forRoot( routes )
   ],
   exports: [
      RouterModule
   ]
})
export class AppRountingModule {}