import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, User } from '../shared/index'
 
@Component({
  selector: 'register',
  templateUrl: 'register.template.html'
})
 
export class RegisterComponent {
  constructor(private authenticationService: AuthenticationService, private router: Router) {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  }
}