import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;
  user = null;
  constructor() { }

  logIn(user) {
    this.isAuth = true;
    this.user = user;
  }

}
