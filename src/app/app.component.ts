import { Component, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from './shared'

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  providers: [ AuthenticationService ],
  template: `
  <div class="navbar navbar-inverse navbar-static-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <a *ngIf="loggedIn()" class="navbar-brand" [routerLinkActive]="['active', 'router-link-active']" [routerLink]="['home']">Home</a>
        <a *ngIf="loggedIn()" class="navbar-brand" [routerLinkActive]="['active', 'router-link-active']" [routerLink]="['rules']">Rules</a>
        <a *ngIf="loggedIn()" class="navbar-brand" [routerLinkActive]="['active', 'router-link-active']" [routerLink]="['detail']">Detail</a>
      </div>
      <div class="navbar-header navbar-right">
        <a *ngIf="loggedIn()" class="navbar-brand" (click)="logout()" [routerLinkActive]="['active', 'router-link-active']" [routerLink]="['login']">Logout</a>
      </div>
    </div>
  </div>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private authenticationService: AuthenticationService) {}

  loggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  logout() {
    this.authenticationService.logout();
  }
}

