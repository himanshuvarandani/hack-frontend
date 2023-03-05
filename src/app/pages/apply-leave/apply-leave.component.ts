import { Component } from '@angular/core'
import { LeaveService } from 'src/app/_services/leave/leave.service'
import { LeaveType, User } from 'types'

const dummyUser: User = {
  id: 0,
  email: "",
  username: "",
  role: "",
}
const initialLeaveData: LeaveType = {
  id: 0,
  endDate: new Date(),
  reason: "",
  startDate: new Date(),
  approved: false,
  user: dummyUser,
  approver: dummyUser,
}

@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent {
  leaveData: LeaveType = initialLeaveData
  error: string = ""

  constructor (private leaveService: LeaveService) {}

  applyLeave(data: LeaveType) {
    console.log(data)
    
    if (data.startDate > data.endDate) {
      this.error = "Start date should be smaller than or equal to End date"
      return
    }

    this.leaveService.applyLeave(data).subscribe(
      () => alert("Leave Application Submitted Succesfully!"),
      err => console.log(err),
    )
  }
}
