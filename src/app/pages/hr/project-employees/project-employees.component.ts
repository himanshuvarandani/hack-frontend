import { Component, OnInit } from '@angular/core'
import { HrService } from 'src/app/_services/hr/hr.service'
import { ProfileType } from 'types'

@Component({
  selector: 'app-project-employees',
  templateUrl: './project-employees.component.html',
  styleUrls: ['./project-employees.component.css']
})
export class ProjectEmployeesComponent implements OnInit {
  employees: Array<ProfileType> = []

  constructor(private hrService: HrService) {}

  ngOnInit(): void {
    this.hrService.getProjectEmployees().subscribe(
      data => this.employees = data,
      err => console.log(err),
    )
  }
}
