import { Component } from '@angular/core'
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
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class HRComponent {
  project: ProjectType = initialProject

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserProject().subscribe(
      data => this.project = data,
      err => console.log(err),
    )
  }
}
