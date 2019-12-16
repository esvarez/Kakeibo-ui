import { NgModule } from "@angular/core"
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './modules/auth/login/login.component'
import { RegisterComponent } from './modules/auth/register/register.component'
import { AuthGuardService } from './core/guards/auth-guard.service'

const routes: Routes = [   
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },   
   {
      path: '',
      loadChildren: './modules/user/user.module#UserModule',
      canLoad: [ AuthGuardService ],
      canActivate: [ AuthGuardService ]      
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