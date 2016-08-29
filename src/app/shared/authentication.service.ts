import { Injectable } from '@angular/core';
 
export class User {
  constructor(
    public username: string,
    public password: string) { }
}
 
var users = [
  new User('admin','admin')
];
 
@Injectable()
export class AuthenticationService {
  private loggedIn = false;

  //constructor(private http: Http) {
  constructor() {
    this.loggedIn = !!localStorage.getItem('user');
  }

  login(user) {
    var authenticatedUser = users.find(u => u.username === user.username);
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
        JSON.stringify({ username, password }), 
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
