import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../_services/auth/auth.service';
import { TokenStorageService } from '../../_services/auth/token-storage.service';
import { Credentials, User } from 'types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: Credentials = { username: '', password: '' }
  error: string = ""

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      const user: User | null = this.tokenStorage.getUser()
      if (!user) {
        this.tokenStorage.signout()
      } else {
        if (user.role === 'ROLE_HR')
          this.router.navigate(['/hr'])
        else if (user.role === 'ROLE_EMPLOYEE')
          this.router.navigate(['/employee'])
        else
          this.router.navigate(['/'])
      }
    }
  }

  onSubmit() {
    this.authService.login(this.credentials).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken)
        this.tokenStorage.saveUser(data.user)

        if (data.user.role === 'ROLE_HR')
          this.router.navigate(['/hr'])
        else if (data.user.role === 'ROLE_EMPLOYEE')
          this.router.navigate(['/employee'])
        else
          this.router.navigate(['/'])
      },
      err => {
        this.error = err?.error?.message
      }
    )
  }
}
