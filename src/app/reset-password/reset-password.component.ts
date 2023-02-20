import { Component } from '@angular/core';
import { ResetPassCredentials, User } from 'types';
import { AuthService } from '../_services/auth/auth.service';
import { TokenStorageService } from '../_services/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  credentials: ResetPassCredentials = { username: '', email: '', password: '' }
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
    this.authService.resetPassword(this.credentials).subscribe(
      data => {
        this.router.navigate(['/signin'])
      },
      err => {
        if (err?.status === 400)
          this.error = "Incorrect Username/Email"
        else
          this.error = err?.error?.message
      }
    )
  }
}
