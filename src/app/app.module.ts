import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactsComponent } from './contacts/contacts.component';

import { ContactService } from './services/contact.service';
import { UserService } from './services/user.service';
import { LoggedInGuard } from './guards/logged-in.guard';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  SocialAuthService,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { windowProvider, WindowToken } from './injector/window';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    AboutComponent,
    ProfileComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
  ],
  providers: [
    ContactService,
    UserService,
    LoggedInGuard,
    SocialAuthService,
    { provide: WindowToken, useFactory: windowProvider },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '578985095016-p0n6gpdfobla1l1ja16np7b0h02m14fj'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
