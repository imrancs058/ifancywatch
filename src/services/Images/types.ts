import { UserStatuses } from "../../constants/user-constants"

export interface User {
  _id?: any
  id: string
  name: string
  status: UserStatuses
  email?: string
  phone: number
  password: string
  secure_token: string
}

export interface UserWithoutID {
  name: string
  status: UserStatuses
  email?: string
  phone: number
  password: string
  secure_token: string
}

export interface UserAddDto {
  name: string
  email?: string
  phone: number
  password: string
}

export interface UserServiceVerifyUserPayload {
  email?: string
  phone?: number
  password: string
}
