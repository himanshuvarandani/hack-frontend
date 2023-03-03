import { Component } from '@angular/core'
import { AdminService } from 'src/app/_services/admin/admin.service'

@Component({
  selector: 'app-initialize-data',
  templateUrl: './initialize-data.component.html',
  styleUrls: ['./initialize-data.component.css']
})
export class InitializeDataComponent {
  file: File | null = null

  constructor(private adminService: AdminService) {}

  handleFIleInput(e: any) {
    this.file = e.target.files[0]
  }

  initializeData() {
    if (this.file)
      this.adminService.initializeData(this.file).subscribe(
        () => alert("Successfully Initialized Data!"),
        (err) => console.log(err),
      )
    else
      alert("Please select a file")
  }
}
