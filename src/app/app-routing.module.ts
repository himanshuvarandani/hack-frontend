import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { EditProfileComponent } from './pages/edit-profile/edit-profile.component'
import { EmployeeComponent } from './pages/employee/index/index.component'
import { HomeComponent } from './pages/home/home.component'
import { EditProjectComponent } from './pages/hr/edit-project/edit-project.component'
import { HRComponent } from './pages/hr/index/index.component'
import { ProjectEmployeesComponent } from './pages/hr/project-employees/project-employees.component'
import { LoginComponent } from './pages/login/login.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/edit', component: EditProfileComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'hr', component: HRComponent },
  { path: 'hr/project/edit', component: EditProjectComponent },
  { path: 'hr/project/employees', component: ProjectEmployeesComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
