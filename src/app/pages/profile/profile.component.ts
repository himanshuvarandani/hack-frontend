import { Component, OnInit } from '@angular/core'
import { UserService } from 'src/app/_services/user/user.service'
import { ProfileType, QualificationType } from 'types'

const initialProfile = {
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

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: ProfileType = initialProfile
  qualifications: Array<QualificationType> = []

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUserProfile().subscribe(
      data => this.profile = data,
      err => console.log(err)
    )

    this.userService.getUserQualifications().subscribe(
      data => this.qualifications = data,
      err => console.log(err)
    )
  }
}
