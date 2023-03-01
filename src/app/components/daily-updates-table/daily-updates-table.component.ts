import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user/user.service';
import { DailyUpdateType } from 'types';

@Component({
  selector: 'app-daily-updates-table',
  templateUrl: './daily-updates-table.component.html',
  styleUrls: ['./daily-updates-table.component.css']
})
export class DailyUpdatesTableComponent implements OnInit {
  dailyUpdates: Array<DailyUpdateType> = []
  
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getDailyUpdates().subscribe(
      data => this.dailyUpdates = data,
      err => console.log(err),
    )
  }
}
