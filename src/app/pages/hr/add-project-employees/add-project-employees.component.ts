import { Component } from '@angular/core'
import { HrService } from 'src/app/_services/hr/hr.service'

@Component({
  selector: 'app-add-project-employees',
  templateUrl: './add-project-employees.component.html',
  styleUrls: ['./add-project-employees.component.css']
})
export class AddProjectEmployeesComponent {
  newEmployeesFile: File | null = null

  constructor(private hrService: HrService) {}

  handleFIleInput(e: any) {
    this.newEmployeesFile = e.target.files[0]
  }

  addNewEmployees() {
    if (this.newEmployeesFile)
      this.hrService.addNewEmployees(this.newEmployeesFile).subscribe(
        () => alert("New Employees are added!"),
        (err) => console.log(err),
      )
    else
      alert("Please select a file")
  }
}
