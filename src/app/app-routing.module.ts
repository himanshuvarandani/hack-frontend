import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { InitializeDataComponent } from './pages/admin/initialize-data/initialize-data.component'
import { ApplyLeaveComponent } from './pages/apply-leave/apply-leave.component'
import { ApproveLeavesComponent } from './pages/approve-leaves/approve-leaves.component'
import { CreateMeetingComponent } from './pages/create-meeting/create-meeting.component'
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component'
import { EmployeeComponent } from './pages/employee/index/index.component'
import { HomeComponent } from './pages/home/home.component'
import { AddProjectEmployeesComponent } from './pages/hr/add-project-employees/add-project-employees.component'
import { EditProjectComponent } from './pages/hr/edit-project/edit-project.component'
import { EmployeeDailyUpdatesComponent } from './pages/hr/employee-daily-updates/employee-daily-updates.component'
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
  {
    path: 'hr/project/employee/:employeeId/daily-updates',
    component: EmployeeDailyUpdatesComponent
  },
  {
    path: 'hr/project/employees/new',
    component: AddProjectEmployeesComponent
  },
  { path: 'admin/initialize-data', component: InitializeDataComponent },
  { path: 'leave/apply', component: ApplyLeaveComponent },
  { path: 'leaves/approve', component: ApproveLeavesComponent },
  { path: 'meeting/create', component: CreateMeetingComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
