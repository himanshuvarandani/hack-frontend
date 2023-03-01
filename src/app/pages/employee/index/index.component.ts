import { Component, OnInit } from '@angular/core'
import { EmployeeService } from 'src/app/_services/employee/employee.service'
import { UserService } from 'src/app/_services/user/user.service'
import { DailyUpdateType, ProfileType, ProjectType } from 'types'

const initialProject: ProjectType = {
  id: 0,
  name: "",
  unit: "",
  location: "",
  customer: "",
}
const initialHRDetails: ProfileType = {
  id: 0,
  employeedId: 0,
  name: "",
  contact: 0,
  emergencyContact: 0,
  dateOfBirth: new Date(),
  address: "",
  bloodGroup: "",
  joiningDate: new Date(),
  user: {
    id: 0,
    username: "",
    email: "",
    role: "",
  },
}
const initialTodaysUpdate: DailyUpdateType = {
  id: 0,
  description: "",
  duration: 0,
  date: new Date(),
}

@Component({
  selector: 'app-employee',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class EmployeeComponent implements OnInit {
  project: ProjectType = initialProject
  hrDetails: ProfileType = initialHRDetails
  dailyUpdates: Array<DailyUpdateType> = []
  todaysUpdate: DailyUpdateType = initialTodaysUpdate

  constructor(
    private employeeService: EmployeeService,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.userService.getUserProject().subscribe(
      data => this.project = data,
      err => console.log(err),
    )

    this.employeeService.getHRDetails().subscribe(
      data => this.hrDetails = data,
      err => console.log(err),
    )

    this.userService.getDailyUpdates().subscribe(
      data => this.dailyUpdates = data,
      err => console.log(err),
    )

    this.userService.getTodaysDailyUpdate().subscribe(
      data => {
        if (data) this.todaysUpdate = data
      },
      err => console.log(err),
    )
  }

  postTodaysUpdate(todaysUpdate: DailyUpdateType) {
    this.userService
      .postDailyUpdate(todaysUpdate.description, todaysUpdate.duration)
      .subscribe(
        (data) => {
          this.todaysUpdate = data
          this.dailyUpdates = this.dailyUpdates.filter(
            (update) => update.id !== data.id
          )
          this.dailyUpdates.push(data)
          alert("Daily Update Posted!")
        },
        (err) => console.log(err)
      )
  }
}
