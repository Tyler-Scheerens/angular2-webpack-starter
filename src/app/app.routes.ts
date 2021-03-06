import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { HomeComponent } from './home';
import { RulesComponent } from './rules';

import { LoginGuard } from './shared'

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [ LoginGuard ] },
  { path: 'rules', component: RulesComponent, canActivate: [ LoginGuard ] },
  { path: '**', redirectTo: 'home' }
];
