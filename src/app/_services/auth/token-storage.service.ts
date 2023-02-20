import { Injectable } from '@angular/core';
import { User } from 'types';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  public saveToken(token: string) {
    window.sessionStorage.removeItem('@token')
    window.sessionStorage.setItem('@token', token)
  }

  public getToken(): string | null {
    return sessionStorage.getItem('@token')
  }

  public saveUser(user: User) {
    window.sessionStorage.removeItem('@user')
    window.sessionStorage.setItem('@user', JSON.stringify(user))
  }

  public getUser(): User | null {
    let userString = sessionStorage.getItem('@user')
    if (userString)
      return JSON.parse(userString)
    return null
  }

  signout() {
    window.sessionStorage.clear()
  }
}
