import { Component, OnInit } from '@angular/core'
import { UserService } from 'src/app/_services/user/user.service'
import { ProfileEditType, ProfileType, QualificationType } from 'types'

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

const initialQualification = {
  id: 0,
  degree: "",
  stream: "",
  college: "",
  session: "",
  marks: "",
}

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  profile: ProfileType = initialProfile
  qualifications: Array<QualificationType> = []
  newQualification: QualificationType = initialQualification

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

  updateProfile(profile: ProfileEditType) {
    this.userService.editProfile(profile).subscribe(
      () => alert("Your Profile is updated!"),
      (err) => console.log(err)
    )
  }

  updateQualification(id: number, qualification: QualificationType) {
    this.userService.editQualification(id, qualification).subscribe(
      () => alert("Your Qualification is updated!"),
      (err) => console.log(err)
    )
  }

  addQualification(qualification: QualificationType) {
    this.userService.addQualification(qualification).subscribe(
      () => alert("New Qualification is added!"),
      (err) => console.log(err)
    )
  }
}

