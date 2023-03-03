import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

const API = 'http://localhost:8080/admin'

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  
  initializeData(initialDataFile: File): Observable<any> {
    const formData = new FormData()
    formData.append('file', initialDataFile)

    return this.http.post(
      API+'/initialize-data',
      formData,
    )
  }
}
