export type Credentials = { username: string, password: string }

export type ResetPassCredentials = {
  username: string,
  email: string,
  password: string
}

export type User = {
  id: number
  username: string
  email: string
  role: string
}

export type ProfileType = {
  id: number
	employeedId: number
	name: string
	contact: number
	emergencyContact: number
	dateOfBirth: Date
	address: string
	bloodGroup: string
	joiningDate: Date
  user: User
}

export type ProfileEditType = {
  contact: number
  emergencyContact: number
  dateOfBirth: Date
  bloodGroup: string
  address: string
  joiningDate: Date
}

export type QualificationType = {
  degree: string	
	college: string
  id: number
	stream: string	
	session: string	
	marks: string
}

export type ProjectType = {
  id: number
	name: string
	unit: string
	location: string
	customer: string
}

export type DailyUpdateType = {
  id: number
  date: Date
  description: string
  duration: number
}

export type LeaveType = {
  id: number
  startDate: Date
  endDate: Date
  reason: string
  approved: boolean
  user: User
  approver: User
}

export type MeetingType = {
  id: number
	startTime: Date
	endTime: Date
	title: string
  participants: Array<User>
}
