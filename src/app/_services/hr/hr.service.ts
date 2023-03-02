import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

const API = 'http://localhost:8080/hr'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(private http: HttpClient) { }

  editProject(location: string): Observable<any> {
    return this.http.post(API+'/edit-project', location, httpOptions)
  }

  getProjectEmployees(): Observable<any> {
    return this.http.get(API+'/project/employees', httpOptions)
  }

  getEmployeeDetails(empId: number): Observable<any> {
    return this.http.get(API+`/project/employee/${empId}`, httpOptions)
  }

  getEmployeeDailyUpdates(empId: number): Observable<any> {
    return this.http.get(
      API+`/project/employee/${empId}/daily-updates`,
      httpOptions
    )
  }
}
