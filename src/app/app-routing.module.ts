import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'profile', component: ProfileComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
