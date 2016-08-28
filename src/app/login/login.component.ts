import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, User } from '../shared/index'
 
@Component({
  selector: 'login',
  templateUrl: 'login.template.html'
})
 
export class LoginComponent {
  public user = new User('', '');
  public errorMsg = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  }

  onLogin() {
    if (this.authenticationService.login(this.user)) {
      this.router.navigate(['home']);
    } else {
      this.errorMsg = 'Failed to login';
    }
    /*
    this.authenticationService.login(email, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['home']);
      }
    });
    */
  }
}