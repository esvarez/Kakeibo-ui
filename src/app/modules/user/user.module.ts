import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectAccountComponent } from './components/select-account/select-account.component';
import { IndexUserComponent } from './pages/index-user/index-user.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router'
import { ChartsModule } from 'ng2-charts';
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component';
import { MovementsComponent } from './components/movements/movements.component';
import { MovementButtonsComponent } from './components/movement-buttons/movement-buttons.component';
import { RegisterMovementsComponent } from './pages/register-movements/register-movements.component';
import { RegisterMovementFormsComponent } from './components/register-movement-forms/register-movement-forms.component';
import { IncomeFormComponent } from './components/income-form/income-form.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';
import { TransferFormComponent } from './components/transfer-form/transfer-form.component'

@NgModule({
  declarations: [
    DashboardComponent,
    IndexUserComponent, 
    SelectAccountComponent, 
    ExpenseChartComponent, 
    MovementsComponent, 
    MovementButtonsComponent,    
    RegisterMovementsComponent,
    RegisterMovementFormsComponent,
    IncomeFormComponent,
    ExpenseFormComponent,
    TransferFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ChartsModule
  ]
})
export class UserModule { }
