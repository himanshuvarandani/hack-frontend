import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { HrService } from 'src/app/_services/hr/hr.service'
import { DailyUpdateType, User } from 'types'

const initialUserValue: User = {
  id: 0,
  email: "",
  username: "",
  role: "",
}

@Component({
  selector: 'app-employee-daily-updates',
  templateUrl: './employee-daily-updates.component.html',
  styleUrls: ['./employee-daily-updates.component.css']
})
export class EmployeeDailyUpdatesComponent implements OnInit {
  employee: User = initialUserValue
  employeeUpdates: Array<DailyUpdateType> = []

  constructor(
    private route: ActivatedRoute,
    private hrService: HrService,
  ) {}

  ngOnInit(): void {
    const employeeId = Number(this.route.snapshot.paramMap.get('employeeId'))

    this.hrService.getEmployeeDetails(employeeId).subscribe(
      data => this.employee = data,
      err => console.log(err),
    )

    this.hrService.getEmployeeDailyUpdates(employeeId).subscribe(
      data => this.employeeUpdates = data,
      err => console.log(err),
    )
  }
}
