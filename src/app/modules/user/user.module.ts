import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { SelectAccountComponent } from './components/select-account/select-account.component';
import { IndexUserComponent } from './pages/index-user/index-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
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
<<<<<<< HEAD
import { userReducer } from './user.reducer';
=======
import { userReducer } from './store/reducers/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effectsArr } from './store/effects';
import { accountsReducer } from './store/reducers/accounts.reducer';
>>>>>>> master


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
    MovementFormDialogComponent,
  ],
  imports: [
    AuthModule,
    CommonModule,
    RouterModule,
    ChartsModule,    
    MaterialModule,
    UserRoutingModules,
    ReactiveFormsModule,
<<<<<<< HEAD
    StoreModule.forFeature('userState', userReducer)
=======
    StoreModule.forFeature('userState', userReducer),  
    StoreModule.forFeature('accountsState', accountsReducer),
    EffectsModule.forFeature(effectsArr)  
>>>>>>> master
  ],
  entryComponents: [
    MovementFormDialogComponent
  ]
})
export class UserModule { }
