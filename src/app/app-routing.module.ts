import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { LoggedInGuard } from './guards/logged-in.guard';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [LoggedInGuard],
  },
  {
    path: 'contact',
    component: ContactsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
