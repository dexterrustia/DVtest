import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { routes } from '../app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../material/material.module';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialAuthService } from 'angularx-social-login';
import { DebugElement } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  let location: Location;
  let router: Router;
  let authService: jasmine.SpyObj<SocialAuthService>;
  let menuTrigger;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MaterialModule,
        SocialLoginModule,
        BrowserAnimationsModule,
      ],
      declarations: [NavBarComponent],
      providers: [
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
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    authService = TestBed.get(SocialAuthService);
    menuTrigger = fixture.debugElement.nativeElement.querySelector(
      '.mat-menu-trigger'
    );
    fixture.detectChanges();
  });

  it('Contact tab click should go to "/contact" address', fakeAsync(() => {
    const navContact = fixture.debugElement.nativeElement.querySelector(
      '.nav-contact'
    );
    navContact.click();
    tick();
    expect(location.path()).toBe('/contact');
  }));

  it('About tab click should go to "/about" address', fakeAsync(() => {
    const navAbout = fixture.debugElement.nativeElement.querySelector(
      '.nav-about'
    );
    navAbout.click();
    tick();
    expect(location.path()).toBe('/about');
  }));

  it('NOT LOGGED IN USER, Clicking the logo should go to "/" (login page)', fakeAsync(() => {
    component.loggedIn = false;
    fixture.detectChanges();
    const navAbout = fixture.debugElement.nativeElement.querySelector(
      '.nav-logo'
    );
    navAbout.click();
    tick();
    expect(location.path()).toBe('/');
  }));

  it('NOT LOGGED IN USER, Sign out button should NOT be visible', fakeAsync(() => {
    component.loggedIn = false;
    fixture.detectChanges();
    const logoutButton = fixture.debugElement.nativeElement.querySelector(
      '.nav-button-logout'
    );
    tick();
    expect(logoutButton).toBeFalsy();
  }));

  it('LOGGED IN USER, Clicking the logo should go to "/profile" (profile page)', fakeAsync(() => {
    component.loggedIn = true;
    fixture.detectChanges();
    const navAbout = fixture.debugElement.nativeElement.querySelector(
      '.nav-logo'
    );
    navAbout.click();
    tick();
    expect(location.path()).toBe('/profile');
  }));

  it('LOGGED IN USER, Sign out button should be visible', () => {
    component.loggedIn = true;
    //component.menuTrigger.openMenu();
    menuTrigger.click();
    fixture.detectChanges();
    //debugger;
    const logoutButton = fixture.debugElement.query(
      By.css('.nav-button-logout')
    ).nativeElement;
    expect(logoutButton).toBeTruthy();
  });

  it('LOGGED IN USER, Should go to login page "" after clicking logout button', () => {
    component.loggedIn = true;
    //component.menuTrigger.openMenu();
    menuTrigger.click();
    fixture.detectChanges();
    const logoutButton = fixture.debugElement.query(
      By.css('.nav-button-logout')
    ).nativeElement;
    logoutButton.click();
    fixture.detectChanges();
    expect(location.path()).toBe('');
  });
});
