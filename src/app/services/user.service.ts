import { Injectable } from '@angular/core';

export interface IUser {
  name: string;
  profileUrl: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  name: string;
  profileUrl: string;
  email: string;
  isLoggedIn: boolean = false;

  constructor() {}

  LoggedIn(user: IUser): void {
    this.name = user.name;
    this.email = user.email;
    this.profileUrl = user.profileUrl;
    this.isLoggedIn = true;
  }

  LogOut(): void {
    this.name = '';
    this.email = '';
    this.profileUrl = '';
    this.isLoggedIn = true;
  }
}
