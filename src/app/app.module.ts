import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { FooterComponent } from './components/footer/footer.component'
import { HeaderComponent } from './components/header/header.component'
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component'
import { EmployeeComponent } from './pages/employee/index/index.component'
import { HomeComponent } from './pages/home/home.component'
import { EditProjectComponent } from './pages/hr/edit-project/edit-project.component'
import { HRComponent } from './pages/hr/index/index.component'
import { LoginComponent } from './pages/login/login.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component'
import { authInterceptorProviders } from './_helper/auth/auth.interceptor'
import { DailyUpdateFormComponent } from './components/daily-update-form/daily-update-form.component'
import { DailyUpdatesTableComponent } from './components/daily-updates-table/daily-updates-table.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    ResetPasswordComponent,
    ProfileComponent,
    EditProfileComponent,
    EmployeeComponent,
    HRComponent,
    DailyUpdateFormComponent,
    DailyUpdatesTableComponent,
    EditProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
