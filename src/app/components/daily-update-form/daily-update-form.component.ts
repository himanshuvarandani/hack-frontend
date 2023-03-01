import { Component, OnInit } from '@angular/core'
import { UserService } from 'src/app/_services/user/user.service'
import { DailyUpdateType } from 'types'

const initialDailyUpdate: DailyUpdateType = {
  id: 0,
  description: "",
  duration: 0,
  date: new Date(),
}

@Component({
  selector: 'app-daily-update-form',
  templateUrl: './daily-update-form.component.html',
  styleUrls: ['./daily-update-form.component.css']
})
export class DailyUpdateFormComponent implements OnInit {
  dailyUpdate: DailyUpdateType = initialDailyUpdate

  constructor(private userService: UserService) {}

  ngOnInit(): void { 
    this.userService.getTodaysDailyUpdate().subscribe(
      data => {
        if (data) this.dailyUpdate = data
      },
      err => console.log(err),
    )
  }

  postTodaysUpdate(dailyUpdate: DailyUpdateType) {
    this.userService
      .postDailyUpdate(dailyUpdate.description, dailyUpdate.duration)
      .subscribe(
        (data) => {
          this.dailyUpdate = data
          alert("Daily Update Posted!")
        },
        (err) => console.log(err)
      )
  }
}
