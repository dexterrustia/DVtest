import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: SocialAuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.loggedIn = true;
        console.log(`user ${user}`);
        this.user = user;
        this.router.navigateByUrl('/profile');
      }
    });

    console.log(`this.user ${this.user}`);
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((r) => {
      //console.log(r);
      this.user = r;
      //console.log('user => ');
      //console.log(this.user);
      this.router.navigateByUrl('/profile');
    });
  }
}
