import { Routes } from '@angular/router'
import { IndexUserComponent } from './pages/index-user/index-user.component'
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component'
import { ProfileCardComponent } from './components/profile-card/profile-card.component'
import { MovementsComponent } from './pages/movements/movements.component'
import { AccountsComponent } from './pages/accounts/accounts.component'
import { BudgetsComponent } from './pages/budgets/budgets.component'
import { CategoriesComponent } from './pages/categories/categories.component'

export const userRoutes: Routes = [   
   { path: '', component: IndexUserComponent },   
   { path: 'movements', component: MovementsComponent },
   { path: 'accounts', component: AccountsComponent },
   { path: 'budgets', component: BudgetsComponent },
   { path: 'categories', component: CategoriesComponent }
]