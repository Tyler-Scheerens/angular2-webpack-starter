import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { HomeComponent } from './home';
import { RulesComponent } from './rules';

import { LoginGuard } from './shared'

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [ LoginGuard ] },
  { path: 'rules', component: RulesComponent, canActivate: [ LoginGuard ] },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**', redirectTo: 'home' }
];
