import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FacebookLoginComponent } from './auth/facebook-login/facebook-login.component';
import { GoogleLoginComponent } from './auth/google-login/google-login.component';
import { EmailLoginComponent } from './auth/email-login/email-login.component';
import { HeaderComponent } from './main-page/header/header.component';
import { LanguageSelectionComponent } from './main-page/header/language-selection/language-selection.component';
import { LeftMenuComponent } from './main-page/header/left-menu/left-menu.component';
import { RightMenuComponent } from './main-page/header/right-menu/right-menu.component';
import { SearchComponent } from './main-page/header/search/search.component';
import { MainComponent } from './main-page/main/main.component';
import { AngularFireModule } from 'angularfire2';

import { firebaseConfig } from 'environments/config';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { DashboardComponent } from './main-page/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {AuthService} from './services/auth.service';
import { RegComponent } from './reg/reg.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { MessageComponent } from './main-page/dashboard/message/message.component';
import { SettingsComponent } from './settings/settings.component';
import {AngularFireStorageModule} from 'angularfire2/storage';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FacebookLoginComponent,
    GoogleLoginComponent,
    EmailLoginComponent,
    HeaderComponent,
    LanguageSelectionComponent,
    LeftMenuComponent,
    RightMenuComponent,
    SearchComponent,
    MainComponent,
    DashboardComponent,
    RegComponent,
    MessageComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }

