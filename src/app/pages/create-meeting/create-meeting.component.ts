import { Component } from '@angular/core'
import { MeetingService } from 'src/app/_services/meeting/meeting.service'
import { MeetingType, User } from 'types'

const dummyUser: User = {
  id: 0,
  email: "",
  username: "",
  role: "",
}
const dummyMeetingData: MeetingType = {
  id: 0,
  startTime: new Date(),
  endTime: new Date(),
  title: "",
  participants: [],
}

@Component({
  selector: 'app-create-meeting',
  templateUrl: './create-meeting.component.html',
  styleUrls: ['./create-meeting.component.css']
})
export class CreateMeetingComponent {
  meetingData: MeetingType = dummyMeetingData
  error: string = ""

  constructor(private meetingService: MeetingService) {}

  createMeeting(meetingData: MeetingType) {
    if (new Date(meetingData.startTime) < new Date()) {
      this.error = "Meeting start time should be greater than current time"
      return
    }
    if (meetingData.startTime >= meetingData.endTime) {
      this.error = "Meeting start time should be smaller than end time"
      return
    }

    this.meetingService.createMeeting(meetingData).subscribe(
      () => alert("Meeting Created Succesfully!"),
      err => console.log(err),
    )
  }
}
