import { Routes } from '@angular/router'
import { IndexUserComponent } from './pages/index-user/index-user.component'
import { ExpenseChartComponent } from './components/expense-chart/expense-chart.component'
import { ProfileCardComponent } from './components/profile-card/profile-card.component'

export const userRoutes: Routes = [   
   { path: '', component: IndexUserComponent },   
   { path: 'ver', component: ProfileCardComponent },
   { path: 'ingresos', component: ExpenseChartComponent },
   { path: 'datalle', component: ExpenseChartComponent }
]