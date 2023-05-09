import mongoose from "mongoose"

export interface UserProfileVerificationDto {
  _id?: mongoose.Schema.Types.ObjectId
  name?: string
  username?: string
  email?: string
  phone?: string
  address?: string
}
