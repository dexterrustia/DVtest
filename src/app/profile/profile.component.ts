import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  provider: string;
  id: string;
  email: string;
  name: string;
  photoUrl: string;
  authToken: string;
  idToken: string;
  authorizationCode: string;
  response: any;

  constructor(private authService: SocialAuthService) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      if (user) {
        this.provider = user.provider;
        this.id = user.id;
        this.email = user.email;
        this.name = user.name;
        this.photoUrl = user.photoUrl;
        this.authToken = user.authToken;
        this.idToken = user.idToken;
        this.authorizationCode = user.authorizationCode;
        this.response = JSON.stringify(user.response);
      }
    });
  }
}
