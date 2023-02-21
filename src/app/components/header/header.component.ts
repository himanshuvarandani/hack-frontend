import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from '../../_services/auth/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}
  
  signOut() {
    this.tokenStorage.signout()
    this.router.navigate(["/signin"])
  }
}
