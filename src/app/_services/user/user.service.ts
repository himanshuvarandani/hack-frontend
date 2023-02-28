import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ProfileEditType, QualificationType, User } from 'types'

const API = 'http://localhost:8080'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<any> {
    return this.http.get(API+'/profile', httpOptions)
  }

  getUserQualifications(): Observable<any> {
    return this.http.get(API+'/qualifications', httpOptions)
  }

  editProfile(profile: ProfileEditType): Observable<any> {
    return this.http.post(API+'/profile/edit', profile, httpOptions)
  }

  addQualification(qualification: QualificationType): Observable<any> {
    return this.http.post(API+'/qualification/new', qualification, httpOptions)
  }

  editQualification(
    qualificationId: number,
    qualification: QualificationType
  ): Observable<any> {
    return this.http.post(
      API+`/qualification/${qualificationId}/edit`,
      qualification,
      httpOptions
    )
  }

  postDailyUpdate(description: string, duration: number): Observable<any> {
    return this.http.post(
      API+'/daily-update',
      { description, duration },
      httpOptions,
    )
  }
}
