import mongoose from "mongoose"
import { UserStatuses } from "../constants/user-constants"

const { Schema } = mongoose
const schema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  status: {
    type: String,
    required: true,
    maxlength: 50,
    enum: UserStatuses,
  },
  email: {
    type: String,
    maxlength: 50,
    // unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
    maxlength: 12,
  },
  address: {
    type: String,
    maxlength: 200,
  },
  password: {
    type: String,
    required: true,
    maxlength: 500,
  },
  secure_token: {
    type: String,
    required: true,
    maxlength: 100,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
})

schema.index({ phone: 1 }, { unique: true })

export default mongoose.model("User", schema)
