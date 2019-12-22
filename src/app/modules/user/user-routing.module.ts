import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { userRoutes } from './user.routes';
import { AuthGuardService } from 'src/app/core/guards/auth-guard.service';

const routes: Routes = [
   { 
      path: '', 
      component: DashboardComponent,
      children: userRoutes,
      // canActivate: [AuthGuardService]
   }
]

@NgModule({
  imports: [
     RouterModule.forChild( routes )
  ],
  exports: [
     RouterModule
  ]
})
export class UserRoutingModules {}