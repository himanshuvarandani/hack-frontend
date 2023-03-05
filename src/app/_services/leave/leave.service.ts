import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveType } from 'types';

const API = 'http://localhost:8080/leaves'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http: HttpClient) { }

  applyLeave(leaveData: LeaveType): Observable<any> {
    return this.http.post(API+'/apply', leaveData, httpOptions)
  }

  getLeavesToApprove(): Observable<any> {
    return this.http.get(API+'/toApprove')
  }
  
  approveLeave(leaveId: number): Observable<any> {
    return this.http.post(API+`/approve/${leaveId}`, {})
  }
}
