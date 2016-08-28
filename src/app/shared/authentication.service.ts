import { Injectable } from '@angular/core';
 
export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 
var users = [
  new User('admin@admin.com','adm9'),
  new User('user1@gmail.com','a23')
];
 
@Injectable()
export class AuthenticationService {
  private loggedIn = false;

  //constructor(private http: Http) {
  constructor() {
    this.loggedIn = !!localStorage.getItem('user');
  }

  login(user) {
    var authenticatedUser = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password) {
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      return true;
    }
    return false;
  /*
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        '/login', 
        JSON.stringify({ email, password }), 
        { headers }
      )
      .map(res => res.json())
      .map((res) => {
        if (res.success) {
          localStorage.setItem('auth_token', res.auth_token);
          this.loggedIn = true;
        }

        return res.success;
      });
    */
  }

  logout() {
    localStorage.removeItem('user');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
