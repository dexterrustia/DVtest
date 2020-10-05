import {
  async,
  ComponentFixture,
  fakeAsync,
  flushMicrotasks,
  TestBed,
} from '@angular/core/testing';
import { ProfileComponent } from './profile.component';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let authService: SocialAuthService;
  let authStateSpy: jasmine.Spy;

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
      declarations: [ProfileComponent],
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
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(SocialAuthService);
    authStateSpy = spyOnProperty(authService, 'authState').and.returnValue(
      of(googleUser)
    );

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render user info', fakeAsync(() => {
    component.ngOnInit();
    fixture.detectChanges();
    flushMicrotasks();
    expect(
      fixture.debugElement.query(By.css('.profile-picture')).nativeElement.src
    ).toMatch(component.photoUrl);
    expect(
      fixture.debugElement.query(By.css('.span-user-id')).nativeElement
        .innerText
    ).toMatch(component.id);
    expect(
      fixture.debugElement.query(By.css('.span-user-name')).nativeElement
        .innerText
    ).toMatch(component.name);
    expect(
      fixture.debugElement.query(By.css('.span-user-email')).nativeElement
        .innerText
    ).toMatch(component.email);
    expect(
      fixture.debugElement.query(By.css('.span-user-authToken')).nativeElement
        .innerText
    ).toMatch(component.authToken);
    expect(
      fixture.debugElement.query(By.css('.span-user-idToken')).nativeElement
        .innerText
    ).toMatch(component.idToken);
  }));
});
