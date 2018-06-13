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
import {AngularFireModule} from 'angularfire2';

import { firebaseConfig } from 'environments/config';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { DashboardComponent } from './main-page/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {AuthService} from './services/auth.service';
import { RegComponent } from './reg/reg.component';
import { AuthUserComponent } from './main-page/header/auth-user/auth-user.component';
import {CookieService} from 'ngx-cookie-service';
import { UserMenuComponent } from './main-page/header/user-menu/user-menu.component';
import { SettingsComponent } from './main-page/settings/settings.component';
import {UserService} from './services/user.service';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireStorageModule} from 'angularfire2/storage';
import { MessageComponent } from './main-page/dashboard/message/message.component';
import { NotFoundComponent } from './main-page/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import {FormsModule} from '@angular/forms';
import {LastfmService} from './services/lastfm.service';
import { TopArtistsComponent } from './main-page/main/top-artists/top-artists.component';
import { TopTracksComponent } from './main-page/main/top-tracks/top-tracks.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './main-page/footer/footer.component';
import { LoaderComponent } from './main-page/loader/loader.component';
import { CollectionComponent } from './main-page/collection/collection.component';
import { SearchListComponent } from './main-page/search-list/search-list.component';
import {SearchService} from './services/search.service';
import { HomeComponent } from './main-page/main/home/home.component';
import { CollectionService } from './services/collection.service';
import { EditCollectionComponent } from './main-page/collection/edit-collection/edit-collection.component';

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
    AuthUserComponent,
    UserMenuComponent,
    SettingsComponent,
    MessageComponent,
    NotFoundComponent,
    TopArtistsComponent,
    TopTracksComponent,
    FooterComponent,
    LoaderComponent,
    CollectionComponent,
    SearchListComponent,
    HomeComponent,
    EditCollectionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    AuthService,
    CookieService,
    UserService,
    AuthGuard,
    NotAuthGuard,
    LastfmService,
    SearchService,
    CollectionService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

