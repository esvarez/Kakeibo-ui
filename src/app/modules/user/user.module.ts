import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { SelectAccountComponent } from './components/select-account/select-account.component';
import { IndexUserComponent } from './pages/index-user/index-user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RouterModule } from '@angular/router'
import { ChartsModule } from 'ng2-charts';
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component';
import { MovementsComponent } from './components/movements/movements.component';
import { MovementButtonsComponent } from './components/movement-buttons/movement-buttons.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovementFormDialogComponent } from './components/movement-form-dialog/movement-form-dialog.component';
import { AuthModule } from '../auth/auth.module';
import { UserRoutingModules } from './user-routing.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effectsArr } from './store/effects';
import { accountsReducer } from './store/reducers/accounts.reducer';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';


@NgModule({
  declarations: [
    DashboardComponent,
    IndexUserComponent, 
    SelectAccountComponent, 
    ExpenseChartComponent, 
    MovementsComponent, 
    MovementButtonsComponent,        
    ExpenseFormComponent,
    MovementFormDialogComponent,    
    MovementFormDialogComponent, ProfileCardComponent, UserMenuComponent,
  ],
  imports: [
    AuthModule,
    CommonModule,
    RouterModule,
    ChartsModule,    
    MaterialModule,
    UserRoutingModules,
    ReactiveFormsModule,
    StoreModule.forFeature('userState', userReducer),  
    StoreModule.forFeature('accountsState', accountsReducer),
    EffectsModule.forFeature(effectsArr)  
  ],
  entryComponents: [
    MovementFormDialogComponent
  ]
})
export class UserModule { }
