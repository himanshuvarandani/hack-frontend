import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/_services/leave/leave.service';
import { LeaveType } from 'types';

@Component({
  selector: 'app-approve-leaves',
  templateUrl: './approve-leaves.component.html',
  styleUrls: ['./approve-leaves.component.css']
})
export class ApproveLeavesComponent implements OnInit {
  leaves: Array<LeaveType> = []

  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void {
    this.leaveService.getLeavesToApprove().subscribe(
      data => this.leaves = data,
      err => console.log(err),
    )
  }

  approveLeave(leaveId: number) {
    this.leaveService.approveLeave(leaveId).subscribe(
      () => {
        this.leaves = this.leaves.filter(leave => leave.id != leaveId)
        alert("Leave Application Submitted Succesfully!")
      },
      err => console.log(err),
    )
  }
}
