import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Credentials, ResetPassCredentials } from 'types'

const API = 'http://localhost:8080/auth'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<any> {
    return this.http.post(API+'/signin', {
      username: credentials.username,
      password: credentials.password,
    }, httpOptions)
  }

  resetPassword(credentials: ResetPassCredentials): Observable<any> {
    return this.http.post(API+'/reset-password', {
      username: credentials.username,
      email: credentials.email,
      password: credentials.password,
    }, httpOptions)
  }
}
