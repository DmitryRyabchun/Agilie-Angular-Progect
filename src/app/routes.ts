import {Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {MainComponent} from './main-page/main/main.component';
import {RegComponent} from './reg/reg.component';
import {SettingsComponent} from './main-page/settings/settings.component';
import {NotFoundComponent} from './main-page/not-found/not-found.component';
import {AuthGuard} from "./guards/auth.guard";
import {NotAuthGuard} from './guards/not-auth.guard';
import {CollectionComponent} from './main-page/collection/collection.component';
import {HomeComponent} from './main-page/main/home/home.component';

export const routes: Routes = [
  {path: '', component: MainComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
      {path: 'collection', component: CollectionComponent, canActivate: [AuthGuard]}
      ]},
  {path: 'auth', component: AuthComponent, canActivate: [NotAuthGuard]},
  {path: 'reg', component: RegComponent, canActivate: [NotAuthGuard]},
  {path: 'not found', component: NotFoundComponent}
];
