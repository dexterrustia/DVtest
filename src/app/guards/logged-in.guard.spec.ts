import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SocialAuthService } from 'angularx-social-login';
import { LoggedInGuard } from './logged-in.guard';

describe('LoggedInGuard', () => {
  let guard: LoggedInGuard;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        { provide: SocialAuthService, useClass: SocialAuthServiceStub },
      ],
    });
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

class SocialAuthServiceStub {}
