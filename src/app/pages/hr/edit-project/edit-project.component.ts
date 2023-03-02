import { Component, OnInit } from '@angular/core'
import { HrService } from 'src/app/_services/hr/hr.service'
import { UserService } from 'src/app/_services/user/user.service'
import { ProjectType } from 'types'

const initialProject: ProjectType = {
  id: 0,
  name: "",
  unit: "",
  location: "",
  customer: "",
}

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  project: ProjectType = initialProject

  constructor(
    private userService: UserService,
    private hrService: HrService,
  ) {}

  ngOnInit(): void {
    this.userService.getUserProject().subscribe(
      data => this.project = data,
      err => console.log(err),
    )
  }

  updateProject(project: ProjectType) {
    this.hrService.editProject(project.location).subscribe(
      () => alert("Your Project is updated!"),
      (err) => console.log(err),
    )
  }
}
