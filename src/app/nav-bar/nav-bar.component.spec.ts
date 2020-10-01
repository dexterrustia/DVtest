import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialAuthService } from 'angularx-social-login';
import { spyOnClass } from 'jasmine-es6-spies';
// import {
//   async,
//   ComponentFixture,
//   fakeAsync,
//   TestBed,
//   tick,
// } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

// import { NavBarComponent } from './nav-bar.component';
// import { AboutComponent } from '../about/about.component';
// import { ContactsComponent } from '../contacts/contacts.component';
// import { LoginComponent } from '../login/login.component';
// import { ProfileComponent } from '../profile/profile.component';
// import { routes } from '../app-routing.module';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Location } from '@angular/common';
// import { Router } from '@angular/router';
// import {
//   SocialLoginModule,
//   SocialAuthServiceConfig,
// } from 'angularx-social-login';
// import { GoogleLoginProvider } from 'angularx-social-login';

// fdescribe('NavBarComponent', () => {
//   let component: NavBarComponent;
//   let fixture: ComponentFixture<NavBarComponent>;

//   let location: Location;
//   let router: Router;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [RouterTestingModule.withRoutes(routes)],
//       declarations: [
//         NavBarComponent,
//         AboutComponent,
//         ContactsComponent,
//         LoginComponent,
//         ProfileComponent,
//         SocialLoginModule,
//       ],
//       providers: [
//         {
//           provide: 'SocialAuthServiceConfig',
//           useValue: {
//             autoLogin: true,
//             providers: [
//               {
//                 id: GoogleLoginProvider.PROVIDER_ID,
//                 provider: new GoogleLoginProvider(
//                   '578985095016-p0n6gpdfobla1l1ja16np7b0h02m14fj'
//                 ),
//               },
//             ],
//           } as SocialAuthServiceConfig,
//         },
//       ],
//     }).compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(NavBarComponent);
//     component = fixture.componentInstance;
//     //fixture.detectChanges();
//     router = TestBed.get(Router);
//     location = TestBed.get(Location);
//   });

//   it('contact tab click should render "contact component"', fakeAsync(() => {
//     const fixture = TestBed.createComponent(NavBarComponent);
//     const navContact = fixture.nativeElement.querySelector('.nav-button')[0];
//     navContact.click();
//     tick();
//     expect(location.path()).toBe('/contact');
//   }));
// });

fdescribe('navBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let authService: jasmine.SpyObj<SocialAuthService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      providers: [
        {
          providers: SocialAuthService,
          useFactory: () => spyOnClass(SocialAuthService),
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should load navBarComponent', () => {
    expect(component).toBeTruthy(true);
  });
});
