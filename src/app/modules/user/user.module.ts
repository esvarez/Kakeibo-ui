import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectAccountComponent } from './components/select-account/select-account.component';
import { IndexUserComponent } from './pages/index-user/index-user.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router'
import { ChartsModule } from 'ng2-charts';
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component'

@NgModule({
  declarations: [
    DashboardComponent,
    IndexUserComponent, 
    SelectAccountComponent, ExpenseChartComponent, 
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ChartsModule
  ]
})
export class UserModule { }
