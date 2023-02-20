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