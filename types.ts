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
