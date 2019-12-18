import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router'
import { ChartsModule } from 'ng2-charts';
import { AuthModule } from '../auth/auth.module';
import { UserRoutingModules } from './user-routing.module';

// NgRx
import { StoreModule } from '@ngrx/store';
import { userReducer, accountsReducer, movementReducer } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effectsArr } from './store/effects';

// Components
import { SelectAccountComponent } from './components/select-account/select-account.component';
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component';
import { MovementsComponent } from './pages/movements/movements.component';
import { MovementButtonsComponent } from './components/movement-buttons/movement-buttons.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovementFormDialogComponent } from './components/movement-form-dialog/movement-form-dialog.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { FilterMovementsComponent } from './components/filter-movements/filter-movements.component';
import { LastMovementsComponent } from './components/last-movements/last-movements.component';
import { MovementListComponent } from './components/movement-list/movement-list.component';

//Pages
import { IndexUserComponent } from './pages/index-user/index-user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { BudgetsComponent } from './pages/budgets/budgets.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AccountListComponent } from './components/account-list/account-list.component';
import { BudgetListComponent } from './components/budget-list/budget-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';



@NgModule({
  declarations: [
    DashboardComponent,
    IndexUserComponent, 
    SelectAccountComponent, 
    ExpenseChartComponent, 
    MovementsComponent, 
    MovementButtonsComponent,        
    BudgetsComponent, 
    AccountsComponent, 
    UserMenuComponent, 
    ProfileCardComponent, 
    CategoriesComponent, 
    MovementListComponent,
    LastMovementsComponent, 
    FilterMovementsComponent, 
    MovementFormDialogComponent,    
    MovementFormDialogComponent, AccountListComponent, BudgetListComponent, CategoriesListComponent, 
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
    StoreModule.forFeature('movementState', movementReducer),
    EffectsModule.forFeature(effectsArr)  
  ],
  entryComponents: [
    MovementFormDialogComponent
  ]
})
export class UserModule { }
