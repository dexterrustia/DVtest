import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  SocialAuthService,
} from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let socialAutoSerice: jasmine.SpyObj<SocialAuthService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      providers: [
        { provide: SocialAuthService, useClass: socialAutoSerice },
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
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
