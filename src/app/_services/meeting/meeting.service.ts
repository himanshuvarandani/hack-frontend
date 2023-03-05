import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { MeetingType } from 'types'

const API = 'http://localhost:8080/meetings'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http: HttpClient) { }

  getMeetings(): Observable<any> {
    return this.http.get(API)
  }

  createMeeting(meetingData: MeetingType): Observable<any> {
    return this.http.post(API+'/create', meetingData, httpOptions)
  }
}
