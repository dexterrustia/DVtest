import {
  async,
  ComponentFixture,
  fakeAsync,
  flushMicrotasks,
  TestBed,
  tick,
} from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from 'angularx-social-login';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomHrefService } from '../services/custom-href-service.service';
import { WindowToken } from '../injector/window';
import { of } from 'rxjs';

const MockWindow = {
  location: {
    _href: '',
    set href(url: string) {
      this._href = url;
    },
    get href() {
      return this._href;
    },
  },
};

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let location: Location;
  let authService: SocialAuthService;
  let socialSignInSpy: jasmine.Spy;
  let authSpy: jasmine.Spy;
  let authStateSpy: jasmine.Spy;
  let setHrefSpy: jasmine.Spy;

  //TEST USER
  const googleUser: SocialUser = {
    name: 'godwin',
    firstName: 'ish',
    lastName: 'dako',
    idToken: '1009',
    provider: 'google',
    id: '2',
    email: 'noone@gmail.com',
    photoUrl: 'null',
    authToken: '2323',
    authorizationCode: '232',
    response: 'test',
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        MaterialModule,
        SocialLoginModule,
        BrowserAnimationsModule,
      ],
      declarations: [LoginComponent],
      providers: [
        SocialAuthService,
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
        {
          provide: CustomHrefService,
          useClass: CustomHrefService,
          deps: [WindowToken],
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    location = TestBed.get(Location);
    component = fixture.componentInstance;
    authService = TestBed.get(SocialAuthService);
    setHrefSpy = spyOnProperty(MockWindow.location, 'href', 'set');
    authSpy = spyOn(authService, 'signIn').and.returnValue(
      Promise.resolve(googleUser)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should go to profile "/profile" after sign in', fakeAsync(() => {
    component.signInWithGoogle();
    fixture.detectChanges();
    tick(3);
    let user = component.user;
    //debugger;
    expect(location.path()).toBe('/profile');
  }));

  it('LOGGED IN USER, should directly go to "/profile"', fakeAsync(() => {
    authStateSpy = spyOnProperty(authService, 'authState').and.returnValue(
      of(googleUser)
    );
    component.ngOnInit();
    fixture.detectChanges();
    flushMicrotasks();
    expect(location.path()).toBe('/profile');
  }));
});
