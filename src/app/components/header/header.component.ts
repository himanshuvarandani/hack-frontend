import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from '../../_services/auth/token-storage.service';
import { User } from 'types';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  token: string | null = null
  role: string = ""

  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.token = this.tokenStorage.getToken()
    const user: User | null = this.tokenStorage.getUser()
    if (user)
      this.role = user.role
  }
  
  signOut() {
    this.tokenStorage.signout()
    this.router.navigate(["/signin"])
  }
}
