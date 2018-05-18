import {Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {DashboardComponent} from './main-page/dashboard/dashboard.component';
import {MainComponent} from './main-page/main/main.component';
import {RegComponent} from './reg/reg.component';

export const routes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'main', component: MainComponent},
  {path: 'reg', component: RegComponent}
];
